import { startTransition, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updatePassword,
} from "firebase/auth";
import type * as React from "react";
import { firebaseAnalyticsPromise, firebaseAuth } from "../config/firebase";
import {
  ADMIN_BOOTSTRAP_ALIAS_PASSWORD,
  ADMIN_BOOTSTRAP_AUTH_PASSWORD,
  ADMIN_BOOTSTRAP_EMAIL,
  ADMIN_BOOTSTRAP_USERNAME,
  type AccessLevel,
  normalizeAccessLevel,
  normalizePermissions,
} from "../data/access";
import { initialFormState } from "../data/mock";
import type { FormErrors, FormState } from "../data/mock";
import {
  backfillMemberDirectoryFromMembers,
  ensureAdminBootstrapProfile,
  getMemberProfile,
  listMemberProfiles,
  saveMemberProfile,
  updateManagedMemberProfile,
  type MemberProfile,
} from "../services/memberProfiles";
import { readImageFileAsDataUrl } from "../utils/avatarEditor";
import { AvatarEditorModal } from "../components/AvatarEditorModal";
import { AdminAccessPage } from "./AdminAccessPage";
import { AdminDashboardPage } from "./AdminDashboardPage";
import { ForgotPasswordPage } from "./ForgotPasswordPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";

const ADMIN_ROUTE_PATH = "/acesso-interno-admin";

function resolveAuthErrorMessage(errorCode: string) {
  switch (errorCode) {
    case "auth/email-already-in-use":
      return "Esse e-mail já está em uso.";
    case "auth/invalid-email":
      return "Informe um e-mail válido.";
    case "auth/user-disabled":
      return "Essa conta está desativada.";
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "E-mail ou senha inválidos.";
    case "auth/weak-password":
      return "A senha precisa ter pelo menos 6 caracteres.";
    case "auth/missing-email":
      return "Informe o e-mail cadastrado para recuperar a senha.";
    case "auth/network-request-failed":
      return "Falha de conexão. Verifique sua internet e tente novamente.";
    case "auth/too-many-requests":
      return "Muitas tentativas em sequência. Aguarde um pouco e tente novamente.";
    case "auth/popup-closed-by-user":
      return "O login com Google foi fechado antes da conclusão.";
    case "auth/cancelled-popup-request":
      return "Já existe uma janela de login aberta. Conclua ou feche a anterior.";
    case "auth/account-exists-with-different-credential":
      return "Esse e-mail já está vinculado a outro método de acesso.";
    case "auth/popup-blocked":
      return "O navegador bloqueou a janela do Google. Tente novamente ou continue pelo redirecionamento.";
    case "auth/operation-not-supported-in-this-environment":
      return "Esse navegador não conseguiu abrir o login do Google neste formato. Tente novamente.";
    case "auth/unauthorized-domain":
      return "Este domínio ainda não está autorizado no Firebase para login com Google.";
    default:
      return "Não foi possível concluir a autenticação agora.";
  }
}

function shouldUseGoogleRedirect() {
  if (typeof window === "undefined") {
    return false;
  }

  const userAgent = window.navigator.userAgent.toLowerCase();
  const isMobileUserAgent = /android|iphone|ipad|ipod|mobile/.test(userAgent);
  const hasCoarsePointer = window.matchMedia?.("(pointer: coarse)").matches ?? false;

  return isMobileUserAgent || hasCoarsePointer;
}

function shouldFallbackToGoogleRedirect(errorCode: string) {
  return [
    "auth/popup-blocked",
    "auth/popup-closed-by-user",
    "auth/cancelled-popup-request",
    "auth/operation-not-supported-in-this-environment",
  ].includes(errorCode);
}

function formatPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length === 0) {
    return "";
  }

  if (digits.length <= 2) {
    return `(${digits}`;
  }

  if (digits.length <= 3) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3, 7)}-${digits.slice(7)}`;
}

function isGoogleUser() {
  return firebaseAuth.currentUser?.providerData.some((provider) => provider.providerId === "google.com");
}

function resolveAdminAuthPassword(password: string) {
  return password === ADMIN_BOOTSTRAP_ALIAS_PASSWORD
    ? ADMIN_BOOTSTRAP_AUTH_PASSWORD
    : password;
}

function isPrivateDevelopmentHost(hostname: string) {
  if (["localhost", "127.0.0.1", "0.0.0.0"].includes(hostname)) {
    return true;
  }

  if (/^192\.168\./.test(hostname)) {
    return true;
  }

  if (/^10\./.test(hostname)) {
    return true;
  }

  const privateRange172 = hostname.match(/^172\.(\d{1,3})\./);

  if (!privateRange172) {
    return false;
  }

  const subnet = Number(privateRange172[1]);
  return subnet >= 16 && subnet <= 31;
}

function canUseLocalPasswordResetFallback() {
  if (typeof window === "undefined") {
    return false;
  }

  return isPrivateDevelopmentHost(window.location.hostname);
}

export default function PagesIndex() {
  const isAdminRoute =
    typeof window !== "undefined" &&
    window.location.pathname.toLowerCase().startsWith(ADMIN_ROUTE_PATH);
  const [currentPage, setCurrentPage] = useState("login");
  const [registerStep, setRegisterStep] = useState(0);
  const [memberName, setMemberName] = useState("Maria Clara");
  const [memberGender, setMemberGender] = useState("");
  const [memberVocalRange, setMemberVocalRange] = useState("");
  const [memberAccessLevel, setMemberAccessLevel] = useState<AccessLevel>("member");
  const [memberLeadershipRole, setMemberLeadershipRole] = useState("");
  const [memberPermissions, setMemberPermissions] = useState<string[]>([]);
  const [avatarPreview, setAvatarPreview] = useState("");
  const [avatarImageDataUrl, setAvatarImageDataUrl] = useState<string | null>(null);
  const [avatarEditorSource, setAvatarEditorSource] = useState("");
  const [showAvatarEditor, setShowAvatarEditor] = useState(false);
  const [form, setForm] = useState<FormState>({ ...initialFormState });
  const [errors, setErrors] = useState<FormErrors>({});
  const [authSubmitting, setAuthSubmitting] = useState(false);
  const [authStatusMessage, setAuthStatusMessage] = useState("");
  const [profileCompletionMode, setProfileCompletionMode] = useState(false);
  const [managedMembers, setManagedMembers] = useState<MemberProfile[]>([]);
  const [adminMembersLoading, setAdminMembersLoading] = useState(false);

  const loadManagedMembers = async () => {
    setAdminMembersLoading(true);

    try {
      const members = await listMemberProfiles();
      setManagedMembers(members);

      const backfillResult = await backfillMemberDirectoryFromMembers();

      if (backfillResult.failed > 0) {
        setAuthStatusMessage(
          `Lista carregada. ${backfillResult.synced} perfil(is) sincronizado(s) no diretório e ${backfillResult.failed} com pendência.`,
        );
      } else {
        setAuthStatusMessage("");
      }
    } catch {
      setAuthStatusMessage("Não foi possível carregar a lista de membros agora.");
    } finally {
      setAdminMembersLoading(false);
    }
  };

  const prefillProfileForm = (overrides?: Partial<FormState>) => {
    const currentUser = firebaseAuth.currentUser;
    const normalizedPhone = currentUser?.phoneNumber ? formatPhoneNumber(currentUser.phoneNumber) : "";

    setForm((current) => ({
      ...current,
      loginEmail: currentUser?.email || current.loginEmail,
      name: overrides?.name ?? current.name,
      phone: overrides?.phone ?? normalizedPhone ?? current.phone,
      email: overrides?.email ?? currentUser?.email ?? current.email,
      password: overrides?.password ?? current.password,
      confirmPassword: overrides?.confirmPassword ?? current.confirmPassword,
      cep: overrides?.cep ?? current.cep,
      neighborhood: overrides?.neighborhood ?? current.neighborhood,
      city: overrides?.city ?? current.city,
      street: overrides?.street ?? current.street,
      houseNumber: overrides?.houseNumber ?? current.houseNumber,
      maritalStatus: overrides?.maritalStatus ?? current.maritalStatus,
      gender: overrides?.gender ?? current.gender,
      vocalRange: overrides?.vocalRange ?? current.vocalRange,
      availability: overrides?.availability ?? current.availability,
    }));

    setAvatarPreview(currentUser?.photoURL || "");
    setAvatarImageDataUrl(null);
    setAvatarEditorSource("");
    setShowAvatarEditor(false);
  };

  useEffect(() => {
    void firebaseAnalyticsPromise;

    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) {
        setProfileCompletionMode(false);
        setMemberName("Maria Clara");
        setMemberGender("");
        setMemberVocalRange("");
        setMemberAccessLevel("member");
        setMemberLeadershipRole("");
        setMemberPermissions([]);
        setManagedMembers([]);
        setCurrentPage("login");
        setAvatarImageDataUrl(null);
        setAvatarEditorSource("");
        setShowAvatarEditor(false);
        return;
      }

      try {
        const profile = await getMemberProfile(user.uid);
        const tokenResult = await user.getIdTokenResult();
        const accessLevel = normalizeAccessLevel(
          typeof tokenResult.claims.accountLevel === "string"
            ? tokenResult.claims.accountLevel
            : profile?.accountLevel,
        );
        const leadershipRole =
          typeof tokenResult.claims.leadershipRole === "string"
            ? tokenResult.claims.leadershipRole
            : profile?.leadershipRole || "";

        if (!profile) {
          const isGoogleProvider = user.providerData.some(
            (provider) => provider.providerId === "google.com",
          );

          setProfileCompletionMode(true);
          setRegisterStep(0);
          setErrors({});
          prefillProfileForm({
            name: user.displayName || "",
            email: user.email || "",
            password: "",
            confirmPassword: "",
          });
          setAuthStatusMessage(
            isGoogleProvider
              ? "Encontramos nome, e-mail e foto da sua conta Google. Confirme e complete o restante do cadastro."
              : "Sua conta foi autenticada, mas o perfil do ministério ainda precisa ser concluído.",
          );
          startTransition(() => {
            setCurrentPage("register");
          });
          return;
        }

        const displayName =
          profile.name ||
          user.displayName ||
          user.email?.split("@")[0] ||
          "Integrante do vocal";

        setProfileCompletionMode(false);
        setMemberName(displayName);
        setMemberGender(profile.gender || "");
        setMemberVocalRange(profile.vocalRange || "");
        setMemberAccessLevel(accessLevel);
        setMemberLeadershipRole(leadershipRole);
        setMemberPermissions(normalizePermissions(profile.permissions, accessLevel));
        setAvatarPreview(profile.avatarDataUrl || user.photoURL || "");
        setAvatarImageDataUrl(null);
        setAvatarEditorSource("");
        setShowAvatarEditor(false);
        setAuthStatusMessage("");

        if (isAdminRoute && accessLevel === "administration") {
          await loadManagedMembers();
        }

        startTransition(() => {
          setCurrentPage(isAdminRoute && accessLevel === "administration" ? "admin" : "home");
        });
      } catch {
        setAuthStatusMessage("Sua sessão foi iniciada, mas o perfil não pôde ser carregado agora.");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [isAdminRoute]);

  useEffect(() => {
    let isMounted = true;

    void getRedirectResult(firebaseAuth)
      .then((result) => {
        if (!isMounted || !result?.user) {
          return;
        }

        setForm((current) => ({
          ...current,
          loginPassword: "",
        }));
        setAuthStatusMessage("");
        setErrors({});
      })
      .catch((error) => {
        if (!isMounted) {
          return;
        }

        const code = error instanceof Error && "code" in error ? String(error.code) : "";
        setAuthStatusMessage(resolveAuthErrorMessage(code));
      })
      .finally(() => {
        if (isMounted) {
          setAuthSubmitting(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const openLoginPage = () => {
    if (firebaseAuth.currentUser) {
      void signOut(firebaseAuth).finally(() => {
        setProfileCompletionMode(false);
        setAvatarPreview("");
        setAvatarImageDataUrl(null);
        setAvatarEditorSource("");
        setShowAvatarEditor(false);
        setMemberPermissions([]);
        setForm({ ...initialFormState });
        startTransition(() => {
          setCurrentPage("login");
          setAuthStatusMessage("");
          setErrors({});
        });
      });
      return;
    }

    setProfileCompletionMode(false);
    startTransition(() => {
      setCurrentPage("login");
      setAuthStatusMessage("");
      setErrors({});
    });
  };

  const openRegisterPage = () => {
    setProfileCompletionMode(false);
    setAvatarImageDataUrl(null);
    setAvatarEditorSource("");
    setShowAvatarEditor(false);
    startTransition(() => {
      setCurrentPage("register");
      setRegisterStep(0);
      setAuthStatusMessage("");
      setErrors({});
    });
  };

  const openForgotPasswordPage = () => {
    startTransition(() => {
      setCurrentPage("forgotPassword");
      setAuthStatusMessage("");
      setErrors({});
    });
  };

  const handleBackToAuth = async () => {
    setAuthSubmitting(true);
    setAuthStatusMessage("");

    try {
      await signOut(firebaseAuth);
      setProfileCompletionMode(false);
      setMemberGender("");
      setMemberVocalRange("");
      setMemberAccessLevel("member");
      setMemberLeadershipRole("");
      setMemberPermissions([]);
      setManagedMembers([]);
      setAvatarImageDataUrl(null);
      setAvatarEditorSource("");
      setShowAvatarEditor(false);
      setForm((current) => ({
        ...current,
        loginPassword: "",
      }));
      setRegisterStep(0);
      setErrors({});
    } catch {
      setAuthStatusMessage("Não foi possível encerrar a sessão agora.");
    } finally {
      setAuthSubmitting(false);
    }
  };

  const openAvatarEditor = async (file: File) => {
    const imageDataUrl = await readImageFileAsDataUrl(file);

    setAvatarEditorSource(imageDataUrl);
    setShowAvatarEditor(true);
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) {
      return;
    }

    void openAvatarEditor(file).catch((error) => {
      setAuthStatusMessage(
        error instanceof Error ? error.message : "Não foi possível abrir o editor de foto agora.",
      );
    });
  };

  const handleLogin = async () => {
    const identifier = form.loginEmail.trim().toLowerCase();

    if (!identifier.includes("@")) {
      setErrors((current) => ({
        ...current,
        loginEmail: "Use o e-mail cadastrado para entrar com Firebase.",
      }));
      return;
    }

    setAuthSubmitting(true);
    setAuthStatusMessage("");

    try {
      await signInWithEmailAndPassword(firebaseAuth, identifier, form.loginPassword);
      setForm((current) => ({ ...current, loginPassword: "" }));
    } catch (error) {
      const code = error instanceof Error && "code" in error ? String(error.code) : "";
      const message = resolveAuthErrorMessage(code);
      setErrors((current) => ({
        ...current,
        loginPassword: message,
      }));
    } finally {
      setAuthSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    setAuthSubmitting(true);
    setAuthStatusMessage("");
    setErrors({});

    try {
      if (shouldUseGoogleRedirect()) {
        await signInWithRedirect(firebaseAuth, provider);
        return;
      }

      await signInWithPopup(firebaseAuth, provider);
      setForm((current) => ({
        ...current,
        loginPassword: "",
      }));
    } catch (error) {
      const code = error instanceof Error && "code" in error ? String(error.code) : "";

      if (shouldFallbackToGoogleRedirect(code)) {
        try {
          await signInWithRedirect(firebaseAuth, provider);
          return;
        } catch (redirectError) {
          const redirectCode =
            redirectError instanceof Error && "code" in redirectError
              ? String(redirectError.code)
              : "";

          setAuthStatusMessage(resolveAuthErrorMessage(redirectCode));
          return;
        }
      }

      setAuthStatusMessage(resolveAuthErrorMessage(code));
    } finally {
      setAuthSubmitting(false);
    }
  };

  const handleForgotPassword = async () => {
    const email = form.loginEmail.trim().toLowerCase();

    if (!email) {
      setErrors((current) => ({
        ...current,
        loginEmail: "Informe o e-mail cadastrado para receber a redefinição.",
      }));
      return;
    }

    if (!email.includes("@")) {
      setErrors((current) => ({
        ...current,
        loginEmail: "Use um e-mail válido para recuperar a senha.",
      }));
      return;
    }

    setAuthSubmitting(true);
    setAuthStatusMessage("");
    setErrors((current) => ({
      ...current,
      loginEmail: "",
      loginPassword: "",
    }));

    const sendFirebaseFallbackResetEmail = async () => {
      try {
        firebaseAuth.languageCode = "pt-BR";
        await sendPasswordResetEmail(firebaseAuth, email);
        setAuthStatusMessage(
          canUseLocalPasswordResetFallback()
            ? `Ambiente local detectado. Enviamos o e-mail padrão do Firebase para ${email}. O template customizado funciona no deploy com a API ativa.`
            : `O envio customizado ficou indisponível no momento. Enviamos o e-mail padrão do Firebase para ${email}.`,
        );
        return true;
      } catch (fallbackError) {
        const code =
          fallbackError instanceof Error && "code" in fallbackError
            ? String(fallbackError.code)
            : "";

        if (code === "auth/user-not-found") {
          setAuthStatusMessage(
            "Se o e-mail estiver cadastrado, enviaremos um link de redefinição em instantes.",
          );
          return true;
        }

        if (code === "auth/invalid-email" || code === "auth/missing-email") {
          setErrors((current) => ({
            ...current,
            loginEmail: resolveAuthErrorMessage(code),
          }));
          return true;
        }

        setAuthStatusMessage(
          resolveAuthErrorMessage(code) || "Não foi possível enviar o e-mail de redefinição agora.",
        );
        return false;
      }
    };

    try {
      const response = await fetch("/api/auth/password-reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { message?: string; field?: string }
        | null;

      if (!response.ok) {
        if (payload?.field === "loginEmail") {
          setErrors((current) => ({
            ...current,
            loginEmail: payload.message || "Não foi possível validar o e-mail informado.",
          }));
        } else if (response.status >= 500) {
          const fallbackWorked = await sendFirebaseFallbackResetEmail();

          if (!fallbackWorked) {
            setAuthStatusMessage(
              payload?.message || "Não foi possível enviar o e-mail de redefinição agora.",
            );
          }
        } else {
          setAuthStatusMessage(
            payload?.message || "Não foi possível enviar o e-mail de redefinição agora.",
          );
        }

        return;
      }

      setAuthStatusMessage(
        payload?.message ||
          "Se o e-mail estiver cadastrado, enviaremos um link de redefinição em instantes.",
      );
    } catch (error) {
      const fallbackWorked = await sendFirebaseFallbackResetEmail();

      if (!fallbackWorked) {
        setAuthStatusMessage(
          error instanceof Error && error.message
            ? error.message
            : "Não foi possível enviar o e-mail de redefinição agora.",
        );
      }
    } finally {
      setAuthSubmitting(false);
    }
  };

  const handleRegister = async () => {
    setAuthSubmitting(true);
    setAuthStatusMessage("");

    try {
      const authenticatedUser = firebaseAuth.currentUser;
      const user = profileCompletionMode && authenticatedUser
        ? authenticatedUser
        : (
            await createUserWithEmailAndPassword(
              firebaseAuth,
              form.email.trim().toLowerCase(),
              form.password,
            )
          ).user;

      const profile = await saveMemberProfile(user, form, avatarImageDataUrl);
      const tokenResult = await user.getIdTokenResult();
      const accessLevel = normalizeAccessLevel(
        typeof tokenResult.claims.accountLevel === "string"
          ? tokenResult.claims.accountLevel
          : profile.accountLevel,
      );

      setProfileCompletionMode(false);
      setMemberName(profile.name);
      setMemberGender(profile.gender || "");
      setMemberVocalRange(profile.vocalRange || "");
      setMemberAccessLevel(accessLevel);
      setMemberLeadershipRole(
        typeof tokenResult.claims.leadershipRole === "string"
          ? tokenResult.claims.leadershipRole
          : profile.leadershipRole || "",
      );
      setMemberPermissions(normalizePermissions(profile.permissions, accessLevel));
      setAvatarPreview(profile.avatarDataUrl || "");
      setAvatarImageDataUrl(null);
      setAvatarEditorSource("");
      setShowAvatarEditor(false);
      setAuthStatusMessage("");
      setForm({
        ...initialFormState,
        loginEmail: profile.email,
      });
      startTransition(() => {
        setCurrentPage(isAdminRoute && accessLevel === "administration" ? "admin" : "home");
      });
    } catch (error) {
      const code = error instanceof Error && "code" in error ? String(error.code) : "";
      const message = resolveAuthErrorMessage(code);

      if (code === "auth/email-already-in-use" || code === "auth/invalid-email") {
        setErrors((current) => ({
          ...current,
          email: message,
        }));
      } else if (code === "auth/weak-password") {
        setErrors((current) => ({
          ...current,
          password: message,
        }));
      } else {
        setAuthStatusMessage(message);
      }
    } finally {
      setAuthSubmitting(false);
    }
  };

  const handleAdminPortalLogin = async (username: string, password: string) => {
    if (firebaseAuth.currentUser) {
      await signOut(firebaseAuth);
    }

    if (username !== ADMIN_BOOTSTRAP_USERNAME) {
      setAuthStatusMessage("Usuário administrativo inválido.");
      return;
    }

    setAuthSubmitting(true);
    setAuthStatusMessage("");

    const resolvedPassword = resolveAdminAuthPassword(password);

    try {
      const credential = await signInWithEmailAndPassword(
        firebaseAuth,
        ADMIN_BOOTSTRAP_EMAIL,
        resolvedPassword,
      );
      const adminProfile = await ensureAdminBootstrapProfile(credential.user);
      setMemberName(adminProfile.name);
      setMemberAccessLevel("administration");
      setMemberPermissions(normalizePermissions(adminProfile.permissions, "administration"));
      await loadManagedMembers();
      startTransition(() => {
        setCurrentPage("admin");
      });
    } catch (error) {
      const code = error instanceof Error && "code" in error ? String(error.code) : "";

      const shouldTryBootstrapCreate =
        username === ADMIN_BOOTSTRAP_USERNAME &&
        password === ADMIN_BOOTSTRAP_ALIAS_PASSWORD &&
        (code === "auth/user-not-found" || code === "auth/invalid-credential");

      if (!shouldTryBootstrapCreate) {
        setAuthStatusMessage(resolveAuthErrorMessage(code));
        setAuthSubmitting(false);
        return;
      }

      try {
        const credential = await createUserWithEmailAndPassword(
          firebaseAuth,
          ADMIN_BOOTSTRAP_EMAIL,
          ADMIN_BOOTSTRAP_AUTH_PASSWORD,
        );
        const adminProfile = await ensureAdminBootstrapProfile(credential.user);
        setMemberName(adminProfile.name);
        setMemberAccessLevel("administration");
        setMemberPermissions(normalizePermissions(adminProfile.permissions, "administration"));
        await loadManagedMembers();
        setAuthStatusMessage("Conta administrativa inicial criada. Troque a senha assim que entrar.");
        startTransition(() => {
          setCurrentPage("admin");
        });
      } catch (createError) {
        const createCode =
          createError instanceof Error && "code" in createError ? String(createError.code) : "";

        if (createCode === "auth/email-already-in-use") {
          setAuthStatusMessage("A conta administrativa já existe. Use a senha atual definida para esse acesso.");
        } else {
          setAuthStatusMessage(resolveAuthErrorMessage(createCode));
        }
      }
    } finally {
      setAuthSubmitting(false);
    }
  };

  const handleAdminPasswordChange = async (nextPassword: string) => {
    const currentUser = firebaseAuth.currentUser;

    if (!currentUser) {
      setAuthStatusMessage("A sessão administrativa não está ativa.");
      return;
    }

    setAuthSubmitting(true);
    setAuthStatusMessage("");

    try {
      await updatePassword(currentUser, nextPassword);
      setAuthStatusMessage("Senha administrativa atualizada com sucesso.");
    } catch {
      setAuthStatusMessage("Não foi possível atualizar a senha agora. Faça login novamente e tente outra vez.");
    } finally {
      setAuthSubmitting(false);
    }
  };

  const handleManagedMemberSave = async (member: {
    uid: string;
    name: string;
    phone: string;
    cep: string;
    neighborhood: string;
    city: string;
    street: string;
    houseNumber: string;
    maritalStatus: string;
    gender: string;
    vocalRange: string;
    availability: string;
    accountLevel: string;
    leadershipRole: string;
    permissions: string[];
  }) => {
    setAuthSubmitting(true);
    setAuthStatusMessage("");

    try {
      await updateManagedMemberProfile(member.uid, member);
      await loadManagedMembers();
      setAuthStatusMessage("Conta atualizada com sucesso.");
    } catch {
      setAuthStatusMessage("Não foi possível salvar as alterações desse membro.");
    } finally {
      setAuthSubmitting(false);
    }
  };

  let content;

  if (isAdminRoute && currentPage !== "register") {
    if (currentPage === "admin" && memberAccessLevel === "administration") {
      content = (
        <AdminDashboardPage
          adminName={memberName}
          members={managedMembers}
          isLoading={adminMembersLoading}
          isSaving={authSubmitting}
          statusMessage={authStatusMessage}
          onRefresh={loadManagedMembers}
          onSaveMember={handleManagedMemberSave}
          onChangeAdminPassword={handleAdminPasswordChange}
          onSignOut={handleBackToAuth}
        />
      );
    } else {
      content = (
        <AdminAccessPage
          onAdminLogin={handleAdminPortalLogin}
          isSubmitting={authSubmitting}
          statusMessage={authStatusMessage}
        />
      );
    }
  } else if (currentPage === "home") {
    content = (
      <HomePage
        memberName={memberName}
        memberGender={memberGender}
        memberVocalRange={memberVocalRange}
        accountLevel={memberAccessLevel}
        leadershipRole={memberLeadershipRole}
        permissions={memberPermissions}
        onBackToAuth={handleBackToAuth}
      />
    );
  } else if (currentPage === "register") {
    content = (
      <RegisterPage
        form={form}
        errors={errors}
        registerStep={registerStep}
        avatarPreview={avatarPreview}
        onFieldChange={handleFieldChange}
        onErrorsChange={setErrors}
        onStepChange={setRegisterStep}
        onAvatarChange={handleAvatarChange}
        onOpenLogin={openLoginPage}
        onRegisterFinish={handleRegister}
        isSubmitting={authSubmitting}
        statusMessage={authStatusMessage}
        profileCompletionMode={profileCompletionMode}
        googleProfileMode={Boolean(profileCompletionMode && isGoogleUser())}
      />
    );
  } else if (currentPage === "forgotPassword") {
    content = (
      <ForgotPasswordPage
        form={form}
        errors={errors}
        onFieldChange={handleFieldChange}
        onErrorsChange={setErrors}
        onSubmit={handleForgotPassword}
        onBackToLogin={openLoginPage}
        isSubmitting={authSubmitting}
        statusMessage={authStatusMessage}
      />
    );
  } else {
    content = (
      <LoginPage
        form={form}
        errors={errors}
        onFieldChange={handleFieldChange}
        onErrorsChange={setErrors}
        onLogin={handleLogin}
        onGoogleLogin={handleGoogleLogin}
        onOpenForgotPassword={openForgotPasswordPage}
        onOpenRegister={openRegisterPage}
        isSubmitting={authSubmitting}
        statusMessage={authStatusMessage}
      />
    );
  }

  return (
    <div className="app-shell">
      {content}

      <AvatarEditorModal
        open={showAvatarEditor}
        imageSrc={avatarEditorSource}
        title="Ajuste sua foto"
        description="Corte, aproxime, gire e ajuste a imagem antes de salvar no cadastro."
        onClose={() => {
          setShowAvatarEditor(false);
          setAvatarEditorSource("");
        }}
        onApply={async (dataUrl) => {
          setAvatarPreview(dataUrl);
          setAvatarImageDataUrl(dataUrl);
          setShowAvatarEditor(false);
          setAvatarEditorSource("");
          setAuthStatusMessage("");
        }}
      />
    </div>
  );
}
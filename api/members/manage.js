import admin from "firebase-admin";

const GENERAL_PERMISSIONS = [
  "Adicionar músicas",
  "Adicionar avisos",
  "Adicionar datas de ensaios",
  "Adicionar documentos e partituras",
  "Cadastrar membros",
  "Postar avisos",
  "Alterar dados",
  "Mexer na agenda",
  "Comentar",
];

const MEMBER_PERMISSIONS = [
  "Ver músicas",
  "Receber avisos, ensaios e documentos",
  "Notificar atraso ou imprevisto",
  "Solicitar alteração de dado",
  "Comentar em agenda e avisos",
];

const ROLE_PAYLOADS = {
  admin: {
    accountLevel: "administration",
    leadershipRole: "",
    permissions: GENERAL_PERMISSIONS,
  },
  developer: {
    accountLevel: "administration",
    leadershipRole: "Desenvolvedor",
    permissions: GENERAL_PERMISSIONS,
  },
  maestro: {
    accountLevel: "direction",
    leadershipRole: "Maestro",
    permissions: GENERAL_PERMISSIONS,
  },
  secretary: {
    accountLevel: "direction",
    leadershipRole: "Secretário",
    permissions: GENERAL_PERMISSIONS,
  },
  "vice-secretary": {
    accountLevel: "direction",
    leadershipRole: "Vice-Secretário",
    permissions: GENERAL_PERMISSIONS,
  },
  member: {
    accountLevel: "member",
    leadershipRole: "",
    permissions: MEMBER_PERMISSIONS,
  },
};

function getRequiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getFirebaseAdminApp() {
  if (admin.apps.length > 0) {
    return admin.app();
  }

  const projectId = getRequiredEnv("FIREBASE_ADMIN_PROJECT_ID");
  const clientEmail = getRequiredEnv("FIREBASE_ADMIN_CLIENT_EMAIL");
  const privateKey = getRequiredEnv("FIREBASE_ADMIN_PRIVATE_KEY").replace(/\\n/g, "\n");

  return admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    }),
    storageBucket: getStorageBucketName(),
  });
}

function normalizeStorageBucketName(value) {
  return String(value || "")
    .trim()
    .replace(/^gs:\/\//i, "")
    .replace(/^https?:\/\/firebasestorage\.googleapis\.com\/v0\/b\//i, "")
    .replace(/^https?:\/\/storage\.googleapis\.com\//i, "")
    .replace(/\/.*$/, "");
}

function getStorageBucketCandidates() {
  const projectId = getRequiredEnv("FIREBASE_ADMIN_PROJECT_ID");

  return Array.from(new Set([
    process.env.FIREBASE_STORAGE_BUCKET,
    process.env.VITE_FIREBASE_STORAGE_BUCKET,
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    process.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
    `${projectId}.firebasestorage.app`,
    `${projectId}.appspot.com`,
  ]
    .map(normalizeStorageBucketName)
    .filter(Boolean)));
}

function getStorageBucketName() {
  return getStorageBucketCandidates()[0];
}

function normalizeAccessLevel(level) {
  return level === "administration" || level === "direction" ? level : "member";
}

function resolveManagementRole(profile) {
  const accountLevel = normalizeAccessLevel(profile?.accountLevel);
  const leadershipRole = String(profile?.leadershipRole || "").trim();

  if (leadershipRole === "Desenvolvedor") {
    return "developer";
  }

  if (accountLevel === "administration") {
    return "admin";
  }

  if (leadershipRole === "Maestro") {
    return "maestro";
  }

  if (leadershipRole === "Secretário") {
    return "secretary";
  }

  if (leadershipRole === "Vice-Secretário") {
    return "vice-secretary";
  }

  return "member";
}

function normalizePhone(phone) {
  return String(phone || "").replace(/\D/g, "");
}

function parseDataUrl(dataUrl) {
  const match = String(dataUrl || "").match(/^data:(.+);base64,(.+)$/);

  if (!match) {
    throw new Error("A imagem enviada para o membro é inválida.");
  }

  return {
    contentType: match[1],
    buffer: Buffer.from(match[2], "base64"),
  };
}

async function uploadManagedAvatar(userId, avatarSource) {
  const trimmedSource = String(avatarSource || "").trim();

  if (!trimmedSource) {
    return "";
  }

  if (trimmedSource.startsWith("https://") || trimmedSource.startsWith("http://")) {
    return trimmedSource;
  }

  const { contentType, buffer } = parseDataUrl(trimmedSource);
  const maxAvatarBytes = 700000;

  if (!contentType.startsWith("image/")) {
    throw new Error("A imagem enviada para o membro é inválida.");
  }

  if (buffer.byteLength > maxAvatarBytes) {
    throw new Error("A foto do membro ficou grande demais para salvar. Use uma imagem menor.");
  }

  return trimmedSource;
}

function canManageTarget(actorRole, targetRole, actorUid, targetUid) {
  if (!actorUid || !targetUid || actorUid === targetUid) {
    return false;
  }

  if (actorRole === "admin") {
    return true;
  }

  if (actorRole === "developer") {
    return targetRole !== "admin";
  }

  if (actorRole === "maestro") {
    return targetRole !== "admin" && targetRole !== "developer";
  }

  if (actorRole === "secretary" || actorRole === "vice-secretary") {
    return targetRole === "member" || targetRole === "secretary" || targetRole === "vice-secretary";
  }

  return false;
}

function getAssignableRoles(actorRole) {
  if (actorRole === "admin") {
    return ["admin", "developer", "maestro", "secretary", "vice-secretary", "member"];
  }

  if (actorRole === "developer") {
    return ["developer", "maestro", "secretary", "vice-secretary", "member"];
  }

  if (actorRole === "maestro") {
    return ["maestro", "secretary", "vice-secretary", "member"];
  }

  if (actorRole === "secretary" || actorRole === "vice-secretary") {
    return ["secretary", "vice-secretary", "member"];
  }

  return [];
}

function buildDirectoryPayload(memberData, rolePayload) {
  return {
    uid: memberData.uid,
    name: memberData.name || "",
    phone: memberData.phone || "",
    phoneNormalized: memberData.phoneNormalized || "",
    avatarDataUrl: memberData.avatarDataUrl || "",
    vocalRange: memberData.vocalRange || "",
    leadershipRole: rolePayload.leadershipRole,
    accountLevel: rolePayload.accountLevel,
    availability: memberData.availability || "",
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  };
}

function buildManagedMemberSnapshot(memberData, authState) {
  return {
    uid: memberData.uid,
    name: String(memberData.name || ""),
    phone: String(memberData.phone || ""),
    phoneNormalized: String(memberData.phoneNormalized || ""),
    vocalRange: String(memberData.vocalRange || ""),
    avatarDataUrl: String(memberData.avatarDataUrl || ""),
    accountLevel: normalizeAccessLevel(memberData.accountLevel),
    leadershipRole: String(memberData.leadershipRole || ""),
    roleKey: resolveManagementRole(memberData),
    authExists: authState.authExists,
    disabled: authState.disabled,
    email: authState.email || String(memberData.email || ""),
  };
}

async function getActorAndTargetProfiles(firestore, actorUid, targetUid) {
  const actorReference = firestore.doc(`members/${actorUid}`);
  const targetReference = firestore.doc(`members/${targetUid}`);
  const [actorSnapshot, targetSnapshot] = await Promise.all([
    actorReference.get(),
    targetReference.get(),
  ]);

  if (!actorSnapshot.exists) {
    throw Object.assign(new Error("Seu perfil não foi encontrado para validar esta ação."), {
      statusCode: 403,
    });
  }

  if (!targetSnapshot.exists) {
    throw Object.assign(new Error("O membro selecionado não foi encontrado."), {
      statusCode: 404,
    });
  }

  return {
    targetReference,
    actorProfile: actorSnapshot.data(),
    targetProfile: targetSnapshot.data(),
  };
}

function getBearerToken(request) {
  const authorization = String(request.headers.authorization || "").trim();

  if (!authorization.toLowerCase().startsWith("bearer ")) {
    return "";
  }

  return authorization.slice(7).trim();
}

async function inspectAuthUser(targetUid) {
  try {
    const userRecord = await admin.auth().getUser(targetUid);

    return {
      authExists: true,
      disabled: Boolean(userRecord.disabled),
      email: userRecord.email || "",
    };
  } catch (error) {
    if (error?.code === "auth/user-not-found") {
      return {
        authExists: false,
        disabled: false,
        email: "",
      };
    }

    throw error;
  }
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.status(405).json({ message: "Método não permitido." });
    return;
  }

  const token = getBearerToken(req);

  if (!token) {
    res.status(401).json({ message: "Autenticação obrigatória." });
    return;
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const action = String(body.action || "").trim();
  const targetUid = String(body.targetUid || "").trim();

  if (!action || !targetUid) {
    res.status(400).json({ message: "Ação e membro de destino são obrigatórios." });
    return;
  }

  try {
    getFirebaseAdminApp();

    const decodedToken = await admin.auth().verifyIdToken(token);
    const actorUid = decodedToken.uid;
    const firestore = admin.firestore();
    const { targetReference, actorProfile, targetProfile } = await getActorAndTargetProfiles(
      firestore,
      actorUid,
      targetUid,
    );

    const actorRole = resolveManagementRole(actorProfile);
    const targetRole = resolveManagementRole(targetProfile);

    if (!canManageTarget(actorRole, targetRole, actorUid, targetUid)) {
      res.status(403).json({ message: "Seu cargo não pode interferir neste membro." });
      return;
    }

    if (action === "inspect") {
      const authState = await inspectAuthUser(targetUid);

      res.status(200).json({
        target: buildManagedMemberSnapshot(targetProfile, authState),
        allowedRoleKeys: getAssignableRoles(actorRole),
      });
      return;
    }

    if (action === "update-profile") {
      const nextName = String(body.name || "").trim();

      if (!nextName) {
        res.status(400).json({ message: "Informe um nome válido para o membro." });
        return;
      }

      const nextPhone = String(body.phone || "").trim();
      const nextVocalRange = String(body.vocalRange || "").trim();
      const nextAvatarSource = typeof body.avatarDataUrl === "string" ? body.avatarDataUrl : undefined;
      const nextAvatarDataUrl = nextAvatarSource !== undefined
        ? await uploadManagedAvatar(targetUid, nextAvatarSource)
        : String(targetProfile.avatarDataUrl || "");

      await targetReference.update({
        name: nextName,
        phone: nextPhone,
        phoneNormalized: normalizePhone(nextPhone),
        vocalRange: nextVocalRange,
        avatarDataUrl: nextAvatarDataUrl,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      await firestore.doc(`memberDirectory/${targetUid}`).set(
        {
          name: nextName,
          phone: nextPhone,
          phoneNormalized: normalizePhone(nextPhone),
          vocalRange: nextVocalRange,
          avatarDataUrl: nextAvatarDataUrl,
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true },
      );

      const authState = await inspectAuthUser(targetUid);

      if (authState.authExists) {
        await admin.auth().updateUser(targetUid, {
          displayName: nextName,
          photoURL: nextAvatarDataUrl || undefined,
        }).catch((error) => {
          if (error?.code !== "auth/user-not-found") {
            throw error;
          }
        });
      }

      res.status(200).json({
        message: "Dados do membro atualizados com sucesso.",
        target: buildManagedMemberSnapshot(
          {
            ...targetProfile,
            name: nextName,
            phone: nextPhone,
            phoneNormalized: normalizePhone(nextPhone),
            vocalRange: nextVocalRange,
            avatarDataUrl: nextAvatarDataUrl,
          },
          authState,
        ),
      });
      return;
    }

    if (action === "update-role") {
      const nextRoleKey = String(body.nextRoleKey || "").trim();
      const allowedRoleKeys = getAssignableRoles(actorRole);

      if (!allowedRoleKeys.includes(nextRoleKey) || !ROLE_PAYLOADS[nextRoleKey]) {
        res.status(403).json({ message: "Esse cargo não pode ser aplicado por você." });
        return;
      }

      const nextRolePayload = ROLE_PAYLOADS[nextRoleKey];

      await targetReference.update({
        accountLevel: nextRolePayload.accountLevel,
        leadershipRole: nextRolePayload.leadershipRole,
        permissions: [...nextRolePayload.permissions],
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      await firestore.doc(`memberDirectory/${targetUid}`).set(
        buildDirectoryPayload(targetProfile, nextRolePayload),
        { merge: true },
      );

      res.status(200).json({
        message: "Cargo atualizado com sucesso.",
        target: {
          uid: targetUid,
          accountLevel: nextRolePayload.accountLevel,
          leadershipRole: nextRolePayload.leadershipRole,
          roleKey: nextRoleKey,
        },
      });
      return;
    }

    if (action === "update-password") {
      const nextPassword = String(body.nextPassword || "").trim();

      if (nextPassword.length < 6) {
        res.status(400).json({ message: "A senha precisa ter pelo menos 6 caracteres." });
        return;
      }

      await admin.auth().updateUser(targetUid, { password: nextPassword });
      await admin.auth().revokeRefreshTokens(targetUid).catch(() => undefined);

      res.status(200).json({
        message: "Senha atualizada com sucesso.",
        target: {
          uid: targetUid,
          passwordUpdated: true,
        },
      });
      return;
    }

    if (action === "set-disabled") {
      const disabled = Boolean(body.disabled);

      await admin.auth().updateUser(targetUid, { disabled });

      if (disabled) {
        await admin.auth().revokeRefreshTokens(targetUid).catch(() => undefined);
      }

      res.status(200).json({
        message: disabled ? "Conta desativada com sucesso." : "Conta reativada com sucesso.",
        target: {
          uid: targetUid,
          disabled,
        },
      });
      return;
    }

    if (action === "delete-account") {
      await admin.auth().deleteUser(targetUid).catch((error) => {
        if (error?.code !== "auth/user-not-found") {
          throw error;
        }
      });

      const batch = firestore.batch();
      batch.delete(firestore.doc(`members/${targetUid}`));
      batch.delete(firestore.doc(`memberDirectory/${targetUid}`));
      await batch.commit();

      res.status(200).json({
        message: "Conta apagada com sucesso.",
        target: {
          uid: targetUid,
          deleted: true,
        },
      });
      return;
    }

    res.status(400).json({ message: "Ação inválida." });
  } catch (error) {
    console.error("Managed member action failed", error);

    const statusCode = Number(error?.statusCode) || 500;
    const message = error instanceof Error && error.message
      ? error.message
      : "Não foi possível concluir esta ação no membro agora.";

    res.status(statusCode).json({ message });
  }
}

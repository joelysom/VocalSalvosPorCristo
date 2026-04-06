import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Camera,
  ChevronDown,
  HelpCircle,
  House,
  LockKeyhole,
  Mail,
  MapPin,
  Music,
  Phone,
  User,
  Users,
} from "lucide-react";
import cep from "cep-promise";
import { useRef, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type * as React from "react";
import { registrationSteps } from "../data/mock";
import type { FormErrors, FormState } from "../data/mock";
import loginBackground from "../img/Login/BackGround.png";
import logoAD from "../img/Login/LogoAD.png";

type TextFieldProps = {
  label: React.ReactNode;
  name: keyof FormState;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
  disabled?: boolean;
  icon: React.ElementType;
  error?: string;
};

type SelectFieldProps = {
  label: React.ReactNode;
  name: keyof FormState;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options: string[];
  placeholder: string;
  icon: React.ElementType;
  error?: string;
};

type RegisterPageProps = {
  form: FormState;
  errors: FormErrors;
  registerStep: number;
  avatarPreview: string;
  onFieldChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onErrorsChange: Dispatch<SetStateAction<FormErrors>>;
  onStepChange: Dispatch<SetStateAction<number>>;
  onAvatarChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onOpenLogin: () => void;
  onRegisterFinish: (name: string) => Promise<void> | void;
  isSubmitting?: boolean;
  statusMessage?: string;
  profileCompletionMode?: boolean;
  googleProfileMode?: boolean;
};

function TextField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete,
  inputMode,
  maxLength,
  disabled,
  icon: Icon,
  error,
}: TextFieldProps) {
  return (
    <label className="register-field-group">
      <span className="register-field-label">{label}</span>
      <span className={`register-field-shell ${error ? "is-error" : ""}`}>
        <Icon size={18} strokeWidth={2.2} />
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          maxLength={maxLength}
          disabled={disabled}
        />
      </span>
      {error ? <span className="register-field-error">{error}</span> : null}
    </label>
  );
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

function formatCep(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 8);

  if (digits.length <= 5) {
    return digits;
  }

  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  icon: Icon,
  error,
}: SelectFieldProps) {
  return (
    <label className="register-field-group">
      <span className="register-field-label">{label}</span>
      <span className={`register-field-shell register-select-shell ${error ? "is-error" : ""}`}>
        <Icon size={18} strokeWidth={2.2} />
        <select name={name} value={value} onChange={onChange} className={value ? "has-value" : ""}>
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown size={18} strokeWidth={2.3} />
      </span>
      {error ? <span className="register-field-error">{error}</span> : null}
    </label>
  );
}

function validateRegisterStep(step: number, form: FormState, profileCompletionMode = false) {
  const nextErrors: FormErrors = {};

  if (step === 0) {
    if (!form.name.trim()) nextErrors.name = "Informe o nome completo.";
    if (!form.phone.trim()) nextErrors.phone = "Informe um telefone para contato.";
    if (!form.email.trim()) nextErrors.email = "Informe um e-mail válido.";
    if (!profileCompletionMode) {
      if (!form.password.trim()) nextErrors.password = "Crie uma senha.";
      if (form.password.length > 0 && form.password.length < 6) {
        nextErrors.password = "A senha precisa ter pelo menos 6 caracteres.";
      }
      if (form.confirmPassword !== form.password) {
        nextErrors.confirmPassword = "As senhas precisam ser iguais.";
      }
    }
  }

  if (step === 1) {
    if (!form.cep.trim()) nextErrors.cep = "Informe o CEP.";
    if (!form.neighborhood.trim()) nextErrors.neighborhood = "Informe o bairro.";
    if (!form.city.trim()) nextErrors.city = "Informe a cidade.";
    if (!form.street.trim()) nextErrors.street = "Informe a rua.";
    if (!form.houseNumber.trim()) nextErrors.houseNumber = "Informe o número da casa.";
  }

  if (step === 2) {
    if (!form.maritalStatus) nextErrors.maritalStatus = "Selecione o estado civil.";
    if (!form.gender) nextErrors.gender = "Selecione o gênero.";
    if (!form.vocalRange) nextErrors.vocalRange = "Selecione o timbre vocal.";
  }

  return nextErrors;
}

export function RegisterPage({
  form,
  errors,
  registerStep,
  avatarPreview,
  onFieldChange,
  onErrorsChange,
  onStepChange,
  onAvatarChange,
  onOpenLogin,
  onRegisterFinish,
  isSubmitting = false,
  statusMessage = "",
  profileCompletionMode = false,
  googleProfileMode = false,
}: RegisterPageProps) {
  const activeStep = registrationSteps[registerStep];
  const [cepLookupMessage, setCepLookupMessage] = useState("");
  const [isCepLookupLoading, setIsCepLookupLoading] = useState(false);
  const lastCepLookupRef = useRef("");

  const dispatchFieldValue = (name: keyof FormState, value: string) => {
    onFieldChange({
      target: { name, value },
      currentTarget: { name, value },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const lookupCep = async (cepDigits: string) => {
    if (cepDigits.length !== 8 || lastCepLookupRef.current === cepDigits) {
      return;
    }

    lastCepLookupRef.current = cepDigits;
    setIsCepLookupLoading(true);
    setCepLookupMessage("Buscando endereço pelo CEP...");

    try {
      const address = await cep(cepDigits);

      dispatchFieldValue("cep", formatCep(cepDigits));
      dispatchFieldValue("neighborhood", address.neighborhood || "");
      dispatchFieldValue("city", address.city || "");
      dispatchFieldValue("street", address.street || "");

      onErrorsChange((current) => ({
        ...current,
        cep: "",
        neighborhood: "",
        city: "",
        street: "",
      }));

      setCepLookupMessage("Endereço preenchido automaticamente. Confirme os dados antes de continuar.");
    } catch {
      lastCepLookupRef.current = "";
      onErrorsChange((current) => ({
        ...current,
        cep: "Não encontramos esse CEP. Confira os números digitados.",
      }));
      setCepLookupMessage("CEP não localizado. Você ainda pode preencher o endereço manualmente.");
    } finally {
      setIsCepLookupLoading(false);
    }
  };

  const handleRegisterFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    if (event.target.name === "phone") {
      const formattedValue = formatPhoneNumber(event.target.value);

      onFieldChange({
        ...event,
        target: {
          ...event.target,
          name: event.target.name,
          value: formattedValue,
        },
        currentTarget: {
          ...event.currentTarget,
          name: event.target.name,
          value: formattedValue,
        },
      } as React.ChangeEvent<HTMLInputElement>);
      return;
    }

    if (event.target.name === "cep") {
      const formattedValue = formatCep(event.target.value);
      const cepDigits = formattedValue.replace(/\D/g, "");

      onFieldChange({
        ...event,
        target: {
          ...event.target,
          name: event.target.name,
          value: formattedValue,
        },
        currentTarget: {
          ...event.currentTarget,
          name: event.target.name,
          value: formattedValue,
        },
      } as React.ChangeEvent<HTMLInputElement>);

      if (cepDigits.length < 8) {
        lastCepLookupRef.current = "";
        setCepLookupMessage("");
        setIsCepLookupLoading(false);
      }

      if (cepDigits.length === 8) {
        void lookupCep(cepDigits);
      }

      return;
    }

    onFieldChange(event);
  };

  const goBack = () => {
    if (registerStep === 0) {
      onOpenLogin();
      return;
    }

    onStepChange(registerStep - 1);
  };

  const handleNextStep = () => {
    const stepErrors = validateRegisterStep(registerStep, form, profileCompletionMode);
    onErrorsChange(stepErrors);

    if (Object.keys(stepErrors).length > 0) {
      return;
    }

    if (registerStep < registrationSteps.length - 1) {
      onStepChange(registerStep + 1);
      return;
    }

    void onRegisterFinish(form.name || "Novo membro");
  };

  const renderStepFields = () => {
    if (registerStep === 0) {
      return (
        <>
          {profileCompletionMode ? (
            <div className="register-prefill-note">
              <strong>{googleProfileMode ? "Conta Google conectada" : "Conta autenticada"}</strong>
              <p>Revise os dados preenchidos automaticamente e complete o que estiver faltando antes de finalizar.</p>
            </div>
          ) : null}

          <TextField
            label="Nome"
            name="name"
            value={form.name}
            onChange={handleRegisterFieldChange}
            placeholder="Seu nome completo"
            autoComplete="name"
            icon={User}
            error={errors.name}
          />
          <TextField
            label="Telefone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleRegisterFieldChange}
            placeholder="(00) 0 0000-0000"
            autoComplete="tel"
            inputMode="numeric"
            maxLength={16}
            icon={Phone}
            error={errors.phone}
          />
          <TextField
            label="E-mail"
            name="email"
            type="email"
            value={form.email}
            onChange={handleRegisterFieldChange}
            placeholder="voce@email.com"
            autoComplete="email"
            disabled={profileCompletionMode}
            icon={Mail}
            error={errors.email}
          />
          {profileCompletionMode ? null : (
            <>
              <TextField
                label={
                  <>
                    Senha <span className="required-star">*</span>
                  </>
                }
                name="password"
                type="password"
                value={form.password}
                onChange={handleRegisterFieldChange}
                placeholder="Mín. 6 caracteres"
                autoComplete="new-password"
                icon={LockKeyhole}
                error={errors.password}
              />
              <TextField
                label="Confirmar senha"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleRegisterFieldChange}
                placeholder="Repita a senha"
                autoComplete="new-password"
                icon={LockKeyhole}
                error={errors.confirmPassword}
              />
            </>
          )}
        </>
      );
    }

    if (registerStep === 1) {
      return (
        <>
          <TextField
            label="CEP"
            name="cep"
            value={form.cep}
            onChange={handleRegisterFieldChange}
            placeholder="00000-000"
            inputMode="numeric"
            maxLength={9}
            icon={MapPin}
            error={errors.cep}
          />
          {cepLookupMessage ? (
            <p className={`register-field-note ${isCepLookupLoading ? "is-loading" : ""}`}>
              {cepLookupMessage}
            </p>
          ) : null}
          <TextField
            label="Bairro"
            name="neighborhood"
            value={form.neighborhood}
            onChange={handleRegisterFieldChange}
            placeholder="Seu bairro"
            icon={MapPin}
            error={errors.neighborhood}
          />
          <TextField
            label="Cidade"
            name="city"
            value={form.city}
            onChange={handleRegisterFieldChange}
            placeholder="Cidade"
            icon={Building2}
            error={errors.city}
          />
          <TextField
            label="Rua"
            name="street"
            value={form.street}
            onChange={handleRegisterFieldChange}
            placeholder="Rua e complemento"
            icon={MapPin}
            error={errors.street}
          />
          <TextField
            label="Número da casa"
            name="houseNumber"
            value={form.houseNumber}
            onChange={handleRegisterFieldChange}
            placeholder="Número da casa"
            icon={House}
            error={errors.houseNumber}
          />
        </>
      );
    }

    return (
      <>
        <SelectField
          label="Estado civil"
          name="maritalStatus"
          value={form.maritalStatus}
          onChange={handleRegisterFieldChange}
          placeholder="Selecione"
          options={["Solteiro(a)", "Casado(a)", "Divorciado(a)", "Viúvo(a)"]}
          icon={Users}
          error={errors.maritalStatus}
        />
        <SelectField
          label="Gênero"
          name="gender"
          value={form.gender}
          onChange={handleRegisterFieldChange}
          placeholder="Selecione"
          options={["Masculino", "Feminino", "Outro"]}
          icon={User}
          error={errors.gender}
        />
        <SelectField
          label={
            <>
              Timbre vocal <span className="required-star">*</span>
            </>
          }
          name="vocalRange"
          value={form.vocalRange}
          onChange={handleRegisterFieldChange}
          placeholder="Selecione o timbre"
          options={[
            "Soprano",
            "Mezzo-soprano",
            "Contralto",
            "Tenor",
            "Barítono",
            "Baixo",
          ]}
          icon={Music}
          error={errors.vocalRange}
        />

        <label className="register-field-group register-avatar-field">
          <span className="register-field-label">Foto de perfil</span>
          <span className="register-avatar-shell">
            <span className="register-avatar-preview">
              {avatarPreview ? (
                <img src={avatarPreview} alt="Avatar do integrante" />
              ) : (
                <span className="register-avatar-fallback">
                  {form.name ? form.name.slice(0, 1).toUpperCase() : "V"}
                </span>
              )}
            </span>

            <span className="register-avatar-copy">
              <strong>Adicione uma foto</strong>
              <small>Escolha uma imagem clara e ajuste o enquadramento antes de salvar.</small>
            </span>

            <span className="register-avatar-action">
              <Camera size={18} strokeWidth={2.2} />
              Escolher e ajustar
            </span>
          </span>
          <input
            type="file"
            accept="image/*"
            className="hidden-input"
            onChange={onAvatarChange}
          />
        </label>
      </>
    );
  };

  return (
    <div className="page page-register page-register-modern">
      <img className="page-bg register-bg-image" src={loginBackground} alt="" />
      <div className="register-bg-overlay" />

      <div className="register-content">
        <div className="register-topbar">
          <button className="register-back-btn" type="button" onClick={goBack} aria-label="Voltar">
            <ArrowLeft size={20} strokeWidth={2.4} />
          </button>

          <div className="register-heading">
            <span className="register-eyebrow">Criar conta</span>
            <h1>{activeStep.title}</h1>
            <p>{activeStep.description}</p>
          </div>
        </div>

        <div className="register-steps-bar">
          {registrationSteps.map((step, index) => (
            <div
              key={step.id}
              className={`register-step-pill ${index === registerStep ? "is-active" : ""} ${index < registerStep ? "is-done" : ""}`}
            >
              <span>{index + 1}</span>
              <small>{step.id}</small>
            </div>
          ))}
        </div>

        <div className="register-form-scroll">
          <div className="register-form-stack">
            {statusMessage ? <p className="register-status-message">{statusMessage}</p> : null}
            {renderStepFields()}
          </div>
        </div>

        <div className="register-bottom-bar">
          <span className="register-progress-copy">
            Etapa {registerStep + 1} de {registrationSteps.length}
          </span>

          <div className="register-actions-row">
            {registerStep > 0 ? (
              <button
                type="button"
                className="register-secondary-btn"
                onClick={goBack}
                disabled={isSubmitting}
              >
                Voltar
              </button>
            ) : null}

            <button
              type="button"
              className="register-primary-btn"
              onClick={handleNextStep}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Salvando..."
                : registerStep === registrationSteps.length - 1
                  ? "Finalizar cadastro"
                  : "Continuar"}
              <ArrowRight size={18} strokeWidth={2.4} />
            </button>
          </div>

          <div className="register-help-stack">
            <img className="register-ad-logo" src={logoAD} alt="Assembleia de Deus" />
            <button type="button" className="register-help-btn" disabled={isSubmitting}>
              <HelpCircle size={18} strokeWidth={2.2} />
              Ajuda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

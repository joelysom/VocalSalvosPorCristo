import { ArrowLeft, Mail } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import type * as React from "react";
import type { FormErrors, FormState } from "../data/mock";
import loginBackground from "../img/Login/BackGround.png";
import loginLogo from "../img/Login/Login_Logo.png";

type ForgotPasswordPageProps = {
  form: FormState;
  errors: FormErrors;
  onFieldChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onErrorsChange: Dispatch<SetStateAction<FormErrors>>;
  onSubmit: () => Promise<void> | void;
  onBackToLogin: () => void;
  isSubmitting?: boolean;
  statusMessage?: string;
};

export function ForgotPasswordPage({
  form,
  errors,
  onFieldChange,
  onErrorsChange,
  onSubmit,
  onBackToLogin,
  isSubmitting = false,
  statusMessage = "",
}: ForgotPasswordPageProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {};

    if (!form.loginEmail.trim()) {
      nextErrors.loginEmail = "Informe o e-mail cadastrado para redefinir a senha.";
    }

    onErrorsChange(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    void onSubmit();
  };

  return (
    <div className="page page-login">
      <img className="page-bg login-bg-image" src={loginBackground} alt="" />
      <div className="login-bg-overlay" />

      <div className="login-content forgot-password-content">
        <header className="login-brand-block">
          <div
            className="login-brand-logo-wrap"
            style={{ "--login-logo-image": `url(${loginLogo})` } as React.CSSProperties}
          >
            <img className="login-brand-logo" src={loginLogo} alt="Vocal Salvos por Cristo" />
          </div>
        </header>

        <form className="login-card forgot-password-card" onSubmit={handleSubmit}>
          <div className="login-card-header">
            <h1>Redefinir senha</h1>
            <p>Informe o e-mail cadastrado. Vamos enviar um link de recuperação para sua caixa de entrada.</p>
          </div>

          {statusMessage ? <p className="login-status-message">{statusMessage}</p> : null}

          <label className={`login-input-group ${errors.loginEmail ? "is-error" : ""}`}>
            <span className="login-input-label">Email</span>
            <div className="login-input-shell">
              <Mail size={18} strokeWidth={2.2} />
              <input
                type="email"
                name="loginEmail"
                value={form.loginEmail}
                onChange={onFieldChange}
                placeholder="Email cadastrado"
                autoComplete="email"
                disabled={isSubmitting}
              />
            </div>
            {errors.loginEmail ? <p className="login-field-error">{errors.loginEmail}</p> : null}
          </label>

          <div className="login-actions forgot-password-actions">
            <button type="submit" className="login-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar link de redefinição"}
            </button>

            <button
              type="button"
              className="login-secondary-btn"
              onClick={onBackToLogin}
              disabled={isSubmitting}
            >
              <ArrowLeft size={18} strokeWidth={2.2} />
              Voltar ao login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
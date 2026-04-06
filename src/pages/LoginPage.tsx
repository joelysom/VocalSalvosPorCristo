import { ArrowRight, HelpCircle, LockKeyhole, Mail } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import type * as React from "react";
import type { FormErrors, FormState } from "../data/mock";
import loginBackground from "../img/Login/BackGround.png";
import loginLogo from "../img/Login/Login_Logo.png";

function GoogleMark() {
  return (
    <span className="google-mark" aria-hidden="true">
      G
    </span>
  );
}

type LoginPageProps = {
  form: FormState;
  errors: FormErrors;
  onFieldChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onErrorsChange: Dispatch<SetStateAction<FormErrors>>;
  onLogin: () => Promise<void> | void;
  onGoogleLogin: () => Promise<void> | void;
  onOpenRegister: () => void;
  isSubmitting?: boolean;
  statusMessage?: string;
};

export function LoginPage({
  form,
  errors,
  onFieldChange,
  onErrorsChange,
  onLogin,
  onGoogleLogin,
  onOpenRegister,
  isSubmitting = false,
  statusMessage = "",
}: LoginPageProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginErrors: FormErrors = {};

    if (!form.loginEmail.trim()) {
      loginErrors.loginEmail = "Informe o e-mail ou telefone.";
    }

    if (!form.loginPassword.trim()) {
      loginErrors.loginPassword = "Informe sua senha.";
    }

    onErrorsChange(loginErrors);

    if (Object.keys(loginErrors).length > 0) {
      return;
    }

    void onLogin();
  };

  return (
    <div className="page page-login">
      <img className="page-bg login-bg-image" src={loginBackground} alt="" />
      <div className="login-bg-overlay" />

      <div className="login-content">
        <header className="login-brand-block">
          <div
            className="login-brand-logo-wrap"
            style={{ "--login-logo-image": `url(${loginLogo})` } as React.CSSProperties}
          >
            <img className="login-brand-logo" src={loginLogo} alt="Vocal Salvos por Cristo" />
          </div>
        </header>

        <form className="login-card" onSubmit={handleSubmit}>
          <div className="login-card-header">
            <h1>Entrar</h1>
            <p>Entre com seu e-mail ou com Google. Se faltar algo no perfil, você confirma no cadastro.</p>
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

          <label className={`login-input-group ${errors.loginPassword ? "is-error" : ""}`}>
            <span className="login-input-label">Senha</span>
            <div className="login-input-shell">
              <LockKeyhole size={18} strokeWidth={2.2} />
              <input
                type="password"
                name="loginPassword"
                value={form.loginPassword}
                onChange={onFieldChange}
                placeholder="Senha"
                autoComplete="current-password"
                disabled={isSubmitting}
              />
            </div>
            {errors.loginPassword ? (
              <p className="login-field-error">{errors.loginPassword}</p>
            ) : null}
          </label>

          <div className="login-actions">
            <button type="submit" className="login-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Entrando..." : "Entrar no painel"}
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>

            <div className="login-divider" aria-hidden="true">
              <span />
              <small>ou</small>
              <span />
            </div>

            <button
              type="button"
              className="login-google-btn"
              onClick={() => {
                void onGoogleLogin();
              }}
              disabled={isSubmitting}
            >
              <GoogleMark />
              {isSubmitting ? "Aguarde..." : "Continuar com Google"}
            </button>

            <button
              type="button"
              className="login-register-btn-modern"
              onClick={onOpenRegister}
              disabled={isSubmitting}
            >
              Criar conta
            </button>
          </div>
        </form>

        <button type="button" className="login-help-btn" disabled={isSubmitting}>
          <HelpCircle size={18} strokeWidth={2.2} />
          Ajuda
        </button>
      </div>
    </div>
  );
}
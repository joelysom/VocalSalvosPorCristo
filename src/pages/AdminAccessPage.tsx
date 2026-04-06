import { KeyRound, ShieldCheck, UserRound } from "lucide-react";
import { useState } from "react";
import type * as React from "react";
import loginBackground from "../img/Login/BackGround.png";

type AdminAccessPageProps = {
  onAdminLogin: (username: string, password: string) => Promise<void> | void;
  isSubmitting?: boolean;
  statusMessage?: string;
};

export function AdminAccessPage({
  onAdminLogin,
  isSubmitting = false,
  statusMessage = "",
}: AdminAccessPageProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [localError, setLocalError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!username.trim() || !password.trim()) {
      setLocalError("Informe usuário e senha para entrar no painel oculto.");
      return;
    }

    setLocalError("");
    void onAdminLogin(username.trim(), password);
  };

  return (
    <div className="page admin-page">
      <img className="page-bg admin-bg-image" src={loginBackground} alt="" />
      <div className="admin-bg-overlay" />

      <div className="admin-access-shell">
        <div className="admin-access-card">
          <div className="admin-access-badge">
            <ShieldCheck size={22} strokeWidth={2.4} />
            Painel interno
          </div>

          <h1>Acesso administrativo</h1>
          <p>Entre com a credencial oculta para gerenciar contas, níveis e permissões do ministério.</p>
          <p>Credencial inicial: admin / admin</p>

          {statusMessage ? <p className="admin-status-message">{statusMessage}</p> : null}
          {localError ? <p className="admin-status-message">{localError}</p> : null}

          <form className="admin-access-form" onSubmit={handleSubmit}>
            <label className="admin-input-group">
              <span>Usuário</span>
              <div className="admin-input-shell">
                <UserRound size={18} strokeWidth={2.1} />
                <input
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="Usuário administrativo"
                  disabled={isSubmitting}
                />
              </div>
            </label>

            <label className="admin-input-group">
              <span>Senha</span>
              <div className="admin-input-shell">
                <KeyRound size={18} strokeWidth={2.1} />
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Senha administrativa"
                  disabled={isSubmitting}
                />
              </div>
            </label>

            <button className="admin-primary-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Entrando..." : "Entrar como administrador"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
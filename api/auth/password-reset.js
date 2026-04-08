import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import admin from "firebase-admin";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logoPath = path.resolve(__dirname, "../../src/img/Login/Login_Logo.png");

function getRequiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getOptionalEnv(name) {
  return String(process.env[name] || "").trim();
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
  });
}

function getTransporter() {
  const user = getRequiredEnv("SMTP_USER");
  const pass = getRequiredEnv("SMTP_PASS");
  const service = getOptionalEnv("SMTP_SERVICE").toLowerCase();
  const host = getOptionalEnv("SMTP_HOST");

  if (service === "gmail" || (!host && user.toLowerCase().endsWith("@gmail.com"))) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });
  }

  const resolvedHost = host || getRequiredEnv("SMTP_HOST");
  const port = Number(process.env.SMTP_PORT || "465");
  const secureSetting = getOptionalEnv("SMTP_SECURE").toLowerCase();
  const secure = secureSetting ? secureSetting === "true" : port === 465;

  return nodemailer.createTransport({
    host: resolvedHost,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function resolveConfiguredAppBaseUrl() {
  const configuredUrl = String(process.env.APP_BASE_URL || "").trim();

  if (!configuredUrl) {
    return "";
  }

  try {
    const parsedUrl = new URL(configuredUrl);

    if (!["https:", "http:"].includes(parsedUrl.protocol)) {
      return "";
    }

    return parsedUrl.toString().replace(/\/$/, "");
  } catch {
    return "";
  }
}

function buildResetActionCodeSettings() {
  const baseUrl = resolveConfiguredAppBaseUrl();

  if (!baseUrl) {
    return null;
  }

  return {
    url: baseUrl,
    handleCodeInApp: false,
  };
}

async function createPasswordResetLink(auth, email) {
  const actionCodeSettings = buildResetActionCodeSettings();

  if (!actionCodeSettings) {
    return auth.generatePasswordResetLink(email);
  }

  try {
    return await auth.generatePasswordResetLink(email, actionCodeSettings);
  } catch (error) {
    const code = error?.code || "";

    if (
      code === "auth/invalid-continue-uri" ||
      code === "auth/unauthorized-continue-uri"
    ) {
      return auth.generatePasswordResetLink(email);
    }

    throw error;
  }
}

async function hasResettableUser(auth, email) {
  try {
    await auth.getUserByEmail(email);
    return true;
  } catch (error) {
    if (error?.code === "auth/user-not-found") {
      return false;
    }

    throw error;
  }
}

function buildResetEmailHtml({ resetLink, recipientEmail }) {
  return `
    <div style="margin:0;padding:0;background-color:#f7f1e8;font-family:Arial,Helvetica,sans-serif;color:#1f2437;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:linear-gradient(180deg,#1c2340 0%,#0f1326 100%);padding:32px 16px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background-color:#fffaf4;border-radius:28px;overflow:hidden;box-shadow:0 22px 48px rgba(15,19,38,0.25);">
              <tr>
                <td style="padding:36px 32px 20px;text-align:center;background:radial-gradient(circle at top,rgba(252,218,120,0.28),transparent 62%),linear-gradient(180deg,#24314f 0%,#141b33 100%);">
                  <img src="cid:vocal-login-logo" alt="Vocal Salvos por Cristo" style="display:block;margin:0 auto 18px;max-width:260px;width:100%;height:auto;" />
                  <div style="display:inline-block;padding:6px 12px;border-radius:999px;background:rgba(252,218,120,0.18);color:#fcda78;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;">
                    Redefinição de senha
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding:32px;">
                  <h1 style="margin:0 0 12px;font-size:28px;line-height:1.2;color:#14203b;">Redefinir sua senha</h1>
                  <p style="margin:0 0 18px;font-size:15px;line-height:1.7;color:#4f5b76;">
                    Recebemos uma solicitação para redefinir a senha da conta <strong style="color:#14203b;">${recipientEmail}</strong> no sistema do Vocal Salvos por Cristo.
                  </p>
                  <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#4f5b76;">
                    Para continuar, clique no botão abaixo. O link é seguro e foi gerado pelo Firebase Authentication.
                  </p>
                  <div style="margin:0 0 24px;text-align:center;">
                    <a href="${resetLink}" style="display:inline-block;padding:16px 28px;border-radius:999px;background:linear-gradient(180deg,#f25f5f 0%,#ed4b4b 100%);color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;">
                      Redefinir senha agora
                    </a>
                  </div>
                  <p style="margin:0 0 12px;font-size:13px;line-height:1.7;color:#6b7285;">
                    Se o botão não abrir, copie e cole este link no navegador:
                  </p>
                  <p style="margin:0 0 24px;padding:14px 16px;border-radius:16px;background:#f7efe2;word-break:break-all;font-size:12px;line-height:1.6;color:#7a4b1c;">
                    ${resetLink}
                  </p>
                  <p style="margin:0 0 8px;font-size:13px;line-height:1.7;color:#6b7285;">
                    Se você não solicitou essa alteração, ignore este e-mail. Sua conta permanecerá protegida.
                  </p>
                  <p style="margin:0;font-size:13px;line-height:1.7;color:#6b7285;">
                    Com cuidado e oração,<br />
                    <strong style="color:#14203b;">Vocal Salvos por Cristo</strong>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  `;
}

function buildResetEmailText({ resetLink, recipientEmail }) {
  return [
    "Vocal Salvos por Cristo",
    "",
    `Recebemos uma solicitação para redefinir a senha da conta ${recipientEmail}.`,
    "",
    "Use o link abaixo para continuar:",
    resetLink,
    "",
    "Se você não solicitou essa alteração, ignore este e-mail.",
  ].join("\n");
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.status(405).json({ message: "Método não permitido." });
    return;
  }

  const email = String(req.body?.email || "").trim().toLowerCase();

  if (!email) {
    res.status(400).json({
      field: "loginEmail",
      message: "Informe o e-mail cadastrado para redefinir a senha.",
    });
    return;
  }

  if (!isValidEmail(email)) {
    res.status(400).json({
      field: "loginEmail",
      message: "Use um e-mail válido para recuperar a senha.",
    });
    return;
  }

  try {
    getFirebaseAdminApp();

    const auth = admin.auth();

    if (!(await hasResettableUser(auth, email))) {
      res.status(200).json({
        message: "Se o e-mail estiver cadastrado, enviaremos um link de redefinição em instantes.",
      });
      return;
    }

    const transporter = getTransporter();
    const logoBuffer = await readFile(logoPath);
    const resetLink = await createPasswordResetLink(auth, email);

    const fromName = process.env.SMTP_FROM_NAME || "Vocal Salvos por Cristo";
    const fromEmail = getOptionalEnv("SMTP_FROM_EMAIL") || getRequiredEnv("SMTP_USER");
    const replyTo = getOptionalEnv("SMTP_REPLY_TO") || fromEmail;

    await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: email,
      replyTo,
      subject: "Redefinir senha | Vocal Salvos por Cristo",
      text: buildResetEmailText({ resetLink, recipientEmail: email }),
      html: buildResetEmailHtml({ resetLink, recipientEmail: email }),
      attachments: [
        {
          filename: "Login_Logo.png",
          content: logoBuffer,
          cid: "vocal-login-logo",
        },
      ],
    });

    res.status(200).json({
      message: "Se o e-mail estiver cadastrado, enviaremos um link de redefinição em instantes.",
    });
  } catch (error) {
    const code = error?.code || "";

    if (code === "auth/user-not-found") {
      res.status(200).json({
        message: "Se o e-mail estiver cadastrado, enviaremos um link de redefinição em instantes.",
      });
      return;
    }

    console.error("Custom password reset email failed", error);

    res.status(500).json({
      message: "Não foi possível enviar o e-mail de redefinição agora. Tente novamente em instantes.",
    });
  }
}
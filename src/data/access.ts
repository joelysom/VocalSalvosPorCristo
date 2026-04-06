export type AccessLevel = "member" | "administration" | "direction";

export const ADMIN_BOOTSTRAP_USERNAME = "admin";
export const ADMIN_BOOTSTRAP_EMAIL = "admin@vocalsalvosporcristo.app";
export const ADMIN_BOOTSTRAP_ALIAS_PASSWORD = "admin";
export const ADMIN_BOOTSTRAP_AUTH_PASSWORD = "admin123";

export const DIRECTION_ROLES = ["Maestro", "Secretário", "Vice-Secretário"];

export const GENERAL_PERMISSIONS = [
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

export const MEMBER_PERMISSIONS = [
  "Ver músicas",
  "Receber avisos, ensaios e documentos",
  "Notificar atraso ou imprevisto",
  "Solicitar alteração de dado",
  "Comentar em agenda e avisos",
];

export const ALL_PERMISSIONS = Array.from(new Set([...GENERAL_PERMISSIONS, ...MEMBER_PERMISSIONS]));

export function normalizeAccessLevel(level?: string): AccessLevel {
  if (level === "administration" || level === "direction") {
    return level;
  }

  return "member";
}

export function resolveDefaultPermissions(level: AccessLevel) {
  return level === "member" ? MEMBER_PERMISSIONS : GENERAL_PERMISSIONS;
}

export function normalizePermissions(permissions: unknown, level?: string) {
  if (Array.isArray(permissions)) {
    const sanitized = permissions.filter(
      (permission): permission is string => typeof permission === "string" && permission.trim().length > 0,
    );

    if (sanitized.length > 0) {
      return Array.from(new Set(sanitized));
    }
  }

  return [...resolveDefaultPermissions(normalizeAccessLevel(level))];
}
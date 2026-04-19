export type AccessLevel = "member" | "administration" | "direction";
export type ManagedMemberRoleKey = "admin" | "developer" | "maestro" | "secretary" | "vice-secretary" | "member";

export const ADMIN_BOOTSTRAP_USERNAME = "admin";
export const ADMIN_BOOTSTRAP_EMAIL = "admin@vocalsalvosporcristo.app";
export const ADMIN_BOOTSTRAP_ALIAS_PASSWORD = "admin";
export const ADMIN_BOOTSTRAP_AUTH_PASSWORD = "admin123";

export const DIRECTION_ROLES = ["Maestro", "Secretário", "Vice-Secretário"];
export const ADMINISTRATION_ROLES = ["Desenvolvedor"];

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

export function resolveManagedMemberRoleKey(
  accountLevel: string | AccessLevel | undefined,
  leadershipRole: string | undefined,
): ManagedMemberRoleKey {
  if (leadershipRole === "Desenvolvedor") {
    return "developer";
  }

  if (normalizeAccessLevel(accountLevel) === "administration") {
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

export function resolveManagedMemberRoleLabel(roleKey: ManagedMemberRoleKey) {
  switch (roleKey) {
    case "admin":
      return "Administrador do Vocal";
    case "developer":
      return "Desenvolvedor";
    case "maestro":
      return "Maestro";
    case "secretary":
      return "Secretário";
    case "vice-secretary":
      return "Vice-Secretário";
    default:
      return "Membro do vocal";
  }
}

export function canManageManagedMemberTarget(
  actorRole: ManagedMemberRoleKey,
  targetRole: ManagedMemberRoleKey,
  actorUid: string,
  targetUid: string,
) {
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

export function canEditManagedMemberTarget(
  actorRole: ManagedMemberRoleKey,
  targetRole: ManagedMemberRoleKey,
  actorUid: string,
  targetUid: string,
) {
  return canManageManagedMemberTarget(actorRole, targetRole, actorUid, targetUid);
}

export function canResetManagedMemberPasswordTarget(
  actorRole: ManagedMemberRoleKey,
  targetRole: ManagedMemberRoleKey,
  actorUid: string,
  targetUid: string,
) {
  if (!actorUid || !targetUid || actorUid === targetUid) {
    return false;
  }

  if (actorRole === "admin" || actorRole === "developer") {
    return true;
  }

  if (actorRole === "maestro") {
    return targetRole !== "admin" && targetRole !== "developer";
  }

  return false;
}

export function getAssignableManagedRoleKeys(actorRole: ManagedMemberRoleKey) {
  if (actorRole === "admin") {
    return ["admin", "developer", "maestro", "secretary", "vice-secretary", "member"] satisfies ManagedMemberRoleKey[];
  }

  if (actorRole === "developer") {
    return ["developer", "maestro", "secretary", "vice-secretary", "member"] satisfies ManagedMemberRoleKey[];
  }

  if (actorRole === "maestro") {
    return ["maestro", "secretary", "vice-secretary", "member"] satisfies ManagedMemberRoleKey[];
  }

  if (actorRole === "secretary" || actorRole === "vice-secretary") {
    return ["secretary", "vice-secretary", "member"] satisfies ManagedMemberRoleKey[];
  }

  return [] satisfies ManagedMemberRoleKey[];
}
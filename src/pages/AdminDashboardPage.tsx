import { KeyRound, Save, ShieldCheck, ShieldPlus, Users } from "lucide-react";
import { useMemo, useState } from "react";
import {
  ADMINISTRATION_ROLES,
  ALL_PERMISSIONS,
  canResetManagedMemberPasswordTarget,
  DIRECTION_ROLES,
  GENERAL_PERMISSIONS,
  MEMBER_PERMISSIONS,
  type AccessLevel,
  type ManagedMemberRoleKey,
  normalizeAccessLevel,
  normalizePermissions,
  resolveDefaultPermissions,
  resolveManagedMemberRoleKey,
} from "../data/access";
import type { ManagedMemberProfileUpdate, MemberProfile } from "../services/memberProfiles";

type EditableMember = ManagedMemberProfileUpdate & {
  uid: string;
  email: string;
};

type AdminDashboardPageProps = {
  adminName: string;
  currentManagementRole: ManagedMemberRoleKey;
  currentUserUid: string;
  members: MemberProfile[];
  isLoading: boolean;
  isSaving: boolean;
  statusMessage?: string;
  onRefresh: () => Promise<void> | void;
  onSaveMember: (member: EditableMember) => Promise<void> | void;
  onChangeAdminPassword: (nextPassword: string) => Promise<void> | void;
  onResetMemberPassword: (memberUid: string) => Promise<void> | void;
  onSignOut: () => Promise<void> | void;
};

function mapMemberToEditable(member: MemberProfile): EditableMember {
  const accountLevel = normalizeAccessLevel(member.accountLevel);

  return {
    uid: member.uid,
    email: member.email,
    name: member.name,
    phone: member.phone,
    cep: member.cep,
    neighborhood: member.neighborhood,
    city: member.city,
    street: member.street,
    houseNumber: member.houseNumber,
    maritalStatus: member.maritalStatus,
    gender: member.gender,
    vocalRange: member.vocalRange,
    availability: member.availability,
    accountLevel,
    leadershipRole: member.leadershipRole || "",
    permissions: normalizePermissions(member.permissions, accountLevel),
  };
}

export function AdminDashboardPage({
  adminName,
  currentManagementRole,
  currentUserUid,
  members,
  isLoading,
  isSaving,
  statusMessage = "",
  onRefresh,
  onSaveMember,
  onChangeAdminPassword,
  onResetMemberPassword,
  onSignOut,
}: AdminDashboardPageProps) {
  const [query, setQuery] = useState("");
  const [editedMembers, setEditedMembers] = useState<Record<string, EditableMember>>({});
  const [passwordDraft, setPasswordDraft] = useState("");

  const memberSourceMap = useMemo(
    () =>
      Object.fromEntries(
        members.map((member) => [member.uid, mapMemberToEditable(member)]),
      ) as Record<string, EditableMember>,
    [members],
  );

  const memberDrafts = useMemo(
    () => members.map((member) => editedMembers[member.uid] ?? memberSourceMap[member.uid]),
    [editedMembers, memberSourceMap, members],
  );

  const filteredMembers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return memberDrafts.filter((member) => {
      if (!normalizedQuery) {
        return true;
      }

      return `${member.name} ${member.email} ${member.accountLevel} ${member.leadershipRole}`
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [memberDrafts, query]);

  const getEditableMember = (
    current: Record<string, EditableMember>,
    uid: string,
  ) => current[uid] ?? memberSourceMap[uid];

  const updateMemberField = (uid: string, updates: Partial<EditableMember>) => {
    setEditedMembers((current) => {
      const member = getEditableMember(current, uid);

      if (!member) {
        return current;
      }

      const nextMember = { ...member, ...updates };

      if (updates.accountLevel) {
        const level = normalizeAccessLevel(updates.accountLevel);
        nextMember.accountLevel = level;

        if (level !== "direction") {
          nextMember.leadershipRole = "";
        }

        nextMember.permissions = [...resolveDefaultPermissions(level)];
      }

      return {
        ...current,
        [uid]: nextMember,
      };
    });
  };

  const togglePermission = (uid: string, permission: string) => {
    setEditedMembers((current) => {
      const member = getEditableMember(current, uid);

      if (!member) {
        return current;
      }

      const exists = member.permissions.includes(permission);

      return {
        ...current,
        [uid]: {
          ...member,
          permissions: exists
            ? member.permissions.filter((item) => item !== permission)
            : [...member.permissions, permission],
        },
      };
    });
  };

  const resetPermissionsToDefault = (uid: string) => {
    setEditedMembers((current) => {
      const member = getEditableMember(current, uid);

      if (!member) {
        return current;
      }

      return {
        ...current,
        [uid]: {
          ...member,
          permissions: [...resolveDefaultPermissions(member.accountLevel)],
        },
      };
    });
  };

  const hasMemberDraftChanges = (uid: string) => Boolean(editedMembers[uid]);

  return (
    <div className="page admin-dashboard-page">
      <div className="admin-dashboard-shell">
        <header className="admin-dashboard-header">
          <div>
            <p className="admin-dashboard-eyebrow">Gestão central</p>
            <h1>Painel do administrador</h1>
            <p className="admin-dashboard-copy">Sessão ativa como {adminName}. Ajuste níveis, cargos, permissões e dados dos membros por aqui.</p>
          </div>

          <div className="admin-dashboard-actions">
            <button type="button" className="admin-secondary-btn" onClick={() => void onRefresh()}>
              <Users size={18} strokeWidth={2.2} />
              Atualizar lista
            </button>
            <button type="button" className="admin-secondary-btn" onClick={() => void onSignOut()}>
              <ShieldCheck size={18} strokeWidth={2.2} />
              Sair
            </button>
          </div>
        </header>

        <section className="admin-password-card">
          <div>
            <p className="admin-dashboard-eyebrow">Segurança</p>
            <h2>Trocar senha do administrador</h2>
          </div>

          <div className="admin-password-row">
            <div className="admin-input-shell admin-inline-input">
              <KeyRound size={18} strokeWidth={2.1} />
              <input
                type="password"
                value={passwordDraft}
                onChange={(event) => setPasswordDraft(event.target.value)}
                placeholder="Nova senha do administrador"
                disabled={isSaving}
              />
            </div>
            <button
              type="button"
              className="admin-primary-btn"
              disabled={isSaving || passwordDraft.trim().length < 6}
              onClick={() => {
                void onChangeAdminPassword(passwordDraft.trim());
                setPasswordDraft("");
              }}
            >
              Atualizar senha
            </button>
          </div>
        </section>

        <section className="admin-members-panel">
          <div className="admin-members-toolbar">
            <div className="admin-input-shell admin-inline-input">
              <ShieldPlus size={18} strokeWidth={2.1} />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar membro, e-mail ou nível"
              />
            </div>
            {statusMessage ? <p className="admin-inline-status">{statusMessage}</p> : null}
          </div>

          {isLoading ? <p className="admin-empty-state">Carregando contas cadastradas...</p> : null}

          {!isLoading && filteredMembers.length === 0 ? (
            <p className="admin-empty-state">Nenhuma conta encontrada para esse filtro.</p>
          ) : null}

          <div className="admin-member-list">
            {filteredMembers.map((member) => {
              const allowedRoleOptions = member.accountLevel === "direction"
                ? ["", ...DIRECTION_ROLES]
                : member.accountLevel === "administration"
                  ? ["", ...ADMINISTRATION_ROLES]
                  : [""];
              const permissionPool = member.accountLevel === "member"
                ? MEMBER_PERMISSIONS
                : Array.from(new Set([...GENERAL_PERMISSIONS, ...ALL_PERMISSIONS]));
              const memberRole = resolveManagedMemberRoleKey(member.accountLevel, member.leadershipRole);
              const canResetMemberPassword = canResetManagedMemberPasswordTarget(
                currentManagementRole,
                memberRole,
                currentUserUid,
                member.uid,
              );
              const hasDraftChanges = hasMemberDraftChanges(member.uid);

              return (
                <article key={member.uid} className="admin-member-card">
                  <div className="admin-member-topline">
                    <div>
                      <h2>{member.name || "Conta sem nome"}</h2>
                      <p>{member.email}</p>
                    </div>
                    <div className="admin-member-topline-actions">
                      {canResetMemberPassword ? (
                        <button
                          type="button"
                          className="admin-secondary-btn"
                          disabled={isSaving}
                          onClick={() => {
                            if (window.confirm(`Redefinir a senha de ${member.name || member.email}? Um e-mail de recuperação será enviado para a conta.`)) {
                              void onResetMemberPassword(member.uid);
                            }
                          }}
                        >
                          <KeyRound size={16} strokeWidth={2.2} />
                          Redefinir senha
                        </button>
                      ) : null}
                      <button
                        type="button"
                        className="admin-primary-btn"
                        disabled={isSaving || !hasDraftChanges}
                        onClick={async () => {
                          await onSaveMember(member);
                          setEditedMembers((current) => {
                            const nextDrafts = { ...current };
                            delete nextDrafts[member.uid];
                            return nextDrafts;
                          });
                        }}
                      >
                        <Save size={16} strokeWidth={2.2} />
                        {hasDraftChanges ? "Salvar alterações" : "Sem alterações"}
                      </button>
                    </div>
                  </div>

                  <div className="admin-form-grid">
                    <label>
                      <span>Nome</span>
                      <input
                        value={member.name}
                        onChange={(event) => updateMemberField(member.uid, { name: event.target.value })}
                      />
                    </label>
                    <label>
                      <span>Telefone</span>
                      <input
                        value={member.phone}
                        onChange={(event) => updateMemberField(member.uid, { phone: event.target.value })}
                      />
                    </label>
                    <label>
                      <span>Cidade</span>
                      <input
                        value={member.city}
                        onChange={(event) => updateMemberField(member.uid, { city: event.target.value })}
                      />
                    </label>
                    <label>
                      <span>Bairro</span>
                      <input
                        value={member.neighborhood}
                        onChange={(event) => updateMemberField(member.uid, { neighborhood: event.target.value })}
                      />
                    </label>
                    <label>
                      <span>Rua</span>
                      <input
                        value={member.street}
                        onChange={(event) => updateMemberField(member.uid, { street: event.target.value })}
                      />
                    </label>
                    <label>
                      <span>Número</span>
                      <input
                        value={member.houseNumber}
                        onChange={(event) => updateMemberField(member.uid, { houseNumber: event.target.value })}
                      />
                    </label>
                    <label>
                      <span>Nível</span>
                      <div className="admin-segmented-control" role="group" aria-label={`Definir nível de ${member.name}`}>
                        {([
                          ["member", "Membro"],
                          ["direction", "Direção"],
                          ["administration", "Administração"],
                        ] as const).map(([value, label]) => {
                          const isActive = member.accountLevel === value;

                          return (
                            <button
                              key={value}
                              type="button"
                              className={`admin-segment-btn${isActive ? " is-active" : ""}`}
                              aria-pressed={isActive}
                              onClick={() => updateMemberField(member.uid, { accountLevel: value as AccessLevel })}
                            >
                              {label}
                            </button>
                          );
                        })}
                      </div>
                    </label>
                    <label>
                      <span>Cargo</span>
                      <div className="admin-role-grid" role="group" aria-label={`Definir cargo de ${member.name}`}>
                        {allowedRoleOptions.map((option) => (
                          <button
                            key={option || "sem-cargo"}
                            type="button"
                            className={`admin-role-chip${(member.leadershipRole || "") === option ? " is-active" : ""}`}
                            aria-pressed={(member.leadershipRole || "") === option}
                            onClick={() =>
                              updateMemberField(member.uid, {
                                leadershipRole: option,
                              })
                            }
                          >
                            {option || "Sem cargo"}
                          </button>
                        ))}
                      </div>
                    </label>
                    <label>
                      <span>Gênero</span>
                      <input
                        value={member.gender}
                        onChange={(event) => updateMemberField(member.uid, { gender: event.target.value })}
                      />
                    </label>
                    <label>
                      <span>Timbre</span>
                      <input
                        value={member.vocalRange}
                        onChange={(event) => updateMemberField(member.uid, { vocalRange: event.target.value })}
                      />
                    </label>
                    <label className="admin-form-grid-span">
                      <span>Disponibilidade</span>
                      <input
                        value={member.availability}
                        onChange={(event) => updateMemberField(member.uid, { availability: event.target.value })}
                      />
                    </label>
                  </div>

                  <div className="admin-permission-block">
                    <div className="admin-permission-header">
                      <p>Permissões ativas</p>
                      <button
                        type="button"
                        className="admin-secondary-btn admin-ghost-btn"
                        onClick={() => resetPermissionsToDefault(member.uid)}
                      >
                        Restaurar padrão
                      </button>
                    </div>
                    <div className="admin-permission-grid">
                      {permissionPool.map((permission) => (
                        <button
                          key={permission}
                          type="button"
                          className={`admin-permission-item${member.permissions.includes(permission) ? " is-active" : ""}`}
                          aria-pressed={member.permissions.includes(permission)}
                          onClick={() => togglePermission(member.uid, permission)}
                        >
                          <span className="admin-permission-toggle" aria-hidden="true" />
                          <span>{permission}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
import {
  CalendarDays,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "Fluxo mais inteligente",
    text: "Login, cadastro em etapas e home separados em telas que podem evoluir sem acoplamento.",
  },
  {
    icon: Users,
    title: "Gestão da equipe",
    text: "Visualize membros, disponibilidade e próximos compromissos em um só lugar.",
  },
  {
    icon: CalendarDays,
    title: "Agenda organizada",
    text: "Ensaios, passagem de som e alinhamentos ficam visíveis com prioridade real.",
  },
  {
    icon: HeartHandshake,
    title: "Central de ajuda",
    text: "Pedidos internos, apoio espiritual e comunicação do ministério com mais contexto.",
  },
];

const trustSignals = [
  "Login isolado",
  "Cadastro multi-step",
  "Home pronta para crescer",
];

export function BrandShowcase() {
  return (
    <section className="glass-panel relative overflow-hidden p-6 sm:p-8 lg:min-h-[calc(100vh-4rem)] lg:p-10">
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(240,196,106,0.22),transparent_70%)]" />
      <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(86,212,199,0.16),transparent_70%)] blur-2xl" />

      <div className="relative flex h-full flex-col justify-between gap-10">
        <div className="space-y-8">
          <div className="space-y-5">
            <span className="eyebrow">Vocal Salvos por Cristo</span>
            <div className="space-y-4">
              <p className="font-display text-4xl leading-tight font-semibold text-white sm:text-5xl">
                A antiga entrada única virou uma
                <span className="text-gradient"> estrutura real de páginas</span>.
              </p>
              <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Agora o projeto tem fluxo separado para autenticação e uma home
                dedicada, com base mais limpa para rotas e integrações futuras.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {trustSignals.map((signal) => (
              <span
                key={signal}
                className="float-chip rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-slate-100"
              >
                {signal}
              </span>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="soft-panel rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/8 p-3 text-[#f0c46a]">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="soft-panel rounded-[28px] p-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex rounded-full bg-emerald-400/12 p-2 text-emerald-300">
              <ShieldCheck size={18} />
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-white">
                Base pronta para evolução
              </p>
              <p className="text-sm text-slate-300">
                React, Vite e Tailwind organizados com páginas e estilos separados.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-extrabold text-white">3 telas</p>
              <p className="mt-1 text-sm text-slate-400">Login, cadastro e home</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">3 etapas</p>
              <p className="mt-1 text-sm text-slate-400">Cadastro validado e guiado</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">1 base</p>
              <p className="mt-1 text-sm text-slate-400">Pronta para rotas reais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
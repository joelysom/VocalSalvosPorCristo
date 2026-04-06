export function RegisterStepPill({ index, active, done, title }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3">
      <div
        className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
          active
            ? "bg-[#f0c46a] text-slate-950"
            : done
              ? "bg-emerald-400/15 text-emerald-200"
              : "bg-white/6 text-slate-300"
        }`}
      >
        {index + 1}
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
          Etapa {index + 1}
        </p>
        <p className="text-sm font-semibold text-slate-100">{title}</p>
      </div>
    </div>
  );
}
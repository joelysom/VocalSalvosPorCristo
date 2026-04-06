export function AuthField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  icon: Icon,
  error,
  options,
}) {
  const baseClasses =
    "mt-2 w-full rounded-2xl border bg-slate-950/40 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#f0c46a] focus:ring-4 focus:ring-[#f0c46a]/10";
  const borderClass = error ? "border-rose-400/70" : "border-white/10";

  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-200">{label}</span>
      <div className="relative">
        {Icon ? (
          <span className="pointer-events-none absolute left-4 top-[1.15rem] text-slate-400">
            <Icon size={16} />
          </span>
        ) : null}

        {options ? (
          <select
            name={name}
            value={value}
            onChange={onChange}
            className={`${baseClasses} ${borderClass} ${Icon ? "pl-11" : ""}`}
          >
            <option value="">Selecione</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${baseClasses} ${borderClass} ${Icon ? "pl-11" : ""}`}
          />
        )}
      </div>
      {error ? <p className="mt-2 text-xs text-rose-300">{error}</p> : null}
    </label>
  );
}
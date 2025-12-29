export function SectionHeader({ title, subtitle, actionLabel }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">{title}</h2>
        {subtitle && <p className="mt-1 text-xs text-slate-500 sm:text-sm">{subtitle}</p>}
      </div>
      {actionLabel && (
        <button className="text-xs font-medium text-sky-700 hover:text-sky-800 sm:text-sm">
          {actionLabel} →
        </button>
      )}
    </div>
  )
}



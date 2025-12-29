import { cn } from '../../lib/utils'

const variantsMap = {
  default: 'bg-sky-100 text-sky-700',
  outline: 'border border-slate-200 text-slate-700',
}

export function Badge({ className = '', children, variant = 'default' }) {
  const variantClass = variantsMap[variant] ?? variantsMap.default

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold',
        variantClass,
        className,
      )}
    >
      {children}
    </span>
  )
}



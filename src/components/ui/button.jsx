import { cn } from '../../lib/utils'

export function Button({ variant = 'default', size = 'md', className = '', children, ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 disabled:opacity-60 disabled:cursor-not-allowed'
  const variants = {
    default: 'bg-sky-600 text-white hover:bg-sky-700',
    outline: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-100',
    ghost: 'text-slate-700 hover:bg-slate-100',
    secondary: 'bg-slate-900 text-white hover:bg-black',
  }
  const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-6 text-base',
  }

  return (
    <button
      className={cn(base, variants[variant] ?? variants.default, sizes[size] ?? sizes.md, className)}
      {...props}
    >
      {children}
    </button>
  )
}



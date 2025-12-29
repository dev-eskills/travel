import { cn } from '../../lib/utils'

export function Card({ className = '', children }) {
  return (
    <div className={cn('overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm', className)}>
      {children}
    </div>
  )
}

export function CardMedia({ src, alt }) {
  return <img src={src} alt={alt} className="h-44 w-full object-cover" />
}

export function CardBody({ className = '', children }) {
  return <div className={cn('space-y-2 p-4', className)}>{children}</div>
}



export function Avatar({ src, alt }) {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-200 text-xs font-semibold text-slate-700">
      {src ? <img src={src} alt={alt} className="h-full w-full object-cover" /> : alt?.charAt(0) ?? 'T'}
    </span>
  )
}



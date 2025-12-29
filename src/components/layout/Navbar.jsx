import { Button } from '../ui/button'

export function Navbar({ onLoginClick, onSignupClick }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-0">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600 text-lg font-bold text-white">
            T
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight text-slate-900">Travel</span>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <button className="hover:text-sky-600">Inspiration</button>
          <button className="hover:text-sky-600">Trips</button>
          <button className="hover:text-sky-600">Hotels</button>
          <button className="hover:text-sky-600">Weekend Getaways</button>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="hidden md:inline-flex"
            onClick={onLoginClick}
          >
            Log in
          </Button>
          <Button type="button" variant="secondary" size="sm" onClick={onSignupClick}>
            Sign up
          </Button>
        </div>
      </div>
    </header>
  )
}


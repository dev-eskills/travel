import { Button } from '../ui/button'
import { Input } from '../ui/input'

export function LoginPage({ onBackToHome, onGoToSignup }) {
  function handleSubmit(event) {
    event.preventDefault()
    // You can add real auth logic here later
  }

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-8">
      <div className="mb-6">
        <button
          type="button"
          onClick={onBackToHome}
          className="text-xs font-medium text-sky-700 hover:text-sky-800"
        >
          ← Back to home
        </button>
      </div>

      <div className="mb-6 space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Log in to TripClone</h1>
        <p className="text-sm text-slate-500">
          Access your saved trips, itineraries and travel plans.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">Email</label>
          <Input type="email" placeholder="you@example.com" required />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">Password</label>
          <Input type="password" placeholder="••••••••" required />
        </div>

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-slate-600">
            <input type="checkbox" className="h-3 w-3 rounded border-slate-300" />
            Remember me
          </label>
          <button type="button" className="font-medium text-sky-700 hover:text-sky-800">
            Forgot password?
          </button>
        </div>

        <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700">
          Log in
        </Button>

        <p className="pt-1 text-center text-xs text-slate-500">
          Don&apos;t have an account?{' '}
          <button
            type="button"
            onClick={onGoToSignup}
            className="font-medium text-sky-700 hover:text-sky-800"
          >
            Sign up
          </button>
        </p>
      </form>
    </section>
  )
}




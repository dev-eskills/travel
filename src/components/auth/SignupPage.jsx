import { Button } from '../ui/button'
import { Input } from '../ui/input'

export function SignupPage({ onBackToHome, onGoToLogin }) {
  function handleSubmit(event) {
    event.preventDefault()
    // You can add real signup logic here later
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
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Create your TripClone account</h1>
        <p className="text-sm text-slate-500">
          Save trips, share stories and get personalised recommendations.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">Full name</label>
          <Input type="text" placeholder="Your name" required />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">Email</label>
          <Input type="email" placeholder="you@example.com" required />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-slate-700">Password</label>
          <Input type="password" placeholder="Create a password" required />
        </div>

        <p className="text-[11px] text-slate-500">
          By creating an account, you agree to our Terms of Service and Privacy Policy.
        </p>

        <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700">
          Sign up
        </Button>

        <p className="pt-1 text-center text-xs text-slate-500">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onGoToLogin}
            className="font-medium text-sky-700 hover:text-sky-800"
          >
            Log in
          </button>
        </p>
      </form>
    </section>
  )
}




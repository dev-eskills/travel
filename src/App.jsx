import { useState } from 'react'
import './index.css'
import { Navbar } from './components/layout/Navbar'
import { HeroSection } from './components/sections/HeroSection'
import { TrendingDestinationsSection } from './components/sections/TrendingDestinationsSection'
import { CollectionsSection } from './components/sections/CollectionsSection'
import { StoriesSection } from './components/sections/StoriesSection'
import { LoginPage } from './components/auth/LoginPage'
import { SignupPage } from './components/auth/SignupPage'

function App() {
  const [view, setView] = useState('home') // 'home' | 'login' | 'signup'

  const showHome = () => setView('home')
  const showLogin = () => setView('login')
  const showSignup = () => setView('signup')

  const isAuthView = view === 'login' || view === 'signup'

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onLoginClick={showLogin} onSignupClick={showSignup} />

      <main>
        {view === 'home' && (
          <>
            <HeroSection />
            <TrendingDestinationsSection />
            <CollectionsSection />
            <StoriesSection />
          </>
        )}
        {view === 'login' && (
          <LoginPage
            onBackToHome={showHome}
            onGoToSignup={showSignup}
          />
        )}
        {view === 'signup' && (
          <SignupPage
            onBackToHome={showHome}
            onGoToLogin={showLogin}
          />
        )}
      </main>

      {!isAuthView && (
        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500 sm:flex-row lg:px-0">
            <span>© {new Date().getFullYear()} TripClone. Built as a frontend template inspired by Tripoto.</span>
            <div className="flex gap-3">
              <button className="hover:text-sky-700">About</button>
              <button className="hover:text-sky-700">Contact</button>
              <button className="hover:text-sky-700">Terms</button>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}

export default App

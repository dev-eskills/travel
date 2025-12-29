import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export function HeroSection() {
  return (
    <section className="relative border-b border-slate-200 bg-slate-950 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg"
          alt="Mountain landscape"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-900/10" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 lg:px-0 lg:py-16">
        <div className="max-w-xl space-y-4">
          <Badge className="bg-black/40 text-sky-100 backdrop-blur">Discover. Plan. Book.</Badge>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Everything you need to plan your next trip.
          </h1>
          <p className="max-w-lg text-sm text-slate-100 sm:text-base">
            Explore curated itineraries, read real travel experiences, and book stays or activities—all in one place.
          </p>
        </div>

        <div className="max-w-2xl rounded-2xl bg-white/95 p-3 shadow-xl shadow-black/40 backdrop-blur">
          <div className="mb-3 flex gap-2 rounded-xl bg-slate-100 p-1 text-xs font-medium text-slate-600 sm:text-sm">
            <button className="flex-1 rounded-lg bg-white px-3 py-1.5 text-slate-900 shadow-sm">
              Search Destinations
            </button>
            <button className="flex-1 rounded-lg px-3 py-1.5 hover:bg-white">Search Hotels</button>
            <button className="flex-1 rounded-lg px-3 py-1.5 hover:bg-white">Search Trips</button>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex-1 space-y-1.5">
              <label className="text-xs font-medium text-slate-700">Where do you want to go?</label>
              <div className="relative">
                <Input placeholder="Search for destination, city or activity" className="pr-10" />
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                  🔍
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 sm:max-w-[180px] sm:flex-none sm:flex-row">
              <Button className="w-full bg-sky-600 hover:bg-sky-700 sm:flex-1">Search</Button>
              <Button variant="outline" className="w-full sm:flex-1">
                I&apos;m flexible
              </Button>
            </div>
          </div>

          <p className="mt-3 text-[11px] text-slate-500">Popular: Manali, Bali, Europe, Kashmir, Maldives</p>
        </div>
      </div>
    </section>
  )
}



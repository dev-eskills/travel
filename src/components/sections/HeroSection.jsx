import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"

export function HeroSection() {
  // Autoplay plugin
  const plugin = React.useMemo(() => Autoplay({ delay: 5000, stopOnInteraction: false }), [])

  // Control search card animation
  const [showCard, setShowCard] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true)
    }, 1000) // Show after 1 second

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-slate-950 text-white group">
      {/* Full-Screen Carousel */}
      <Carousel plugins={[plugin]} opts={{ loop: true }} className="h-full w-full overflow-hidden group">
        <CarouselContent className="h-[85vh] ml-0">

          <CarouselItem className="p-0 overflow-hidden">
            <div className="h-full w-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg"
                alt="Snowy mountains"
                className="h-full w-full object-cover transition-transform duration-7000 ease-out group-hover:scale-110"
              />
            </div>
          </CarouselItem>

          <CarouselItem className="p-0 overflow-hidden">
            <div className="h-full w-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg"
                alt="Tropical beach"
                className="h-full w-full object-cover transition-transform duration-7000 ease-out group-hover:scale-110"
              />
            </div>
          </CarouselItem>

          <CarouselItem className="p-0 overflow-hidden">
            <div className="h-full w-full overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3581369/pexels-photo-3581369.jpeg"
                alt="Pink palace"
                className="h-full w-full object-cover transition-transform duration-7000 ease-out group-hover:scale-110"
              />
            </div>
          </CarouselItem>

          <CarouselItem className="p-0 overflow-hidden">
            <div className="h-full w-full overflow-hidden">
              <img
                src="https://images.prismic.io/travelfika/Z8Gk8Z7c43Q3gXjN_dubai-4044183.jpg?auto=format,compress"
                alt="Dubai"
                className="h-full w-full object-cover transition-transform duration-7000 ease-out group-hover:scale-110"
              />
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="left-8 bg-white/80 text-black opacity-0 group-hover:opacity-100 hover:bg-white" />
        <CarouselNext className="right-8 bg-white/80 text-black opacity-0 group-hover:opacity-100 hover:bg-white" />
      </Carousel>

      {/* Fixed gradient class name */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-end pb-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-2xl space-y-6">
            <Badge className="bg-white backdrop-blur-md border border-white/30">
              Discover. Plan. Book.
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Everything you need to plan your next trip.
            </h1>
            <p className="text-lg text-slate-200 sm:text-xl">
              Explore curated itineraries, read real travel experiences, and book stays or activities—all in one place.
            </p>
          </div>

          {/* Search Card with Slide-Up Animation */}
          <div
            className={`
              mt-12 max-w-3xl rounded-2xl bg-white/95 p-8 shadow-2xl backdrop-blur-md
              transition-all duration-1000 ease-out
              ${showCard
                ? "translate-y-0 opacity-100"
                : "translate-y-40 opacity-0"
              }
            `}
          >
            <div className="mb-6 flex flex-wrap gap-3">
              <button className="rounded-lg bg-sky-600 px-6 py-3 text-white font-medium shadow hover:bg-sky-700 transition">
                Search Destinations
              </button>
              <button className="rounded-lg bg-slate-200 px-6 py-3 text-slate-700 font-medium hover:bg-slate-300 transition">
                Search Hotels
              </button>
              <button className="rounded-lg bg-slate-200 px-6 py-3 text-slate-700 font-medium hover:bg-slate-300 transition">
                Search Trips
              </button>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Where do you want to go?
                </label>
                <div className="relative">
                  <Input
                    placeholder="Search for destination, city or activity"
                    className="pr-12 text-slate-900"
                  />
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    🔍
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                  Search
                </Button>
                <Button size="lg" variant="outline" className="border-slate-300">
                  I'm flexible
                </Button>
              </div>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Popular: Riyadh, Jeddah, AlUla, Madain Saleh, Edge of the World, Red Sea
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

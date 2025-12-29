import { SectionHeader } from './SectionHeader'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { Avatar } from '../ui/avatar'
import { travelStories } from '../../data/homepage'

export function StoriesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 lg:px-0">
      <SectionHeader
        title="Real stories from real travellers"
        subtitle="Get inspired by detailed itineraries, budgets and experiences."
        actionLabel="View all stories"
      />

      <div className="grid gap-4 md:grid-cols-[2fr,1.5fr]">
        <Card className="relative overflow-hidden bg-slate-950 text-white">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR80aBpriRMPl0QZOMVhXxqTfl9VGQlHmnQA&s"
            alt="Traveller camping under the stars"
            className="absolute inset-0 h-full w-full object-fit opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/10" />
          <div className="relative flex h-full flex-col justify-between p-5">
            <div className="space-y-2">
              <Badge className="bg-sky-500/90 text-sky-50">Editor&apos;s pick</Badge>
              <h3 className="text-lg font-semibold leading-snug">
                Backpacking across Himachal for 10 days with just a rucksack.
              </h3>
              <p className="text-xs text-slate-100">
                A complete guide to buses, stays, food and offbeat villages you can cover on a budget trip.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-200">
              <Avatar alt="A" />
              <span className="font-medium">Anonymous Nomad</span>
              <span className="h-1 w-1 rounded-full bg-slate-400" />
              <span>32.8k views</span>
            </div>
          </div>
        </Card>

        <div className="space-y-3">
          {travelStories.map((story) => (
            <Card
              key={story.title}
              className="flex cursor-pointer items-center gap-3 border-slate-200 bg-white/80 hover:bg-white"
            >
              <div className="flex-1 space-y-1 p-3">
                <h3 className="line-clamp-2 text-sm font-semibold text-slate-900">{story.title}</h3>
                <p className="text-xs text-slate-500">
                  by <span className="font-medium text-slate-700">{story.author}</span>
                </p>
                <p className="text-[11px] text-slate-400">{story.views}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}



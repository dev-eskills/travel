import { SectionHeader } from './SectionHeader'
import { Card, CardBody, CardMedia } from '../ui/card'
import { Badge } from '../ui/badge'
import { trendingDestinations } from '../../data/homepage'

export function TrendingDestinationsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 lg:px-0">
      <SectionHeader
        title="Trending destinations this season"
        subtitle="Handpicked places loved by travellers right now."
        actionLabel="View all destinations"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trendingDestinations.map((place) => (
          <Card key={place.name} className="group cursor-pointer transition hover:-translate-y-1 hover:shadow-md">
            <div className="relative">
              <CardMedia src={place.image} alt={place.name} />
              <span className="absolute left-3 top-3">
                <Badge className="bg-red-600 text-black backdrop-blur">{place.tag}</Badge>
              </span>
            </div>
            <CardBody>
              <h3 className="text-sm font-semibold text-slate-900">{place.name}</h3>
              <p className="line-clamp-2 text-xs text-slate-500">{place.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  )
}



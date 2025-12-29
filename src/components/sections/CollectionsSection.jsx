import { SectionHeader } from './SectionHeader'
import { Card, CardBody } from '../ui/card'
import { Badge } from '../ui/badge'
import { curatedCollections } from '../../data/homepage'

export function CollectionsSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/80">
      <div className="mx-auto max-w-6xl px-4 py-8 lg:px-0">
        <SectionHeader
          title="Curated trip collections"
          subtitle="Browse ready-made itineraries created by travel experts and real travellers."
          actionLabel="View all collections"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {curatedCollections.map((collection) => (
            <Card
              key={collection.title}
              className="flex cursor-pointer flex-col justify-between bg-gradient-to-br from-white to-slate-50 hover:shadow-md"
            >
              <CardBody className="space-y-3">
                <Badge variant="outline" className="text-[11px]">
                  Featured Collection
                </Badge>
                <h3 className="text-sm font-semibold text-slate-900">{collection.title}</h3>
                <p className="text-xs text-slate-500">{collection.trips}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}



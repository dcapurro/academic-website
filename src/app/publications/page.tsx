import { getPublications } from '@/utils/publications'
import { PublicationCard } from '@/components/PublicationCard'

export default async function Publications() {
  const publications = await getPublications()
  
  // Group publications by year
  const publicationsByYear = publications.reduce((acc, pub) => {
    const year = pub.year || 'Undated'
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(pub)
    return acc
  }, {} as Record<string, typeof publications>)

  // Sort years in descending order
  const sortedYears = Object.keys(publicationsByYear)
    .sort((a, b) => Number(b) - Number(a))

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Publications</h1>
      
      <div className="space-y-12">
        {sortedYears.map(year => (
          <section key={year}>
            <h2 className="text-2xl font-bold mb-6">{year}</h2>
            <div className="space-y-6">
              {publicationsByYear[year].map((publication, index) => (
                <PublicationCard
                  key={`${year}-${index}`}
                  publication={publication}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

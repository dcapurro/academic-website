import { Publication } from '@/utils/publications'

interface PublicationCardProps {
  publication: Publication
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <div className="border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
      <p className="text-sm text-gray-400 mb-2">{publication.year}</p>
      <h3 className="text-xl font-semibold mb-2 text-gray-100">
        {publication.title}
      </h3>
      <p className="text-gray-400 mb-4">
        {publication.authors.join(', ')}
        {publication.journal && (
          <>
            <br />
            <span className="italic">{publication.journal}</span>
          </>
        )}
      </p>
      <div className="flex gap-4">
        {publication.doi && (
          <a
            href={`https://doi.org/${publication.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            DOI
          </a>
        )}
        {publication.url && (
          <a
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            Link
          </a>
        )}
      </div>
    </div>
  )
}

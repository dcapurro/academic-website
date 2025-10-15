import { Cite } from '@citation-js/core'
import '@citation-js/plugin-bibtex'
import fs from 'fs'
import path from 'path'

export interface Publication {
  title: string
  authors: string[]
  year: string
  journal?: string
  doi?: string
  url?: string
  type: string
  venue?: string
  abstract?: string
}

export async function getPublications(): Promise<Publication[]> {
  const bibPath = path.join(process.cwd(), 'data', 'publications.bib')
  const bibContent = fs.readFileSync(bibPath, 'utf-8')
  
  const cite = await Cite.async(bibContent)
  const data = cite.data

  return data.map((entry: CitationData) => ({
    title: entry.title,
    authors: entry.author?.map((author) => 
      `${author.given} ${author.family}`
    ) || [],
    year: entry.issued?.['date-parts']?.[0]?.[0]?.toString() || '',
    journal: entry['container-title'] || entry.journal || entry.publisher || '',
    doi: entry.DOI,
    url: entry.URL,
    type: entry.type,
    venue: entry.publisher,
    abstract: entry.abstract
  }))
}

interface CitationData {
  title: string;
  author?: Array<{
    given: string;
    family: string;
  }>;
  issued?: {
    'date-parts': Array<Array<number>>;
  };
  'container-title'?: string;
  journal?: string;
  publisher?: string;
  DOI?: string;
  URL?: string;
  type: string;
  abstract?: string;
}

declare module '@citation-js/core' {
  export class Cite {
    static async(input: string): Promise<Cite>;
    data: CitationData[];
  }
}

declare module '@citation-js/plugin-bibtex' {}

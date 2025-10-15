export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">Daniel Capurro</h1>
        <h2 className="text-2xl text-gray-300 mb-8">Associate Professor in Clinical AI<br/>University of Melbourne</h2>
        <p className="text-lg text-gray-400 mb-6">
          Welcome to my academic website. I specialize in Clinical AI, focusing on the intersection of artificial intelligence and healthcare.
        </p>
        <div className="flex gap-4">
          <a 
            href="/documents/cv.pdf" 
            className="inline-flex items-center px-4 py-2 border border-blue-500 text-blue-400 rounded-md hover:bg-blue-500 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Research Focus</h2>
        <p className="text-gray-400 mb-4">
          My research focuses on developing and implementing AI solutions in clinical settings, with particular emphasis on:
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
          <li>Clinical Decision Support Systems</li>
          <li>Machine Learning in Healthcare</li>
          <li>AI Ethics in Medicine</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 rounded-lg p-4">
            <h3 className="font-bold text-blue-400">Latest Publication</h3>
            <p className="text-gray-400">Check out my latest work in Clinical AI applications.</p>
          </div>
          <div className="border border-gray-700 rounded-lg p-4">
            <h3 className="font-bold text-blue-400">Current Project</h3>
            <p className="text-gray-400">Developing new AI models for clinical decision support.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

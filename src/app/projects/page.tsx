export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      <div className="grid gap-8">
        <div className="border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Clinical AI Project Title</h3>
          <p className="text-gray-400 mb-4">
            Description of the project and its impact on healthcare...
          </p>
          <div className="flex gap-4">
            <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
              Machine Learning
            </span>
            <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
              Healthcare
            </span>
          </div>
        </div>

        {/* Add more project cards here */}
      </div>
    </div>
  );
}

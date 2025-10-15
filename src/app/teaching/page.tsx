export default function Teaching() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Teaching</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6">Current Courses</h2>
          <div className="space-y-6">
            <div className="border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Course Title</h3>
              <p className="text-gray-400 mb-4">
                Brief description of the course content and objectives...
              </p>
              <div className="text-sm text-gray-500">
                Semester 1, 2025
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Past Courses</h2>
          <div className="space-y-6">
            {/* Add past courses here */}
          </div>
        </section>
      </div>
    </div>
  );
}

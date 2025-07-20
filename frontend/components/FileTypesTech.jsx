function FileTypesTech() {
  return (
    <section className="bg-gray-50 py-20 min-h-[600px] flex flex-col justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Supported File Types & Print Tech</h2>
        <p className="text-gray-700 mb-8">
          We support a wide range of file formats, including{" "}
          <span className="text-blue-600 font-semibold">STL</span>,{" "}
          <span className="text-blue-600 font-semibold">OBJ</span>,{" "}
          <span className="text-blue-600 font-semibold">3MF</span>, and more.<br />
          Our printing technologies include{" "}
          <span className="text-blue-600 font-semibold">FDM</span>,{" "}
          <span className="text-blue-600 font-semibold">SLA</span>,{" "}
          <span className="text-blue-600 font-semibold">SLS</span>, and{" "}
          <span className="text-blue-600 font-semibold">MJF</span>, allowing us to handle diverse project requirements.
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <span className="bg-white px-4 py-2 rounded-lg font-semibold text-gray-700 shadow hover:bg-blue-50 transition">STL</span>
          <span className="bg-white px-4 py-2 rounded-lg font-semibold text-gray-700 shadow hover:bg-blue-50 transition">OBJ</span>
          <span className="bg-white px-4 py-2 rounded-lg font-semibold text-gray-700 shadow hover:bg-blue-50 transition">3MF</span>
        </div>
        <div className="flex justify-center gap-6 mt-2">
          <a href="#" className="bg-blue-50 text-blue-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition">FDM</a>
          <a href="#" className="bg-blue-50 text-blue-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition">SLA</a>
          <a href="#" className="bg-blue-50 text-blue-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition">SLS</a>
          <a href="#" className="bg-blue-50 text-blue-700 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition">MJF</a>
        </div>
      </div>
      {/* Call to action section */}
      <div className="mt-16 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-5">Ready to print your Design?</h3>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Upload Model
          </a>
        </div>
      </div>
    </section>
  );
}

export default FileTypesTech;
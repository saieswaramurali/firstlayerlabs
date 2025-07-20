function Materials() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 min-h-[400px] flex flex-col justify-center">
    <section className="bg-gray-50 py-20 min-h-[400px] flex flex-col justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Available Materials</h2>
        <p className="text-gray-700 mb-10 text-lg">
          Select from a wide range of materials for your <span className="font-bold text-blue-600">3D prints</span>. Each material offers unique properties for your project.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center mb-4">
            <span className="font-semibold text-lg text-gray-900 mb-2 text-center">PLA</span>
            <span className="text-gray-600 text-base text-center">Eco-friendly, easy to print</span>
          </li>
          <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center mb-4">
            <span className="font-semibold text-lg text-gray-900 mb-2 text-center">ABS</span>
            <span className="text-gray-600 text-base text-center">Strong, heat-resistant</span>
          </li>
          <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center mb-4">
            <span className="font-semibold text-lg text-gray-900 mb-2 text-center">PETG</span>
            <span className="text-gray-600 text-base text-center">Flexible, durable</span>
          </li>
          <li className="bg-white rounded-xl shadow p-6 flex flex-col items-center mb-4">
            <span className="font-semibold text-lg text-gray-900 mb-2 text-center">TPU</span>
            <span className="text-gray-600 text-base text-center">Rubber-like, flexible</span>
          </li>
        </ul>
        <div className="bg-white rounded-xl shadow p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Why Material Choice Matters</h3>
          <ul className="space-y-4 text-left text-gray-700 text-base">
            <li>
              <span className="font-bold text-gray-900">Strength & Durability:</span> Choose ABS or PETG for functional parts that need to withstand stress or heat.
            </li>
            <li>
              <span className="font-bold text-gray-900">Flexibility:</span> TPU is perfect for parts that need to bend, stretch, or absorb impact.
            </li>
            <li>
              <span className="font-bold text-gray-900">Eco-Friendly:</span> PLA is made from renewable resources and is biodegradable, ideal for prototypes and educational projects.
            </li>
            <li>
              <span className="font-bold text-gray-900">Surface Finish:</span> PETG and PLA offer smooth finishes, great for visual models and presentation pieces.
            </li>
            <li>
              <span className="font-bold text-gray-900">Ease of Printing:</span> PLA is the easiest to print, making it suitable for beginners and quick jobs.
            </li>
          </ul>
          <p className="mt-6 text-gray-600 text-sm text-center">
            Need help choosing? <span className="font-bold text-blue-600">Contact our team</span> for expert advice on the best material for your project.
          </p>
        </div>
      </div>
    </section>
    </section>
  );
}

export default Materials;
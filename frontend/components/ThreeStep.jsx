function ThreeStep() {
  return (
    <section className="bg-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Get Your Prints in Just <span className="text-blue-600">Three Easy Steps</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-8">
        {/* Step 1 */}
        <div className="flex flex-col items-center w-full md:w-72 min-h-[300px] bg-gray-50 rounded-xl p-6 shadow transition-transform hover:-translate-y-2 hover:shadow-lg cursor-pointer">
          <div className="bg-blue-500 rounded-full w-14 h-14 flex items-center justify-center mb-3">
            {/* Upload icon */}
            <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 17V7M7 12l5-5 5 5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="4" y="17" width="16" height="2" rx="1" fill="white"/>
            </svg>
          </div>
          <h3 className="font-semibold text-lg text-center mb-1">Upload Your Design</h3>
          <p className="text-gray-600 text-center text-sm">
            Upload your 3D model file in STL, OBJ, or other supported formats.
          </p>
        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-center w-full md:w-72 min-h-[300px] bg-gray-50 rounded-xl p-6 shadow transition-transform hover:-translate-y-2 hover:shadow-lg cursor-pointer">
          <div className="bg-blue-500 rounded-full w-14 h-14 flex items-center justify-center mb-3">
            {/* Material icon */}
            <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 19V5M9 8l3-3 3 3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="19" r="2" fill="white"/>
            </svg>
          </div>
          <h3 className="font-semibold text-lg text-center mb-1">Choose Material & Print Parameters</h3>
          <p className="text-gray-600 text-center text-sm">
            Select from a variety of materials and finishes, and set print parameters like infill, layer height, supports, and more to suit your project needs.
          </p>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center w-full md:w-72 min-h-[300px] bg-gray-50 rounded-xl p-6 shadow transition-transform hover:-translate-y-2 hover:shadow-lg cursor-pointer">
          <div className="bg-blue-500 rounded-full w-14 h-14 flex items-center justify-center mb-3">
            {/* Delivery icon */}
            <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 8v8M8 12l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="20" r="2" fill="white"/>
            </svg>
          </div>
          <h3 className="font-semibold text-lg text-center mb-1">Receive Your Print</h3>
          <p className="text-gray-600 text-center text-sm">
            Your 3D printed parts will be delivered to your doorstep.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ThreeStep;
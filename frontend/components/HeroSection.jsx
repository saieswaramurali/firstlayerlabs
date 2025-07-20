function HeroSection() {
  return (
    <section className="relative flex justify-center items-center w-full py-12">
      {/* Background Image fills a larger center card area */}
      <div className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden relative" style={{ minHeight: "440px" }}>
        <img
          src="/hero4.png"
          alt="3D Printer"
          className="w-full h-full object-cover blur-[4px]"
          style={{ minHeight: "440px", maxHeight: "60vh" }}
        />
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-12 py-12 z-10 h-full">
          <h1 className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-center drop-shadow">
            Upload. Print. Get it Delivered.
          </h1>
          <p className="text-white text-sm xs:text-base sm:text-lg md:text-xl mb-8 text-center max-w-2xl drop-shadow">
            Fast, affordable 3D printing for innovators in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <a
              href="#"
              className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow transition-colors hover:bg-blue-700 hover:text-white text-center w-full sm:w-auto"
            >
              Upload Your File
            </a>
            <a
              href="#"
              className="bg-white text-gray-900 font-semibold px-5 py-2 rounded-lg shadow transition-colors hover:bg-black hover:text-white text-center w-full sm:w-auto"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
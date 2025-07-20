function AboutUs() {
  return (
    <section className="bg-gray-50 py-24 min-h-[400px] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left: Main Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 mt-2 text-blue-700">About FirstLayerLabs</h2>
            <p className="text-gray-700 text-lg mb-10">
              <span className="font-bold text-gray-900">Accessible, fast, and affordable 3D printing</span> for everyone in India.<br />
              Our team of <span className="font-bold text-blue-600">engineers, designers, and makers</span> is passionate about turning your ideas into reality.
            </p>
            <ul className="space-y-6 mt-10">
              <li className="flex items-start gap-4">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">1</span>
                <span className="text-gray-900 font-semibold">Customer First:</span>
                <span className="text-gray-700">Your ideas and satisfaction drive us.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">2</span>
                <span className="text-gray-900 font-semibold">Passionate Team:</span>
                <span className="text-gray-700">Engineers & makers ready to help.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">3</span>
                <span className="text-gray-900 font-semibold">Quality Focus:</span>
                <span className="text-gray-700">Modern tech, reliable results.</span>
              </li>
            </ul>
          </div>
          {/* Right: Card */}
          <div className="flex-1 mt-10 md:mt-0">
            <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col justify-center items-center">
              <h3 className="text-xl font-bold text-blue-700 mb-6 mt-2">Why Choose Us?</h3>
              <p className="text-gray-700 text-base font-medium mb-6 text-center">
                We offer a <span className="font-bold text-blue-700">seamless online experience</span>, <span className="font-bold text-gray-900">high-quality prints</span>, and expert support for students, startups, and businesses.
              </p>
              <div className="flex flex-col gap-4 text-center mb-4">
                <span className="font-bold text-blue-600">Prototype</span>
                <span className="font-bold text-blue-600">Custom Part</span>
                <span className="font-bold text-blue-600">Creative Project</span>
              </div>
              <p className="text-gray-600 mt-6 text-sm text-center">
                We’re here to help you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
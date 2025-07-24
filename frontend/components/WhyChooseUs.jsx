function WhyChooseUs() {
  return (
    <section className="bg-white py-12" >
      <h2 className="text-3xl font-bold text-center mb-2">Why Choose Us</h2>
      <p className="text-blue-600 text-center mb-8">
        We are committed to providing the best 3D printing experience in India.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-8">
        {/* Fast Delivery */}
        <div className="flex flex-col items-center max-w-xs bg-gray-50 rounded-xl p-6 shadow transition-transform hover:-translate-y-2 hover:shadow-lg cursor-pointer">
          <div className="bg-blue-500 rounded-full w-14 h-14 flex items-center justify-center mb-3">
            {/* Delivery icon */}
            <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 8v8M8 12l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="font-semibold text-lg text-center mb-1">Fast Delivery</h3>
          <p className="text-gray-600 text-center text-sm">
            Get your 3D prints delivered quickly, with options for expedited shipping.
          </p>
        </div>
        {/* High Quality */}
        <div className="flex flex-col items-center max-w-xs bg-gray-50 rounded-xl p-6 shadow transition-transform hover:-translate-y-2 hover:shadow-lg cursor-pointer">
          <div className="bg-blue-500 rounded-full w-14 h-14 flex items-center justify-center mb-3">
            {/* Quality icon */}
            <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="font-semibold text-lg text-center mb-1">High Quality</h3>
          <p className="text-gray-600 text-center text-sm">
            We use state-of-the-art 3D printing technology to ensure precision and quality.
          </p>
        </div>
        {/* Affordable */}
        <div className="flex flex-col items-center max-w-xs bg-gray-50 rounded-xl p-6 shadow transition-transform hover:-translate-y-2 hover:shadow-lg cursor-pointer">
          <div className="bg-blue-500 rounded-full w-14 h-14 flex items-center justify-center mb-3">
            {/* Rupee icon */}
            <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              <text x="6" y="16" fontSize="12" fill="white">₹</text>
            </svg>
          </div>
          <h3 className="font-semibold text-lg text-center mb-1">Affordable</h3>
          <p className="text-gray-600 text-center text-sm">
            Competitive pricing to make 3D printing accessible to everyone.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
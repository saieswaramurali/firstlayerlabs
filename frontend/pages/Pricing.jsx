function Pricing() {
  return (
    
    <section className="bg-gray-50 py-20 min-h-[400px] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-blue-700">Our Pricing Plans</h2>
        <p className="text-gray-700 mb-14 text-lg">
          Find the perfect plan for your needs—whether you need just a few prints, are a student, or a growing startup. All plans include <span className="font-bold text-blue-600">fast turnaround</span>, <span className="font-bold">transparent pricing</span>, and <span className="font-bold">expert support</span>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Card 1: Few Prints */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-[2.5rem] shadow-2xl p-12 flex flex-col items-center border border-blue-100 hover:scale-105 transition-transform duration-200 min-h-[370px]">
            <span className="font-bold text-2xl text-blue-700 mb-4">Just a Few Prints</span>
            <p className="text-gray-600 text-base mb-6 text-center">
              Ideal for makers, hobbyists, or anyone needing a single prototype or a handful of custom parts.
            </p>
            <ul className="space-y-3 text-left text-gray-700 text-base mb-8">
              <li><span className="font-bold text-gray-900">Instant Quotes</span> for every upload</li>
              <li><span className="font-bold text-gray-900">No minimum order</span> required</li>
              <li><span className="font-bold text-gray-900">Express delivery</span> available</li>
            </ul>
            <span className="font-extrabold text-lg text-blue-900 bg-blue-100 px-6 py-3 rounded-full shadow mt-auto">
              Starting at ₹99/part
            </span>
          </div>
          {/* Card 2: Students */}
          <div className="bg-gradient-to-br from-blue-100 to-white rounded-[2.5rem] shadow-2xl p-12 flex flex-col items-center border border-blue-100 hover:scale-105 transition-transform duration-200 min-h-[370px]">
            <span className="font-bold text-2xl text-blue-700 mb-4">Student Special</span>
            <p className="text-gray-600 text-base mb-6 text-center">
              Perfect for students and academic projects. Get discounted rates and extra support for your ideas.
            </p>
            <ul className="space-y-3 text-left text-gray-700 text-base mb-8">
              <li><span className="font-bold text-gray-900">Student discounts</span> on all prints</li>
              <li><span className="font-bold text-gray-900">10% off</span> for verified students</li>
              <li><span className="font-bold text-gray-900">Flexible payment</span> options</li>
              <li><span className="font-bold text-gray-900">Project guidance</span> from our team</li>
            </ul>
            <span className="font-extrabold text-lg text-blue-900 bg-blue-100 px-6 py-3 rounded-full shadow mt-auto">
              Special rates + 10% student discount
            </span>
          </div>
          {/* Card 3: Startups */}
          <div className="bg-gradient-to-br from-blue-200 to-white rounded-[2.5rem] shadow-2xl p-12 flex flex-col items-center border border-blue-100 hover:scale-105 transition-transform duration-200 min-h-[370px]">
            <span className="font-bold text-2xl text-blue-700 mb-4">Startup Pricing</span>
            <p className="text-gray-600 text-base mb-6 text-center">
              Designed for startups and small businesses. Get affordable packages, bulk discounts, and dedicated support to help you scale.
            </p>
            <ul className="space-y-3 text-left text-gray-700 text-base mb-8">
              <li><span className="font-bold text-gray-900">Bulk discounts</span> for larger orders</li>
              <li><span className="font-bold text-gray-900">Dedicated support</span> for your team</li>
              <li><span className="font-bold text-gray-900">Flexible delivery</span> options</li>
            </ul>
            <span className="font-extrabold text-lg text-blue-900 bg-blue-100 px-6 py-3 rounded-full shadow mt-auto">
              <span className="block">Contact us directly for a custom quote</span>
            </span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Why Choose FirstLayerLabs?</h3>
          <ul className="space-y-4 text-left text-gray-700 text-base">
            <li>
              <span className="font-bold text-gray-900">Transparent Pricing:</span> No hidden fees, instant quotes, and clear breakdowns.
            </li>
            <li>
              <span className="font-bold text-gray-900">Fast Turnaround:</span> Express delivery available for urgent projects.
            </li>
            <li>
              <span className="font-bold text-gray-900">Expert Support:</span> Friendly help for students, makers, and businesses.
            </li>
            <li>
              <span className="font-bold text-gray-900">Bulk Discounts:</span> Save more when you print more.
            </li>
          </ul>
          <p className="mt-6 text-gray-600 text-base text-center font-semibold">
            Need a custom quote or have questions? <span className="font-bold text-blue-600">Contact our team</span> for personalized pricing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
function HowItWorks() {
  return (
     <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 min-h-[400px] flex flex-col justify-center">
   
    <section className="bg-gray-50 py-20 min-h-[400px] flex flex-col justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-700 mb-10 text-lg">
          Getting your <span className="font-bold text-blue-600">3D print</span> is <span className="font-bold">simple</span>, <span className="font-bold">fast</span>, and <span className="font-bold">fully online</span>. Here’s how <span className="font-bold text-blue-600">FirstLayerLabs</span> makes it easy for you:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <StepCard
            number={1}
            title="Upload Your Model"
            desc={<>
              <span className="font-bold text-blue-600">Upload</span> your 3D file (<span className="font-semibold">STL, OBJ, 3MF</span>, etc.) and <span className="font-bold">choose print parameters</span> like <span className="font-semibold">infill, material, color</span>, and more.
            </>}
          />
          <StepCard
            number={2}
            title="Get a Live Quote"
            desc={<>
              <span className="font-bold text-blue-600">Instant Quote</span> based on your choices. <span className="font-bold">No waiting</span>, <span className="font-bold">no hidden fees</span>.
            </>}
          />
          <StepCard
            number={3}
            title="Order & Pay Securely"
            desc={<>
              <span className="font-bold text-blue-600">Order</span> and <span className="font-bold">pay online</span> with confidence. Your details are always <span className="font-semibold">safe</span>.
            </>}
          />
          <StepCard
            number={4}
            title="We Print Your Design"
            desc={<>
              Our expert team <span className="font-bold text-blue-600">prints</span> your part with <span className="font-bold">precision</span> and <span className="font-bold">care</span>, using the latest technology.
            </>}
          />
        </div>
        {/* Step 5 centered below the grid */}
        <div className="flex justify-center mt-8">
          <StepCard
            number={5}
            title="Fast Delivery"
            desc={
              <>
                <span className="font-bold text-blue-600">Fast shipping</span> to your doorstep <span className="font-bold">anywhere in India</span>.
              </>
            }
          />
        </div>
        <div className="mt-10 text-gray-700 text-base bg-white rounded-xl shadow p-6 max-w-xl mx-auto">
          <span className="font-semibold text-blue-600">Tip:</span>{" "}
          <span className="font-bold">Customize every detail</span> for your print—layer height, infill, supports, material, and more. Just fill in the options when uploading!
        </div>
      </div>
    </section>
    </section>
  );
}

function StepCard({ number, title, desc }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center mb-4">
      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-3 shadow">
        {number}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-base text-center">{desc}</p>
    </div>
  );
}

export default HowItWorks;
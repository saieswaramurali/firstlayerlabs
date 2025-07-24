import React, { useState } from "react";

const ConfigurePrint = () => {
  const [material, setMaterial] = useState("PLA");
  const [infill, setInfill] = useState(20);
  const [layerHeight, setLayerHeight] = useState("0.2mm");
  const [supports, setSupports] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const estimate = 25.0;

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-gray-900">
      <div className="max-w-6xl mx-auto p-6">
        {/* Top Navigation */}
        <header className="flex justify-between items-center mb-6">
          <div className="text-2xl font-bold text-blue-600">3DPrintCo</div>
          <nav className="space-x-6 hidden md:block">
            <a href="#" className="hover:underline">Dashboard</a>
            <a href="#" className="hover:underline">Orders</a>
            <a href="#" className="hover:underline">Files</a>
            <a href="#" className="hover:underline">Help</a>
          </nav>
        </header>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
            <div className="text-sm text-gray-500 mb-2">3D Printing / FileName.stl / <span className="text-gray-900 font-medium">Configure</span></div>
            <h1 className="text-2xl font-semibold mb-2">Configure Your Print</h1>
            <p className="text-gray-600 mb-6">Choose your material, quality, and other settings to get an instant quote.</p>

            {/* Material */}
            <h2 className="font-semibold mb-2">Material</h2>
            <div className="flex gap-2 flex-wrap mb-6">
              {["PLA", "ABS", "PETG", "Nylon", "TPU"].map((mat) => (
                <button
                  key={mat}
                  onClick={() => setMaterial(mat)}
                  className={`px-4 py-2 rounded border ${material === mat ? "bg-blue-100 border-blue-500 text-blue-700" : "bg-white border-gray-300 hover:border-blue-300"}`}
                >
                  {mat}
                </button>
              ))}
            </div>

            {/* Infill */}
            <h2 className="font-semibold mb-2">Infill Percentage</h2>
            <div className="flex items-center mb-6">
              <input
                type="range"
                min="0"
                max="100"
                value={infill}
                onChange={(e) => setInfill(e.target.value)}
                className="w-full mr-4"
              />
              <span className="w-12 text-right">{infill}%</span>
            </div>

            {/* Layer Height */}
            <h2 className="font-semibold mb-2">Layer Height (Quality)</h2>
            <div className="flex gap-3 mb-6">
              {[
                { label: "0.1mm", note: "High" },
                { label: "0.2mm", note: "Standard" },
                { label: "0.3mm", note: "Draft" },
              ].map(({ label, note }) => (
                <button
                  key={label}
                  onClick={() => setLayerHeight(label)}
                  className={`px-4 py-3 rounded border text-sm ${
                    layerHeight === label
                      ? "bg-blue-100 border-blue-500 text-blue-700"
                      : "bg-white border-gray-300 hover:border-blue-300"
                  }`}
                >
                  <div className="font-medium">{label}</div>
                  <div className="text-xs text-gray-500">{note}</div>
                </button>
              ))}
            </div>

            {/* Supports */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="font-semibold">Supports</h2>
                <p className="text-sm text-gray-500">Enable if your model has overhangs.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={supports}
                  onChange={() => setSupports(!supports)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
              </label>
            </div>

            {/* Quantity */}
            <div className="mb-4">
              <h2 className="font-semibold mb-1">Quantity</h2>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-20 border border-gray-300 px-3 py-2 rounded"
              />
            </div>
          </div>

          {/* Quote Section */}
          <div className="w-full md:w-80 bg-white rounded-lg p-6 shadow-sm h-fit">
            <h2 className="text-lg font-semibold mb-4">Live Quote</h2>
            <div className="text-sm space-y-2 mb-6">
              <div className="flex justify-between">
                <span>Material</span>
                <span className="font-medium">{material}</span>
              </div>
              <div className="flex justify-between">
                <span>Infill</span>
                <span>{infill}%</span>
              </div>
              <div className="flex justify-between">
                <span>Layer Height</span>
                <span>{layerHeight}</span>
              </div>
              <div className="flex justify-between">
                <span>Supports</span>
                <span>{supports ? "Yes" : "No"}</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity</span>
                <span>{quantity}</span>
              </div>
            </div>
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Total Estimate</span>
              <span className="text-blue-600">${estimate.toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Next: Checkout →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurePrint;

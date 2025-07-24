import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white rounded-b-xl shadow mt-10 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Brand & Description */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-black w-6 h-6 rounded flex items-center justify-center">
              {/* Match Navbar logo color */}
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="4" width="16" height="10" rx="2" fill="white" />
                <rect x="2" y="4" width="16" height="10" rx="2" fill="#111827" fillOpacity="0.7" />
              </svg>
            </div>
            <span className="font-bold text-lg text-gray-900">FirstLayerLabs</span>
          </div>
          <p className="text-gray-600 text-sm max-w-xs">
            Your one-stop solution for high-quality 3D printing services in India.
          </p>
        </div>
        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Company</h4>
            <ul className="space-y-1">
              <li><Link to="/about-us" className="text-blue-600 hover:underline">About</Link></li>
              <li><Link to="/how-it-works" className="text-blue-600 hover:underline">How It Works</Link></li>
              <li><Link to="/pricing" className="text-blue-600 hover:underline">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
            <ul className="space-y-1">
              <li><Link to="/faq" className="text-blue-600 hover:underline">FAQ</Link></li>
              <li><Link to="/contact-us" className="text-blue-600 hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Follow Us</h4>
            <div className="flex gap-4 mt-1">
              <Link to="#" className="text-blue-600 hover:text-blue-800">
                {/* Twitter */}
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M8 19c11 0 13-9 13-13v-1a9 9 0 0 1-2.6.7A4.5 4.5 0 0 0 21 3.5a9 9 0 0 1-2.8 1.1A4.5 4.5 0 0 0 3 8.5a12.8 12.8 0 0 1-9-4.5s-4 9 5 13a9 9 0 0 1-5 1.5c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.1-.8A9 9 0 0 1 23 3z"/>
                </svg>
              </Link>
              <Link to="#" className="text-blue-600 hover:text-blue-800">
                {/* Instagram */}
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17" cy="7" r="1" />
                </svg>
              </Link>
              <Link to="#" className="text-blue-600 hover:text-blue-800">
                {/* Facebook */}
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 8h-2a2 2 0 0 0-2 2v2h-2v3h2v5h3v-5h2l1-3h-3v-2a1 1 0 0 1 1-1h2z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200" />
      <div className="text-center text-gray-500 text-sm pb-2">
        © 2025 FirstLayerLabs. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer ; 
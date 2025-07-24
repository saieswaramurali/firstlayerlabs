import {
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn
} from "react-icons/fa";

export default function ContactUs() {
  return (
    <footer className="w-full mt-20 px-6 md:px-20 py-10 bg-white/30 backdrop-blur-lg border-t border-white/20 rounded-t-3xl shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand & Address (Column 1) */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">FirstLayerLabs</h2>
          <p className="text-gray-700 text-sm max-w-sm">
            Where your 3D ideas come to life. Upload, print, and receive them at your doorstep.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <FaMapMarkerAlt className="text-primary" />
            <span>Chennai, Tamil Nadu, India</span>
          </div>
        </div>

        {/* Contact Info (Column 2) */}
        <div className="space-y-4 pt-2">
          <h3 className="font-semibold text-gray-900 text-lg">Contact</h3>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <FaEnvelope className="text-primary" />
            <span>support@firstlayerlabs.in</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <FaPhone className="text-primary" />
            <span>+91 98765 43210</span>
          </div>
        </div>

        {/* Social Links (Column 3) */}
        <div className="space-y-4 pt-2">
          <h3 className="font-semibold text-gray-900 text-lg">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://instagram.com/tprints.official" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-primary hover:text-gray-900 transition" size={20} />
            </a>
            <a href="https://facebook.com/tprints" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-primary hover:text-gray-900 transition" size={20} />
            </a>
            <a href="https://linkedin.com/company/tprints" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-primary hover:text-gray-900 transition" size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t pt-4 border-white/20">
        © {new Date().getFullYear()} FirstLayerLabs. All rights reserved.
      </div>
    </footer>
  );
}

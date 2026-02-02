import { Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Andes Foundation</h3>
            <p className="text-gray-400 mb-4">
              Empowering poor children through education & awareness.
            </p>
            <p className="text-sm text-gray-500">
              Reg. No. DL/2021/0291837
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition-colors">Our Programs</Link></li>
              <li><Link to="/get-involved" className="text-gray-400 hover:text-white transition-colors">Get Involved</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 mr-3" />
                <span className="text-gray-400">Delhi, India</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-400">info@andesfoundation.org</span>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Andes Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

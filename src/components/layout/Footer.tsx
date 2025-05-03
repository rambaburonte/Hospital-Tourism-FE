import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-6">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo className="text-white" />
              <span className="ml-2 text-xl font-bold text-white">Zynlogic</span>
            </div>
            <p className="mb-6 text-gray-400">
              Your one-stop destination for healthcare services and travel bookings. Experience
              seamless integration of wellness and wanderlust.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                <p>Hitech, Madhapur, Hyderabad, Telangana 500082</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <a href="mailto:contact@zynlogic.com" className="hover:text-primary">
                  contact@zynlogic.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <a href="tel:+919876543210" className="hover:text-primary">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Healthcare</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/doctors" className="hover:text-primary transition-colors">
                  Doctor Consultation
                </Link>
              </li>
              <li>
                <Link to="/spa-services" className="hover:text-primary transition-colors">
                  Spa & Physiotherapy
                </Link>
              </li>
              <li>
                <Link to="/lab-tests" className="hover:text-primary transition-colors">
                  Lab Tests
                </Link>
              </li>
              <li>
                <Link to="/pharmacy" className="hover:text-primary transition-colors">
                  Pharmacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Travel */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Travel</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/flights" className="hover:text-primary transition-colors">
                  Flight Booking
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="hover:text-primary transition-colors">
                  Hotel Booking
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-primary transition-colors">
                  Travel Packages
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-primary transition-colors">
                  Top Destinations
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 py-8 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Stay updated with our latest offers, services, and travel inspirations.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Zynlogic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
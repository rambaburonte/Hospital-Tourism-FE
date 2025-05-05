

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, User, ShoppingCart, X } from 'lucide-react';
import Logo from '../ui/Logo';

// Define interfaces for type safety
interface NavItem {
  name: string;
  path: string;
}

interface NavLink {
  title: string;
  path?: string;
  dropdown?: boolean;
  items?: NavItem[];
}

interface NavLinkProps {
  link: NavLink;
  isDropdownOpen: boolean;
  toggleDropdown: (title: string) => void;
  closeMenu: () => void;
}

// NavLink Component for Desktop
const NavLink: React.FC<NavLinkProps> = ({ link, isDropdownOpen, toggleDropdown, closeMenu }) => {
  return (
    <div className="relative group">
      {link.dropdown ? (
        <button
          onClick={() => toggleDropdown(link.title)}
          className="flex items-center text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
        >
          {link.title}
          <ChevronDown className="ml-1 w-4 h-4" />
        </button>
      ) : (
        <Link
          to={link.path!}
          className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
          onClick={closeMenu}
        >
          {link.title}
        </Link>
      )}
      {link.dropdown && isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-10 transform transition-all duration-300 ease-in-out">
          {link.items?.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="block px-4 py-2 text-gray-600 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// MobileNavLink Component
const MobileNavLink: React.FC<NavLinkProps> = ({ link, isDropdownOpen, toggleDropdown, closeMenu }) => {
  return (
    <div className="py-1">
      {link.dropdown ? (
        <div>
          <button
            onClick={() => toggleDropdown(link.title)}
            className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-primary font-medium"
          >
            {link.title}
            <ChevronDown className="w-4 h-4" />
          </button>
          {isDropdownOpen && (
            <div className="pl-4 mt-1 border-l-2 border-primary/30">
              {link.items?.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="block py-2 text-gray-500 hover:text-primary"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link
          to={link.path!}
          className="block py-2 text-gray-600 hover:text-primary font-medium"
          onClick={closeMenu}
        >
          {link.title}
        </Link>
      )}
    </div>
  );
};

// Navbar Component
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
    setActiveDropdown(null);
  }, [location]);

  const navLinks: NavLink[] = [
    {
      title: 'Healthcare',
      dropdown: true,
      items: [
        { name: 'Doctor Consultation', path: '/doctors' },
        { name: 'Spa & Physiotherapy', path: '/spa-services' },
        { name: 'Lab Tests', path: '/lab-tests' },
        { name: 'Pharmacy', path: '/pharmacy' },
      ],
    },
    {
      title: 'Travel',
      dropdown: true,
      items: [
        { name: 'Flight Booking', path: '/flights' },
        { name: 'Hotel Booking', path: '/hotels' },
      ],
    },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-4'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Logo />
            <span className="text-xl font-bold text-gray-800">Zynlogic</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  link={link}
                  isDropdownOpen={activeDropdown === link.title}
                  toggleDropdown={toggleDropdown}
                  closeMenu={closeMenu}
                />
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="text-gray-600 hover:text-primary" aria-label="User profile">
                <User className="w-5 h-5" />
              </Link>
              <Link to="/cart" className="text-gray-600 hover:text-primary" aria-label="Shopping cart">
                <ShoppingCart className="w-5 h-5" />
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark transition-colors duration-200"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 animate-slide-down">
            {navLinks.map((link, index) => (
              <MobileNavLink
                key={index}
                link={link}
                isDropdownOpen={activeDropdown === link.title}
                toggleDropdown={toggleDropdown}
                closeMenu={closeMenu}
              />
            ))}
            <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-gray-200">
              <Link
                to="/login"
                className="py-2 px-4 text-center text-gray-600 hover:text-primary font-medium"
                onClick={closeMenu}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="py-2 px-4 text-center bg-primary text-white rounded-md hover:bg-primary-dark"
                onClick={closeMenu}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
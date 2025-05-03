import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LogOut,
  Users,
  Package,
  LayoutDashboard,
  ChevronDown,
} from 'lucide-react';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed w-full bg-gray-800 text-white py-4 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Brand */}
        <Link to="/admindashboard" className="text-xl font-bold">
          Admin Panel
        </Link>

        {/* Nav Links */}
        <div className="flex items-center space-x-6">
          {/* Dashboard */}
          <Link
            to="/admindashboard"
            className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>

          {/* Users */}
          <Link
            to="/users"
            className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
          >
            <Users className="w-5 h-5" />
            <span>Users</span>
          </Link>

          {/* Upload Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors focus:outline-none"
            >
              <Package className="w-5 h-5" />
              <span>Upload</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-lg z-50 py-2">
                <li>
                  <Link
                    to="/admin/upload/doctor-listing"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/upload/doctor-detail"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Physiotherapists
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/upload/book-appointment"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Spa
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/upload/prescription"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Translators
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;


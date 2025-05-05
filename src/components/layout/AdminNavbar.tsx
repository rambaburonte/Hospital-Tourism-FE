import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LogOut,
  Users,
  Package,
  LayoutDashboard,
  ChevronDown,
  List,
} from 'lucide-react';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [uploadDropdownOpen, setUploadDropdownOpen] = useState(false);
  const [managementDropdownOpen, setManagementDropdownOpen] = useState(false);
  const uploadDropdownRef = useRef(null);
  const managementDropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        uploadDropdownRef.current &&
        !uploadDropdownRef.current.contains(event.target)
      ) {
        setUploadDropdownOpen(false);
      }
      if (
        managementDropdownRef.current &&
        !managementDropdownRef.current.contains(event.target)
      ) {
        setManagementDropdownOpen(false);
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
          <div className="relative" ref={uploadDropdownRef}>
            <button
              onClick={() => setUploadDropdownOpen((prev) => !prev)}
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors focus:outline-none"
            >
              <Package className="w-5 h-5" />
              <span>Upload</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {uploadDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-lg z-50 py-2">
                <li>
                  <Link
                    to="/admin/doctors/upload"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setUploadDropdownOpen(false)}
                  >
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/physiotherapist/upload"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setUploadDropdownOpen(false)}
                  >
                    Physiotherapists
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/spa/upload"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setUploadDropdownOpen(false)}
                  >
                    Spa
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/translators/upload"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setUploadDropdownOpen(false)}
                  >
                    Translators
                  </Link>
                  <Link
                    to="/admin/pharamacyProducts/upload"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setUploadDropdownOpen(false)}
                  >
                    pharamcyProducts
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Management Dropdown */}
          <div className="relative" ref={managementDropdownRef}>
            <button
              onClick={() => setManagementDropdownOpen((prev) => !prev)}
              className="flex items-center space-x-1 hover:text-gray-300 transition-colors focus:outline-none"
            >
              <List className="w-5 h-5" />
              <span>Management</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {managementDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-lg z-50 py-2">
                <li>
                  <Link
                    to="/admin/doctors/listing"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setManagementDropdownOpen(false)}
                  >
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/physiotherapist/listing"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setManagementDropdownOpen(false)}
                  >
                    Physiotherapists
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/spa/listing"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setManagementDropdownOpen(false)}
                  >
                    Spa
                  </Link>
                  <Link
                    to="/admin/pharamcy/listing"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setManagementDropdownOpen(false)}
                  >
                    pharmacyProducts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/translators/listing"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setManagementDropdownOpen(false)}
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


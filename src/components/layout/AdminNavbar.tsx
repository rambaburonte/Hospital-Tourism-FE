

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Users, Package, LayoutDashboard } from 'lucide-react';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear token
    navigate('/login'); // Redirect to login
  };

  return (
    <nav className="fixed w-full bg-gray-800 text-white py-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex justify-between items-center">
        <Link to="/admindashboard" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Admin Panel</span>
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            to="/admindashboard"
            className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/users"
            className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
          >
            <Users className="w-5 h-5" />
            <span>Users</span>
          </Link>
          <Link
            to="/admin/services"
            className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
          >
            <Package className="w-5 h-5" />
            <span>Services</span>
          </Link>
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
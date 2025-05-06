import React, { useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const AdminDashboard: React.FC = () => {
  useEffect(() => {
    console.log('Simplified AdminDashboard rendered');
  }, []);

  const stats = {
    totalUsers: 50,
    totalBookings: 120,
  };

  const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
    { id: 3, name: 'Alice Brown', email: 'alice@example.com', role: 'User' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header Section */}
        <div className="bg-white shadow-xl rounded-3xl p-8 mb-12 transform hover:scale-[1.01] transition-transform duration-300">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Admin Dashboard
          </h1>
          <p className="text-gray-500 text-lg">
            Manage users and monitor key metrics with ease.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-2xl rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3">Total Users</h2>
            <p className="text-5xl font-extrabold tracking-tight">{stats.totalUsers}</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-700 text-white shadow-2xl rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3">Total Bookings</h2>
            <p className="text-5xl font-extrabold tracking-tight">{stats.totalBookings}</p>
          </div>
        </div>

        {/* User Management Section */}
        <div className="bg-white shadow-xl rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">User Management</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-gray-800 font-medium">{user.name}</td>
                    <td className="px-6 py-4 text-gray-800">{user.email}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 text-sm font-medium rounded-full ${
                          user.role === 'Admin'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
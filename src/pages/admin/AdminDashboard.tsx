import React, { useEffect } from 'react';


interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const AdminDashboard = () => {
  // Debug rendering
  useEffect(() => {
    console.log('Simplified AdminDashboard rendered');
  }, []);

  // Mock Data
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
    <div className="min-h-screen bg-gray-100">
     
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">
            Manage users and monitor key metrics.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Total Users</h2>
            <p className="text-3xl font-bold text-blue-600">{stats.totalUsers}</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Total Bookings</h2>
            <p className="text-3xl font-bold text-green-600">{stats.totalBookings}</p>
          </div>
        </div>

        {/* User Management Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">User Management</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-t">
                    <td className="px-4 py-2 text-gray-800">{user.name}</td>
                    <td className="px-4 py-2 text-gray-800">{user.email}</td>
                    <td className="px-4 py-2 text-gray-800">{user.role}</td>
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
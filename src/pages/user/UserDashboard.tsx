import React from 'react';

const UserDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">My Bookings</h2>
          <p className="text-gray-600">No active bookings found.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">My Profile</h2>
          <p className="text-gray-600">Update your personal information and preferences.</p>
        </div>
      
      </div>
    </div>
  );
};

export default UserDashboard;
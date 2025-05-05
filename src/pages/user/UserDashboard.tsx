import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();

  const [user] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePic: 'https://via.placeholder.com/150',
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingBookings = [
    { id: 1, date: '2025-05-10', title: 'Doctor Consultation', status: 'Upcoming' },
    { id: 2, date: '2025-05-12', title: 'Spa Therapy', status: 'Upcoming' },
  ];

  const pastBookings = [
    { id: 3, date: '2025-04-20', title: 'Lab Test', status: 'Past' },
    { id: 4, date: '2025-04-22', title: 'Dental Checkup', status: 'Past' },
  ];

  const filterBookings = (bookings) => {
    return bookings.filter((booking) =>
      booking.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.date.includes(searchTerm)
    );
  };

  const filteredUpcomingBookings = filterBookings(upcomingBookings);
  const filteredPastBookings = filterBookings(pastBookings);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* User Profile */}
      <div className="flex items-center space-x-4 mb-8 p-6 bg-white rounded-lg shadow-md">
        <img
          src={user.profilePic}
          alt="User Profile"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-grow">
          <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <button
          onClick={() => navigate('/edit-profile')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-semibold"
        >
          Edit Profile
        </button>
      </div>

      {/* Tabs */}
      <div className="flex mb-6 space-x-4">
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-6 py-3 rounded-lg text-lg font-semibold ${
            activeTab === 'upcoming' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`px-6 py-3 rounded-lg text-lg font-semibold ${
            activeTab === 'past' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Past
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          placeholder="Search bookings..."
          className="px-4 py-2 w-full bg-white rounded-lg text-gray-800 border"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="w-5 h-5 text-gray-600" />
      </div>

      {/* Bookings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {(activeTab === 'upcoming' ? filteredUpcomingBookings : filteredPastBookings).map(
          (booking) => (
            <div
              key={booking.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900">{booking.title}</h3>
              <p className="text-gray-600">{booking.date}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default UserDashboard;

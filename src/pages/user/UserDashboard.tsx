import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Booking {
  id: number;
  date: string;
  title: string;
  status: string;
}

interface User {
  name: string;
  email: string;
  profilePic: string;
}

const UserDashboard: React.FC = () => {
  const navigate = useNavigate();

  const [user] = useState<User>({
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePic: 'https://via.placeholder.com/150',
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingBookings: Booking[] = [
    { id: 1, date: '2025-05-10', title: 'Doctor Consultation', status: 'Upcoming' },
    { id: 2, date: '2025-05-12', title: 'Spa Therapy', status: 'Upcoming' },
  ];

  const pastBookings: Booking[] = [
    { id: 3, date: '2025-04-20', title: 'Lab Test', status: 'Past' },
    { id: 4, date: '2025-04-22', title: 'Dental Checkup', status: 'Past' },
  ];

  const filterBookings = (bookings: Booking[]): Booking[] => {
    return bookings.filter(
      (booking) =>
        booking.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.date.includes(searchTerm)
    );
  };

  const filteredUpcomingBookings = filterBookings(upcomingBookings);
  const filteredPastBookings = filterBookings(pastBookings);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center space-x-4 mb-8 p-6 bg-white rounded-3xl shadow-xl">
          <img
            src={user.profilePic}
            alt="User Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-grow">
            <h1 className="text-3xl font-extrabold text-gray-900">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <button
            onClick={() => navigate('/edit-profile')}
            className="px-4 py-2 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors duration-200 font-semibold"
          >
            Edit Profile
          </button>
        </div>

        <div className="flex mb-6 space-x-4">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-3 rounded-xl text-lg font-semibold transition-colors duration-200 ${
              activeTab === 'upcoming'
                ? 'bg-teal-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-6 py-3 rounded-xl text-lg font-semibold transition-colors duration-200 ${
              activeTab === 'past'
                ? 'bg-teal-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Past
          </button>
        </div>

        <div className="relative flex items-center mb-6">
          <input
            type="text"
            placeholder="Search bookings..."
            className="w-full px-4 py-3 pl-12 bg-white rounded-xl text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 w-5 h-5 text-gray-400" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {(activeTab === 'upcoming' ? filteredUpcomingBookings : filteredPastBookings).map(
            (booking) => (
              <div
                key={booking.id}
                className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <h3 className="text-lg font-semibold text-gray-900">{booking.title}</h3>
                <p className="text-gray-600">{booking.date}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
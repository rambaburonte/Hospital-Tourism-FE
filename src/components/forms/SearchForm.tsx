import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const SearchForm = () => {
  const [searchType, setSearchType] = useState('hotels');
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Based on searchType, navigate to the appropriate page with search params
    if (searchType === 'hotels') {
      navigate(`/hotels?location=${location}&dates=${dates}&guests=${guests}`);
    } else if (searchType === 'flights') {
      navigate(`/flights?from=${location}&date=${dates}&passengers=${guests}`);
    } else if (searchType === 'doctors') {
      navigate(`/doctors?specialty=${searchQuery}&location=${location}`);
    } else if (searchType === 'spa') {
      navigate(`/spa-services?service=${searchQuery}&location=${location}`);
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 -mt-24 relative z-10">
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            searchType === 'hotels' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setSearchType('hotels')}
        >
          Hotels
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            searchType === 'flights' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setSearchType('flights')}
        >
          Flights
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            searchType === 'doctors' ? 'bg-healthcare text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setSearchType('doctors')}
        >
          Doctors
        </button>
        <button
          className={`px-4 py-2 rounded-lg transition-colors ${
            searchType === 'spa' ? 'bg-spa text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setSearchType('spa')}
        >
          Spa & Wellness
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {(searchType === 'doctors' || searchType === 'spa') && (
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {searchType === 'doctors' ? 'Specialty' : 'Service'}
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder={searchType === 'doctors' ? 'e.g., Cardiologist' : 'e.g., Massage'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          )}
          
          <div className={`${(searchType === 'doctors' || searchType === 'spa') ? 'md:col-span-1' : 'md:col-span-2'}`}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {searchType === 'flights' ? 'From' : 'Location'}
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder={searchType === 'flights' ? 'Departure city' : 'Where are you going?'}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {searchType === 'flights' ? 'Travel Date' : 'Check-in / Check-out'}
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder={searchType === 'flights' ? 'Select date' : 'Add dates'}
                value={dates}
                onChange={(e) => setDates(e.target.value)}
              />
            </div>
          </div>
          
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {searchType === 'flights' ? 'Passengers' : 'Guests'}
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Add guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
          </div>
          
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1 opacity-0">
              Search
            </label>
            <button 
              type="submit" 
              className={`w-full py-2 px-4 rounded-lg font-medium ${
                (searchType === 'doctors' || searchType === 'spa') 
                  ? (searchType === 'doctors' ? 'bg-healthcare text-white' : 'bg-spa text-white')
                  : 'bg-primary text-white'
              }`}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Calendar, Users, ArrowRight, Clock, CreditCard, Filter, ChevronDown } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface Flight {
  id: number;
  airline: string;
  logo: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  price: string;
  departure: string;
  arrival: string;
}

const FlightSearchPage = () => {
  const [tripType, setTripType] = useState('roundTrip');
  const [departureDate, setDepartureDate] = useState<Date | null>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(
    new Date(new Date().setDate(new Date().getDate() + 7))
  );
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([100, 1000]);
  
  // Sample flights data
  const flights: Flight[] = [
    {
      id: 1,
      airline: 'Emirates',
      logo: 'https://images.pexels.com/photos/844528/pexels-photo-844528.jpeg',
      flightNumber: 'EK 507',
      departureTime: '06:30',
      arrivalTime: '11:45',
      duration: '5h 15m',
      stops: 0,
      price: '$650',
      departure: 'New York (JFK)',
      arrival: 'Dubai (DXB)'
    },
    {
      id: 2,
      airline: 'Delta Airlines',
      logo: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg',
      flightNumber: 'DL 289',
      departureTime: '08:45',
      arrivalTime: '14:30',
      duration: '5h 45m',
      stops: 1,
      price: '$520',
      departure: 'New York (JFK)',
      arrival: 'Dubai (DXB)'
    },
    {
      id: 3,
      airline: 'British Airways',
      logo: 'https://images.pexels.com/photos/40893/aircraft-air-travel-airline-aviation-40893.jpeg',
      flightNumber: 'BA 126',
      departureTime: '11:15',
      arrivalTime: '18:00',
      duration: '6h 45m',
      stops: 1,
      price: '$590',
      departure: 'New York (JFK)',
      arrival: 'Dubai (DXB)'
    },
    {
      id: 4,
      airline: 'Qatar Airways',
      logo: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg',
      flightNumber: 'QR 701',
      departureTime: '14:25',
      arrivalTime: '21:15',
      duration: '6h 50m',
      stops: 0,
      price: '$680',
      departure: 'New York (JFK)',
      arrival: 'Dubai (DXB)'
    }
  ];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would fetch flight data
    console.log('Searching for flights...');
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container-custom mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Find Your Flight</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Search for the best deals on flights worldwide
          </p>
        </div>

        {/* Flight Search Form */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex space-x-4 mb-6">
            <button
              className={`px-4 py-2 rounded-lg transition-colors ${
                tripType === 'roundTrip' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setTripType('roundTrip')}
            >
              Round Trip
            </button>
            <button
              className={`px-4 py-2 rounded-lg transition-colors ${
                tripType === 'oneWay' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setTripType('oneWay')}
            >
              One Way
            </button>
            <button
              className={`px-4 py-2 rounded-lg transition-colors ${
                tripType === 'multiCity' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setTripType('multiCity')}
            >
              Multi-City
            </button>
          </div>
          
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                <div className="relative">
                  <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="City or Airport"
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                <div className="relative">
                  <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 rotate-90" />
                  <input
                    type="text"
                    placeholder="City or Airport"
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <DatePicker
                    selected={departureDate}
                    onChange={(date) => setDepartureDate(date)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    minDate={new Date()}
                    dateFormat="MMM dd, yyyy"
                  />
                </div>
              </div>
              
              {tripType === 'roundTrip' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <DatePicker
                      selected={returnDate}
                      onChange={(date) => setReturnDate(date)}
                      className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      minDate={departureDate || new Date()}
                      dateFormat="MMM dd, yyyy"
                    />
                  </div>
                </div>
              )}
              
              {tripType !== 'roundTrip' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      min="1"
                      max="9"
                      className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      value={passengers}
                      onChange={(e) => setPassengers(parseInt(e.target.value))}
                    />
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <button
                type="button"
                className="flex items-center text-gray-700 hover:text-primary"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-5 h-5 mr-2" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
              
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Search Flights
              </button>
            </div>
            
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <div className="flex items-center space-x-4">
                    <span>${priceRange[0]}</span>
                    <input
                      type="range"
                      min="100"
                      max="2000"
                      step="50"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="flex-grow"
                    />
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stops</label>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary mr-2" />
                      Direct
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary mr-2" />
                      1 Stop
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary mr-2" />
                      2+ Stops
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Airlines</label>
                  <div className="flex flex-wrap gap-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary mr-2" />
                      Emirates
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary mr-2" />
                      Delta
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary mr-2" />
                      British Airways
                    </label>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Flight Results */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Available Flights</h2>
          <p className="text-gray-600">
            {departureDate ? departureDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : ''}
            {tripType === 'roundTrip' && returnDate ? 
              ` - ${returnDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}` : 
              ''
            }
          </p>
        </div>
        
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {flights.map((flight) => (
            <motion.div 
              key={flight.id} 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="w-12 h-12 overflow-hidden rounded-lg mr-4">
                      <img 
                        src={flight.logo} 
                        alt={flight.airline}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{flight.airline}</h3>
                      <p className="text-gray-500 text-sm">{flight.flightNumber}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-6 mb-4 lg:mb-0">
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-800">{flight.departureTime}</p>
                      <p className="text-gray-500 text-sm">{flight.departure}</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="text-gray-400 text-sm">{flight.duration}</div>
                      <div className="flex items-center w-24 md:w-32">
                        <div className="h-0.5 flex-grow bg-gray-300"></div>
                        <Plane className="w-4 h-4 mx-2 text-primary transform rotate-90" />
                        <div className="h-0.5 flex-grow bg-gray-300"></div>
                      </div>
                      <div className="text-gray-400 text-sm">
                        {flight.stops === 0 ? 'Direct' : 
                         flight.stops === 1 ? '1 Stop' : 
                         `${flight.stops} Stops`}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-800">{flight.arrivalTime}</p>
                      <p className="text-gray-500 text-sm">{flight.arrival}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <p className="text-2xl font-bold text-primary">{flight.price}</p>
                    <p className="text-gray-500 text-sm">per person</p>
                    <button className="mt-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors">
                      Select
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">Flight duration: {flight.duration}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <CreditCard className="w-4 h-4 mr-1" />
                    <span className="text-sm">Refundable</span>
                  </div>
                  
                  <button className="text-primary flex items-center text-sm font-medium">
                    Flight Details <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FlightSearchPage;
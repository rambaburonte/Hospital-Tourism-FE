import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import { Search, Filter, Star, MapPin, Clock, Calendar } from 'lucide-react';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  reviews: number;
  experience: string;
  location: string;
  availability: string;
  fee: string;
  verified: boolean;
}

const DoctorListingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const navigate = useNavigate();

  // Sample data
  const doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      image: 'https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg',
      rating: 4.9,
      reviews: 127,
      experience: '15 years',
      location: 'New York, NY',
      availability: 'Available Today',
      fee: '$150',
      verified: true
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Dermatologist',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg',
      rating: 4.7,
      reviews: 98,
      experience: '10 years',
      location: 'San Francisco, CA',
      availability: 'Available Tomorrow',
      fee: '$120',
      verified: true
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Neurologist',
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg',
      rating: 4.8,
      reviews: 113,
      experience: '12 years',
      location: 'Chicago, IL',
      availability: 'Available Today',
      fee: '$180',
      verified: true
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Orthopedic',
      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg',
      rating: 4.6,
      reviews: 87,
      experience: '8 years',
      location: 'Boston, MA',
      availability: 'Available in 2 days',
      fee: '$140',
      verified: false
    },
    {
      id: 5,
      name: 'Dr. Priya Sharma',
      specialty: 'Pediatrician',
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg',
      rating: 4.9,
      reviews: 156,
      experience: '14 years',
      location: 'Austin, TX',
      availability: 'Available Today',
      fee: '$130',
      verified: true
    },
    {
      id: 6,
      name: 'Dr. Robert Lee',
      specialty: 'Psychiatrist',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg',
      rating: 4.8,
      reviews: 104,
      experience: '11 years',
      location: 'Seattle, WA',
      availability: 'Available Tomorrow',
      fee: '$160',
      verified: true
    }
  ];

  const specialties = ['All', 'Cardiologist', 'Dermatologist', 'Neurologist', 'Orthopedic', 'Pediatrician', 'Psychiatrist'];

  // Filter doctors based on search, specialty, and rating
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    const matchesRating = selectedRating === null || doctor.rating >= selectedRating;

    return matchesSearch && matchesSpecialty && matchesRating;
  });

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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Find a Doctor</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with top medical specialists for online consultations or in-person appointments.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by doctor name or specialty"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-healthcare focus:border-healthcare"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-healthcare focus:border-healthcare"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>

              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-healthcare focus:border-healthcare"
                value={selectedRating || ''}
                onChange={(e) => setSelectedRating(e.target.value ? Number(e.target.value) : null)}
              >
                <option value="">Any Rating</option>
                <option value="4.5">4.5 & Up</option>
                <option value="4">4.0 & Up</option>
                <option value="3.5">3.5 & Up</option>
              </select>

              <button className="px-4 py-2 bg-healthcare text-white rounded-lg flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <motion.div key={doctor.id} variants={itemVariants} className="card">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row">
                    <div className="mb-4 sm:mb-0 sm:mr-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden">
                        <img 
                          src={doctor.image} 
                          alt={doctor.name}
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-wrap justify-between items-start">
                        <div>
                          <h2 className="text-xl font-semibold text-gray-800">
                            {doctor.name} 
                            {doctor.verified && (
                              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                Verified
                              </span>
                            )}
                          </h2>
                          <p className="text-healthcare font-medium">{doctor.specialty}</p>
                        </div>

                        <div className="flex items-center">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="ml-1 font-medium">{doctor.rating}</span>
                          <span className="ml-1 text-gray-500">({doctor.reviews})</span>
                        </div>
                      </div>

                      <div className="mt-3 space-y-2">
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{doctor.experience} experience</span>
                        </div>

                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{doctor.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap justify-between items-center">
                    <div>
                      <span className="text-gray-600">Consultation Fee:</span>
                      <span className="ml-2 text-lg font-semibold text-gray-800">{doctor.fee}</span>
                    </div>

                    <div className="flex items-center mt-4 sm:mt-0">
                      <span className={`mr-4 px-3 py-1 rounded-full text-sm ${
                        doctor.availability.includes('Today') 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {doctor.availability}
                      </span>

                      <button
                        onClick={() => navigate(`/booking/doctor/${doctor.id}`)}
                        className="py-2 px-4 bg-healthcare hover:bg-healthcare-dark transition-colors text-white rounded-lg flex items-center"
                      >
                        <Calendar className="w-5 h-5 mr-2" />
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-2 py-12 text-center">
              <div className="text-gray-500 mb-4">No doctors found matching your criteria.</div>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedSpecialty('All');
                  setSelectedRating(null);
                }}
                className="text-healthcare hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorListingPage;
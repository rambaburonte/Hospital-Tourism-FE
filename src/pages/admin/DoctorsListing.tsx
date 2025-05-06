import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Doctor {
  id: number;
  name: string;
  slots: { date: string; time: string }[];
}

const DoctorsListing: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([
    {
      id: 1,
      name: 'Dr. John Smith',
      slots: [{ date: '2025-05-06', time: '10:00 AM' }],
    },
  ]);

  useEffect(() => {
    console.log('DoctorsListing rendered');
  }, []);

  const handleDelete = (doctorId: number) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      setDoctors((prev) => prev.filter((doctor) => doctor.id !== doctorId));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header Section */}
        <div className="bg-white shadow-2xl rounded-3xl p-8 mb-12 transform hover:scale-[1.01] transition-transform duration-300">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Doctors Listing
          </h1>
          <p className="text-gray-500 text-lg mb-6">
            Manage doctor profiles and upload new doctor details.
          </p>
          <Link
            to="/admin/doctors/upload"
            className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-semibold"
          >
            Upload New Doctor
          </Link>
        </div>

        {/* Doctors List */}
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Doctor List</h2>
          {doctors.length === 0 ? (
            <p className="text-gray-500 italic">
              No doctors listed yet. Use the button above to upload a new doctor.
            </p>
          ) : (
            <ul className="space-y-6">
              {doctors.map((doctor) => (
                <li
                  key={doctor.id}
                  className="border-b border-gray-100 pb-6 hover:bg-gray-50 rounded-xl p-4 transition-colors duration-200"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <Link
                        to={`/admin/doctors/detail/${doctor.id}`}
                        className="block text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors duration-200"
                      >
                        {doctor.name}
                      </Link>
                      <div className="mt-3">
                        <h4 className="text-sm font-medium text-gray-600">Available Slots:</h4>
                        {doctor.slots.length > 0 ? (
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                            {doctor.slots.map((slot, index) => (
                              <li
                                key={index}
                                className="text-gray-700 bg-gray-100 rounded-lg px-3 py-1 text-sm"
                              >
                                {slot.date} at {slot.time}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-500 italic mt-2">No slots available.</p>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Link
                        to={`/admin/doctors/update/${doctor.id}`}
                        className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-200 font-medium"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(doctor.id)}
                        className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorsListing;

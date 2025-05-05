import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DoctorsListing = () => {
  // Placeholder data with slots
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: 'Dr. John Smith',
      slots: [{ date: '2025-05-06', time: '10:00 AM' }],
    },
  ]);

  useEffect(() => {
    console.log('DoctorsListing rendered');
  }, []);

  const handleDelete = (doctorId) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      setDoctors((prev) => prev.filter((doctor) => doctor.id !== doctorId));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Doctors Listing</h1>
          <p className="text-gray-600 mb-4">
            Manage doctor profiles and upload new doctor details.
          </p>
          <Link
            to="/admin/doctors/upload"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Upload New Doctor
          </Link>
        </div>

        {/* Doctors List */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Doctor List</h2>
          {doctors.length === 0 ? (
            <p className="text-gray-600">No doctors listed yet. Use the button above to upload a new doctor.</p>
          ) : (
            <ul className="space-y-6">
              {doctors.map((doctor) => (
                <li key={doctor.id} className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <Link
                        to={`/admin/doctors/detail/${doctor.id}`}
                        className="block text-lg font-semibold text-gray-800 hover:underline"
                      >
                        {doctor.name}
                      </Link>
                      <div className="mt-2">
                        <h4 className="text-sm font-medium text-gray-600">Available Slots:</h4>
                        {doctor.slots.length > 0 ? (
                          <ul className="list-disc list-inside text-gray-600">
                            {doctor.slots.map((slot, index) => (
                              <li key={index}>
                                {slot.date} at {slot.time}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-600">No slots available.</p>
                        )}
                      </div>
                    </div>
                    <div className="space-x-2">
                      <Link
                        to={`/admin/doctors/update/${doctor.id}`}
                        className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(doctor.id)}
                        className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700"
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

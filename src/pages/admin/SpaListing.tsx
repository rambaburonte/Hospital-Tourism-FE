import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SpaListing = () => {
  const [spaServices, setSpaServices] = useState([
    {
      id: 1,
      serviceName: 'Massage Therapy',
      slots: [{ date: '2025-05-06', time: '11:00 AM' }],
    },
  ]);

  useEffect(() => {
    console.log('SpaListing rendered');
  }, []);

  const handleDelete = (serviceId) => {
    if (window.confirm('Are you sure you want to delete this spa service?')) {
      setSpaServices((prev) => prev.filter((service) => service.id !== serviceId));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Spa Services Listing</h1>
          <p className="text-gray-600 mb-4">
            Manage spa services and upload new spa service details.
          </p>
          <Link
            to="/admin/spa/upload"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Upload New Spa Service
          </Link>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Spa Services List</h2>
          {spaServices.length === 0 ? (
            <p className="text-gray-600">
              No spa services listed yet. Use the button above to upload a new spa service.
            </p>
          ) : (
            <ul className="space-y-6">
              {spaServices.map((service) => (
                <li key={service.id} className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <Link
                        to={`/admin/spa/detail/${service.id}`}
                        className="block text-lg font-semibold text-gray-800 hover:underline"
                      >
                        {service.serviceName}
                      </Link>
                      <div className="mt-2">
                        <h4 className="text-sm font-medium text-gray-600">Available Slots:</h4>
                        {service.slots.length > 0 ? (
                          <ul className="list-disc list-inside text-gray-600">
                            {service.slots.map((slot, index) => (
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
                        to={`/admin/spa/update/${service.id}`}
                        className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(service.id)}
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

export default SpaListing;

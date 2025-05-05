import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PhysiotherapistListing = () => {
  const [physiotherapists, setPhysiotherapists] = useState([
    {
      id: 1,
      name: 'Dr. Jane Doe',
      slots: [{ date: '2025-05-06', time: '02:00 PM' }],
    },
  ]);

  useEffect(() => {
    console.log('PhysiotherapistListing rendered');
  }, []);

  const handleDelete = (physiotherapistId) => {
    if (window.confirm('Are you sure you want to delete this physiotherapist?')) {
      setPhysiotherapists((prev) => prev.filter((physiotherapist) => physiotherapist.id !== physiotherapistId));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Physiotherapists Listing</h1>
          <p className="text-gray-600 mb-4">
            Manage physiotherapists and upload new physiotherapist details.
          </p>
          <Link
            to="/admin/physiotherapist/upload"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Upload New Physiotherapist
          </Link>
        </div>

        {/* Physiotherapists List */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Physiotherapists List</h2>
          {physiotherapists.length === 0 ? (
            <p className="text-gray-600">No physiotherapists listed yet. Use the button above to upload a new physiotherapist.</p>
          ) : (
            <ul className="space-y-6">
              {physiotherapists.map((physiotherapist) => (
                <li key={physiotherapist.id} className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <Link
                        to={`/admin/physiotherapist/detail/${physiotherapist.id}`}
                        className="block text-lg font-semibold text-gray-800 hover:underline"
                      >
                        {physiotherapist.name}
                      </Link>
                      <div className="mt-2">
                        <h4 className="text-sm font-medium text-gray-600">Available Slots:</h4>
                        {physiotherapist.slots.length > 0 ? (
                          <ul className="list-disc list-inside text-gray-600">
                            {physiotherapist.slots.map((slot, index) => (
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
                        to={`/admin/physiotherapist/update/${physiotherapist.id}`}
                        className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(physiotherapist.id)}
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

export default PhysiotherapistListing;

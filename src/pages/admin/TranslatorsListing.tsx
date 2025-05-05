import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TranslatorsListing = () => {
  // Placeholder data with slots
  const [translators, setTranslators] = useState([
    {
      id: 1,
      name: 'John Translator',
      slots: [{ date: '2025-05-06', time: '03:00 PM' }],
    },
  ]);

  // Debug rendering
  useEffect(() => {
    console.log('TranslatorsListing rendered');
  }, []);

  const handleDelete = (translatorId) => {
    if (window.confirm('Are you sure you want to delete this translator?')) {
      setTranslators((prev) => prev.filter((translator) => translator.id !== translatorId));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Translators Listing</h1>
          <p className="text-gray-600 mb-4">
            Manage translators and upload new translator details.
          </p>
          <Link
            to="/admin/translators/upload"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Upload New Translator
          </Link>
        </div>

        {/* Translators List */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Translators List</h2>
          {translators.length === 0 ? (
            <p className="text-gray-600">No translators listed yet. Use the button above to upload a new translator.</p>
          ) : (
            <ul className="space-y-6">
              {translators.map((translator) => (
                <li key={translator.id} className="border-b pb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <Link
                        to={`/admin/translators/detail/${translator.id}`}
                        className="block text-lg font-semibold text-gray-800 hover:underline"
                      >
                        {translator.name}
                      </Link>
                      <div className="mt-2">
                        <h4 className="text-sm font-medium text-gray-600">Available Slots:</h4>
                        {translator.slots.length > 0 ? (
                          <ul className="list-disc list-inside text-gray-600">
                            {translator.slots.map((slot, index) => (
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
                        to={`/admin/translators/update/${translator.id}`}
                        className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(translator.id)}
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

export default TranslatorsListing;

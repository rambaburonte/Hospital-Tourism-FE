import React from 'react';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const { serviceType, id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">Book Your Service</h1>
        <p className="text-gray-600 mb-4">
          Service Type: {serviceType}<br />
          Service ID: {id}
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Time</label>
            <input
              type="time"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
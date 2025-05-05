import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Extract booking details from state
  const { uniqueBookingId, serviceType, serviceId, serviceName, slot, amount } = state || {};

  const handlePayment = () => {
    // Simulate payment processing (in a real app, this would integrate with a payment gateway)
    console.log('Payment processed:', { uniqueBookingId, serviceType, serviceId, serviceName, slot, amount });
    alert('Payment successful! Your appointment is confirmed.');
    navigate('/doctors');
  };

  if (!state) {
    alert('Invalid booking details');
    navigate('/doctors');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">Payment</h1>
        <p className="text-gray-600 mb-4">
          Booking ID: {uniqueBookingId}<br />
          Service Type: {serviceType}<br />
          Service ID: {serviceId}<br />
          Name: {serviceName}<br />
          Slot: {slot}<br />
          Amount: {amount}
        </p>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">CVV</label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button
            onClick={handlePayment}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
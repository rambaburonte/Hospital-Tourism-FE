import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface PaymentState {
  uniqueBookingId?: string;
  serviceType?: string;
  serviceId?: string;
  serviceName?: string;
  slot?: string;
  amount?: string;
}

const PaymentPage: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { uniqueBookingId, serviceType, serviceId, serviceName, slot, amount } = state as PaymentState || {};

  const handlePayment = () => {
    console.log('Payment processed:', { uniqueBookingId, serviceType, serviceId, serviceName, slot, amount });
    window.alert('Payment successful! Your appointment is confirmed.');
    navigate('/doctors');
  };

  if (!state) {
    window.alert('Invalid booking details');
    navigate('/doctors');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
            Payment
          </h1>
          <div className="space-y-4 mb-6">
            <p className="text-gray-600">
              <span className="font-semibold">Booking ID:</span> {uniqueBookingId || 'N/A'}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Service Type:</span> {serviceType || 'N/A'}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Name:</span> {serviceName || 'N/A'}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Slot:</span> {slot || 'N/A'}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Amount:</span> {amount || 'N/A'}
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-2">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-2">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
                />
              </div>
            </div>
            <button
              onClick={handlePayment}
              className="w-full bg-teal-600 text-white py-3 px-4 rounded-xl hover:bg-teal-700 transition-colors duration-200 font-semibold"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface Slot {
  date: string;
  time: string;
}

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  fee: string;
  slots: Slot[];
}

interface CartItem {
  id: string;
  name: string;
  fee: string;
  slot: string;
}

const BookingPage: React.FC = () => {
  const { serviceType, id } = useParams<{ serviceType: string; id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [filterDate, setFilterDate] = useState<string>('');
  const [filteredSlots, setFilteredSlots] = useState<Slot[]>([]);

  const doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      fee: '$150',
      slots: [{ date: '2025-05-06', time: '10:00 AM' }],
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Dermatologist',
      fee: '$120',
      slots: [],
    },
  ];

  const service = serviceType === 'doctor' ? doctors.find((doc) => doc.id === parseInt(id || '0')) : null;

  useEffect(() => {
    if (service && service.slots) {
      if (filterDate) {
        const slotsOnDate = service.slots.filter((slot) => slot.date === filterDate);
        setFilteredSlots(slotsOnDate);
      } else {
        setFilteredSlots(service.slots);
      }
    } else {
      setFilteredSlots([]);
    }
  }, [filterDate, service]);

  const handleAddToCart = () => {
    if (!selectedSlot) {
      window.alert('Please select a slot to add to cart.');
      return;
    }
    const cartItem: CartItem = {
      id: service?.id.toString() || '',
      name: service?.name || '',
      fee: service?.fee || '',
      slot: selectedSlot,
    };
    addToCart(cartItem);
    window.alert(`${service?.name} on ${selectedSlot} added to cart.`);
  };

  const handleSubmit = () => {
    if (!selectedSlot) {
      window.alert('Please select a slot to book.');
      return;
    }
    navigate('/payment', {
      state: {
        serviceType,
        id,
        slot: selectedSlot,
        serviceName: service?.name,
        fee: service?.fee,
      },
    });
  };

  if (!service || serviceType !== 'doctor') return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white shadow-2xl rounded-3xl p-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
            Book Your Service
          </h1>
          <div className="space-y-4 mb-6">
            <p className="text-gray-600">
              <span className="font-semibold">Service Type:</span> {serviceType}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Name:</span> {service.name}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Specialty:</span> {service.specialty}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Fee:</span> {service.fee}
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Filter by Date</label>
              <input
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Select a Slot</label>
              <select
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
              >
                <option value="">-- Select a slot --</option>
                {filteredSlots.map((slot, index) => (
                  <option key={index} value={`${slot.date} at ${slot.time}`}>
                    {slot.date} at {slot.time}
                  </option>
                ))}
              </select>
              {filteredSlots.length === 0 && (
                <p className="text-gray-500 mt-2 italic">No slots available for the selected date.</p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-colors duration-200 font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={filteredSlots.length === 0}
              >
                Add to Cart
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="flex-1 bg-teal-600 text-white py-3 px-4 rounded-xl hover:bg-teal-700 transition-colors duration-200 font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={filteredSlots.length === 0}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
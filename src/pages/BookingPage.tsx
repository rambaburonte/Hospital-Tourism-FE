// BookingPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Adjust the import path as necessary

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
      alert('Please select a slot to add to cart.');
      return;
    }
    const cartItem = {
      id: service?.id.toString() || '',
      name: service?.name || '',
      fee: service?.fee || '',
      slot: selectedSlot,
    };
    addToCart(cartItem);
    alert(`${service?.name} on ${selectedSlot} added to cart.`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) {
      alert('Please select a slot to book.');
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
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">Book Your Service</h1>
        <p className="text-gray-600 mb-4">
          Service Type: {serviceType}
          <br />
          Service ID: {id}
          <br />
          Name: {service.name}
          <br />
          Specialty: {service.specialty}
          <br />
          Fee: {service.fee}
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-2">Filter by Date</label>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Select a Slot</label>
            <select
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">-- Select a slot --</option>
              {filteredSlots.map((slot, index) => (
                <option key={index} value={`${slot.date} at ${slot.time}`}>
                  {slot.date} at {slot.time}
                </option>
              ))}
            </select>
            {filteredSlots.length === 0 && (
              <p className="text-gray-500 mt-2">No slots available for the selected date.</p>
            )}
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
            disabled={filteredSlots.length === 0}
          >
            Add to Cart
          </button>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            disabled={filteredSlots.length === 0}
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;

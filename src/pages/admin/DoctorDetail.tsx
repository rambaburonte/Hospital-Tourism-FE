import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Doctor {
  id: string | undefined;
  name: string;
  email: string;
  mobile: string;
  hospital: string;
  address: string;
  rating: number;
  department: string;
  description: string;
  price: number;
  slots: { date: string; time: string }[];
}

interface Slot {
  date: string;
  time: string;
}

const DoctorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [doctor, setDoctor] = useState<Doctor>({
    id,
    name: 'Dr. John Smith',
    email: 'john.smith@example.com',
    mobile: '1234567890',
    hospital: 'City Hospital',
    address: '123 Main St, City',
    rating: 4.5,
    department: 'Cardiology',
    description: 'Experienced cardiologist with 10 years of practice.',
    price: 100,
    slots: [{ date: '2025-05-06', time: '10:00 AM' }],
  });

  const [newSlot, setNewSlot] = useState<Slot>({ date: '', time: '' });

  useEffect(() => {
    console.log('DoctorDetail rendered for ID:', id);
  }, [id]);

  const handleAddSlot = () => {
    if (!newSlot.date || !newSlot.time) {
      alert('Please enter both date and time.');
      return;
    }

    setDoctor((prev) => ({
      ...prev,
      slots: [...prev.slots, { date: newSlot.date, time: newSlot.time }],
    }));
    setNewSlot({ date: '', time: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-[1.01] transition-transform duration-300">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
            Doctor Details
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <p className="text-gray-800">
                <strong className="font-semibold">Name:</strong> {doctor.name}
              </p>
              <p className="text-gray-800">
                <strong className="font-semibold">Email:</strong> {doctor.email}
              </p>
              <p className="text-gray-800">
                <strong className="font-semibold">Mobile:</strong> {doctor.mobile}
              </p>
              <p className="text-gray-800">
                <strong className="font-semibold">Hospital:</strong> {doctor.hospital}
              </p>
              <p className="text-gray-800">
                <strong className="font-semibold">Address:</strong> {doctor.address}
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-800">
                <strong className="font-semibold">Rating:</strong> 
                <span className="ml-2 text-yellow-500">{'★'.repeat(Math.floor(doctor.rating))}</span>
                <span className="text-gray-400">{'★'.repeat(5 - Math.floor(doctor.rating))}</span> ({doctor.rating}/5)
              </p>
              <p className="text-gray-800">
                <strong className="font-semibold">Department:</strong> {doctor.department}
              </p>
              <p className="text-gray-800">
                <strong className="font-semibold">Description:</strong> {doctor.description}
              </p>
              <p className="text-gray-800">
                <strong className="font-semibold">Consultation Price:</strong> ${doctor.price}
              </p>
            </div>
          </div>

          {/* Slots Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Slots</h2>
            {doctor.slots.length > 0 ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {doctor.slots.map((slot, index) => (
                  <li
                    key={index}
                    className="bg-gray-50 rounded-xl p-4 text-gray-800 hover:bg-teal-50 transition-colors duration-200"
                  >
                    {slot.date} at {slot.time}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">No slots available.</p>
            )}
          </div>

          {/* Slot Adding Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Add New Slot</h2>
            <div className="flex items-center space-x-4">
              <input
                type="date"
                value={newSlot.date}
                onChange={(e) => setNewSlot({ ...newSlot, date: e.target.value })}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
              />
              <input
                type="time"
                value={newSlot.time}
                onChange={(e) => setNewSlot({ ...newSlot, time: e.target.value })}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
              />
              <button
                onClick={handleAddSlot}
                className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 transition-colors duration-200 font-semibold"
              >
                Add Slot
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
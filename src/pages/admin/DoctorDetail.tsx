import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DoctorDetail = () => {
  const { id } = useParams();

  const [doctor, setDoctor] = useState({
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

  const [newSlot, setNewSlot] = useState({ date: '', time: '' });

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
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Doctor Details</h1>
          <div className="space-y-4">
            <p><strong>Name:</strong> {doctor.name}</p>
            <p><strong>Email:</strong> {doctor.email}</p>
            <p><strong>Mobile:</strong> {doctor.mobile}</p>
            <p><strong>Hospital:</strong> {doctor.hospital}</p>
            <p><strong>Address:</strong> {doctor.address}</p>
            <p><strong>Rating:</strong> {doctor.rating} / 5</p>
            <p><strong>Department:</strong> {doctor.department}</p>
            <p><strong>Description:</strong> {doctor.description}</p>
            <p><strong>Consultation Price:</strong> ${doctor.price}</p>

            <div>
              <strong>Available Slots:</strong>
              {doctor.slots.length > 0 ? (
                <ul className="list-disc list-inside text-gray-600 mt-1">
                  {doctor.slots.map((slot, index) => (
                    <li key={index}>{slot.date} at {slot.time}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 mt-1">No slots available.</p>
              )}
            </div>

            {/* Slot Adding Section */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Add New Slot</h2>
              <div className="flex items-center space-x-2">
                <input
                  type="date"
                  value={newSlot.date}
                  onChange={(e) => setNewSlot({ ...newSlot, date: e.target.value })}
                  className="border rounded-lg px-3 py-1"
                />
                <input
                  type="time"
                  value={newSlot.time}
                  onChange={(e) => setNewSlot({ ...newSlot, time: e.target.value })}
                  className="border rounded-lg px-3 py-1"
                />
                <button
                  onClick={handleAddSlot}
                  className="bg-green-600 text-white py-1 px-3 rounded-lg hover:bg-green-700"
                >
                  Add Slot
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;

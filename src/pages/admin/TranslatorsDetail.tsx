import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TranslatorsDetail = () => {
  const { id } = useParams();

  const [translator, setTranslator] = useState({
    id,
    name: 'John Translator',
    languages: 'English, Spanish',
    email: 'john.translator@example.com',
    price: 40,
    slots: [{ date: '2025-05-06', time: '03:00 PM' }],
  });

  const [newSlot, setNewSlot] = useState({ date: '', time: '' });

  useEffect(() => {
    console.log('TranslatorsDetail rendered for ID:', id);
  }, [id]);

  const handleAddSlot = () => {
    if (!newSlot.date || !newSlot.time) {
      alert('Please enter both date and time.');
      return;
    }

    setTranslator((prev) => ({
      ...prev,
      slots: [...prev.slots, { date: newSlot.date, time: newSlot.time }],
    }));
    setNewSlot({ date: '', time: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Translator Details</h1>
          <div className="space-y-4">
            <p><strong>Name:</strong> {translator.name}</p>
            <p><strong>Languages:</strong> {translator.languages}</p>
            <p><strong>Email:</strong> {translator.email}</p>
            <p><strong>Price per Hour:</strong> ${translator.price}</p>

            <div>
              <strong>Available Slots:</strong>
              {translator.slots.length > 0 ? (
                <ul className="list-disc list-inside text-gray-600 mt-1">
                  {translator.slots.map((slot, index) => (
                    <li key={index}>{slot.date} at {slot.time}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 mt-1">No slots available.</p>
              )}
            </div>

            {/* Add Slot Section */}
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
                  className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700"
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

export default TranslatorsDetail;

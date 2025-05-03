import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

type Booking = {
  id: number;
  date: string;
  doctorName: string;
  status: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  bookings: Booking[];
};

// 🔹 Mock user data
const mockUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    address: '123 Main St',
    bookings: [
      { id: 101, date: '2025-05-10', doctorName: 'Dr. Smith', status: 'Confirmed' },
      { id: 102, date: '2025-05-12', doctorName: 'Dr. Watson', status: 'Pending' },
    ],
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '1234567890',
    address: '456 Market Ave',
    bookings: [
      { id: 201, date: '2025-05-15', doctorName: 'Dr. Brown', status: 'Cancelled' },
    ],
  },
];

const UserDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const user = mockUsers.find((u) => u.id === Number(userId));

  if (!user) return <div style={{ padding: 20 }}>🚫 User not found.</div>;

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f7fa', minHeight: '100vh' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: '20px',
          padding: '10px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        ← Back
      </button>

      <div style={{
        maxWidth: 800,
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      }}>
        <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>👤 {user.name}'s Details</h2>

        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>

        <h3 style={{ marginTop: '30px', borderBottom: '1px solid #ddd', paddingBottom: '8px' }}>📅 Bookings</h3>
        {user.bookings.length === 0 ? (
          <p style={{ marginTop: '10px', color: '#999' }}>No bookings available.</p>
        ) : (
          user.bookings.map((booking) => (
            <div
              key={booking.id}
              style={{
                marginTop: '15px',
                padding: '15px',
                border: '1px solid #dcdcdc',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <p><strong>Booking ID:</strong> {booking.id}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Doctor:</strong> {booking.doctorName}</p>
              <p>
                <strong>Status:</strong>{' '}
                <span style={{
                  color:
                    booking.status === 'Confirmed' ? 'green' :
                    booking.status === 'Pending' ? '#ff9800' :
                    'red',
                  fontWeight: 'bold',
                }}>
                  {booking.status}
                </span>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserDetails;

import React from 'react';
import { useNavigate } from 'react-router-dom';

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

const mockUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    address: '123 Main St, Springfield',
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
    address: '456 Market Ave, Shelbyville',
    bookings: [
      { id: 201, date: '2025-05-15', doctorName: 'Dr. Brown', status: 'Cancelled' },
    ],
  },
];

const Users = () => {
  const navigate = useNavigate();

  const handleUpdate = (id: number) => {
    alert(`Update user with ID ${id}`);
  };

  const handleDelete = (id: number) => {
    alert(`Deleted user with ID ${id}`);
  };

  const handleCardClick = (id: number) => {
    navigate(`/user/${id}`);
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#f4f7fa', minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '30px', fontFamily: 'Arial, sans-serif' }}>👥 All Users</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        {mockUsers.map((user) => (
          <div
            key={user.id}
            onClick={() => handleCardClick(user.id)}
            style={{
              width: '300px',
              borderRadius: '12px',
              backgroundColor: '#fff',
              padding: '20px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 16px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
            }}
          >
            <h3 style={{ margin: '0 0 10px' }}>{user.name}</h3>
            <p style={{ margin: '4px 0' }}><strong>ID:</strong> {user.id}</p>
            <p style={{ margin: '4px 0' }}><strong>Email:</strong> {user.email}</p>

            <div
              onClick={(e) => e.stopPropagation()}
              style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}
            >
              <button
                onClick={() => handleUpdate(user.id)}
                style={{
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                }}
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                style={{
                  backgroundColor: '#dc3545',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

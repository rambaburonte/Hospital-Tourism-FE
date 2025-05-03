import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">Service Details</h1>
        <p className="text-gray-600">Service ID: {id}</p>
        <div className="mt-6">
          <p className="text-gray-600">Service details will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
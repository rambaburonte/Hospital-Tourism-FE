import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SpaUpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Placeholder data (replace with real data fetching)
  const [formData, setFormData] = useState({
    serviceName: 'Massage Therapy',
    description: 'A relaxing 60-minute massage session.',
    price: '50',
    duration: '60 minutes',
  });

  const [errors, setErrors] = useState({});

  // Debug rendering
  useEffect(() => {
    console.log('SpaUpdateForm rendered for ID:', id);
  }, [id]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.serviceName.trim()) newErrors.serviceName = 'Service name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.price) {
      newErrors.price = 'Price is required';
    } else if (parseFloat(formData.price) <= 0) {
      newErrors.price = 'Price must be greater than 0';
    }
    if (!formData.duration.trim()) newErrors.duration = 'Duration is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Updated Spa Service Data:', formData);
      alert('Spa service details updated successfully!');
      navigate('/admin/spa/listing');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Update Spa Service Details</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Service Name */}
          <div>
            <label htmlFor="serviceName" className="block text-sm font-medium text-gray-700">
              Service Name
            </label>
            <input
              type="text"
              id="serviceName"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter spa service name"
            />
            {errors.serviceName && <p className="mt-1 text-sm text-red-600">{errors.serviceName}</p>}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Enter a brief description of the spa service"
            />
            {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price (in USD)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              step="1"
              min="0"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter service price"
            />
            {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
          </div>

          {/* Duration */}
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
              Duration (e.g., 60 minutes)
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter service duration"
            />
            {errors.duration && <p className="mt-1 text-sm text-red-600">{errors.duration}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Update Spa Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SpaUpdateForm;
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ProductUploadFormData {
  name: string;
  description: string;
  price: string;
  icon: string;
}

interface Product {
  name: string;
  description: string;
  price: string;
  icon: string;
}

const UploadPharmacyProductPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ProductUploadFormData>();
  const [products, setProducts] = useState<Product[]>([]);

  const onSubmit = (data: ProductUploadFormData) => {
    // Add the new product to the list
    setProducts((prev) => [...prev, data]);
    // Reset the form after submission
    reset();
    console.log('Product added:', data);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Admin: Add Pharmacy Products
        </h1>

        {/* Product Upload Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Add a New Product
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                className={`mt-2 block w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 ${
                  errors.name ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="e.g., Ibuprofen"
                {...register('name', { required: 'Product name is required' })}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                className={`mt-2 block w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 ${
                  errors.description ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="e.g., Pain relief medication, 200 mg tablets."
                {...register('description', { required: 'Description is required' })}
              />
              {errors.description && (
                <p className="mt-2 text-sm text-red-600">{errors.description.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="text"
                id="price"
                className={`mt-2 block w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 ${
                  errors.price ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="e.g., $15–25/pack"
                {...register('price', {
                  required: 'Price is required',
                  pattern: {
                    value: /^\$\d+–\d+\/(pack|month|session)$/,
                    message: 'Enter a valid price range (e.g., $15–25/pack)',
                  },
                })}
              />
              {errors.price && (
                <p className="mt-2 text-sm text-red-600">{errors.price.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="icon" className="block text-sm font-medium text-gray-700">
                Icon Type
              </label>
              <select
                id="icon"
                className={`mt-2 block w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 ${
                  errors.icon ? 'border-red-500' : 'border-gray-200'
                }`}
                {...register('icon', { required: 'Icon type is required' })}
              >
                <option value="">-- Select an icon --</option>
                <option value="Pill">Pill</option>
                <option value="Truck">Truck</option>
              </select>
              {errors.icon && (
                <p className="mt-2 text-sm text-red-600">{errors.icon.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
            >
              Add Product
            </button>
          </form>
        </div>

        {/* Display Added Products */}
        {products.length > 0 && (
          <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Added Products
            </h2>
            <div className="space-y-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 border border-gray-200 rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-base font-bold text-blue-600 mt-2">
                    {product.price}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Icon: {product.icon}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPharmacyProductPage;
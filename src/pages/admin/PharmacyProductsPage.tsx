import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface Product {
  name: string;
  description: string;
  price: string;
  icon: string;
}

interface ProductFormData {
  name: string;
  description: string;
  price: string;
  icon: string;
}

const AdminPharmacyProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      name: 'Metformin',
      description: 'Oral medication for type 2 diabetes, 500–2000 mg/day.',
      price: '$10–30/month',
      icon: 'Pill',
    },
    {
      name: 'Glucose Test Strips',
      description: 'For self-monitoring blood glucose, 50 strips.',
      price: '$20–50/pack',
      icon: 'Truck',
    },
    {
      name: 'Paracetamol',
      description: 'For fever and pain relief, 500 mg tablets.',
      price: '$5–10/pack',
      icon: 'Pill',
    },
  ]);

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ProductFormData>();

  const handleDelete = (index: number) => {
    setProducts((prev) => prev.filter((_, i) => i !== index));
    console.log('Product deleted at index:', index);
  };

  const handleEdit = (index: number, product: Product) => {
    setEditingIndex(index);
    reset(product);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    reset();
  };

  const onSubmit = (data: ProductFormData) => {
    if (editingIndex !== null) {
      setProducts((prev) =>
        prev.map((product, i) =>
          i === editingIndex ? { ...product, ...data } : product
        )
      );
      console.log('Product updated:', data);
      setEditingIndex(null);
      reset();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Admin: Pharmacy Products Listing
        </h1>

        <div className="bg-white shadow-2xl rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Product List
          </h2>
          {products.length === 0 ? (
            <p className="text-center text-gray-500 italic">No products available.</p>
          ) : (
            <div className="space-y-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-gray-100 transition-colors duration-200"
                >
                  {editingIndex === index ? (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                          Product Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className={`mt-2 block w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ${
                            errors.name ? 'border-red-500' : 'border-gray-200'
                          }`}
                          {...register('name', { required: 'Product name is required' })}
                        />
                        {errors.name && (
                          <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
                          Description
                        </label>
                        <textarea
                          id="description"
                          className={`mt-2 block w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ${
                            errors.description ? 'border-red-500' : 'border-gray-200'
                          }`}
                          rows={4}
                          {...register('description', { required: 'Description is required' })}
                        />
                        {errors.description && (
                          <p className="mt-2 text-sm text-red-600">{errors.description.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="price" className="block text-sm font-semibold text-gray-700">
                          Price
                        </label>
                        <input
                          type="text"
                          id="price"
                          className={`mt-2 block w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ${
                            errors.price ? 'border-red-500' : 'border-gray-200'
                          }`}
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
                        <label htmlFor="icon" className="block text-sm font-semibold text-gray-700">
                          Icon Type
                        </label>
                        <select
                          id="icon"
                          className={`mt-2 block w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ${
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

                      <div className="flex space-x-4">
                        <button
                          type="submit"
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl transition-colors duration-200 font-semibold"
                          onClick={handleSubmit(onSubmit)}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={handleCancelEdit}
                          className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-xl transition-colors duration-200 font-semibold"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                      <p className="text-base font-bold text-indigo-600 mt-2">
                        {product.price}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Icon: <span className="font-medium">{product.icon}</span>
                      </p>
                      <div className="mt-4 flex space-x-4">
                        <button
                          onClick={() => handleEdit(index, product)}
                          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl transition-colors duration-200 font-semibold"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-xl transition-colors duration-200 font-semibold"
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPharmacyProductsPage;
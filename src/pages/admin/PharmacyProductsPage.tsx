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

const AdminPharmacyProductsPage = () => {
  // Sample initial products (later, this can be shared with UploadPharmacyProductPage)
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

  // Handle delete
  const handleDelete = (index: number) => {
    setProducts((prev) => prev.filter((_, i) => i !== index));
    console.log('Product deleted at index:', index);
  };

  // Start editing a product
  const handleEdit = (index: number, product: Product) => {
    setEditingIndex(index);
    reset(product); // Pre-fill the form with the product's current values
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingIndex(null);
    reset();
  };

  // Save edited product
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
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Admin: Pharmacy Products Listing
        </h1>

        {/* Product List */}
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Product List
          </h2>
          {products.length === 0 ? (
            <p className="text-center text-gray-600">No products available.</p>
          ) : (
            <div className="space-y-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 border border-gray-200 rounded-xl"
                >
                  {editingIndex === index ? (
                    // Edit Form
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Product Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className={`mt-2 block w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 ${
                            errors.name ? 'border-red-500' : 'border-gray-200'
                          }`}
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
                          className={`mt-2 block w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 ${
                            errors.description ? 'border-red-500' : 'border-gray-200'
                          }`}
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
                          className={`mt-2 block w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 ${
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
                        <label htmlFor="icon" className="block text-sm font-medium text-gray-700">
                          Icon Type
                        </label>
                        <select
                          id="icon"
                          className={`mt-2 block w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 ${
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

                      <div className="flex space-x-2">
                        <button
                          type="submit"
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl transition-colors"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={handleCancelEdit}
                          className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-xl transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    // Display Product
                    <>
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
                      <div className="mt-4 flex space-x-2">
                        <button
                          onClick={() => handleEdit(index, product)}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-xl transition-colors"
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
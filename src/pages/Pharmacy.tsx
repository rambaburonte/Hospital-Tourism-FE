import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Search, Pill, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext'; // Assuming you have this context.
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface PharmacyFormData {
  medication: string;
}

interface Product {
  name: string;
  description: string;
  price: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PharmacyPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<PharmacyFormData>();
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<{ [key: string]: boolean }>({});

  const onSubmit = async (data: PharmacyFormData) => {
    setIsSearching(true);
    try {
      console.log('Searching for:', data.medication);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate search
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const products: Product[] = [
    {
      name: 'Metformin',
      description: 'Oral medication for type 2 diabetes, 500–2000 mg/day.',
      price: '$10–30/month',
      icon: Pill,
    },
    {
      name: 'Lantus Insulin',
      description: 'Long-acting insulin for type 1/2 diabetes, 10–20 U nightly.',
      price: '$50–100/month',
      icon: Pill,
    },
    {
      name: 'Semaglutide',
      description: 'GLP-1 agonist for type 2 diabetes, oral or injectable.',
      price: '$200–400/month',
      icon: Pill,
    },
    {
      name: 'Dexcom G6 CGM',
      description: 'Continuous glucose monitor for real-time tracking.',
      price: '$160–500/month',
      icon: Truck,
    },
    {
      name: 'Alpha-Lipoic Acid',
      description: 'Supplement for diabetic neuropathic pain relief.',
      price: '$25–210/month',
      icon: Pill,
    },
    {
      name: 'Glucose Test Strips',
      description: 'For self-monitoring blood glucose, 50 strips.',
      price: '$20–50/pack',
      icon: Truck,
    },
    {
      name: 'Paracetamol',
      description: 'For fever and pain relief, 500 mg tablets.',
      price: '$5–10/pack',
      icon: Pill,
    },
  ];

  // Handle individual order for a product
  const handleOrderNow = (product: Product) => {
    const totalAmount = parseFloat(product.price.split('–')[0].replace('$', '')).toFixed(2);
    const uniqueOrderId = `pharmacy-${Date.now()}`;
    const productDetails = [{ name: product.name, price: product.price, quantity: 1 }];

    navigate('/payment', {
      state: {
        uniqueBookingId: uniqueOrderId,
        serviceType: 'pharmacy',
        serviceId: null,
        serviceName: 'Pharmacy Order',
        slot: null,
        amount: `$${totalAmount}`,
        products: productDetails,
      },
    });
  };

  // Handle adding item to cart
  const handleAddToCart = (product: Product) => {
    const item = {
      id: `pharmacy-${product.name}`,
      name: product.name,
      price: product.price,
      quantity: 1,
    };
    addToCart(item);
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));

    toast.success(`${product.name} added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
    });
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Your Trusted Pharmacy
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-6 animate-fade-in delay-100">
            Discover medications and health products with ease.
          </p>
          <Link
            to="/pharmacy"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-blue-100 transition-colors animate-fade-in delay-200"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-lg rounded-2xl p-8 mb-12 animate-fade-in delay-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Search Medications
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="medication" className="block text-sm font-medium text-gray-700">
                  Find Your Medication
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="medication"
                    className={`mt-2 block w-full px-4 py-3 pl-12 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 ${
                      errors.medication ? 'border-red-500' : 'border-gray-200'
                    }`}
                    placeholder="e.g., Ibuprofen, Metformin"
                    {...register('medication', { required: 'Medication name is required' })}
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                {errors.medication && (
                  <p className="mt-2 text-sm text-red-600">{errors.medication.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors disabled:opacity-50"
              >
                {isSearching ? 'Searching...' : 'Search Medications'}
              </button>
            </form>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 animate-fade-in delay-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Popular Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div key={index} className="group relative bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                    <product.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center">{product.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 text-center">{product.description}</p>
                  <p className="mt-3 text-base font-bold text-blue-600 text-center">{product.price}</p>

                  <button
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={() => handleOrderNow(product)}
                  >
                    Order Now
                  </button>

                  <button
                    className={`${
                      addedItems[`pharmacy-${product.name}`] ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
                    } text-white px-6 py-2 rounded-full transition-colors duration-300 mt-2`}
                    onClick={() => !addedItems[`pharmacy-${product.name}`] && handleAddToCart(product)}
                    disabled={addedItems[`pharmacy-${product.name}`]}
                  >
                    {addedItems[`pharmacy-${product.name}`] ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in delay-600">
            <p className="text-gray-600 text-lg">
              Need assistance?{' '}
              <Link to="/contact" className="text-blue-600 font-semibold hover:underline">
                Contact our pharmacists
              </Link>
            </p>
            <p className="text-sm text-gray-500 mt-3">Your data is protected under HIPAA-compliant policies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyPage;

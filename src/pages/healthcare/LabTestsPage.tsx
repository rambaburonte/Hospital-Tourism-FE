// src/pages/user/LabTestsPage.tsx
import React, { useState } from 'react';
import { Microscope } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; // Adjust the path as necessary
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LabTestsPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<{ [key: string]: boolean }>({});

  const labTests = [
    {
      id: 1,
      name: 'Complete Blood Count (CBC)',
      description: 'Measures different components of your blood including red cells, white cells, and platelets',
      price: 45.99,
      turnaroundTime: '24 hours',
    },
    {
      id: 2,
      name: 'Comprehensive Metabolic Panel',
      description: 'Measures blood sugar, electrolyte levels, kidney and liver function',
      price: 79.99,
      turnaroundTime: '24-48 hours',
    },
    {
      id: 3,
      name: 'Lipid Panel',
      description: 'Measures cholesterol levels and other blood fats',
      price: 59.99,
      turnaroundTime: '24 hours',
    },
  ];

  const handleBookNow = (test: typeof labTests[0]) => {
    const totalAmount = test.price.toFixed(2);
    const uniqueBookingId = `lab-${Date.now()}`;
    const serviceDetails = [
      {
        name: test.name,
        price: `$${totalAmount}`,
        quantity: 1,
      },
    ];

    navigate('/payment', {
      state: {
        uniqueBookingId,
        serviceType: 'lab',
        serviceId: test.id,
        serviceName: test.name,
        slot: null,
        amount: `$${totalAmount}`,
        products: serviceDetails,
      },
    });
  };

  const handleAddToCart = (test: typeof labTests[0]) => {
    const item = {
      id: `lab-${test.id}`,
      name: test.name,
      price: test.price,
      quantity: 1,
    };
    addToCart(item);
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    toast.success(`${test.name} added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
    });
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer />
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Microscope className="h-12 w-12 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Laboratory Tests</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get accurate and reliable lab test results from our certified laboratories.
          Fast turnaround times and competitive pricing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {labTests.map((test) => {
          const itemId = `lab-${test.id}`;
          const isAdded = addedItems[itemId];
          return (
            <div
              key={test.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{test.name}</h3>
                <p className="text-gray-600 mb-4">{test.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">${test.price}</p>
                    <p className="text-sm text-gray-500">Results in {test.turnaroundTime}</p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                      onClick={() => handleBookNow(test)}
                    >
                      Book Now
                    </button>
                    <button
                      className={`${
                        isAdded ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
                      } text-white px-6 py-2 rounded-full transition-colors duration-300`}
                      onClick={() => !isAdded && handleAddToCart(test)}
                      disabled={isAdded}
                    >
                      {isAdded ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Our Lab Services?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Certified Labs</h3>
            <p className="text-gray-600">All our laboratories are certified and follow strict quality control measures</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Quick Results</h3>
            <p className="text-gray-600">Get your test results within 24-48 hours</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-2">Affordable Pricing</h3>
            <p className="text-gray-600">Competitive prices with no hidden charges</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabTestsPage;

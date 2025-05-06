import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SpaService {
  name: string;
  description: string;
  price: string;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const SpaServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<{ [key: string]: boolean }>({});

  const services: SpaService[] = [
    {
      name: 'Therapeutic Massage',
      description: 'Experience deep relaxation with our professional massage therapy services.',
      price: 'From $80/hour',
    },
    {
      name: 'Luxury Facial',
      description: 'Rejuvenate your skin with our premium facial treatments.',
      price: 'From $95/session',
    },
    {
      name: 'Body Wraps',
      description: 'Detoxify and nourish your body with our signature body treatments.',
      price: 'From $120/session',
    },
  ];

  const handleBookNow = (service: SpaService) => {
    const totalAmount = parseFloat(service.price.replace('From $', '').split('/')[0]).toFixed(2);
    const uniqueBookingId = `spa-${Date.now()}`;

    const serviceDetails = [
      {
        name: service.name,
        price: service.price,
        quantity: 1,
      },
    ];

    navigate('/payment', {
      state: {
        uniqueBookingId,
        serviceType: 'spa',
        serviceId: null,
        serviceName: service.name,
        slot: null,
        amount: `$${totalAmount}`,
        products: serviceDetails,
      },
    });
  };

  const handleAddToCart = (service: SpaService) => {
    const itemId = `spa-${service.name}`;
    const priceValue = parseFloat(service.price.replace('From $', '').split('/')[0]);

    const item: CartItem = {
      id: itemId,
      name: service.name,
      price: priceValue,
      quantity: 1,
    };

    addToCart(item);
    setAddedItems((prev) => ({ ...prev, [itemId]: true }));
    toast.success(`${service.name} added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
    });
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [itemId]: false }));
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <ToastContainer />
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
          Spa & Wellness Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const itemId = `spa-${service.name}`;
            const isAdded = addedItems[itemId];

            return (
              <div
                key={itemId}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-lg font-semibold text-teal-600 mb-4">{service.price}</div>
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-teal-600 text-white py-2 px-4 rounded-xl hover:bg-teal-700 transition-colors duration-200 font-semibold"
                      onClick={() => handleBookNow(service)}
                    >
                      Book Now
                    </button>
                    <button
                      className={`${
                        isAdded ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
                      } text-white py-2 px-4 rounded-xl transition-colors duration-200 font-semibold`}
                      onClick={() => !isAdded && handleAddToCart(service)}
                      disabled={isAdded}
                    >
                      {isAdded ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpaServicesPage;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Headphones, Globe } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Translator {
  id: string;
  name: string;
  languages: string[];
  experience: string;
  fee: string;
}

interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
}

const TranslatorsPage: React.FC = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [addedItems, setAddedItems] = useState<{ [key: string]: boolean }>({});

  const translators: Translator[] = [
    {
      id: 't1',
      name: 'Alice Johnson',
      languages: ['English', 'Spanish', 'French'],
      experience: '5 years',
      fee: '$30/hour',
    },
    {
      id: 't2',
      name: 'Ravi Kumar',
      languages: ['Hindi', 'English', 'Tamil'],
      experience: '8 years',
      fee: '$25/hour',
    },
    {
      id: 't3',
      name: 'Li Wei',
      languages: ['Mandarin', 'English'],
      experience: '4 years',
      fee: '$35/hour',
    },
  ];

  const handleBookNow = (translator: Translator) => {
    const totalAmount = parseFloat(translator.fee.replace('$', '').replace('/hour', '')).toFixed(2);
    const bookingId = `translator-${Date.now()}`;
    const productDetails = [{ name: translator.name, price: translator.fee, quantity: 1 }];

    navigate('/payment', {
      state: {
        uniqueBookingId: bookingId,
        serviceType: 'translator',
        serviceId: translator.id,
        serviceName: translator.name,
        slot: null,
        amount: `$${totalAmount}`,
        products: productDetails,
      },
    });
  };

  const handleAddToCart = (translator: Translator) => {
    const item: CartItem = {
      id: `translator-${translator.id}`,
      name: translator.name,
      price: translator.fee,
      quantity: 1,
    };
    addToCart(item);
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));

    toast.success(`${translator.name} added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
    });

    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Certified Translators</h1>
          <p className="text-lg md:text-xl text-purple-100 mb-6">
            Hire experts for professional translation services.
          </p>
          <Link
            to="/translators"
            className="inline-block bg-white text-purple-600 font-semibold py-3 px-6 rounded-xl hover:bg-purple-100 transition-colors"
          >
            Explore Translators
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {translators.map((translator) => (
            <div
              key={translator.id}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 text-center">{translator.name}</h3>
              <p className="mt-1 text-sm text-gray-600 text-center">
                Languages: {translator.languages.join(', ')}
              </p>
              <p className="mt-1 text-sm text-gray-500 text-center">Experience: {translator.experience}</p>
              <p className="mt-3 text-base font-bold text-purple-600 text-center">{translator.fee}</p>

              <button
                className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-xl hover:bg-indigo-700 transition-colors duration-200 font-semibold"
                onClick={() => handleBookNow(translator)}
              >
                Book Now
              </button>

              <button
                className={`mt-2 w-full ${
                  addedItems[`translator-${translator.id}`]
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700'
                } text-white py-2 px-4 rounded-xl transition-colors duration-200 font-semibold`}
                onClick={() =>
                  !addedItems[`translator-${translator.id}`] && handleAddToCart(translator)
                }
                disabled={addedItems[`translator-${translator.id}`]}
              >
                {addedItems[`translator-${translator.id}`] ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Need help choosing a translator?{' '}
            <Link to="/contact" className="text-purple-600 font-semibold hover:underline">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TranslatorsPage;

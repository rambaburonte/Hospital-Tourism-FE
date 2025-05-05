// src/pages/CartPage.tsx
import React from 'react';
import { useCart } from '../../context/CartContext';

import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, totalAmount } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    const uniqueBookingId = `cart-${Date.now()}`;
    const products = cartItems.map(({ id, name, price, quantity }) => ({
      id,
      name,
      price,
      quantity,
    }));

    navigate('/payment', {
      state: {
        uniqueBookingId,
        serviceType: 'cart',
        amount: `$${totalAmount.toFixed(2)}`,
        products,
      },
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>
                    ${item.price} × {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl font-bold">Total: ${totalAmount.toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
              Clear Cart
            </button>
          </div>
          <button
            onClick={handleCheckout}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;

'use client';
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white p-6 text-center">
        <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty.</p>
        ) : (
          <div className="space-y-6 flex flex-col items-center">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-zinc-800 p-4 rounded-lg shadow-md w-full max-w-2xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain bg-white rounded mr-4"
                />
                <div className="flex-1 text-left">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-400 line-clamp-2">{item.description}</p>
                  <p className="text-red-400 font-bold mt-1">
                    ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="mt-6 text-2xl font-bold text-green-400">
              Total: ₹{getTotal().toFixed(2)}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

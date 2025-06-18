'use client';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function ProductCard({ product }) {
  const router = useRouter();

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-zinc-800 text-white p-4 rounded-lg shadow border border-zinc-700 hover:scale-105 transition-transform">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain rounded bg-white"
      />
      <h2 className="mt-3 font-semibold text-lg">{product.name}</h2>
      <p className="text-sm text-gray-400 line-clamp-2">{product.description}</p>
      <p className="mt-2 text-red-400 font-bold">₹{product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
      >
        🛒 Add to Cart
      </button>
    </div>
  );
}

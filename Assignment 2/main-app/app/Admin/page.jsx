'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [form, setForm] = useState({});
  const router = useRouter();

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  const startEdit = (product) => {
    setEditingProductId(product.id);
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveEdit = async (id) => {
  try {
    const res = await fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (!res.ok) throw new Error('Failed to update');

    toast.success('✅ Product updated!');
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...form } : p))
    );
    setEditingProductId(null);
  } catch (error) {
    console.error(error);
    toast.error('❌ Failed to update product');
  }
};

  const deleteProduct = async (id) => {
    const confirmDelete = confirm('Are you sure you want to delete this product?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete');

      toast.success('🗑️ Product deleted');
      setProducts(products.filter((p) => p.id !== id));
    } catch (error) {
      console.error(error);
      toast.error('❌ Failed to delete product');
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-10 text-white">
        <h1 className="text-4xl font-bold text-center mb-10 border-b pb-4">🛠️ Admin Dashboard</h1>
        <div className="space-y-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 p-6 rounded-md border border-gray-700 flex flex-col md:flex-row gap-6"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-cover rounded-md border"
              />

              <div className="flex-1">
                {editingProductId === product.id ? (
                  <div className="space-y-4 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm mb-1">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded text-white border border-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Price</label>
                        <input
                          type="number"
                          name="price"
                          value={form.price}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded text-white border border-gray-400"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm mb-1">Description</label>
                        <textarea
                          name="description"
                          value={form.description}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-3 py-2 rounded text-white border border-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Category</label>
                        <input
                          type="text"
                          name="category"
                          value={form.category}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded text-white border border-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1">Image URL</label>
                        <input
                          type="text"
                          name="image"
                          value={form.image}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded text-white     border border-gray-400"
                        />
                      </div>
                    </div>

                    {form.image && (
                      <img
                        src={form.image}
                        alt="Preview"
                        className="w-32 h-32 object-cover rounded-md border mt-4"
                      />
                    )}

                    <div className="flex gap-4 mt-4">
                      <button
                        onClick={() => saveEdit(product.id)}
                        className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded text-white font-medium flex items-center gap-1"
                      >
                        ✅ Save
                      </button>
                      <button
                        onClick={() => setEditingProductId(null)}
                        className="bg-gray-600 hover:bg-gray-700 px-5 py-2 rounded text-white font-medium flex items-center gap-1"
                      >
                        ❌ Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <p className="text-sm text-gray-300">{product.description}</p>
                    <p className="text-lg font-semibold text-green-400">₹{product.price}</p>
                    <p className="text-sm text-gray-400">{product.category}</p>
                    <div className="flex gap-3 mt-2">
                      <button
                        onClick={() => startEdit(product)}
                        className="bg-yellow-500 px-4 py-1 rounded"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="bg-red-600 px-4 py-1 rounded"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

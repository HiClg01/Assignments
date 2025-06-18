'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function AddProductPage() {
  const [name, setName] = useState('');
  const [prompt, setPrompt] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateDescription = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (data.description) {
        setDescription(data.description);
        toast.success('Description generated!');
      } else {
        toast.error('Failed to generate description');
      }
    } catch (err) {
      toast.error('Error generating description');
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/add-product', {
      method: 'POST',
      body: JSON.stringify({
        name,
        description,
        price: parseFloat(price),
        image,
        category,
      }),
    });

    if (res.ok) {
      toast.success('Product added!');
      setName('');
      setPrompt('');
      setDescription('');
      setPrice('');
      setImage('');
      setCategory('');
    } else {
      toast.error('Failed to add product');
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">📦 Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded bg-zinc-800 border border-zinc-600"
        />

        <input
          type="text"
          placeholder="Enter prompt to generate description"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-2 rounded bg-zinc-800 border border-zinc-600"
        />
        <button
          type="button"
          onClick={handleGenerateDescription}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Description'}
        </button>

        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 rounded bg-zinc-800 border border-zinc-600"
          rows="4"
        />

        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 rounded bg-zinc-800 border border-zinc-600"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 rounded bg-zinc-800 border border-zinc-600"
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 rounded bg-zinc-800 border border-zinc-600"
        />

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded"
        >
          Submit Product
        </button>
      </form>
    </main>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Header from '@/components/header';
import Footer from '@/components/footer';

const categories = [
  'Books', 'Electronics', 'Computers & Accessories', 'Mobiles & Accessories',
  'Clothing & Accessories', 'Shoes', 'Watches', 'Jewellery', 'Beauty & Personal Care',
  'Health & Household', 'Home & Kitchen', 'Furniture', 'Home Decor', 'Kitchen Tools',
  'Grocery & Gourmet Foods', 'Pet Supplies', 'Toys & Games', 'Baby Products',
  'Sports & Outdoors', 'Fitness Equipment', 'Automotive', 'Industrial & Scientific',
  'Office Products', 'Musical Instruments', 'Garden & Outdoors', 'Tools & Home Improvement',
  'Video Games', 'Movies & TV Shows', 'Software', 'Luggage & Bags', 'Handmade Products',
  'Stationery & School Supplies'
];

export default function UploadProduct() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: '',
    prompt: '',
  });

  const [loading, setLoading] = useState(false);
  const [enhancing, setEnhancing] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Number(form.price) <= 0) {
      toast.error('❌ Price must be greater than 0');
      return;
    }

    if (!isValidUrl(form.image)) {
      toast.error('❌ Invalid image URL');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const text = await res.text();

      if (!res.ok) {
        console.error(`Upload failed! Status: ${res.status}, Message: ${text}`);
        toast.error(`❌ Failed to upload. Status: ${res.status}`);
        return;
      }

      toast.success('✅ Product added!');
      router.push('/');
    } catch (error) {
      console.error('Submit Error:', error);
      toast.error('❌ Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  const handleEnhanceDescription = async () => {
  if (!form.name && !form.prompt && !form.description) {
    toast.error('Enter product name or prompt first!');
    return;
  }

  setLoading(true);
  try {
    const res = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: form.prompt || form.name || form.description }),
    });

    const data = await res.json();
    if (data.description) {
      setForm((prev) => {
        const updated = { ...prev, description: data.description };
        
        return updated;
      });
      toast.success('✅ Description generated!');
    } else {
      toast.error('⚠️ No description returned.');
    }
  } catch (err) {
    console.error(err);
    toast.error('❌ Error calling Gemini');
  } finally {
    setLoading(false);
  }
};


  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Upload a New Product</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Product Name"
              required
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor="prompt" className="block mb-1 font-medium">Prompt for Gemini (optional)</label>
            <input
              type="text"
              id="prompt"
              name="prompt"
              value={form.prompt}
              onChange={handleChange}
              placeholder="E.g. Stylish sports shoes for men"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block mb-1 font-medium">Description</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              placeholder="Write description or use Gemini"
              className="w-full border px-4 py-2 rounded resize-none overflow-hidden focus:outline-none focus:ring-2 focus:ring-red-500"
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
            />
            <button
  type="button"
  onClick={handleEnhanceDescription}
  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
>
  ✨ Enhance with Gemini
</button>


          </div>

          <div>
            <label htmlFor="price" className="block mb-1 font-medium">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
              required
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor="image" className="block mb-1 font-medium">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Image URL"
              required
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {form.image && (
            <img
              src={form.image}
              alt="Image Preview"
              className="w-full max-h-64 object-contain border rounded"
            />
          )}

          <div>
            <label htmlFor="category" className="block mb-1 font-medium">Category</label>
            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select a Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded disabled:opacity-60"
          >
            {loading ? 'Uploading...' : 'Upload Product'}
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}

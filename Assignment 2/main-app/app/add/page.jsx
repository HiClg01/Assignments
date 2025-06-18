"use client";

import { useState } from "react";
import { createProduct } from "@/lib/actions";
import { generateGeminiDescription } from "@/lib/gemini";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AddProductPage() {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    category: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerate = async () => {
    if (!product.name) return alert("Enter product name first");
    setGenerating(true);
    const prompt = `Write a cool and attractive product description for ${product.name}`;
    const desc = await generateGeminiDescription(prompt);
    setProduct((prev) => ({ ...prev, description: desc }));
    setGenerating(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await createProduct(product);
    setLoading(false);
    alert("Product created!");
    setProduct({
      name: "",
      image: "",
      price: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow max-w-xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-red-600">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full bg-gray-900 p-3 rounded-md border border-gray-700 focus:outline-none"
            required
          />
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full bg-gray-900 p-3 rounded-md border border-gray-700 focus:outline-none"
            required
          />
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full bg-gray-900 p-3 rounded-md border border-gray-700 focus:outline-none"
            required
          />
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full bg-gray-900 p-3 rounded-md border border-gray-700 focus:outline-none"
            required
          />

          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold">Description</label>
            <Button
              type="button"
              onClick={handleGenerate}
              disabled={generating}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 text-sm"
            >
              {generating ? "Generating..." : "Generate Description"}
            </Button>
          </div>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Product Description"
            rows={5}
            className="w-full bg-gray-900 p-3 rounded-md border border-gray-700 focus:outline-none"
            required
          />

          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 rounded-md"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Create Product"}
          </Button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

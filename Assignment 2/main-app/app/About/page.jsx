'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-screen px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Hero Section */}
          <section className="text-center">
            <h1 className="text-6xl font-extrabold mb-4">
              About <span className="text-red-600">Snap</span>Kart
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              India's favorite e-commerce hub. Discover, shop, and enjoy — all in one place.
            </p>
          </section>

          {/* Our Story */}
          <section>
            <h2 className="text-4xl font-semibold mb-6">📖 Our Story</h2>
            <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
              <p>
                SnapKart started with a simple mission: to make online shopping effortless and enjoyable for everyone. With a user-first approach, we offer a curated range of high-quality products at unbeatable prices.
              </p>
              <p>
                From fashion and electronics to daily essentials, SnapKart brings convenience, variety, and savings straight to your doorstep.
              </p>
            </div>
          </section>

          {/* Our Core Values */}
          <section>
            <h2 className="text-4xl font-semibold mb-6">🧱 Our Core Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-3">
              <li>Customer Obsession – We exist to serve and delight our customers.</li>
              <li>Integrity – Always do the right thing, even when no one is watching.</li>
              <li>Innovation – Continuously improving through smart technology.</li>
              <li>Empowerment – Helping Indian sellers grow through our platform.</li>
              <li>Sustainability – Promoting eco-friendly packaging and logistics.</li>
            </ul>
          </section>

          {/* Our Mission */}
          <section>
            <h2 className="text-4xl font-semibold mb-6">🚀 Our Mission</h2>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-3">
              <li>Deliver exceptional value with every product.</li>
              <li>Ensure a seamless and secure shopping experience.</li>
              <li>Empower Indian shoppers with global quality.</li>
              <li>Support local sellers and boost small businesses.</li>
            </ul>
          </section>

          {/* Why Choose SnapKart */}
          <section>
            <h2 className="text-4xl font-semibold mb-6">🎯 Why Choose SnapKart?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-lg text-gray-300">
              <div>
                <h3 className="text-xl font-bold mb-2 text-red-500">🛍️ Wide Range</h3>
                <p>From groceries to gadgets — everything under one roof.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-red-500">🚚 Fast Delivery</h3>
                <p>Lightning-fast shipping across India, even in remote areas.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-red-500">🔐 Secure Payments</h3>
                <p>Trusted payment gateways with full buyer protection.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-red-500">📞 24x7 Support</h3>
                <p>Always here to help with your orders and concerns.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-red-500">🌐 Local to Global</h3>
                <p>Buy local, sell global — powered by Indian innovation.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-red-500">💯 Quality Guarantee</h3>
                <p>Every product goes through rigorous quality checks.</p>
              </div>
            </div>
          </section>

          {/* Categories We Serve */}
          <section>
            <h2 className="text-4xl font-semibold mb-6">📦 Categories We Serve</h2>
            <p className="text-lg text-gray-300 mb-4">SnapKart is your one-stop shop for everything:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-200 text-base">
              <span>📱 Electronics</span>
              <span>👕 Fashion</span>
              <span>🏠 Home & Kitchen</span>
              <span>🍼 Baby Products</span>
              <span>🧴 Personal Care</span>
              <span>🐾 Pet Supplies</span>
              <span>🎮 Video Games</span>
              <span>🧳 Luggage</span>
              <span>🧸 Toys</span>
              <span>🍽️ Groceries</span>
              <span>📚 Stationery</span>
              <span>🛠️ Tools</span>
            </div>
          </section>

          {/* Powered by Innovation */}
          <section>
            <h2 className="text-4xl font-semibold mb-6">🧠 Powered by Innovation</h2>
            <p className="text-lg text-gray-300 mb-4">
              SnapKart is not just a marketplace — it's a tech-driven platform built using:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
              <li>Next.js for lightning-fast, SEO-friendly performance</li>
              <li>Tailwind CSS for beautiful, responsive design</li>
              <li>Prisma + PostgreSQL for robust backend</li>
              <li>Gemini AI for smart product descriptions</li>
              <li>Cloud-hosted for global scalability and uptime</li>
            </ul>
          </section>

          {/* Meet Our Team */}
          <section>
            <h2 className="text-4xl font-semibold mb-6">💼 Meet Our Team</h2>
            <p className="text-lg text-gray-300">
              Behind SnapKart is a team of passionate designers, engineers, marketers, and support specialists
              dedicated to creating the best shopping experience for you. We're based in India and proud to serve every corner of the country.
            </p>
          </section>

          {/* Customer Reviews */}
          <section>
            <h2 className="text-4xl font-semibold mb-6">🌟 What Our Customers Say</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-200">
              <div className="p-4 border border-gray-700 rounded-lg bg-gray-900">
                <p className="italic">"SnapKart delivers faster than anyone else. I even get deliveries in my village!"</p>
                <span className="block mt-2 text-sm text-red-400">– Ramesh K., Bihar</span>
              </div>
              <div className="p-4 border border-gray-700 rounded-lg bg-gray-900">
                <p className="italic">"The product quality is top-notch. I trust SnapKart more than local stores."</p>
                <span className="block mt-2 text-sm text-red-400">– Priya S., Mumbai</span>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center mt-16">
            <h2 className="text-3xl font-semibold mb-2">Ready to Experience SnapKart?</h2>
            <p className="text-lg text-gray-400 mb-6">
              Discover the smarter way to shop — safe, fast, and fun.
            </p>
            <a
              href="/"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg transition hover:scale-105 shadow"
            >
              Shop Now
            </a>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}

// app/page.jsx
import { prisma } from '@/lib/prisma';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function Home() {
  let products = [];

  try {
    products = await prisma.product.findMany();
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">
            Featured Products
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.length === 0 ? (
              <p className="col-span-full text-center text-gray-400">
                No products found.
              </p>
            ) : (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

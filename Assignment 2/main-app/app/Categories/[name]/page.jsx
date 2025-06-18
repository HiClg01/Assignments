// app/Categories/[name]/page.jsx
import { prisma } from '@/lib/db';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/header';
import Footer from '@/components/footer';

export async function generateStaticParams() {
  const categories = await prisma.product.findMany({
    select: { category: true },
    distinct: ['category'],
  });

  return categories.map((cat) => ({
    name: cat.category,
  }));
}

export default async function CategoryPage({ params }) {
  const category = decodeURIComponent(params.name);
  const products = await prisma.product.findMany({
    where: {
      category: {
        equals: category,
        mode: 'insensitive',
      },
    },
  });

  return (
    <>
    <Header/>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Products in <span className="text-red-500">{category}</span>
      </h1>

      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}

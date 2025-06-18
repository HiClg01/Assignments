// app/Categories/page.jsx
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

const categories = [
  'Books',
  'Electronics',
  'Computers & Accessories',
  'Mobiles & Accessories',
  'Clothing & Accessories',
  'Shoes',
  'Watches',
  'Jewellery',
  'Beauty & Personal Care',
  'Health & Household',
  'Home & Kitchen',
  'Furniture',
  'Home Decor',
  'Kitchen Tools',
  'Grocery & Gourmet Foods',
  'Pet Supplies',
  'Toys & Games',
  'Baby Products',
  'Sports & Outdoors',
  'Fitness Equipment',
  'Automotive',
  'Industrial & Scientific',
  'Office Products',
  'Musical Instruments',
  'Garden & Outdoors',
  'Tools & Home Improvement',
  'Video Games',
  'Movies & TV Shows',
  'Software',
  'Luggage & Bags',
  'Handmade Products',
  'Stationery & School Supplies'
];


export default function CategoriesPage() {
  return (
    <>
    <Header/>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Browse by Category</h1>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/Categories/${encodeURIComponent(cat)}`}
            className="bg-zinc-800 text-white p-4 rounded shadow hover:bg-red-600 transition text-center"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

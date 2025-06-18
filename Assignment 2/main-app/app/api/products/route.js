import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// 👉 POST /api/products – Create a new product
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, description, price, image, category } = body;

    // Validate required fields
    if (!name || !description || !price || !image || !category) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        image,
        category,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('POST /api/products error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// 👉 GET /api/products – Fetch all products
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error('GET /api/products error:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

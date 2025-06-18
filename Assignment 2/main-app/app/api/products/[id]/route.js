import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// UPDATE product
export async function PUT(request, { params }) {
  const id = params.id;
  const body = await request.json();

  try {
    const updated = await prisma.product.update({
      where: { id },
      data: {
        name: body.name,
        description: body.description,
        price: parseFloat(body.price),
        category: body.category,
        image: body.image,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}

// DELETE product
export async function DELETE(request, { params }) {
  const id = params.id;

  try {
    await prisma.product.delete({ where: { id } });
    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}

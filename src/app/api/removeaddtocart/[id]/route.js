// app/api/removedBook/[id]/route.js
import prisma from 'app/lib/prisma/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    // Example: simulate deletion from database
    console.log(`Deleting book with ID: ${id}`);
   await prisma.cart.delete({
    where: {
        id: Number(id),
      },
    });


    return NextResponse.json({ message: 'Book removed from cart' }, { status: 200 });
  } catch (error) {
    console.error('Failed to remove book:', error);
    return NextResponse.json({ error: 'Failed to remove book' }, { status: 500 });
  }
}

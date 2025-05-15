import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    const deletedBook = await prisma.book.delete({
      where: {
        id: parseInt(id),
      },
    });

    return new Response(JSON.stringify(deletedBook), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error deleting book:', error);
    return new Response(JSON.stringify({ message: 'Failed to delete book' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

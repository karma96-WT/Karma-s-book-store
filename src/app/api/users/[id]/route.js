import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(request, context) {
  const { params } = await context;
  const { id } = params;
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });

    return new Response(JSON.stringify(deletedUser), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    return new Response(JSON.stringify({ message: 'Failed to delete book' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

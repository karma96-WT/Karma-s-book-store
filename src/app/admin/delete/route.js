import prisma from '../../lib/prisma/prisma';

export async function GET(req) {
  try {
    const books = await prisma.book.findMany();
    return new Response(JSON.stringify(books), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Failed to fetch books:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch books' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

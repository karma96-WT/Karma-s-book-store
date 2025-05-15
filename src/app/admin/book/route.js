import prisma from '../../lib/prisma/prisma';


export async function POST(req) {
  const body = await req.json();
  const { title, autor, price, image ,genre} = body;

  try {
    const book = await prisma.book.create({
      data: {
        title,
        autor,
        price: parseFloat(price),
        image,
        genre,
      },
    });
    console.log(book);
    return new Response(JSON.stringify(book), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Failed to upload book:', error);
    return new Response(JSON.stringify({ error: 'Failed to create book' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
export default prisma;
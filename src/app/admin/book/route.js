import prisma from '../../lib/prisma/prisma';

export async function POST(req) {
  const body = await req.json();
  const { title, autor, price, image, genre } = body;

  try {
    const [book, notification] = await prisma.$transaction([
      prisma.book.create({
        data: {
          title,
          autor,
          price: parseFloat(price),
          image,
          genre,
        },
      }),
      prisma.notification.create({
        data: {
          message: `New book titled "${title}" is available now. Go check and Happy Reading`,
          createdAt: new Date(), // Ensure your Prisma schema has this field
        },
      }),
    ]);

    console.log(book, notification);

    return new Response(JSON.stringify({ book, notification }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Failed to upload book and notification:', error);
    return new Response(JSON.stringify({ error: 'Failed to create book or notification' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export default prisma;

import prisma from '../../lib/prisma/prisma';

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, autor, price, image, genre } = body;

    if (!title || !autor || !price) {
      throw new Error("Missing required fields");
    }

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
          message: `New book titled "${title}" is available now.`,
          createdAt: new Date(),
        },
      }),
    ]);

    return new Response(JSON.stringify({ book, notification }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: error.message || "Server Error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

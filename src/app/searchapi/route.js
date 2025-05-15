import { NextResponse } from 'next/server';
import prisma from '../lib/prisma/prisma'; // adjust path based on your Prisma setup

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ books: [] });
  }

  try {
    const books = await prisma.book.findMany({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            autor: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
    });

    return NextResponse.json({ books });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

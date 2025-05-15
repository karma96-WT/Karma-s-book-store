// app/users/cart/route.js
import { getIronSession } from 'iron-session';
import { sessionOptions } from '../../lib/session/session';
import { cookies } from 'next/headers';
import prisma from '../../lib/prisma/prisma';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // Get session
    const session = await getIronSession(req, NextResponse, sessionOptions);
    const user = session.user;

    if (!user || !user.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { bookid, title, author, price, genre } = await req.json();
    if (!bookid || !title || !author || !price || !genre) {
      return NextResponse.json({ error: 'Missing book information' }, { status: 400 });
    }

    // Save to cart table
    const cartEntry = await prisma.cart.create({
      data: {
        userid: user.id || 'Unknown',
        useremail: user.email,
        bookid,
        booktitle: title,
        bookauthor: author,
        price: parseInt(price),
        bookgenre: genre,
      },
    });

    return NextResponse.json({ message: 'Book added to cart', cart: cartEntry }, { status: 201 });
  } catch (error) {
    console.error('Add to cart error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

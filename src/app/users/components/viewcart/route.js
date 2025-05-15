// app/users/cart/view/route.js
import { getIronSession } from 'iron-session';
import { sessionOptions } from '../../../lib/session/session';
import prisma from '../../../lib/prisma/prisma';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    const session = await getIronSession(req, NextResponse, sessionOptions);
    const user = session.user;

    if (!user || !user.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const cart = await prisma.cart.findMany({
      where: { useremail: user.email },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ cart });
  } catch (error) {
    console.error('Fetch cart error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

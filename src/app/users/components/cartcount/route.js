// app/users/cart/count/route.js
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma/prisma';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '../../../lib/session/session';
import { cookies } from 'next/headers';

export async function GET(req) {
    const session = await getIronSession(req, NextResponse, sessionOptions);
    const user = session.user;

  if (!user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const count = await prisma.cart.findMany({
      where: { useremail: user.email },
    });

    return NextResponse.json({ count });
  } catch (error) {
    console.error('Cart count error:', error);
    return NextResponse.json({ error: 'Failed to fetch cart count' }, { status: 500 });
  }
}

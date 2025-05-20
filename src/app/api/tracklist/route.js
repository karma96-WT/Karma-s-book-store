// src/app/api/profile/route.js

import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import {sessionOptions} from '../../lib/session/session'; // adjust this import as needed
import prisma from '../../lib/prisma/prisma';


export async function GET(req) {
  const res = new NextResponse();
  const session = await getIronSession(req, res, sessionOptions);

  if (!session.user || !session.user.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const user = await prisma.order.findMany({
      where: { email: session.email },
      select: {
        name: true,
        email: true,
        phone: true,
        country: true,
        city: true,
        street: true,
        zip: true,
        cart: true,
        createdAt: true,
      },
    });
    

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    console.log(user);
    return NextResponse.json(user);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

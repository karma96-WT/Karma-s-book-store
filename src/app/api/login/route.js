// app/api/login/route.js
import prisma  from '../../lib/prisma/prisma';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions } from '../../lib/session/session';
import { cookies } from 'next/headers';
import { createCookieStoreWrapper } from 'app/lib/session/cookieStoreWrapper';
import { headers } from 'next/headers';

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Email and password required' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return NextResponse.json({ message: 'Incorrect password' }, { status: 401 });
  }

  // Create session
  const res = NextResponse.json({ message: 'Login successful', user: { id: user.id, email: user.email,role: user.role, } });
  const session = await getIronSession(req,res, sessionOptions);
  session.user = { id: user.id, email: user.email,role: user.role, };
  await session.save();

  const { password: _, ...safeUser } = user;

  return res;
}

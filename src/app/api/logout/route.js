// app/api/logout/route.js
/*import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { sessionOptions } from '../../lib/session/session';
import { NextResponse } from 'next/server';
import { createCookieStoreWrapper } from 'app/lib/session/cookieStoreWrapper';

export async function POST(req) {
  const cookieStore = createCookieStoreWrapper(cookies());
  const session = await getIronSession({ cookieStore}, sessionOptions);
  await session.destroy();

  return NextResponse.redirect(new URL('/Login', req.url)); // Use absolute path in App Router
}*/
// app/api/logout/route.js

import { getIronSession } from 'iron-session';
import { sessionOptions } from '../../lib/session/session';
import { cookies, headers } from 'next/headers';
import { createCookieStoreWrapper } from 'app/lib/session/cookieStoreWrapper';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const res = NextResponse.json({ message: 'Logged out successfully' });
  const session = await getIronSession(req,res, sessionOptions);
  session.destroy(); // Removes the session cookie

  return res;
}


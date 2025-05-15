import { getIronSession } from "iron-session";
import { sessionOptions } from "../../lib/session/session";
import { NextResponse } from "next/server";

export async function GET(req) {
  const res = new NextResponse();
  const session = await getIronSession(req, res, sessionOptions);

  if (session.user) {
    return NextResponse.json({ loggedIn: true, user: session.user });
  } else {
    return NextResponse.json({ loggedIn: false });
  }
}

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export const sessionOptions = {
  password: process.env.SECRET_KEY,
  cookieName: "user-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};

export async function getSession() {
    const cookieStore=cookies();

    if (!process.env.SECRET_KEY) {
        console.error("❌ SECRET_KEY is missing in environment variables");
      }

  return await getIronSession({cookieStore}, sessionOptions);
}

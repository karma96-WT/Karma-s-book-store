import { ironSession } from "iron-session";

export const defaultSession ={
    isLoggedIn: false
}

export const sessionOptions = {
  password: process.env.SECRETE_KEY,
  cookieName: 'user-session',
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  }
};

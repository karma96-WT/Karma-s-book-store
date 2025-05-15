import { Geist, Geist_Mono } from "next/font/google";
import "./style/globals.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import Provider from "./provider"; 
import Nav_bar from "./users/components/nab_bar/page"
import Metadata  from "next";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Book Store",
  icons: {
    icon: '/image/logo.png', // or .png
  },
  description: "Developed by Karma Wangchuk Titung",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Provider>
          <Nav_bar />
          {children}
        </Provider>

      </body>
    </html>
    </ClerkProvider>
  );
}

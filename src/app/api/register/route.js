// src/app/api/register/route.js
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.json();
  const { name, email, password, gewog, dzongkhag } = body;

  if (!name || !email || !password || !gewog || !dzongkhag) {
    console.log(body);
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }

  const existingUser = await prisma.user.findFirst({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      gewog,
      dzongkhag,
    },
  });

  const { password: _, ...safeUser } = user;

  return NextResponse.json({ message: "User registered", user: safeUser }, { status: 201 });
}

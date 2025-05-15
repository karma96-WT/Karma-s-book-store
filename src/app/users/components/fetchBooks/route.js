import { NextResponse } from "next/server";
import prisma  from "../../../lib/prisma/prisma";

//const prisma = new PrismaClient();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const genre = searchParams.get("genre");

  const books = await prisma.book.findMany({
    where: genre ? { genre } : {},
  });

  return NextResponse.json(books);
}

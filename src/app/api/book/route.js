import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const students = await prisma.book.findMany(); // or use "user" if that's the model name
    return new Response(JSON.stringify(students), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error fetching students:", error);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

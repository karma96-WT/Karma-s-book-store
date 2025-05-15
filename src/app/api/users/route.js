import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const user = await prisma.user.findMany(); // or use "user" if that's the model name
    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

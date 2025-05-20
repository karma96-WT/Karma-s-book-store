import { NextResponse } from 'next/server';
import prisma from 'app/lib/prisma/prisma'; // use alias (adjust as needed)

// GET /api/order
export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(orders); // return plain array for client
  } catch (err) {
    console.error('Fetch orders failed:', err);
    return NextResponse.json({ ok: false, error: 'Failed to fetch orders' }, { status: 500 });
  }
}

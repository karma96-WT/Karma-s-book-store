import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import prisma from 'app/lib/prisma/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { items, form } = await request.json();

    const line_items = items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: { name: `${item.name} — ${item.author}` },
        unit_amount: item.priceUSD,
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/users/components/addtocart`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      // metadata: {
      //   name: form.name,
      //   email: form.email,
      //   phone: form.phone,
      //   country: form.country,
      //   city: form.city,
      //   street: form.street,
      //   zip: form.zip,
      //   cart: JSON.stringify(items).slice(0, 400),
      // },
    });

    const cartEntry = await prisma.order.create({
      data: {
        name: form.name,
        email: form.email,
        phone: form.phone,
        country: form.country,
        city: form.city,
        street: form.street,
        zip: form.zip,
        cart: JSON.stringify(items).slice(0, 400),
      },
    });


    return NextResponse.json({ ok: true, sessionId: session.id });
  } catch (err) {
    console.error('Stripe create-session error:', err);
    return NextResponse.json(
      { ok: false, error: 'Could not start Stripe session' },
      { status: 500 }
    );
  }
}

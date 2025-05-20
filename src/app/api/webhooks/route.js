import { buffer } from 'micro';
import Stripe from 'stripe';
import { prisma } from '@/lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const sig = req.headers['stripe-signature'];
  const buf = await buffer(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook verify failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Build data object
    const orderData = {
      stripeSessionId: session.id,
      name:     session.metadata.name,
      email:    session.metadata.email,
      phone:    session.metadata.phone,
      country:  session.metadata.country,
      city:     session.metadata.city,
      street:   session.metadata.street,
      zip:      session.metadata.zip,
      cart:     JSON.parse(session.metadata.cart),
      totalUSD: session.amount_total / 100,
    };

    // ✅ Save to PostgreSQL via Prisma
    try {
      await prisma.order.create({ data: orderData });
      console.log('Order stored:', orderData.email, orderData.totalUSD);
    } catch (dbErr) {
      console.error('DB insert failed:', dbErr);
    }
  }

  res.status(200).json({ received: true });
}

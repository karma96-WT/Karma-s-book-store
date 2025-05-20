'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import './local.css';          // reuse your styles

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal]     = useState(0);

  /* ---------- form state ---------- */
  const [form, setForm] = useState({
    name:        '',
    email:       '',
    phone:       '',
    country:     '',
    city:        '',
    street:      '',
    zip:         ''
  });
  const [error, setError] = useState('');

  /* ---------- fetch cart when page loads ---------- */
  useEffect(() => {
    (async () => {
      const res  = await fetch('/users/components/viewcart');
      const data = await res.json();
      if (res.ok) {
        setCartItems(data.cart);
        setTotal(data.cart.reduce((s, i) => s + i.price, 0));
      }
    })();
  }, []);

  /* ---------- utility ---------- */
  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const BTN_TO_USD = 0.012;               // 1 Nu ≈ 0.012 USD  (adjust!)

  /* ---------- main submit ---------- */
  const handlePayment = async () => {
    for (const key in form) {
      if (!form[key]) {
        setError('Please fill every field'); return;
      }
    }
    setError('');

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    if (!stripe) {
      alert("Stripe failed to load.");
      return;
    }

    try {
      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            name: item.booktitle,
            author: item.bookauthor,
            priceUSD: Math.round(item.price * BTN_TO_USD * 100), // Convert to USD cents
          })),
          form: form,
        }),
      });

      const data = await response.json();

      if (!data.ok || !data.sessionId) {
        throw new Error("Checkout session creation failed");
      }

      await stripe.redirectToCheckout({ sessionId: data.sessionId });
    } catch (err) {
      console.error("Payment error:", err);
      alert("Failed to initiate payment");
    }
  };

  
  /* ---------- JSX ---------- */
  return (
    <div className="checkout-container">
      <div className='heading'><h2>Shipping & Contact Details</h2></div>

      <div className="form-grid">
        <input  name="name"    placeholder="Full name"   value={form.name}    onChange={handleChange}/>
        <input  name="email"   placeholder="Email"       value={form.email}   onChange={handleChange} type="email"/>
        <input  name="phone"   placeholder="Phone"       value={form.phone}   onChange={handleChange}/>
        <input  name="country" placeholder="Country"     value={form.country} onChange={handleChange}/>
        <input  name="city"    placeholder="City"        value={form.city}    onChange={handleChange}/>
        <input  name="street"  placeholder="Street"      value={form.street}  onChange={handleChange}/>
        <input  name="zip"     placeholder="ZIP / Post"  value={form.zip}     onChange={handleChange}/>
      </div>

      {error && <p style={{color:'red'}}>{error}</p>}

      <div className="summary">
        <h4>Total: Nu {total}  (≈ USD {(total*BTN_TO_USD).toFixed(2)})</h4>
      </div>

      <button className="pay-button" onClick={handlePayment}>
        Pay with Card
      </button>
    </div>
  );
}

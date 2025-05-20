'use client';

import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import './local.css';
import { useRouter } from 'next/navigation';


export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const BTN_TO_USD = 0.012; // Conversion rate: 1 BTN = 0.012 USD
  const router = useRouter();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch('/users/components/viewcart');
        const data = await res.json();
        if (res.ok) {
          setCartItems(data.cart);
          const totalPrice = data.cart.reduce((sum, item) => sum + item.price, 0);
          setTotal(totalPrice);
        } else {
          alert(data.error || 'Failed to fetch cart');
        }
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    };

    fetchCart();
  }, []);

  async function handleRemove(id) {
    const confirmDelete = confirm("Are you sure you want to remove this Book?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/removeaddtocart/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setCartItems(prev => prev.filter(item => item.id !== id));
        setTotal(prev => {
          const removedItem = cartItems.find(item => item.id === id);
          return removedItem ? prev - removedItem.price : prev;
        });
      } else {
        const data = await res.json();
        alert(data.error || "Failed to remove item");
      }
    } catch (err) {
      console.error("Error removing item:", err);
    }
  }

  function handlePayment(){
    router.push('/checkoutInfo');
  }

  return (
    <div className="cart-container">
      <h2 className='heading'>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        < >
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image || "/default.jpg"} width={100} height={100} alt="Book Cover" />
                <strong>{item.booktitle}</strong> by {item.bookauthor}
                <p><strong>Nu: {item.price}</strong></p>
                <button className='remove-button' onClick={() => handleRemove(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <hr />
          <div className="cart-total">
            <h4><span className='total'>Total Price in Nu:  </span> Nu.{total}</h4>
            <p > <span className='total'>Equlvalent value in USD: </span>${Math.round(total * BTN_TO_USD * 100) / 100}</p>
          </div>
          <button className='pay-button' onClick={handlePayment}>
            Proceed with Paying
          </button>
        </>
      )}
    </div>
  );
}

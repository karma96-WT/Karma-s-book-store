'use client';
import { useEffect, useState } from 'react';
import './local.css'

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

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
        // Update UI by removing the item locally
        setCartItems(prev => prev.filter(item => item.id !== id));
       // Recalculate total
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


  return (
    <div className="cart-container">
      <h2 className='heading'>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <strong>{item.booktitle}</strong> by {item.bookauthor} | Nu: {item.price}
                <button className='remove-button' onClick={() => handleRemove(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <hr/>
          <div className="cart-total">
            <h4><span className='total'>Total Price:  </span>Nu {total}</h4>
          </div>
        </>
      )}
      <button className='pay-button'>Proceed with Paying</button>
    </div>
  );
}

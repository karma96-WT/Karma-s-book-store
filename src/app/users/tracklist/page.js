'use client';

import { useEffect, useState } from 'react';
import './local.css';

export default function ProfilePage() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/tracklist', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        const data = await res.json();

        if (res.ok) {
          setUser(data); // Assuming data is an array of user orders
        } else {
          setError(data.error || 'Failed to load user');
        }
      } catch (err) {
        setError('Error fetching your orders');
      }
    };

    fetchUser();
  }, []);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!user || user.length === 0) return <p>Loading...</p>;

  return (
    <div className='body'>
      <div style={{ padding: '2rem', display: 'flex', justifyContent: 'left', alignItems: 'left', flexDirection: 'column' }} className='second'>
        <div className='profile-image-container'>
          <img className='image' src='/image/profile.jpeg' alt='Profile'  width={100} height={100}/>
        </div>

        <div className='profile'>
          <h2 className='heading'>Hello {user[0].name}</h2> {/* Access first item */}
        </div>

        {user.map((order, index) => {
          let cartItems = [];

          try {
            cartItems = JSON.parse(order.cart); // Convert cart string to array
          } catch (err) {
            console.error("Invalid cart JSON:", err);
          }

          return (
            <div key={index} className='main'>
              <p className='details'>
                <strong>Ordered on:</strong>{" "}
                {new Date(order.createdAt).toLocaleString('en-US', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
              <p className='details'><strong>Your orders:</strong></p>
              {cartItems.length > 0 ? (
                <ul>
                  {cartItems.map((item, i) => (
                    <li key={i}>
                      <strong>{item.name}</strong> by {item.author} – Nu {item.priceUSD}
                    </li>
                  ))}
                </ul>
                
              ) : (
                <p>No items in cart or invalid cart data</p>
              )}
              

            </div>
          );
        })}
      </div>
    </div>
  );
}

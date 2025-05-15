'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './local.css'

const popularAuthors = [
  { name: "J.K. Rowling", image: "/image/R K Rowlin.jpg" },
  { name: "George R.R. Martin", image: "/image/RR martin.webp" },
  { name: "Agatha Christie", image: "/image/agatha christie.jpg" },
  { name: "Stephen King", image: "/image/christen king.jpg" },
  { name: "Jane Austen", image: "/image/jane austein.webp" },
  { name: "Robin Sharma", image: "/image/robin sharma.jpg" },
  { name: "Shiv Kera", image: "/image/shiv kera.jpg" },
  { name: "Danielle Steel", image: "/image/Danielle Steel.jpg" },
  { name: "William Shakespeare", image: "/image/William Shakespeare.jpg" },
  { name: "Robert Kiyosaki", image: "/image/robert kiyosaki.jpg" },
];

export default function Author() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cart.length);
  }, []);

  const visit = () => {
    window.location.href = '/Online_ordering'; // Make sure you have this page
  };

  return (
    <div className='popular-author-container'>
      <div className="author-grid">
        {popularAuthors.map((author, index) => (
          <div key={index} className="author-card">
            <img src={author.image} width={150} height={150} alt={author.name} />
            <h5>{author.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

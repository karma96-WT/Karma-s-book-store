'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';


const trendingBooks = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "109", image: "/image/the great gatsby.png" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", price: "250", image: "/image/to kill a mocking bird.png" },
  { title: "1984", author: "George Orwell", price: "99", image: "/image/1984.jpg" },
  { title: "Moby Dick", author: "Herman Melville", price: "145", image: "/image/moby dick.jpg" },
  { title: "Pride and Prejudice", author: "Jane Austen", price: "175", image: "/image/pride and prejudice.jpg" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", price: "199", image: "/image/the cater in the rye.jpg" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", price: "120", image: "/image/the hobbit.jpg" },
  { title: "The Alchemist", author: "Paulo Coelho", price: "399", image: "/image/the alchemist.jpg" },
  { title: "The Book Thief", author: "Markus Zusak", price: "425", image: "/image/the book theif.jpg" },
  { title: "Life of Pi", author: "Yann Martel", price: "195", image: "/image/life of pi.jpg" },
];

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

export default function PopularBook() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cart.length);
  }, []);

  const visit = () => {
    window.location.href = '/users/Online_ordering'; // Make sure you have this page
  };

  return (
    <div>
      
      <div className="book-grid">
        {trendingBooks.map((book, index) => (
          <div key={index} className="book-card">
            <img src={book.image} width={200} height={150} alt={book.title} />
            <h5>{book.title}</h5>
            <p>By {book.author}</p>
            <p className="price">Nu {book.price}</p>
            <button className="visit" onClick={visit}>Visit <img src="/image/right.png" alt="→" /></button>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';
import { useState, useEffect } from 'react';
import './local.css';
import Link from 'next/link';

export default function SearchBooks() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    if (query.trim() === '') return;

    const res = await fetch(`/searchapi?q=${encodeURIComponent(query)}`);
    const data = await res.json();
    setBooks(data.books || []);
  };

  const handleAddToCart = async (book) => {
    try {
      
      const res = await fetch('/users/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      });

      const result = await res.json();

      if (res.ok) {
        alert('Book added to cart!');
      } else {
        alert(result.error || 'Error adding to cart');
      }
    } catch (err) {
      console.error(err);
      alert('Error adding to cart');
    }
  };

  return (
    <div className='main'>
      <h2 className='h2'>Search Books</h2>
      <div>
        <input
        id='input-for-search'
            type="text"
            placeholder="Enter book title"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <button className='search-button' onClick={handleSearch}>Search</button>
      </div>

      <div className="search-results">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} width="100" />
              <h4>{book.title}</h4>
              <p>{book.autor}</p>
              <p>Nu: {book.price}</p>
              <div className="buttons">
              <button
                className="add-to-cart-button"
                onClick={() =>
                  handleAddToCart({
                    bookid: book.id,
                    title: book.title,
                    author: book.autor,
                    price: book.price,
                    genre: book.genre,
                  })
                }
              >
                Add to cart
              </button>
              <Link href={`/users/components/APIBook/${encodeURIComponent(book.title)}`}>
                <button className="details-button">Details</button>
              </Link>
            </div>
            </div>
            
            
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

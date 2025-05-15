'use client';

import { useEffect, useState } from 'react';

const books = [
  "The Great Gatsby",
  "To Kill a Mockingbird",
  "1984",
];

export function BookStoreWithAPI() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const fetchedData = await Promise.all(
        books.map(async (title) => {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(title)}`
          );
          const data = await response.json();
          const bookInfo = data.items?.[0]?.volumeInfo;
          return {
            title: title,
            description: bookInfo?.description || "No description available.",
            image: bookInfo?.imageLinks?.thumbnail || "",
            authors: bookInfo?.authors?.join(', ') || "Unknown author",
          };
        })
      );
      setBookData(fetchedData);
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Books with Descriptions</h2>
      {bookData.map((book, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3>{book.title}</h3>
          <p><strong>Author:</strong> {book.authors}</p>
          <img src={book.image} alt={book.title} />
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
}
export default BookStoreWithAPI;
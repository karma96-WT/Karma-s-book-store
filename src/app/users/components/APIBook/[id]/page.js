'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BookDetails() {
  const { id } = useParams();  
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${id}`)
        .then((res) => {
          const bookInfo = res.data.items?.[0]?.volumeInfo;
          setBook(bookInfo);
        })
        .catch((err) => {
          console.error("Error fetching book:", err);
        });
    }
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className='description-container'>
      <div className='description'>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.authors?.join(', ')}</p>
      {book.imageLinks?.thumbnail && (
        <img src={book.imageLinks.thumbnail} alt={book.title} />
      )}
      <p className='desription-p'><strong>Description:</strong> {book.description || 'No description available'}</p>
      
    </div>
    </div>
  );
}

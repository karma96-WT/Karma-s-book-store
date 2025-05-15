'use client';
import Link from "next/link";
import { useEffect, useState } from "react";


export default function AdultBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/users/components/fetchBooks?genre=History")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

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
    <div>
      <div className="fiction-grid">
        {books.map((book, index) => (
          <div key={index} className="fictoinBook-card">
            <img src={book.image} alt={book.title} />
            <h5>{book.title}</h5>
            <p>{book.autor}</p>
            <p className="book-price">Nu: {book.price}</p>
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
        ))}
      </div>
    </div>
  );
}


/*'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
const historyBooks = [
    { title: "The Diary of a Young Girl", author: "Anne Frank", price: "123", image: "/image/OIP.jpg" },
    { title: "A Brief History of Humankind", author: "Yuval Noah Harari", price: "155", image: "/image/OIP.jpg" },
    { title: "The Guns of August", author: "Barbara Tuchman", price: "913", image: "/image/OIP.jpg" },
    { title: "The Wright Brothers", author: "David McCullough", price: "145", image: "/image/OIP.jpg" },
    { title: "Team of Rivals", author: "Doris Kearns Goodwin", price: "623", image: "/image/OIP.jpg" },
    { title: "Alexander Hamilton", author: "Ron Chernow", price: "134", image: "/image/OIP.jpg" },
    { title: "The Immortal Life of Henrietta", author: "Rebecca Skloot", price: "642", image: "/image/OIP.jpg" },
    { title: "A World War II Story of Survival", author: "Laura Hillenbrand", price: "924", image: "/image/OIP.jpg" },
    { title: "The Liberation Trilogy", author: "Rick Atkinson", price: "643", image: "/image/OIP.jpg" },
    { title: "The Warmth of Other Suns", author: "Isabel Wilkerson", price: "733", image: "/image/OIP.jpg" },
];   
export default function HistoryBook(){
    return(
    <div>
      <div className="fiction-grid">
        {historyBooks.map((historyBook, index) => (
          <div key={index} className="fictoinBook-card">
            <img src={historyBook.image} alt={historyBook.title} />
            <h5>{historyBook.title}</h5>
            <p>{historyBook.author}</p>
            <p className="book-price">Nu: {historyBook.price}</p>
            <div className="buttons">
                <button className="add-to-cart-button">Add to cart</button>
                <Link href={`/users/components/APIBook/${encodeURIComponent(historyBook.title)}`}>
                  <button className="details-button">Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}*/
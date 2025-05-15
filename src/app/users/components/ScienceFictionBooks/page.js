'use client';
import Link from "next/link";
import { useEffect, useState } from "react";


export default function AdultBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/users/components/fetchBooks?genre=ScienceFiction")
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
const ThrillerBooks = [
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", price: "425", image: "/image/OIP.jpg" },
    { title: "Gone Girl", author: "Gillian Flynn", price: "457", image: "/image/OIP.jpg" },
    { title: "The Da Vinci Code", author: "Dan Brown", price: "568", image: "/image/OIP.jpg" },
    { title: "The Silence of the Lambs", author: "Thomas Harris", price: "124", image: "/image/OIP.jpg" },
    { title: "Before I Go to Sleep", author: "S.J. Watson", price: "541", image: "/image/OIP.jpg" },
    { title: "Shutter Island", author: "Dennis Lehane", price: "342", image: "/image/OIP.jpg" },
    { title: "Behind Closed Doors", author: "B.A. Paris", price: "346", image: "/image/OIP.jpg" },
    { title: "The Reversal", author: "Michael Connelly", price: "462", image: "/image/OIP.jpg" },
    { title: "The Couple Next Door", author: "Shari Lapena", price: "547", image: "/image/OIP.jpg" },
    { title: "I Am Watching You", author: "Teresa Driscoll", price: "657", image: "/image/OIP.jpg" },
]; 
export default function ThrillerBook(){
    return(
    <div>
      <div className="fiction-grid">
        {ThrillerBooks.map((thrillerBook, index) => (
          <div key={index} className="fictoinBook-card">
            <img src={thrillerBook.image} alt={thrillerBook.title} />
            <h5>{thrillerBook.title}</h5>
            <p>{thrillerBook.author}</p>
            <p className="book-price">Nu: {thrillerBook.price}</p>
            <div className="buttons">
                <button className="add-to-cart-button">Add to cart</button>
                <Link href={`/users/components/APIBook/${encodeURIComponent(thrillerBook.title)}`}>
                  <button className="details-button">Details</button>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}*/
'use client';
import Link from "next/link";
import { useEffect, useState } from "react";


export default function AdultBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/users/components/fetchBooks?genre=Love")
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
const loveBooks = [
    { title: "Pride and Prejudice", author: "Jane Austen", price: "262", image: "/image/OIP.jpg" },
    { title: "The Fault in Our Stars", author: "John Green", price: "562", image: "/image/OIP.jpg" },
    { title: "Romeo and Juliet", author: "William Shakespeare", price: "354", image: "/image/OIP.jpg" },
    { title: "Me Before You", author: "Jojo Moyes", price: "132", image: "/image/OIP.jpg" },
    { title: "Outlander", author: "Diana Gabaldon", price: "135", image: "/image/OIP.jpg" },
    { title: "The Notebook", author: "Nicholas Sparks", price: "145", image: "/image/OIP.jpg" },
    { title: "Fifty Shades of Grey", author: "E.L. James", price: "345", image: "/image/OIP.jpg" },
    { title: "The Rosie Project", author: "Graeme Simsion", price: "342", image: "/image/OIP.jpg" },
    { title: "A Walk to Remember", author: "Nicholas Sparks", price: "457", image: "/image/OIP.jpg" },
    { title: "It Ends with Us", author: "Colleen Hoover", price: "326", image: "/image/OIP.jpg" },
];
export default function LoveBook(){
    return(
    <div>
      <div className="fiction-grid">
        {loveBooks.map((LoveBook, index) => (
          <div key={index} className="fictoinBook-card">
            <img src={LoveBook.image} alt={LoveBook.title} />
            <h5>{LoveBook.title}</h5>
            <p>{LoveBook.author}</p>
            <p className="book-price">Nu: {LoveBook.price}</p>
            <div className="buttons">
                <button className="add-to-cart-button">Add to cart</button>
                <Link href={`/users/components/APIBook/${encodeURIComponent(LoveBook.title)}`}>
                  <button className="details-button">Details</button>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}*/
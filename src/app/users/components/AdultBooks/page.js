'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

/*const adultBooks = [
    { title: "The Goldfinch", author: "Donna Tartt", price: "356", image: "/image/OIP.jpg" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", price: "500", image: "/image/OIP.jpg" },
    { title: "The Road", author: "Cormac McCarthy", price: "327", image: "/image/OIP.jpg" },
    { title: "Beloved", author: "Toni Morrison", price: "683", image: "/image/OIP.jpg" },
    { title: "The Secret History", author: "Donna Tartt", price: "245", image: "/image/OIP.jpg" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "626", image: "/image/OIP.jpg" },
    { title: "The Girl on the Train", author: "Paula Hawkins", price: "335", image: "/image/OIP.jpg" },
    { title: "Big Little Lies", author: "Liane Moriarty", price: "738", image: "/image/OIP.jpg" },
    { title: "The Kite Runner", author: "Khaled Hosseini", price: "902", image: "/image/OIP.jpg" },
    { title: "The Night Circus", author: "Erin Morgenstern", price: "462", image: "/image/OIP.jpg" },
];
*/
export default function AdultBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/users/components/fetchBooks?genre=adult")
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


/*export default function AdultBook(){
    return(
    <div>
      <div className="fiction-grid">
        {adultBooks.map((AdultBook, index) => (
          <div key={index} className="fictoinBook-card">
            <img src={AdultBook.image} alt={AdultBook.title} />
            <h5>{AdultBook.title}</h5>
            <p>{AdultBook.author}</p>
            <p className="book-price">Nu: {AdultBook.price}</p>
            <div className="buttons">
                <button className="add-to-cart-button">Add to cart</button>
                <Link href={`/users/components/APIBook/${encodeURIComponent(AdultBook.title)}`}>
                  <button className="details-button">Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}*/
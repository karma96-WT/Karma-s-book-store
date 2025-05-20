'use client';
import Link from "next/link";
import { useEffect, useState } from "react";


export default function AdultBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/users/components/fetchBooks?genre=biography")
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
                    image: book.image,
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
const biographyBooks = [
    { title: "The Diary of a Young Girl", author: "Anne Frank", price: "567", image: "/image/OIP.jpg" },
    { title: "Long Walk to Freedom", author: "Nelson Mandela", price: "213", image: "/image/OIP.jpg" },
    { title: "Steve Jobs", author: "Walter Isaacson", price: "256", image: "/image/OIP.jpg" },
    { title: "Alexander Hamilton", author: "Ron Chernow", price: "445", image: "/image/OIP.jpg" },
    { title: "Becoming", author: "Michelle Obama", price: "235", image: "/image/OIP.jpg" },
    { title: "Educated", author: "Tara Westover", price: "436", image: "/image/OIP.jpg" },
    { title: "Elon Musk", author: "Ashlee Vance", price: "655", image: "/image/OIP.jpg" },
    { title: "Einstein: His Life and Universe", author: "Walter Isaacson", price: "2369", image: "/image/OIP.jpg" },
    { title: "The Wright Brothers", author: "David McCullough", price: "562", image: "/image/OIP.jpg" },
    { title: "Open", author: "Andre Agassi", price: "432", image: "/image/OIP.jpg" },
];  
export default function BiographyBook(){
    return(
    <div>
      <div className="fiction-grid">
        {biographyBooks.map((biographyBook, index) => (
          <div key={index} className="fictoinBook-card">
            <img src={biographyBook.image} alt={biographyBook.title} />
            <h5>{biographyBook.title}</h5>
            <p>{biographyBook.author}</p>
            <p className="book-price">Nu: {biographyBook.price}</p>
            <div className="buttons">
                <button className="add-to-cart-button">Add to cart</button>
                <Link href={`/users/components/APIBook/${encodeURIComponent(biographyBook.title)}`}>
                  <button className="details-button">Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}
    */
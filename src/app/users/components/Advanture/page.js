'use client';
import Link from "next/link";
import { useEffect, useState } from "react";


export default function AdultBook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/users/components/fetchBooks?genre=adventure")
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





/*const adventureBooks = [
    { title: "The Call of the Wild", author: "Jack London", price: "799", image: "/image/OIP.jpg" },
    { title: "Treasure Island", author: "Robert Louis Stevenson", price: "128", image: "/image/OIP.jpg" },
    { title: "Journey to the Center of the Earth", author: "Jules Verne", price: "910", image: "/image/OIP.jpg" },
    { title: "Moby Dick", author: "Herman Melville", price: "369", image: "/image/OIP.jpg" },
    { title: "King Solomon's Mines", author: "H. Rider Haggard", price: "458", image: "/image/OIP.jpg" },
    { title: "Robinson Crusoe", author: "Daniel Defoe", price: "299", image: "/image/OIP.jpg" },
    { title: "The Lost World", author: "Arthur Conan Doyle", price: "550", image: "/image/OIP.jpg" },
    { title: "Around the World in 80 Days", author: "Jules Verne", price: "870", image: "/image/OIP.jpg" },
    { title: "The Sea-Wolf", author: "Jack London", price: "375", image: "/image/OIP.jpg" },
    { title: "The Man Who Would Be King", author: "Rudyard Kipling", price: "367", image: "/image/OIP.jpg" },
];  
export default function AdvantureBook(){
    return(
    <div>
      <div className="fiction-grid">
        {adventureBooks.map((advantureBook, index) => (
          <div key={index} className="fictoinBook-card">
            <img src={advantureBook.image} alt={advantureBook.title} />
            <h5>{advantureBook.title}</h5>
            <p>{advantureBook.author}</p>
            <p className="book-price">Nu: {advantureBook.price}</p>
            <div className="buttons">
                <button className="add-to-cart-button">Add to cart</button>
                <Link href={`/users/components/APIBook/${encodeURIComponent(advantureBook.title)}`}>
                  <button className="details-button">Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
}*/

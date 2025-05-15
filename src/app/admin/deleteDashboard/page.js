// pages/admin/index.js
'use client'
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    const res = await fetch("/api/book");
    const data = await res.json();
    setBook(data);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this Book?");
    if (!confirm) return;

    const res = await fetch(`/api/book/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setBook(book.filter((book) => book.id !== id));
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-8">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">List of Books: </h1>
        <p className="text-gray-500 mb-6">List of all books are here:</p>

        {loading ? (
          <p>Loading students...</p>
        ) : (
          <ul className="space-y-4">
            {book.map((book) => (
              <li
                key={book.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded shadow-sm"
              >
                 <div>
                    <img src={book.image} width={100} alt={book.title}></img>
                </div>
                <div>
                  <p className="font-semibold">{book.title}</p>
                </div>
                <div>
                  <p className="font-semibold">{book.autor}</p>
                </div>
                <div>
                  <p className="font-semibold">{book.price}</p>
                </div>
                <div>
                  <p className="font-semibold">{book.genre}</p>
                </div>
               
                <button
                  onClick={() => handleDelete(book.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

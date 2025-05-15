// pages/admin/index.js
'use client'
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this User?");
    if (!confirm) return;

    const res = await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setUsers(user.filter((user) => user.id !== id));
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-8">
        <p className="text-gray-500 mb-6">List of all Users are here:</p>

        {loading ? (
          <p>Loading Users...</p>
        ) : (
          <ul className="space-y-4">
            {user.map((user) => (
              <li
                key={user.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded shadow-sm"
              >
                <div>
                  <p className="font-semibold">{user.name}</p>
                </div>
                <div>
                  <p className="font-semibold">{user.email}</p>
                </div>
                <div>
                  <p className="font-semibold">{user.dzongkhag}</p>
                </div>
                <div>
                  <p className="font-semibold">{user.gewog}</p>
                </div>
                <div>
                  <p className="font-semibold">{user.role}</p>
                </div>
               
                <button
                  onClick={() => handleDelete(user.id)}
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

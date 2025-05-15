'use client';
import { useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { useRouter } from 'next/navigation';

export default function UploadPage() {
  const [imageUrl, setImageUrl] = useState(null); // Store the uploaded image URL
  const [title, setTitle] = useState('');
  const [autor, setAutor] = useState('');
  const [price, setPrice] = useState('');
  const [genre,setGenre] = useState('');
  const router = useRouter();
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data, including imageUrl, to the backend
    const res = await fetch('./book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, autor, price, image: imageUrl,genre }), // Send imageUrl here
    });

    if (res.ok) {
      const book = await res.json();
      alert('Book created!');
      console.log(book);
      router.push('/admin');

    } else {
      console.error('Failed to create book');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upload Book</h1>
      <form onSubmit={handleSubmit}>

        <div>
          <CldUploadWidget
            uploadPreset="next-js-uploads"
            onSuccess={(result) => {
              const url = result?.info?.secure_url;
              console.log('Upload complete. URL:', url);
              if (url) {
                setImageUrl(url); // Save image URL in state
              } else {
                console.warn('secure_url is missing in result:', result);
              }
            }}
          >
            {({ open }) => (
              <button onClick={() => open()} type="button">
                Upload an Image
              </button>
            )}
          </CldUploadWidget>

          {imageUrl && (
            <div>
              <p>Uploaded Image:</p>
              <img src={imageUrl} alt="Uploaded" style={{ width: 100 }} />
            </div>
          )}
        </div>

        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block border p-2 my-2 w-full"
          required
        />

        <input
          type="text"
          placeholder="Author Name"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          className="block border p-2 my-2 w-full"
          required
        />

        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="block border p-2 my-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="block border p-2 my-2 w-full"
          required
        />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Book
        </button>
      </form>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import './local.css'

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/profile');
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        } else {
          setError(data.error || 'Failed to load user');
        }
      } catch (err) {
        setError('Error fetching user profile');
      }
    };
    fetchUser();
  }, []);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  if (!user) return <p>Loading...</p>;

  return (
    <div className='body'>
        <div style={{ padding: '2rem', display: 'flex', justifyContent: 'left',alignItems:'left',flexDirection:'column' }}>
            <div className='profile-image-container'>
                <img className='image' src='/image/profile.jpeg'></img>
            </div>
            <div className='profile'>
                <h2 className='heading'> Hello {user.name}</h2>
            </div>
            <p className='details'><strong>Name:</strong> {user.name}</p>
            <p className='details'><strong>Email:</strong> {user.email}</p>
            <p className='details'><strong>Gewog:</strong> {user.gewog}</p>
            <p className='details'><strong>Dzongkhag:</strong> {user.dzongkhag}</p>
            <p className='details'><strong>Joined On:</strong> {new Date(user.createdAt).toLocaleString()}</p>
        </div>
    </div>
  );
}

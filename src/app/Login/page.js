'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const login = async () => {
    if (!username || !password) {
      setError('Please fill in both fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, password }),
      });
      
      

      const data = await response.json();
      if(data.user.role ==='ADMIN'){
        window.location.href = './admin';
      }
      else{
        window.location.href = '/users/Online_ordering';
      }
      
    } catch (err) {
      setError('Something went wrong.');
      console.error(err);
    }
  };
  

  return (
    <section className='section'>
      {[...Array(200)].map((_, index) => (
        <span className='span' key={index}></span>
      ))}

      <div className="signin">
        <div className="content">
          <h2>Sign In</h2>
          <div className="form">
            <div className="inputBox">
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <i>Email</i>
            </div>
            <div className="inputBox">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i>Password</i>
            </div>
            <div className="links">
              <a href="/Signup">Signup</a>
            </div>
            <div className="inputBox">
              <input type="submit" value="Login" onClick={login} />
            </div>
            {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [gewog, setGewog] = useState('');
  const [dzongkhag, setDzongkhag] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleEmailChange = (e) => {
  const value = e.target.value;
  setEmail(value);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  setIsEmailValid(emailRegex.test(value));
};

const handlePasswordChange = (e) => {
  const value = e.target.value;
  setPassword(value);
  setIsPasswordValid(value.length >= 8);
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password ||!gewog ||!dzongkhag) {
      setError("All fields are required");
      return;
    }

    const response = await fetch("../api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        gewog,
        dzongkhag,
      }),
    });

    let data;
    try {
      data = await response.json();
    } catch (err) {
      console.error("Failed to parse JSON", err);
      data = { message: "Something went wrong" };
    }


    if (response.ok) {
      // Redirect to login page upon successful registration
      router.push("/Login");
    } else {
      setError(data.message || "Something went wrong");
    }
  };


  return (
    <section className='section'>
      {[...Array(200)].map((_, i) => (
        <span className='span' key={i}></span>
      ))}

      <div className="signin">
        <div className="content">
          <h2>Sign Up</h2>
          <div className="form">
            <div className="inputBox">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              <i>Full Name</i>
            </div>
            
            <div className="inputBox">
              <input
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
              />
              <i>Email</i>
                {!isEmailValid && <p style={{ color: 'red', fontSize: '0.9rem' }}>Invalid email format</p>}
              
            </div>
            <div className="inputBox">
              
              <input
                  type="password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
              />
              <i>Password</i>
              {!isPasswordValid && <p style={{ color: 'red' }}>Password must be at least 8 characters</p>}
            </div>
            <div className="inputBox">
              <input
                type="text"
                required
                value={dzongkhag}
                onChange={(e) => setDzongkhag(e.target.value)}
              />
              <i>Dzongkhag</i>
            </div>
            <div className="inputBox">
              <input
                type="text"
                required
                value={gewog}
                onChange={(e) => setGewog(e.target.value)}
              />
              <i>Gewog</i>
            </div>
            <div className="links">
              <a href="/Login">Login</a>
            </div>
            <div className="inputBox">
              <input type="submit" value="SignUp" onClick={handleSubmit} />
            </div>
            {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

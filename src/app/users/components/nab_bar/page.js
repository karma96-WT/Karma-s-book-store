'use client';
import { useEffect, useState } from 'react';
import Link from "next/link";
import { SignInButton,SignUpButton,SignedIn,SignedOut,UserButton } from "@clerk/nextjs";
import './local.css';
import LogoutButton from '../../../Logout/page';

export default function Nar_bar() {
  const [session, setSession] = useState(null);
  const [cartCount, setcartCount] = useState(0);


  useEffect(() => {
    async function fetchSession() {
      const res = await fetch('/api/getsession');
      const data = await res.json();
      if (data.loggedIn) {
        setSession(data.user);
        fetchCartCount(data.user.email);  // Fetch cart items count
      }
    }

    fetchSession();
  }, []);

  async function fetchCartCount(email) {
    try {
      const res = await fetch('/users/components/cartcount'); // Backend already fetches based on session
      const data = await res.json();
      if (res.ok) {
        //console.log("cart count:", data.count.length);
        setcartCount(data.count.length); 
      }
    } catch (error) {
      console.error('Failed to fetch cart count:', error);
    }
  }

  const handleLogout = async () => {
    // Call the logout API to destroy the session
    const response = await fetch('/api/logout', {
      method: 'POST',
    });

    if (response.ok) {
      // Redirect to the login page after successful logout
      window.location.href = '/login';  // Adjust your login page URL if needed
    }
  };

  return (
    <div className="nav-bar-container">
      <a href=""><img src="/image/logo.png" alt="Logo" id="logo" /></a>
      <nav className="nav-bar">
        <a className="a" href="/" id="Home-button">Home</a>
      </nav>
      <div>
        <a className="a" href="/users/search">🔍</a>
      </div>
      <div className="NLS">
        <a className="a" href="/users/notification">
          <img src="/image/icons8-notification.gif" alt="notification" id="notification" />
        </a>
        {session ? (
            <>
              <LogoutButton />
            </>
          ) : (
            <>
              <a className="a" href="/Login" id="Home-button">Login</a>
              <a className="a" href="/Signup" id="Home-button">Signup</a>
            </>
          )}

        {/*<SignedOut>
            <SignInButton className="signin-Button" />
            <SignUpButton className="signup-button" />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>*/}

        <a href="/users/components/addtocart" id="cart-icon">
          <img src="/image/icons8-shopping-cart.gif" alt="" />
          <span id="num-of-books">{cartCount}</span>
        </a>
      </div>
    </div>
  );
}

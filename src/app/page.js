'use client';
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useEffect, useState } from 'react';
import { SessionProvider } from "next-auth/react";
import Navbar from './users/components/nab_bar/page';
import PopularBook from './users/components/popularBookscript/page';
import Author from './users/components/authorScript/page';
import Footer from './users/components/footer/page';
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function Index() {

  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false); // ← Add toggle state

  useEffect(() => {
    fetch('lib/session')
      .then(res => res.json())
      .then(data => {
        setIsLoggedIn(data.loggedIn);
      })
      .catch(err => {
        console.error("session check failed: ", err);
      });
  }, []);

  const redirectIfNotLoggedIn = (callback) => {
    if (!isLoggedIn) {
      alert("You need to be logged in to access this section.");
      router.push('/Login');
    } else {
      callback();
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="left-container">
          <p id="top-para" className="p">ANYWHERE and EVERYWHERE</p>
          <p className="p">
            Track your Reading and Build your Library. <br />
            Discover your next Favourite Book. <br />
            Browse from the Largest Collections of Ebooks. <br />
            Read stories from anywhere at anytime.
          </p>
          <div className="space1"></div>
          <Link className="get-started-button" href={'/users/Online_ordering'}>Get Started</Link>
          <div className="space2"></div>
          <div className="contact-us">
            <p id="contact-us-p">Contact us</p>
            <p>Address: <span>College of Science and Technology Book Store</span></p>
            <p>Email: <span>bookstore@gmail.com</span></p>
          </div>
          <div className="social-media-links">
            <img src="image/facebook.webp" alt="facebook icon" />
            <img src="image/twitter.png" alt="twitter icon" />
            <img src="image/instagram.png" alt="instagram icon" />
            <img src="image/youtube.png" alt="youtube icon" />
          </div>
        </div>
        <div className="image-container"></div>
      </div>

      <div className="feature">
        <h1>Some of our features</h1>
        <div className="image-cont">
          <div>
            <img className="img" src="image/onlineorder.png" alt="" />
            <Link href="/users/Online_ordering" className="dis">Online Ordering</Link>
          </div>
          <div>
            <img className="img" src="image/exchange.png" alt="" />
            <a href="#" className="dis">Used Book Buying</a>
          </div>
          <div>
            <img className="img" src="image/customerservice.png" alt="" />
            <a href="#" className="dis">24/7 customerservice</a>
          </div>
        </div>
      </div>

      <div className="trending-container">
        <div className="trending">TOP TRENDING BOOKS</div>
        <PopularBook src="../utils/popularBookscript.js" strategy="beforeInteractive" />
        <div className="trending-books-container" id="trending-books"></div>
      </div>

      <div className="catagories-container">
        <div className="catagories-text">Browse Genres</div>
        <div className="catagories">
          {['Fiction', 'Science-fiction', 'Advanture', 'Biography', 'Thriller', 'Love', 'History', 'Adult'].map(genre => (
            <div key={genre}
              className="cat"
              onClick={() => redirectIfNotLoggedIn(() => router.push(`/users/Online_ordering#${genre}`))}
            >
              {genre}
            </div>
          ))}
        </div>
      </div>

      <div className="popular-authors">
        <div className="author">POPULAR AUTHORS</div>
        <Author src="../utils/authorScript.js" strategy="beforeInteractive" />
        <div className="popular-authors-container">
          <div className="popular-authors-list" id="popular-authors"></div>
        </div>
      </div>

      <Footer />
    </>
  );
}

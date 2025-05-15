import Link from "next/link"
export default function Footer(){
    return(
        <div id="footer">
      <section id="first-section">
        <div id="first-first-div">
          <img
            id="footer-logo"
            src="/image/logo.png"
            width="50px"
            height="50px"
            alt=""
          />
          <h4 id="footer-title">Book Store</h4>
        </div>
        <p id="footer-first-section-p">
          Our book store contains the books <br />
          from all around the world!
        </p>
      </section>
      <section id="second">
        <div>
          <h4 id="quick-link">Quick Links</h4>
        </div>
        <div id="quick-links">
          <Link href="/">Home</Link>
          <Link href="/users/about">About us</Link>
          <a href="/users/Online_ordering">Shop</a>
          <a href="/users/help">Help</a>
          <a href="/users/vision">Vision</a>
          <a href="/users/contact">Contact Us</a>
        </div>
      </section>
      <section id="third">
        <div><h4 id="cusomer-area">Customers area</h4></div>
        <div id="social-ML">
          <a href="/users/account">My Accont</a>
          <a href="#">Tracking List </a>
          <a href="/privacy-policy"> Privacy Policy </a>
          <a href="/users/FAQ"> FAQ </a>
          <a href="/users/components/addtocart"> My Cart </a>
        </div>
      </section>
      <section id="fourth">
        <div><h4 id="social-media-heading">Social Media</h4></div>
        <div className='footer-social-media-image-container'>
          <img
            className="footer-social-media-image"
            src="/image/facebook.webp"
            alt=""
          />
          <img
            className="footer-social-media-image"
            src="/image/instagram.png"
            alt=""
          />
          <img
            className="footer-social-media-image"
            src="/image/twitter.png"
            alt=""
          />
          <img
            className="footer-social-media-image"
            src="/image/youtube.png"
            alt=""
          />
        </div>
      </section>
    </div>
    )
}
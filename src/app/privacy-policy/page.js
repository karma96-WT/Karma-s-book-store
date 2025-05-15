// src/app/privacy-policy/page.jsx
import './local.css';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <h1 className="heading">Privacy Policy</h1>
      <p className="last-updated">Last Updated: 21/5/2025</p>

      <section>
        <h2>1. Information We Collect</h2>
        <p>We collect several types of information to provide and improve our services:</p>
        <h3>a. Personal Information</h3>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Billing and shipping address</li>
          <li>Payment details (processed via secure third-party gateways)</li>
          <li>Order history</li>
        </ul>
        <h3>b. Non-Personal Information</h3>
        <ul>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device type</li>
          <li>Pages visited and time spent on site</li>
          <li>Cookies and usage data</li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Process and fulfill orders</li>
          <li>Communicate with you</li>
          <li>Respond to support requests</li>
          <li>Send promotions (opt-out anytime)</li>
          <li>Improve functionality and UX</li>
          <li>Prevent fraud or misuse</li>
        </ul>
      </section>

      <section>
        <h2>3. Sharing Your Information</h2>
        <p>We do <strong>not</strong> sell or rent your personal data. However, we may share it with:</p>
        <ul>
          <li>Payment processors</li>
          <li>Shipping partners</li>
          <li>Marketing/analytics services</li>
          <li>Authorities when required by law</li>
        </ul>
      </section>

      <section>
        <h2>4. Cookies and Tracking Technologies</h2>
        <p>We use cookies to maintain sessions, remember preferences, and analyze site performance. You can control cookies via browser settings.</p>
      </section>

      <section>
        <h2>5. Data Retention</h2>
        <p>We retain your personal data as long as needed for our services and legal obligations.</p>
      </section>

      <section>
        <h2>6. Security of Your Information</h2>
        <p>We implement industry-standard security, but no method is 100% secure.</p>
      </section>

      <section>
        <h2>7. Your Privacy Rights</h2>
        <p>You may have rights to access, correct, delete, or restrict your personal data. Contact us at support@yourbookstore.com to exercise your rights.</p>
      </section>

      <section>
        <h2>8. Children’s Privacy</h2>
        <p>Our site is not for children under 13. We do not knowingly collect data from children.</p>
      </section>

      <section>
        <h2>9. Third-Party Links</h2>
        <p>We are not responsible for the privacy practices of third-party sites linked from our website.</p>
      </section>

      <section>
        <h2>10. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy and will post the revised date at the top of the page.</p>
      </section>

      <section>
        <h2>11. Contact Us</h2>
        <p>If you have any questions, contact us at:</p>
        <p>
          <strong>BookSote</strong><br />
          Email: support@bookstore.com<br />
          Phone: +975-xxxx-xxxx<br />
          Address: College of Science and Technology, Rinchending, Phuntsholing, Bhutan
        </p>
      </section>
    </div>
  );
}

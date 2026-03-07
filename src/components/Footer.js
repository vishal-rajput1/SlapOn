import React from "react";
// import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>Our Company</h3>
          <ul>
            <li>About Us</li>
            <li>Product Info</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>Info & FAQ</li>
            <li>Skin Installation</li>
            <li>Skin Customization</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Terms & Conditions</h3>
          <ul>
            <li>Payment & Shipping</li>
            <li>Returns & Refunds</li>
            <li>General Conditions of Sale</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Keep in Touch</h3>
          <div className="social-icons">
            <span>📷</span>
            <span>📘</span>
            <span>▶️</span>
            <span>📌</span>
          </div>
          <p>Mon–Sat: 09:00–18:00<br/>Holidays excluded</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Doto Design</p>
        <div className="payments">
          <span>💳 PayPal</span>
          <span>💳 VISA</span>
          <span>💳 MasterCard</span>
          <span>💳 Maestro</span>
          <span>💳 AmEx</span>
          <span>💳 Stripe</span>
        </div>
        <div className="languages">
          <span>Italiano</span> | <span>English</span>
        </div>
        <p className="company-info">
          Doto Design s.r.l. | Castelvetere S/C (AV) | Italia<br/>
          P.IVA 03177840646 | REA AV - 305754
        </p>
      </div>
    </footer>
  );
}

export default Footer;
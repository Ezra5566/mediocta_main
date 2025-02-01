// Footer.js
import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Lock,
  Truck
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
  };

  return (
    <footer className="footer">
      {/* Trust Badges */}
      <div className="trust-badges">
        <div className="container">
          <div className="trust-badges-grid">
            <div className="trust-badge">
              <Truck size={24} />
              <span>Free Shipping Over $50</span>
            </div>
            <div className="trust-badge">
              <CreditCard size={24} />
              <span>Secure Payment</span>
            </div>
            <div className="trust-badge">
              <Lock size={24} />
              <span>30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-heading">About MEDIOCTA</h3>
            <p>Discover the latest in fashion and lifestyle products. Quality meets style in every piece we offer.</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              {[
                'Shop',
                'About Us',
                'Contact',
                'FAQ',
                'Shipping Policy',
                'Returns'
              ].map((item) => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="contact-info">
              <a href="mailto:support@mediocta.com" className="contact-item">
                <Mail size={20} />
                <span>support@mediocta.com</span>
              </a>
              <a href="tel:+1234567890" className="contact-item">
                <Phone size={20} />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="contact-item">
                <MapPin size={20} />
                <span>123 Fashion Street<br />New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="footer-heading">Newsletter</h3>
            <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        <div className="container">
          <div className="bottom-content">
            <p className="copyright">
              &copy; {currentYear} MEDIOCTA. All rights reserved.
            </p>
            <div className="legal-links">
              <a href="/privacy" className="footer-link">Privacy Policy</a>
              <a href="/terms" className="footer-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

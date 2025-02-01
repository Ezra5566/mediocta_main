// Navbar.js
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="navbar-main">
        <div className="promo-banner">
          <div className="marquee-content">
            <span>Free Shipping on Orders Over $50</span>
            <span className="separator">|</span>
            <span>New Collection Available</span>
            <span className="separator">|</span>
            <span>Contact: support@mediocta.com</span>
          </div>
        </div>

        <div className="navbar-container">
          <div className="navbar-content">
            <button
              className={`menu-button ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="menu-button-line"></span>
              <span className="menu-button-line"></span>
              <span className="menu-button-line"></span>
            </button>

            <div className="navbar-logo">
              MEDIOCTA
            </div>

            <nav className="desktop-nav">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="nav-link"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="navbar-actions">
              <button
                className="nav-icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <a
                href="/account"
                className="nav-icon"
                aria-label="Account"
              >
                <User size={20} />
              </a>
              <a
                href="/cart"
                className="nav-icon cart-icon"
                aria-label="Cart"
              >
                <ShoppingCart size={20} />
                <span className="cart-badge">0</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          {['Home', 'Shop', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {isSearchOpen && (
        <div className="search-overlay" onClick={() => setIsSearchOpen(false)}>
          <div className="search-container" onClick={(e) => e.stopPropagation()}>
            <div className="search-input-container">
              <input
                type="search"
                placeholder="Search products..."
                className="search-input"
                autoFocus
              />
              <button
                className="search-close"
                onClick={() => setIsSearchOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

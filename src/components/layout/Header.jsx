import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    // { name: 'Portfolio', path: '/portfolio' },
    // { name: 'Pricing', path: '/pricing' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Contact_Us', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          <Link to="/" className="header__logo">
            <div className="header__logo-text">
              Tech<span className="header__logo-accent">Ethix</span>
            </div>
          </Link>

          <nav className="header__nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, left: 0 })}
                className={`header__nav-link ${isActive(link.path) ? 'header__nav-link--active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <a
              href="https://wa.me/9424989187"
              target="_blank"
              rel="noopener noreferrer"
              className="header__whatsapp"
            >
              <FaWhatsapp className="header__whatsapp-icon" />
              <span>WhatsApp</span>
            </a>
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, left: 0 })} className="header__cta">
              Get Quote
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="header__mobile-toggle"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="header__mobile-menu">
            <nav className="header__mobile-nav">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, left: 0 });
                  }}
                  className={`header__mobile-link ${isActive(link.path) ? 'header__mobile-link--active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="header__mobile-actions">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="header__mobile-whatsapp"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, left: 0 });
                  }}
                  className="header__mobile-cta"
                >
                  Get Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
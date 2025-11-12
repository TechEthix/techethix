import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    // { name: 'Portfolio', path: '/portfolio' },
    // { name: 'Pricing', path: '/pricing' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Web Development',
    'App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Social Media Management',
    'AI Automation',
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__section">
            <h3 className="footer__logo">
              Tech<span className="footer__logo-accent">Ethix</span>
            </h3>
            <p className="footer__tagline">
              Empowering Small Businesses Through Technology
            </p>
            <div className="footer__contact-info">
              <div className="footer__contact-item">
                <FaMapMarkerAlt className="footer__icon" />
                <span>Indore, Madhya Pradesh, India</span>
              </div>
              <div className="footer__contact-item">
                <FaPhone className="footer__icon" />
                <a href="tel:+919424989187">+91 9424989187</a>
              </div>
              <div className="footer__contact-item">
                <FaEnvelope className="footer__icon" />
                <a href="mailto:info@techethix.com">info@techethix.com</a>
              </div>
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__title">Quick Links</h4>
            <ul className="footer__list">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} onClick={() => window.scrollTo({ top: 0, left: 0 })} className="footer__link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__title">Our Services</h4>
            <ul className="footer__list">
              {services.map((service) => (
                <li key={service}>
                  <Link to={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`} className="footer__link">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__title">Connect With Us</h4>
            <p className="footer__description">
              Follow us on social media for updates and insights
            </p>
            <div className="footer__social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a> */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
            <a
              href="https://wa.me/919424989187"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__whatsapp-btn"
            >
              <FaWhatsapp />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <p className="footer__copyright">
              © {currentYear} TechEthix. All rights reserved. | Affordable · Accessible · Ethical · Innovative · Modern
            </p>
            {/* <div className="footer__legal">
              {legalLinks.map((link) => (
                <Link key={link.path} to={link.path} className="footer__legal-link">
                  {link.name}
                </Link>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
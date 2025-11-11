import { useState } from 'react';
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: '',
    });
  };

  const services = [
    'Web Development',
    'App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Social Media Management',
    'Creative Design',
    'WhatsApp Marketing',
    'AI Automation',
  ];

  const budgetRanges = [
    'Under ₹10,000',
    '₹10,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    'Above ₹1,00,000',
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__container">
          <h1 className="contact-hero__title">Get In Touch</h1>
          <p className="contact-hero__subtitle">
            Let's discuss how we can help grow your business
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-content__container">
          <div className="contact-content__grid">
            <div className="contact-form-wrapper">
              <h2 className="contact-form-wrapper__title">Send Us a Message</h2>
              <p className="contact-form-wrapper__description">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form__group">
                  <label htmlFor="name" className="contact-form__label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-form__input"
                    placeholder="Your name"
                  />
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="email" className="contact-form__label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="contact-form__input"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="phone" className="contact-form__label">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="contact-form__input"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="contact-form__group">
                  <label htmlFor="company" className="contact-form__label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="contact-form__input"
                    placeholder="Your company"
                  />
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="service" className="contact-form__label">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="contact-form__select"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contact-form__group">
                    <label htmlFor="budget" className="contact-form__label">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="contact-form__select"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="contact-form__group">
                  <label htmlFor="message" className="contact-form__label">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="contact-form__textarea"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="contact-form__submit">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info">
              <h2 className="contact-info__title">Contact Information</h2>
              <p className="contact-info__description">
                Reach out to us through any of these channels
              </p>

              <div className="contact-info__items">
                <a
                  href="https://wa.me/919424989187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info__item contact-info__item--whatsapp"
                >
                  <div className="contact-info__icon">
                    <FaWhatsapp />
                  </div>
                  <div className="contact-info__details">
                    <h3 className="contact-info__label">WhatsApp</h3>
                    <p className="contact-info__value">+91 9424989187</p>
                  </div>
                </a>

                <a
                  href="tel:+919424989187"
                  className="contact-info__item"
                >
                  <div className="contact-info__icon">
                    <FaPhone />
                  </div>
                  <div className="contact-info__details">
                    <h3 className="contact-info__label">Phone</h3>
                    <p className="contact-info__value">+91 942 498 9187</p>
                  </div>
                </a>

                <a
                  href="mailto:info@techethix.com"
                  className="contact-info__item"
                >
                  <div className="contact-info__icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-info__details">
                    <h3 className="contact-info__label">Email</h3>
                    <p className="contact-info__value">info@techethix.com</p>
                  </div>
                </a>

                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-info__details">
                    <h3 className="contact-info__label">Office</h3>
                    <p className="contact-info__value">
                      Indore, Madhya Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <FaClock />
                  </div>
                  <div className="contact-info__details">
                    <h3 className="contact-info__label">Business Hours</h3>
                    <p className="contact-info__value">Mon - Sun: 10 AM - 8 PM</p>
                    {/* <p className="contact-info__value contact-info__value--small">
                      Sunday: Closed
                    </p> */}
                  </div>
                </div>
              </div>

              <div className="contact-info__social">
                <h3 className="contact-info__social-title">Follow Us On</h3>
                <div className="contact-info__social-links">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info__social-link"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  {/* <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info__social-link"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a> */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info__social-link"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info__social-link"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>

              <div className="contact-info__cta">
                <h3 className="contact-info__cta-title">
                  Need Immediate Assistance?
                </h3>
                <p className="contact-info__cta-text">
                  Book a free 20-minute consultation call with our team
                </p>
                <a
                  href="https://wa.me/919424989187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info__cta-btn"
                >
                  <FaWhatsapp />
                  <span>Schedule Free Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
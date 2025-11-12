import { Link } from 'react-router-dom';
import {
  FaCode,
  FaMobile,
  FaPalette,
  FaBullhorn,
  FaUsers,
  FaPencilRuler,
  FaWhatsapp,
  FaRobot,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
} from 'react-icons/fa';
import OurStory from '../assets/images/OurStory.png';
import OurVision from '../assets/images/OurVision.png';
import OurMission from '../assets/images/OurMission.png';
import AboutUsImage from '../assets/images/AboutUs.png';
import HeroImage from '../assets/images/HeroImage.png';

const Home = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Responsive, SEO-optimized websites that drive results',
    },
    {
      icon: <FaMobile />,
      title: 'App Development',
      description: 'Custom mobile applications for iOS and Android',
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly interfaces that convert',
    },
    {
      icon: <FaBullhorn />,
      title: 'Digital Marketing',
      description: 'Data-driven strategies to grow your online presence',
    },
    {
      icon: <FaUsers />,
      title: 'Social Media Management',
      description: 'Build your brand and engage your audience',
    },
    {
      icon: <FaPencilRuler />,
      title: 'Creative Design',
      description: 'Logos, posters, and video editing services',
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp Marketing',
      description: 'Reach customers directly with targeted campaigns',
    },
    {
      icon: <FaRobot />,
      title: 'AI Automation',
      description: 'Streamline operations with AI-powered solutions',
    },
  ];

  const whyChooseUs = [
    { icon: <FaCheckCircle />, text: 'Affordable pricing for SMEs' },
    { icon: <FaCheckCircle />, text: 'Accessible technology solutions' },
    { icon: <FaCheckCircle />, text: 'Ethical business practices' },
    { icon: <FaCheckCircle />, text: 'Innovative approaches' },
    { icon: <FaCheckCircle />, text: 'Modern tech stack' },
    { icon: <FaCheckCircle />, text: 'Local-first mindset' },
  ];

  const process = [
    { step: '01', title: 'Audit', description: 'Free digital audit of your current presence' },
    { step: '02', title: 'Build', description: 'Custom development tailored to your needs' },
    { step: '03', title: 'Launch', description: 'Smooth deployment and go-live support' },
    { step: '04', title: 'Grow', description: 'Ongoing optimization and marketing' },
    { step: '05', title: 'Support', description: 'Continuous maintenance and updates' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      business: 'Local Retail Shop',
      text: 'TechEthics transformed our business with a beautiful website and effective social media strategy. Our sales increased by 40%!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      business: 'Boutique Owner',
      text: 'Professional, affordable, and results-driven. The WhatsApp marketing campaign brought us so many new customers.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      business: 'Restaurant Owner',
      text: 'Their AI automation solution saved us hours every week. Highly recommend TechEthics for any small business!',
      rating: 5,
    },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__text">
              <h1 className="hero__title">
                Digital growth for local businesses — simple, ethical, and affordable
              </h1>
              <p className="hero__subtitle">
                Websites, apps, marketing, and AI automation that help Indore & PAN-India SMEs compete online
              </p>
              <div className="hero__actions">
                <Link to="/contact" className="hero__btn hero__btn--primary">
                  Get Free Quote
                </Link>
                <Link to="/contact" className="hero__btn hero__btn--secondary">
                  Free Digital Audit
                </Link>
              </div>
              <div className="hero__trust">
                <div className="hero__avatars">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="hero__avatar">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="hero__trust-text">Trusted by 50+ local businesses in Indore</p>
              </div>
            </div>
            <div className="hero__visual">
              <img src={HeroImage} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services__container">
          <div className="services__header">
            <h2 className="services__title">Our Services</h2>
            <p className="services__subtitle">
              Comprehensive digital solutions tailored for small and medium businesses
            </p>
          </div>
          <div className="services__grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card__icon">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="services__cta">
            <Link to="/services" className="services__btn">
              <span>View All Services</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser section on Home (namespaced .home-about to avoid conflicts) */}
      <section className="home-about">

        <div className="home-about__container container">
          <div className="home-about__header">
            <h2 className="home-about__section-title">About TechEthix</h2>
            <p className="home-about__section-subtitle">Get to know the team behind your digital growth</p>
          </div>
          <div className="home-about__containerbox">
            <div className="home-about__intro">
              <h3 className="home-about__title">TechEthix — Empowering Small Businesses Through Technology</h3>
              <p className="home-about__subtitle"><p>TechEthix is a modern digital solutions company helping small and medium businesses grow through technology, creativity, and automation.</p>
                <p>We combine innovation with ethics, ensuring that every service we offer — from web and app development to AI-driven marketing — helps your business stand out with trust and authenticity.</p>
                <p>
                  We believe in growth with integrity, design with purpose, and technology with heart.</p></p>
              <div className="home-about__values">
                <span className="chip">Affordable</span>
                <span className="chip">Accessible</span>
                <span className="chip">Ethical</span>
                <span className="chip">Innovative</span>
                <span className="chip">Modern</span>
              </div>
              <div className="home-about__actions">
                <Link to="/about" className="btn btn--primary">Learn more about us</Link>
                <Link to="/contact" className="btn btn--secondary">Get a free audit</Link>
              </div>
            </div>

            <div className="home-about__image">
              <img src={AboutUsImage} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="why-us__container">
          <div className="why-us__content">
            <div className="why-us__text">
              <h2 className="why-us__title">Why Choose TechEthics?</h2>
              <p className="why-us__description">
                We're not just another agency. We're your long-term technology partner, committed to your growth.
              </p>
              <div className="why-us__features">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="why-us__feature">
                    <div className="why-us__feature-icon">{item.icon}</div>
                    <span className="why-us__feature-text">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="why-us__values">
              <h3 className="why-us__values-title">Our Core Values</h3>
              <ul className="why-us__values-list">
                <li className="why-us__value">
                  <FaCheckCircle className="why-us__value-icon" />
                  <span><strong>Affordable:</strong> Transparent pricing that fits SME budgets</span>
                </li>
                <li className="why-us__value">
                  <FaCheckCircle className="why-us__value-icon" />
                  <span><strong>Accessible:</strong> Technology made simple for everyone</span>
                </li>
                <li className="why-us__value">
                  <FaCheckCircle className="why-us__value-icon" />
                  <span><strong>Ethical:</strong> Honest practices, no hidden costs</span>
                </li>
                <li className="why-us__value">
                  <FaCheckCircle className="why-us__value-icon" />
                  <span><strong>Innovative:</strong> Latest tech, proven strategies</span>
                </li>
                <li className="why-us__value">
                  <FaCheckCircle className="why-us__value-icon" />
                  <span><strong>Modern:</strong> Future-ready solutions for today</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="process__container">
          <div className="process__header">
            <h2 className="process__title">How We Work</h2>
            <p className="process__subtitle">
              Our proven 5-step process ensures your success from start to finish
            </p>
          </div>
          <div className="process__grid">
            {process.map((item, index) => (
              <div key={index} className="process-step">
                <div className="process-step__card">
                  <div className="process-step__number">{item.step}</div>
                  <h3 className="process-step__title">{item.title}</h3>
                  <p className="process-step__description">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="process-step__arrow">
                    <FaArrowRight />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials__container">
          <div className="testimonials__header">
            <h2 className="testimonials__title">What Our Clients Say</h2>
            <p className="testimonials__subtitle">
              Real results from real businesses in Indore
            </p>
          </div>
          <div className="testimonials__grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-card__rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="testimonial-card__star" />
                  ))}
                </div>
                <p className="testimonial-card__text">"{testimonial.text}"</p>
                <div className="testimonial-card__author">
                  <p className="testimonial-card__name">{testimonial.name}</p>
                  <p className="testimonial-card__business">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta__container">
          <h2 className="cta__title">Ready to Grow Your Business?</h2>
          <p className="cta__subtitle">
            Get a free digital audit and discover how we can help you compete online
          </p>
          <div className="cta__actions">
            <Link to="/contact" className="cta__btn cta__btn--primary">
              Book Free 20-Min Call
            </Link>
            <a
              href="https://wa.me/919424989187"
              target="_blank"
              rel="noopener noreferrer"
              className="cta__btn cta__btn--secondary"
            >
              <FaWhatsapp />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
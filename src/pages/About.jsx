import { Link } from 'react-router-dom';
import {
  FaLightbulb,
  FaHandshake,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaHeart,
  FaArrowRight,
  FaWhatsapp,
} from 'react-icons/fa';
import OurStory from "../assets/images/OurStory.png"
import OurVision from "../assets/images/OurVision.png"
import OurMission from "../assets/images/OurMission.png"
const About = () => {
  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Affordable',
      description: 'Quality digital solutions that fit small business budgets without compromising quality.',
    },
  
    {
      icon: <FaShieldAlt />,
      title: 'Ethical',
      description: 'We prioritize your data privacy, honest communication, and long-term growth over quick wins.',
    },
    {
      icon: <FaRocket />,
      title: 'Innovative',
      description: 'Latest tech trends (AI, automation) adapted for SME needs without unnecessary complexity.',
    },
  
    {
      icon: <FaHeart />,
      title: 'Long-Term Partner',
      description: 'We grow with you. Success means your sustainable growth, not just one-time sales.',
    },
  ];

  const journey = [
    {
      year: 'Founded',
      title: 'TechEthics Born',
      description: 'A team united by belief: technology should empower local businesses, not leave them behind.',
    },
    {
      year: 'Mission',
      title: 'Empower SMEs',
      description: 'Help small and medium businesses build authentic digital presence and compete globally.',
    },
    {
      year: 'Today',
      title: 'Growing Impact',
      description: 'Serving businesses across Indore and PAN-India with affordable, ethical digital solutions.',
    },
  ];

const aboutUSCards = 
  [
            {
              key: 'story',
              title: 'Our Story',
              text: (
                <>
                  TechEthics was born from a simple belief: <strong>technology should empower local businesses — not leave them behind.</strong>
                  <br />
                  <br />
                  We watched talented entrepreneurs and shop owners struggle with overpriced digital solutions, confusing jargon, and vendors who disappear after the sale. So we created a better way — a small team focused on ethics, accessibility, and real results.
                </>
              ),
              image: OurStory,
            },
            {
              key: 'vision',
              title: 'Our Vision',
              text:
                'A world where every small business — regardless of budget — has access to world-class digital tools, expert guidance, and growth opportunities. We envision SMEs thriving online, competing globally, and building sustainable legacies.',
                image: OurVision,
            },
            {
              key: 'mission',
              title: 'Our Mission',
              text:
                'To empower SMEs with affordable, ethical, and innovative digital solutions. We transform how local businesses connect with customers, automate operations, and scale growth through technology and human-centered support.',
                image: OurMission,
            },
          ];
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__container">
          <div className="about-hero__content">
            <h1 className="about-hero__title">About TechEthics</h1>
            <p className="about-hero__subtitle">
              Empowering small businesses through ethical, affordable, and innovative technology
            </p>
            <div className="about-hero__ctas">
              <Link to="/contact" className="about-hero__cta about-hero__cta--primary">
                Get In Touch <FaArrowRight />
              </Link>
              <a
                href="https://wa.me/919424989187"
                target="_blank"
                rel="noopener noreferrer"
                className="about-hero__cta about-hero__cta--secondary"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Zig-zag Cards: Our Story, Our Vision, Our Mission */}
      <section className="about-cards section">
        <div className="container about-cards__container">
          {aboutUSCards.map((card, index) => (
            <article
              key={card.key}
              className={`about-card ${index % 2 === 0 ? 'about-card--reverse' : ''}`}
            >
              <div className="about-card__media" aria-hidden>
                <img src={card.image} alt="" />

              </div>

              <div className="about-card__content">
                <h3 className="about-card__title">{card.title}</h3>
                <div className="about-card__text">{card.text}</div>
               
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values">
        <div className="values__container">
          <div className="values__header">
            <h2 className="values__title">Our Core Values</h2>
            <p className="values__subtitle">These guide every decision we make</p>
          </div>
          <div className="values__grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-card__icon">{value.icon}</div>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      {/* <section className="founder">
        <div className="founder__container">
          <div className="founder__grid">
            <div className="founder__image-section">
              <div className="founder__image-placeholder">
                <span>Founder Photo</span>
              </div>
            </div>
            <div className="founder__content">
              <h2 className="founder__title">Meet The Founder</h2>
              <p className="founder__subtitle">Visionary leader driving TechEthics mission</p>
              <div className="founder__text">
                <p>
                  [Founder Name], the visionary behind TechEthics, comes from a background in [relevant field] with [X] years of experience in digital solutions and business transformation.
                </p>
                <p>
                  Frustrated by the gap between expensive tech consultants and DIY solutions, [Founder Name] founded TechEthics to create a middle path: professional-grade digital services designed specifically for small and medium businesses who deserve better.
                </p>
                <p>
                  When not building digital solutions, [Founder Name] is passionate about [interests], mentoring young entrepreneurs, and building community around ethical tech. [He/She/They] believe in leading by example and treating every client as a partner in growth.
                </p>
              </div>
              <div className="founder__quote">
                <p>
                  "Every business has a story worth telling. Our job is to help you tell it, reach more people, and grow sustainably. Technology is just the tool—people and purpose come first."
                </p>
                <cite>— [Founder Name], Founder & CEO</cite>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Journey/Timeline Section */}
      <section className="journey">
        <div className="journey__container">
          <h2 className="journey__title">Our Journey</h2>
          <div className="journey__timeline">
            {journey.map((item, index) => (
              <div key={index} className="journey__item">
                <div className="journey__marker">{item.year}</div>
                <div className="journey__content">
                  <h3 className="journey__content-title">{item.title}</h3>
                  <p className="journey__content-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      {/* <section className="team-cta">
        <div className="team-cta__container">
          <h2 className="team-cta__title">Ready to Start Your Digital Journey?</h2>
          <p className="team-cta__subtitle">
            Let's discuss how TechEthics can help your business thrive online
          </p>
          <div className="team-cta__actions">
            <Link to="/contact" className="team-cta__btn team-cta__btn--primary">
              Schedule Free Consultation
            </Link>
            <Link to="/services" className="team-cta__btn team-cta__btn--secondary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section> */}

      {/* Trust Badge Section */}
      <section className="trust-badges">
        <div className="trust-badges__container">
          <h3 className="trust-badges__title">Trusted By Local Businesses</h3>
          <div className="trust-badges__content">
            <p className="trust-badges__text">
              We work with entrepreneurs, retailers, service providers, and growing businesses across Indore and India. Our approach is simple: understand your challenges, build solutions that work, and support your growth every step of the way.
            </p>
            <div className="trust-badges__values">
              <span className="trust-badge">Affordable</span>
              <span className="trust-badge">Accessible</span>
              <span className="trust-badge">Ethical</span>
              <span className="trust-badge">Innovative</span>
              <span className="trust-badge">Modern</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

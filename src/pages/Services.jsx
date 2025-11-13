import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaCode,
  FaMobile,
  FaPalette,
  FaBullhorn,
  FaUsers,
  FaPencilRuler,
  FaWhatsapp,
  FaRobot,
  FaChevronDown,
  FaChevronUp,
  FaCheck,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    shortDescription: 'Professional, responsive websites that drive business growth',
    fullDescription: 'We create modern, SEO-optimized websites that not only look great but also convert visitors into customers. From simple landing pages to complex web applications, we handle it all.',
    features: [
      'Responsive design for all devices',
      'SEO optimization',
      'Fast loading speeds',
      'Content Management System',
      'E-commerce integration',
      'Analytics setup',
    ],
    process: 'Discovery → Design → Development → Testing → Launch → Support',
    pricing: 'Starting from ₹15,000',
  },
    {
      icon: <FaMobile />,
      title: 'App Development',
      shortDescription: 'Native and cross-platform mobile applications',
      fullDescription: 'Build powerful mobile applications for iOS and Android that engage users and drive business results. We specialize in both native and cross-platform development.',
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'API integration',
        'Push notifications',
        'In-app purchases',
        'App Store deployment',
      ],
      process: 'Planning → UI/UX Design → Development → Testing → Deployment → Maintenance',
      pricing: 'Starting from ₹50,000',
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      shortDescription: 'Beautiful, user-friendly interfaces that convert',
      fullDescription: 'Create stunning user experiences that delight your customers and drive conversions. Our design process is rooted in user research and best practices.',
      features: [
        'User research & personas',
        'Wireframing & prototyping',
        'Visual design',
        'Usability testing',
        'Design systems',
        'Brand identity',
      ],
      process: 'Research → Wireframes → Mockups → Prototype → Testing → Handoff',
      pricing: 'Starting from ₹20,000',
    },
    {
      icon: <FaBullhorn />,
      title: 'Digital Marketing',
      shortDescription: 'Data-driven strategies to grow your online presence',
      fullDescription: 'Reach your target audience and grow your business with comprehensive digital marketing strategies including SEO, PPC, content marketing, and more.',
      features: [
        'Search Engine Optimization',
        'Google Ads management',
        'Social media advertising',
        'Content marketing',
        'Email campaigns',
        'Analytics & reporting',
      ],
      process: 'Audit → Strategy → Implementation → Optimization → Reporting',
      pricing: 'Starting from ₹10,000/month',
    },
    {
      icon: <FaUsers />,
      title: 'Social Media Management',
      shortDescription: 'Build your brand and engage your audience',
      fullDescription: 'Grow your social media presence with consistent, engaging content and community management across all major platforms.',
      features: [
        'Content creation & scheduling',
        'Community management',
        'Social media strategy',
        'Influencer outreach',
        'Performance analytics',
        'Paid social campaigns',
      ],
      process: 'Strategy → Content Planning → Creation → Posting → Engagement → Analysis',
      pricing: 'Starting from ₹8,000/month',
    },
    {
      icon: <FaPencilRuler />,
      title: 'Creative Design',
      shortDescription: 'Logos, posters, and video editing services',
      fullDescription: 'Professional graphic design and video editing services to make your brand stand out. From logos to marketing materials, we create visuals that captivate.',
      features: [
        'Logo design',
        'Brand identity',
        'Marketing materials',
        'Video editing',
        'Motion graphics',
        'Print design',
      ],
      process: 'Brief → Concepts → Revisions → Final Delivery',
      pricing: 'Starting from ₹5,000',
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp Marketing',
      shortDescription: 'Reach customers directly with targeted campaigns',
      fullDescription: 'Leverage WhatsApp Business API to send personalized messages, automate customer service, and drive sales through direct communication.',
      features: [
        'WhatsApp Business API setup',
        'Broadcast campaigns',
        'Chatbot integration',
        'Customer support automation',
        'Analytics & insights',
        'Template message creation',
      ],
      process: 'Setup → Strategy → Campaign Creation → Launch → Optimization',
      pricing: 'Starting from ₹12,000/month',
    },
    {
      icon: <FaRobot />,
      title: 'AI Automation',
      shortDescription: 'Streamline operations with AI-powered solutions',
      fullDescription: 'Implement AI and automation solutions to reduce manual work, improve efficiency, and scale your business operations.',
      features: [
        'Process automation',
        'AI chatbots',
        'Data analysis',
        'Workflow optimization',
        'Integration with existing tools',
        'Custom AI solutions',
      ],
      process: 'Assessment → Solution Design → Implementation → Training → Support',
      pricing: 'Starting from ₹25,000',
    },
  ];

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);
  const location = useLocation();

  // const pricingPlans = [
  //   {
  //     name: 'Starter',
  //     price: '₹15,000',
  //     description: 'Perfect for small businesses getting started online',
  //     features: [
  //       'Basic website or landing page',
  //       'Mobile responsive design',
  //       'SEO basics',
  //       'Contact form',
  //       '3 months support',
  //       'Social media setup',
  //     ],
  //     cta: 'Get Started',
  //   },
  //   {
  //     name: 'Growth',
  //     price: '₹35,000',
  //     description: 'For businesses ready to scale their digital presence',
  //     features: [
  //       'Full website with CMS',
  //       'Advanced SEO',
  //       'E-commerce functionality',
  //       'Custom features',
  //       '6 months support',
  //       'Marketing integration',
  //       'Analytics dashboard',
  //       'Content creation',
  //     ],
  //     cta: 'Choose Growth',
  //     featured: true,
  //   },
  //   {
  //     name: 'Premium',
  //     price: 'Custom',
  //     description: 'Enterprise solutions with full support',
  //     features: [
  //       'Custom web/app development',
  //       'Dedicated project manager',
  //       'Priority support',
  //       'Advanced integrations',
  //       '12 months support',
  //       'Marketing campaigns',
  //       'AI automation',
  //       'Ongoing optimization',
  //     ],
  //     cta: 'Contact Us',
  //   },
  // ];

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'A basic website typically takes 2-4 weeks, while more complex projects can take 6-12 weeks depending on features and requirements.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! All our packages include support periods, and we offer monthly maintenance plans for ongoing updates and technical support.',
    },
    {
      question: 'Can you help with content creation?',
      answer: 'Absolutely! We offer content writing, photography, and video production services to ensure your website has high-quality content.',
    },
    {
      question: 'What if I need changes after launch?',
      answer: 'We provide training on how to make basic updates yourself, and our support team is always available for more complex changes.',
    },
    {
      question: 'Do you work with businesses outside Indore?',
      answer: 'Yes! While we\'re based in Indore, we work with clients across India and internationally through online collaboration.',
    },
  ];

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  // Handle hash-based navigation to specific services
  useEffect(() => {
    const hash = location.hash.slice(1); // Remove '#' from hash
    if (hash) {
      // Find the service index that matches the hash
      const serviceIndex = services.findIndex(
        (service) => service.title.toLowerCase().replace(/\s+/g, '-') === hash
      );
      
      if (serviceIndex !== -1) {
        setExpandedService(serviceIndex);
        
        // Scroll to the service element after a small delay to ensure DOM is updated
        setTimeout(() => {
          const serviceElement = document.getElementById(`service-${serviceIndex}`);
          if (serviceElement) {
            serviceElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
    }, [location.hash]);

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero__container">
          <h1 className="services-hero__title">Our Services</h1>
          <p className="services-hero__subtitle">
            Comprehensive digital solutions to help your business thrive online
          </p>
        </div>
      </section>

      <section className="services-list">
        <div className="services-list__container">
          <div className="services-list__grid">
            {services.map((service, index) => (
              <div key={index} id={`service-${index}`} className="service-detail">
                <div
                  className="service-detail__header"
                  onClick={() => toggleService(index)}
                >
                  <div className="service-detail__icon">{service.icon}</div>
                  <div className="service-detail__info">
                    <h3 className="service-detail__title">{service.title}</h3>
                    <p className="service-detail__short">{service.shortDescription}</p>
                  </div>
                  <button className="service-detail__toggle">
                    {expandedService === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>

                {expandedService === index && (
                  <div className="service-detail__content">
                    <p className="service-detail__description">{service.fullDescription}</p>
                    
                    <div className="service-detail__section">
                      <h4 className="service-detail__subtitle">Key Features</h4>
                      <ul className="service-detail__features">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="service-detail__feature">
                            <FaCheck className="service-detail__check" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-detail__section">
                      <h4 className="service-detail__subtitle">Our Process</h4>
                      <p className="service-detail__process">{service.process}</p>
                    </div>

                    <div className="service-detail__footer">
                      {/* <span className="service-detail__pricing">{service.pricing}</span> */}
                      <Link to="/contact" className="service-detail__cta">
                        Get Quote
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* <section className="pricing">
        <div className="pricing__container">
          <div className="pricing__header">
            <h2 className="pricing__title">Pricing Plans</h2>
            <p className="pricing__subtitle">
              Flexible packages designed for businesses of all sizes
            </p>
          </div>
          <div className="pricing__grid">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}
              >
                {plan.featured && <div className="pricing-card__badge">Most Popular</div>}
                <h3 className="pricing-card__name">{plan.name}</h3>
                <div className="pricing-card__price">{plan.price}</div>
                <p className="pricing-card__description">{plan.description}</p>
                <ul className="pricing-card__features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="pricing-card__feature">
                      <FaCheck className="pricing-card__check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="pricing-card__cta">
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="faq">
        <div className="faq__container">
          <div className="faq__header">
            <h2 className="faq__title">Frequently Asked Questions</h2>
            <p className="faq__subtitle">
              Got questions? We've got answers
            </p>
          </div>
          <div className="faq__list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-item__question">{faq.question}</h3>
                <p className="faq-item__answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="services-cta__container">
          <h2 className="services-cta__title">Ready to Get Started?</h2>
          <p className="services-cta__subtitle">
            Let's discuss your project and find the perfect solution for your business
          </p>
          <div className="services-cta__actions">
            <Link to="/contact" className="services-cta__btn services-cta__btn--primary">
              Schedule Free Consultation
            </Link>
            <a
              href="https://wa.me/+916262326939"
              target="_blank"
              rel="noopener noreferrer"
              className="services-cta__btn services-cta__btn--secondary"
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

export default Services;
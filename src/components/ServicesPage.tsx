import { Globe, Smartphone, Wrench, Palette, PenTool, Shield, ArrowRight, Check, Zap, Target, Award, Clock } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'lucide-react';

const allServices = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom websites built with cutting-edge technologies',
    details: [
      'Responsive & Mobile-First Design',
      'SEO Optimized Architecture',
      'Fast Loading Performance',
      'Scalable Solutions',
      'E-Commerce Integration',
      'CMS Implementation',
    ],
    fullDescription:
      'We create stunning, high-performance websites tailored to your brand. From simple brochure sites to complex web applications, we leverage the latest technologies to build solutions that engage users and drive conversions.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform applications',
    details: [
      'iOS & Android Development',
      'Cross-Platform Solutions',
      'Progressive Web Apps',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality',
    ],
    fullDescription:
      'Transform your app ideas into reality with our expert mobile development. We build native iOS, Android, and cross-platform solutions that deliver exceptional user experiences and robust functionality.',
  },
  {
    icon: Wrench,
    title: 'Website Bug Fixing',
    description: 'Expert troubleshooting and maintenance',
    details: [
      'Security Audits',
      'Performance Optimization',
      'Bug Fixes & Patches',
      'Compatibility Testing',
      'Speed Enhancement',
      'Uptime Monitoring',
    ],
    fullDescription:
      'Keep your website running smoothly with our comprehensive maintenance and bug-fixing services. We identify and resolve issues quickly, ensuring optimal performance and security.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Intuitive and visually stunning interfaces',
    details: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design',
      'Interaction Design',
      'Usability Testing',
      'Design Systems',
    ],
    fullDescription:
      'Create memorable user experiences with our comprehensive UI/UX design services. We blend aesthetic excellence with functional usability to create interfaces that users love.',
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description: 'Creative visual solutions for your brand',
    details: [
      'Logo Design',
      'Brand Identity',
      'Marketing Materials',
      'Social Media Graphics',
      'Infographics',
      'Print Design',
    ],
    fullDescription:
      'Stand out from the competition with professional graphic design services. From logos to complete brand identities, we create visual assets that capture your brand essence.',
  },
  {
    icon: Shield,
    title: 'Website Security',
    description: 'Protect your digital assets from threats',
    details: [
      'SSL Certificates',
      'Penetration Testing',
      'Security Compliance',
      'DDoS Protection',
      'Backup Solutions',
      'Security Updates',
    ],
    fullDescription:
      'Protect your digital assets with our comprehensive security solutions. We implement industry-standard security measures to keep your website and user data safe.',
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(0);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section');
          if (sectionName) {
            setVisibleSections((prev) => [...new Set([...prev, sectionName])]);
          }
        }
      });
    }, observerOptions);

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && sectionRef.current) {
            allServices.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  if (!prev.includes(index)) {
                    return [...prev, index];
                  }
                  return prev;
                });
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    if (sectionRef.current) {
      cardObserver.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  return (
    <div className="page-wrapper services-page">
      <section className="hero-banner services-hero">
        <div className="banner-content">
          <h1 className="animate-slide-up">
          Our <span style={{ color: "#06b6d4" }}>Services</span>
        </h1>
          <p className="animate-slide-up delay-1">
            Comprehensive Digital Solutions for Your Business
          </p>
        </div>
        <div className="banner-gradient"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </section>

      <section className="services-overview" data-section="services-overview">
        <div className="container">
          <div
  className={`section-header ${
    visibleSections.includes('services-overview') ? 'animate-slide-up' : ''
  }`}
  style={{
    textAlign: "center",
  }}
>
  <span
    className="section-badge"
    style={{
      display: "inline-block",
      marginBottom: "22px",
      padding: "10px 26px",
      borderRadius: "30px",
      fontSize: "14px",
      fontWeight: "500",
      color: "#1ec8e7",
      background: "rgba(30, 200, 231, 0.08)",
      border: "1px solid rgba(30, 200, 231, 0.35)",
        }}
      >
        What We Offer
      </span>

      <h2
        style={{
          fontSize: "40px",
          fontWeight: "800",
          color: "#ffffff",
          marginBottom: "16px",
        }}
      >
        A Full Spectrum Of{" "}
        <span style={{ color: "#06b6d4" }}>Digital Services</span>
      </h2>

      <p
        style={{
          fontSize: "18px",
          marginTop: "10px",
          fontWeight: "600",
          color: "#9aa8b6",
          maxWidth: "720px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: "1.6",
        }}
      >
        Transform your business with our cutting-edge solutions
      </p>
    </div>

          <div className="services-grid-all" ref={sectionRef}>
            {allServices.map((service, index) => (
              <div
                key={index}
                className={`service-card-full ${visibleCards.includes(index) ? 'visible' : ''}`}
                onClick={() => setSelectedService(index)}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="service-card-icon-wrapper">
                  <div className="service-icon-glow"></div>
                  <service.icon size={48} strokeWidth={1.5} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-card-footer">
                  <span>Learn More</span>
                  <ArrowRight size={18} strokeWidth={2} />
                </div>
                <div className="card-shine"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

    <section className="service-detail" data-section="service-detail" ref={detailRef}>
      <div className="container">
        <div className={`detail-grid ${visibleSections.includes('service-detail') ? 'visible' : ''}`}>
          <div className="detail-content">
            <div className="detail-icon-wrapper">
              <div className="icon-orbit orbit-1"></div>
              <div className="icon-orbit orbit-2"></div>
              {React.createElement(allServices[selectedService].icon, { size: 64, strokeWidth: 1.5 })}
            </div>
            <h2>{allServices[selectedService].title}</h2>
            <p className="detail-description">
              {allServices[selectedService].fullDescription}
            </p>
            <div className="features-list">
              {allServices[selectedService].details.map((detail, idx) => (
                <div
                  key={idx}
                  className="feature-list-item"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="feature-check">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-visual">
            <div className="service-visual-card">
              <div className="visual-grid">
                {[
                  "/images/A_digital_illustration_showcases_an_IT_and_softwar_1.jpg",
                  "/mnt/data/A_digital_illustration_showcases_an_IT_and_softwar_2.png",
                  "/mnt/data/A_digital_illustration_showcases_an_IT_and_softwar_3.png",
                  "/mnt/data/A_digital_illustration_showcases_an_IT_and_softwar_4.png",
                  "/mnt/data/A_digital_illustration_showcases_an_IT_and_softwar_5.png",
                  "/mnt/data/A_digital_illustration_showcases_an_IT_and_softwar_6.png",
                  "/mnt/data/A_digital_illustration_showcases_an_IT_and_softwar_7.png",
                  "/mnt/data/A_digital_illustration_showcases_an_IT_and_softwar_8.png",
                  "/mnt/data/A_digital_illustration_showcases_an_IT_and_softwar_9.png"
                ].map((src, i) => (
                  <div key={i} className="grid-item" style={{ animationDelay: `${i * 0.1}s` }}>
                    <img src={src} alt={`IT Tech ${i + 1}`} />
                  </div>
                ))}
              </div>
              <div className="visual-center">
                {React.createElement(allServices[selectedService].icon, {
                  size: 120,
                  strokeWidth: 1.5
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


      <section className="service-packages" data-section="service-packages" ref={packagesRef}>
        <div className="container">
          <div
      className={`section-header ${
        visibleSections.includes('service-packages') ? 'animate-slide-up' : ''
      }`}
    >
      <span
        className="section-badge"
        style={{
          display: "inline-block",
          marginTop:"-90px",
          marginBottom: "20px",
          padding: "10px 30px",
          borderRadius: "40px",
          fontSize: "14px",
          fontWeight: "500",
          color: "#1ec8e7",
          background: "rgba(30, 200, 231, 0.08)",
          border: "1px solid rgba(30, 200, 231, 0.35)",
        }}
      >
        Pricing
      </span>

      <h2
        style={{
          fontSize: "48px",
          fontWeight: "800",
          color: "#ffffff",
          marginBottom: "16px",
        }}
      >
        Flexible Service{" "}
        <span style={{ color: "#06b6d4" }}>Packages</span>
      </h2>

      <p
        style={{
          fontSize: "18px",
          marginTop: "10px",
          fontWeight: "600",
          color: "#9aa8b6",
          maxWidth: "720px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: "1.6",
        }}
      >
        Solutions scaled to your needs and budget
      </p>
    </div>

          <div className="packages-grid">
            <div className={`package-card starter ${visibleSections.includes('service-packages') ? 'visible' : ''}`}>
              <div className="package-tag">Starter</div>
              <div className="package-icon">
                <Zap size={32} strokeWidth={2} />
              </div>
              <h3>Small Business</h3>
              <p className="package-subtitle">Perfect for launching your digital presence</p>
              <div className="package-features">
                <div className="feature">
                  <Check size={20} strokeWidth={2.5} />
                  <span>Basic Website</span>
                </div>
                <div className="feature">
                  <Check size={20} strokeWidth={2.5} />
                  <span>Mobile Responsive</span>
                </div>
                <div className="feature">
                  <Check size={20} strokeWidth={2.5} />
                  <span>SEO Basics</span>
                </div>
                <div className="feature">
                  <Check size={20} strokeWidth={2.5} />
                  <span>3 Months Support</span>
                </div>
              </div>
              <button className="package-btn">Get Started</button>
            </div>

            <div className={`package-card professional ${visibleSections.includes('service-packages') ? 'visible' : ''}`}>
              <div className="package-tag featured">Popular</div>
              <div className="package-icon featured">
                <Target size={32} strokeWidth={2} />
              </div>
              <h3>Professional</h3>
              <p className="package-subtitle">For growing businesses</p>
              <div className="package-features">
                <div className="feature">
                  <Check size={20} strokeWidth={2.5} />
                  <span>Custom Web App</span>
                </div>
                <div className="feature">
                  <Check size={20} strokeWidth={2.5} />
                  <span>Advanced Features</span>
                </div>
                <div className="feature">
                  <Check size={20} strokeWidth={2.5} />
                  <span>Full SEO</span>
                </div>
                <div className="feature">
                  <Check size={20} strokeWidth={2.5} />
                  <span>12 Months Support</span>
                </div>
              </div>
              <button className="package-btn featured">Choose Plan</button>
            </div>

            <div className={`package-card enterprise ${visibleSections.includes('service-packages') ? 'visible' : ''}`}>
              <div className="package-tag">Enterprise</div>
              <div className="package-icon">
                <Award size={32} strokeWidth={2} />
              </div>
              <h3>Custom Solution</h3>
              <p className="package-subtitle">For large-scale projects</p>
              <div className="package-features">
                <div className="feature">
                  <Check size={20} strokeWidth={2.5} />
                  <span>Full Custom Dev</span>
                </div>
                <div className="feature">
                  <Check size={20} strokeWidth={2.5} />
                  <span>Mobile + Web</span>
                </div>
                <div className="feature">
                  <Check size={20} strokeWidth={2.5} />
                  <span>Dedicated Support</span>
                </div>
                <div className="feature">
                  <Check size={20} strokeWidth={2.5} />
                  <span>24/7 Monitoring</span>
                </div>
              </div>
              <button className="package-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      <section className="workflow-section" data-section="workflow-section" ref={workflowRef}>
        <div className="container">
          <div
        className={`section-header ${
          visibleSections.includes('workflow-section') ? 'animate-slide-up' : ''
        }`}
      >
        <span
          className="section-badge"
          style={{
            display: "inline-block",
            marginTop:"-80px",
            marginBottom: "20px",
            padding: "10px 26px",
            borderRadius: "30px",
            fontSize: "14px",
            fontWeight: "500",
            color: "#1ec8e7",
            background: "rgba(30, 200, 231, 0.08)",
            border: "1px solid rgba(30, 200, 231, 0.35)",
          }}
        >
          Our Process
        </span>

        <h2
          style={{
            fontSize: "48px",
            fontWeight: "800",
            color: "#ffffff",
            marginBottom: "16px",
          }}
        >
          How{" "}
          <span style={{ color: "#06b6d4" }}>We Work</span>
        </h2>

        <p
          style={{
            fontSize: "18px",
            marginTop: "10px",
            fontWeight: "600",
            color: "#9aa8b6",
            maxWidth: "720px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.6",
          }}
        >
          From concept to delivery, we follow a proven process
        </p>
      </div>

          <div className="workflow-steps">
            {[
              {
                number: '01',
                title: 'Consultation',
                description: 'We listen to your needs, understand your vision, and establish clear objectives.',
              },
              {
                number: '02',
                title: 'Design',
                description: 'Create wireframes, mockups, and prototypes for your approval.',
              },
              {
                number: '03',
                title: 'Development',
                description: 'Build robust, scalable solutions using best practices and latest technologies.',
              },
              {
                number: '04',
                title: 'Testing & Launch',
                description: 'Rigorous testing and seamless deployment to production.',
              },
            ].map((step, index) => (
              <React.Fragment key={index}>
                <div
                  className={`workflow-step ${visibleSections.includes('workflow-section') ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="step-icon-wrapper">
                    <div className="step-number">{step.number}</div>
                    <div className="step-circle"></div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="step-glow"></div>
                </div>
                {index < 3 && (
                  <div
                    className={`workflow-connector ${visibleSections.includes('workflow-section') ? 'visible' : ''}`}
                    style={{ animationDelay: `${index * 0.15 + 0.3}s` }}
                  >
                    <ArrowRight size={24} strokeWidth={2} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="service-faq" data-section="service-faq" ref={faqRef}>
        <div className="container">
          <div
        className={`section-header ${
          visibleSections.includes('service-faq') ? 'animate-slide-up' : ''
        }`}
      >
        <span
          className="section-badge"
          style={{
            display: "inline-block",
            marginBottom: "20px",
            marginTop: "-80px", // added negative top margin
            padding: "14px 32px", // increased size from 10px 26px
            borderRadius: "30px",
            fontSize: "16px", // increased font size from 14px
            fontWeight: "500",
            color: "#1ec8e7",
            background: "rgba(30, 200, 231, 0.08)",
            border: "1px solid rgba(30, 200, 231, 0.35)",
          }}
        >
          FAQ
        </span>

        <h2
          style={{
            fontSize: "48px",
            fontWeight: "800",
            color: "#ffffff",
            marginBottom: "16px",
          }}
        >
          Frequently Asked <span style={{ color: "#06b6d4" }}>Questions</span>
        </h2>

        <p
          style={{
            fontSize: "18px",
            marginTop: "10px",
            fontWeight: "700",
            color: "#9aa8b6",
            maxWidth: "720px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.6",
          }}
        >
          Common questions about our services
        </p>
      </div>

          <div className="faq-grid">
            {[
              {
                question: 'How long does a project take?',
                answer: 'Project timelines vary based on complexity. Small websites take 4-8 weeks, while complex applications may take several months. We provide detailed timelines during the planning phase.',
              },
              {
                question: 'Do you provide post-launch support?',
                answer: 'Absolutely! We offer flexible support packages including maintenance, updates, and monitoring to ensure your solution continues to perform optimally.',
              },
              {
                question: 'What technologies do you use?',
                answer: 'We use modern, industry-standard technologies like React, Node.js, Python, and cloud platforms like AWS and Supabase. We select the best tools for each project\'s specific needs.',
              },
              {
                question: 'Can you work with existing code?',
                answer: 'Yes! We can integrate with existing systems, refactor legacy code, and enhance current solutions to improve performance and functionality.',
              },
              {
                question: 'What is your pricing model?',
                answer: 'We offer flexible pricing: project-based, time-and-materials, or retainer models. We\'ll discuss the best option for your budget and requirements.',
              },
              {
                question: 'How do you ensure quality?',
                answer: 'We follow strict quality assurance processes including code reviews, automated testing, and comprehensive manual testing before deployment.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${visibleSections.includes('service-faq') ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` , paddingLeft : '6rem'}}
              >
                <div className="faq-icon">
                  <Clock size={24} strokeWidth={2} />
                </div>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
                <div className="faq-accent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .hero-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .service-card-icon-wrapper {
          position: relative;
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(8, 145, 178, 0.1), rgba(6, 182, 212, 0.05));
          border-radius: 18px;
          margin-bottom: 1.5rem;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          overflow: hidden;
        }

        .service-icon-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0891b2, #06b6d4);
          opacity: 0;
          transition: opacity 0.5s ease;
          filter: blur(20px);
        }

        .service-card-full:hover .service-icon-glow {
          opacity: 0.6;
        }

        .service-card-full:hover .service-card-icon-wrapper {
          transform: scale(1.1) rotate(-5deg);
          background: linear-gradient(135deg, #0891b2, #06b6d4);
        }

        .service-card-icon-wrapper svg {
          position: relative;
          z-index: 2;
          color: #0891b2;
          transition: all 0.5s ease;
        }

        .service-card-full:hover .service-card-icon-wrapper svg {
          color: white;
          transform: scale(1.1);
        }

        .card-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: translateX(-100%) translateY(-100%) rotate(45deg);
          transition: transform 0.6s ease;
        }

        .service-card-full:hover .card-shine {
          transform: translateX(100%) translateY(100%) rotate(45deg);
        }

        .detail-icon-wrapper {
          position: relative;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px;
          margin-bottom: 2rem;
          color: white;
          animation: floatIcon 3s ease-in-out infinite;
        }

        @keyframes floatIcon {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .icon-orbit {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: rotateOrbit 8s linear infinite;
        }

        .orbit-1 {
          width: 120px;
          height: 119px;
          border-top-color: #06b6d4;
        }

        .orbit-2 {
          width: 161px;
          height: 160px;
          animation-duration: 12s;
          animation-direction: reverse;
          border-right-color: #06b6d4;
        }

        @keyframes rotateOrbit {
          to {
            transform: rotate(360deg);
          }
        }

        .detail-grid.visible .detail-content {
          animation: slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .detail-grid.visible .detail-visual {
          animation: slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
          opacity: 0;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .service-visual-card {
          position: relative;
          width: 100%;
          height: 450px;
          background: linear-gradient(135deg, rgba(8, 145, 178, 0.15), rgba(6, 182, 212, 0.05));
          border: 2px solid rgba(8, 145, 178, 0.3);
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-grid {
          position: absolute;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          padding: 2rem;
          width: 100%;
          height: 100%;
        }

        .grid-item {
          background: rgba(8, 145, 178, 0.1);
          border: 1px solid rgba(8, 145, 178, 0.2);
          border-radius: 12px;
          animation: gridPulse 2s ease-in-out infinite;
          opacity: 0;
        }

        .service-visual-card:hover .grid-item {
          opacity: 1;
        }

        @keyframes gridPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.6;
          }
        }

        .visual-center {
          position: relative;
          z-index: 2;
          color: #0891b2;
          animation: floatIcon 3s ease-in-out infinite;
          filter: drop-shadow(0 0 20px rgba(8, 145, 178, 0.5));
        }

        .package-icon {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(8, 145, 178, 0.1);
          border-radius: 16px;
          margin-bottom: 1.5rem;
          color: #0891b2;
          transition: all 0.5s ease;
        }

        .package-icon.featured {
          background: linear-gradient(135deg, #0891b2, #06b6d4);
          color: white;
        }

        .package-card:hover .package-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .package-card.visible {
          animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .package-card.professional {
          transform: scale(1.05);
          border-color: #0891b2;
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .package-card.professional.visible {
          animation: scaleInFeatured 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards;
          opacity: 0;
        }

        @keyframes scaleInFeatured {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        .workflow-step-wrapper {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .step-icon-wrapper {
          position: relative;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .step-number {
          position: relative;
          z-index: 2;
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #0891b2, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .step-circle {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 3px solid rgba(8, 145, 178, 0.3);
          border-radius: 50%;
          border-top-color: #0891b2;
          animation: rotateOrbit 3s linear infinite;
        }

        .workflow-step {
          position: relative;
        }

        .step-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #0891b2, #06b6d4);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
          transition: all 0.5s ease;
          filter: blur(30px);
        }

        .workflow-step:hover .step-glow {
          transform: translate(-50%, -50%) scale(2);
          opacity: 0.3;
        }

        .workflow-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(8, 145, 178, 0.5);
          opacity: 0;
          transform: scale(0);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .workflow-connector.visible {
          opacity: 1;
          transform: scale(1);
        }

        .faq-item {
          position: relative;
          padding-left: 4rem;
        }

        .faq-icon {
          position: absolute;
          left: 1.5rem;
          top: 2rem;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(8, 145, 178, 0.1), rgba(6, 182, 212, 0.05));
          border-radius: 12px;
          color: #0891b2;
          transition: all 0.3s ease;
        }

        .faq-item:hover .faq-icon {
          background: linear-gradient(135deg, #0891b2, #06b6d4);
          color: white;
          transform: rotate(360deg);
        }

        .faq-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #0891b2, #06b6d4);
          transition: width 0.5s ease;
        }

        .faq-item:hover .faq-accent {
          width: 100%;
        }

        .faq-item.visible {
          animation: slideUpFade 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-list-item {
          animation: slideInLeft 0.5s ease forwards;
          opacity: 0;
        }

        .detail-grid.visible .feature-list-item {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .workflow-connector {
            display: none;
          }

          .workflow-steps {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .detail-grid {
            grid-template-columns: 1fr;
          }

          .packages-grid {
            grid-template-columns: 1fr;
          }

          .package-card.professional {
            transform: scale(1);
          }

          .workflow-steps {
            grid-template-columns: 1fr;
          }

          .service-visual-card {
            height: 350px;
          }

          .faq-item {
            padding-left: 1.5rem;
          }

          .faq-icon {
            position: relative;
            left: 0;
            top: 0;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

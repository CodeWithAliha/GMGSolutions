import { useEffect, useRef, useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Globe,
  Briefcase,
  CheckCircle,
  ExternalLink,
  Users,
  Award,
  Zap,
  Shield,
  Target,
  Headphones,
} from 'lucide-react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="page-wrapper">
      <section className="hero-banner">
        <div className="banner-gradient"></div>
        <div className="container">
          <div className="banner-content">
            <div className="hero-badge animate-fade-in">
              <span className="badge-dot"></span>
              Let's Build Something Amazing Together
            </div>
            <h1 className="animate-slide-up">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="animate-slide-up delay-1">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-quick-info" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="quick-info-grid">
            <div className="info-card animate-on-scroll service-card">
              <div className="info-icon-wrapper">
                <Phone className="info-icon" size={32} />
              </div>
              <h3>Call Us Anytime</h3>
              <a href="tel:+923095999108" className="info-link">
                +92 309 5999 108
              </a>
              <a href="tel:+923008380249" className="info-link">
                +92 300 8380 249
              </a>
              <p className="info-description">Available 24/7 for your queries</p>
            </div>

            <div className="info-card animate-on-scroll service-card" style={{ animationDelay: '0.1s' }}>
              <div className="info-icon-wrapper">
                <Mail className="info-icon" size={32} />
              </div>
              <h3>Email Us</h3>
              <a href="mailto:gmgsolutions108@gmail.com" className="info-link">
                gmgsolutions108@gmail.com
              </a>
              <a href="mailto:info@gmgsolution.com" className="info-link">
                info@gmgsolution.com
              </a>
              <p className="info-description">We'll respond within 24 hours</p>
            </div>

            <div className="info-card animate-on-scroll service-card" style={{ animationDelay: '0.2s' }}>
              <div className="info-icon-wrapper">
                <MapPin className="info-icon" size={32} />
              </div>
              <h3>Visit Our Office</h3>
              <p className="info-link">Qasimabad, Hyderabad</p>
              <p className="info-link">Sindh, Pakistan</p>
              <p className="info-description">Open Monday - Saturday</p>
            </div>

            <div className="info-card animate-on-scroll service-card" style={{ animationDelay: '0.3s' }}>
              <div className="info-icon-wrapper">
                <Clock className="info-icon" size={32} />
              </div>
              <h3>Working Hours</h3>
              <p className="info-link">Mon - Fri: 9 AM - 6 PM</p>
              <p className="info-link">Sat: 10 AM - 4 PM</p>
              <p className="info-description">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-main" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-side animate-on-scroll">
              <div className="section-badge">Send Message</div>
              <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.5rem', marginBottom: '1rem' }}>
                Tell Us About Your <span className="gradient-text">Project</span>
              </h2>
              <p className="section-description" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                Fill out the form below and our team will get back to you within 24 hours. We're excited to hear about your ideas!
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      name="subject"
                      className="form-input"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Service *</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="ecommerce">E-Commerce Solutions</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Tell us about your project *"
                    className="form-input"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ resize: 'vertical', minHeight: '150px' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={formStatus === 'sending'}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {formStatus === 'sending' ? (
                    <>Sending...</>
                  ) : formStatus === 'success' ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <p style={{ color: '#10b981', textAlign: 'center', marginTop: '1rem', fontWeight: '600' }}>
                    Thank you! We'll get back to you soon.
                  </p>
                )}
              </form>
            </div>

            <div className="contact-info-side">
              <div className="info-card-detailed animate-on-scroll service-card" style={{ animationDelay: '0.1s' }}>
                <div className="card-icon-large">
                  <MessageSquare size={40} />
                </div>
                <h3>Direct Communication</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  Prefer to talk directly? We're here to help! Reach out through any of our communication channels and get instant support.
                </p>
                <div className="direct-links">
                  <a href="tel:+923095999108" className="direct-link-btn">
                    <Phone size={20} />
                    Call Now
                  </a>
                  <a href="mailto:gmgsolutions108@gmail.com" className="direct-link-btn">
                    <Mail size={20} />
                    Email Us
                  </a>
                </div>
              </div>

              <div className="info-card-detailed animate-on-scroll service-card" style={{ animationDelay: '0.2s' }}>
                <div className="card-icon-large">
                  <Globe size={40} />
                </div>
                <h3>Global Presence</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  While we're based in Hyderabad, Sindh, we serve clients worldwide. Our remote collaboration tools ensure seamless communication across time zones.
                </p>
              </div>

              <div className="why-choose-mini animate-on-scroll service-card" style={{ animationDelay: '0.3s' }}>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Why Choose GMG Solutions?</h3>
                <div className="mini-features">
                  <div className="mini-feature-item">
                    <CheckCircle size={20} color="#0891b2" />
                    <span>24/7 Support Available</span>
                  </div>
                  <div className="mini-feature-item">
                    <CheckCircle size={20} color="#0891b2" />
                    <span>Fast Response Time</span>
                  </div>
                  <div className="mini-feature-item">
                    <CheckCircle size={20} color="#0891b2" />
                    <span>Expert Team</span>
                  </div>
                  <div className="mini-feature-item">
                    <CheckCircle size={20} color="#0891b2" />
                    <span>Competitive Pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="freelancing-profiles" style={{ padding: '6rem 0', background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.05), transparent)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Find Us On</span>
            <h2 className="section-title">Our Freelancing Profiles</h2>
            <p className="section-description">
              Connect with us on leading freelance platforms. Check out our ratings, reviews, and portfolio of successful projects.
            </p>
          </div>

          <div className="profiles-grid">
            <a
              href="https://www.fiverr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card animate-on-scroll service-card"
            >
              <div className="profile-icon">
                <Briefcase size={40} />
              </div>
              <h3>Fiverr</h3>
              <p className="profile-category">Programming & Tech</p>
              <div className="profile-badge">Top Rated Seller</div>
              <div className="profile-link-wrapper">
                <span>View Profile</span>
                <ExternalLink size={18} />
              </div>
            </a>

            <a
              href="https://www.upwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card animate-on-scroll service-card"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="profile-icon">
                <Briefcase size={40} />
              </div>
              <h3>Upwork</h3>
              <p className="profile-category">Programming & Tech</p>
              <div className="profile-badge">Expert Verified</div>
              <div className="profile-link-wrapper">
                <span>View Profile</span>
                <ExternalLink size={18} />
              </div>
            </a>

            <a
              href="https://www.freelancer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card animate-on-scroll service-card"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="profile-icon">
                <Briefcase size={40} />
              </div>
              <h3>Freelancer</h3>
              <p className="profile-category">Programming & Tech</p>
              <div className="profile-badge">Preferred Freelancer</div>
              <div className="profile-link-wrapper">
                <span>View Profile</span>
                <ExternalLink size={18} />
              </div>
            </a>

            <a
              href="https://www.guru.com"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card animate-on-scroll service-card"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="profile-icon">
                <Briefcase size={40} />
              </div>
              <h3>Guru</h3>
              <p className="profile-category">Programming & Tech</p>
              <div className="profile-badge">Elite Member</div>
              <div className="profile-link-wrapper">
                <span>View Profile</span>
                <ExternalLink size={18} />
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="our-commitments" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Promise</span>
            <h2 className="section-title">What You Can Expect</h2>
            <p className="section-description">
              When you partner with GMG Solutions, you're choosing excellence, reliability, and innovation.
            </p>
          </div>

          <div className="commitments-grid">
            <div className="commitment-card animate-on-scroll why-card">
              <div className="why-icon-wrapper">
                <Zap className="why-icon" />
              </div>
              <h3 className="why-title">Rapid Response</h3>
              <p className="why-description">
                Get answers to your queries within hours, not days. Our dedicated support team is always ready to assist you.
              </p>
            </div>

            <div className="commitment-card animate-on-scroll why-card" style={{ animationDelay: '0.1s' }}>
              <div className="why-icon-wrapper">
                <Shield className="why-icon" />
              </div>
              <h3 className="why-title">Data Security</h3>
              <p className="why-description">
                Your information is protected with enterprise-grade security. We take confidentiality seriously and never share your data.
              </p>
            </div>

            <div className="commitment-card animate-on-scroll why-card" style={{ animationDelay: '0.2s' }}>
              <div className="why-icon-wrapper">
                <Target className="why-icon" />
              </div>
              <h3 className="why-title">Goal-Oriented</h3>
              <p className="why-description">
                We focus on delivering results that matter. Every project is aligned with your business objectives and KPIs.
              </p>
            </div>

            <div className="commitment-card animate-on-scroll why-card" style={{ animationDelay: '0.3s' }}>
              <div className="why-icon-wrapper">
                <Headphones className="why-icon" />
              </div>
              <h3 className="why-title">24/7 Support</h3>
              <p className="why-description">
                Round-the-clock assistance for urgent matters. We're here whenever you need us, across all time zones.
              </p>
            </div>

            <div className="commitment-card animate-on-scroll why-card" style={{ animationDelay: '0.4s' }}>
              <div className="why-icon-wrapper">
                <Users className="why-icon" />
              </div>
              <h3 className="why-title">Dedicated Team</h3>
              <p className="why-description">
                Work with experienced professionals who are passionate about technology and committed to your success.
              </p>
            </div>

            <div className="commitment-card animate-on-scroll why-card" style={{ animationDelay: '0.5s' }}>
              <div className="why-icon-wrapper">
                <Award className="why-icon" />
              </div>
              <h3 className="why-title">Quality Assured</h3>
              <p className="why-description">
                Rigorous testing and quality control ensure that every deliverable meets the highest standards of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-faq" style={{ padding: '6rem 0', background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.05), transparent)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Got questions? We've got answers. Here are some common queries from our clients.
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-item animate-on-scroll">
              <h3>How quickly can you start my project?</h3>
              <p>
                We can typically begin within 24-48 hours of finalizing the project requirements and agreement. For urgent projects, we offer expedited onboarding.
              </p>
            </div>

            <div className="faq-item animate-on-scroll">
              <h3>What are your payment terms?</h3>
              <p>
                We offer flexible payment terms including milestone-based payments, monthly retainers, and project-based pricing. Terms are discussed during the initial consultation.
              </p>
            </div>

            <div className="faq-item animate-on-scroll">
              <h3>Do you offer post-launch support?</h3>
              <p>
                Yes! We provide comprehensive post-launch support including bug fixes, updates, and maintenance. Support packages can be customized to your needs.
              </p>
            </div>

            <div className="faq-item animate-on-scroll">
              <h3>Can you work with my existing team?</h3>
              <p>
                Absolutely! We seamlessly integrate with your in-house team and use your preferred communication and project management tools.
              </p>
            </div>

            <div className="faq-item animate-on-scroll">
              <h3>What industries do you specialize in?</h3>
              <p>
                We work across various industries including e-commerce, healthcare, finance, education, real estate, and more. Our versatile team adapts to your industry needs.
              </p>
            </div>

            <div className="faq-item animate-on-scroll">
              <h3>Do you sign NDAs?</h3>
              <p>
                Yes, we're happy to sign Non-Disclosure Agreements to protect your intellectual property and maintain confidentiality throughout the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Location</span>
            <h2 className="section-title">Visit Us in Hyderabad</h2>
            <p className="section-description">
              Located in the heart of Hyderabad, Sindh. Schedule a visit to discuss your project over coffee.
            </p>
          </div>

          <div className="location-grid">
            <div className="map-placeholder animate-on-scroll service-card">
              <div className="map-content">
                <MapPin size={80} color="#0891b2" />
                <h3>Qasimabad, Hyderabad</h3>
                <p>Sindh, Pakistan</p>
                <button className="btn-secondary" style={{ marginTop: '2rem' }}>
                  <MapPin size={20} />
                  Get Directions
                </button>
              </div>
            </div>

            <div className="location-details">
              <div className="location-info-card animate-on-scroll service-card" style={{ animationDelay: '0.1s' }}>
                <Clock size={32} color="#0891b2" style={{ marginBottom: '1rem' }} />
                <h3>Business Hours</h3>
                <div className="hours-list">
                  <div className="hour-item">
                    <span>Monday - Friday</span>
                    <span className="gradient-text">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hour-item">
                    <span>Saturday</span>
                    <span className="gradient-text">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hour-item">
                    <span>Sunday</span>
                    <span style={{ color: '#ef4444' }}>Closed</span>
                  </div>
                </div>
              </div>

              <div className="location-info-card animate-on-scroll service-card" style={{ animationDelay: '0.2s' }}>
                <Phone size={32} color="#0891b2" style={{ marginBottom: '1rem' }} />
                <h3>Quick Contact</h3>
                <div className="quick-contact-list">
                  <a href="tel:+923095999108" className="quick-contact-item">
                    <Phone size={18} />
                    +92 309 5999 108
                  </a>
                  <a href="tel:+923008380249" className="quick-contact-item">
                    <Phone size={18} />
                    +92 300 8380 249
                  </a>
                  <a href="mailto:gmgsolutions108@gmail.com" className="quick-contact-item">
                    <Mail size={18} />
                    gmgsolutions108@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta" style={{ padding: '6rem 0', background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.1), transparent)' }}>
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
              Ready to Start Your <span className="gradient-text">Project?</span>
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Let's turn your vision into reality. Contact us today for a free consultation.
            </p>
            <div className="hero-buttons">
              <a href="tel:+923095999108" className="btn-primary">
                <Phone size={20} />
                Call Us Now
              </a>
              <a href="mailto:gmgsolutions108@gmail.com" className="btn-secondary">
                <Mail size={20} />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .quick-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .info-card {
          text-align: center;
        }

        .info-icon-wrapper {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient);
          border-radius: 20px;
          margin: 0 auto 1.5rem;
          transition: all 0.3s ease;
        }

        .info-card:hover .info-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }

        .info-icon {
          color: white;
        }

        .info-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .info-link {
          display: block;
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }

        .info-link:hover {
          transform: translateX(5px);
        }

        .info-description {
          color: var(--text-secondary);
          margin-top: 0.75rem;
          font-size: 0.9rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: start;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .info-card-detailed {
          margin-bottom: 2rem;
          padding: 2.5rem;
        }

        .card-icon-large {
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient);
          border-radius: 15px;
          color: white;
          margin-bottom: 1.5rem;
        }

        .info-card-detailed h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .direct-links {
          display: flex;
          gap: 1rem;
        }

        .direct-link-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.875rem 1.5rem;
          background: rgba(8, 145, 178, 0.1);
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .direct-link-btn:hover {
          background: var(--gradient);
          color: white;
          border-color: transparent;
          transform: translateY(-2px);
        }

        .mini-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mini-feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
        }

        .why-choose-mini {
          padding: 2.5rem;
        }

        .profiles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .profile-card {
          text-align: center;
          text-decoration: none;
          color: inherit;
          display: block;
          padding: 2.5rem;
          position: relative;
        }

        .profile-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gradient);
          border-radius: 20px;
          margin: 0 auto 1.5rem;
          color: white;
          transition: all 0.3s ease;
        }

        .profile-card:hover .profile-icon {
          transform: scale(1.1) rotate(-5deg);
        }

        .profile-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .profile-category {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .profile-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(8, 145, 178, 0.1);
          border: 1px solid rgba(8, 145, 178, 0.3);
          border-radius: 20px;
          font-size: 0.85rem;
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .profile-link-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: var(--primary-color);
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .profile-card:hover .profile-link-wrapper {
          gap: 1rem;
        }

        .commitments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .location-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-top: 3rem;
        }

        .map-placeholder {
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map-content {
          text-align: center;
        }

        .map-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 1rem 0 0.5rem;
        }

        .map-content p {
          color: var(--text-secondary);
        }

        .location-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .location-info-card {
          padding: 2.5rem;
        }

        .location-info-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .hours-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .hour-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          background: rgba(8, 145, 178, 0.05);
          border-radius: 8px;
        }

        .quick-contact-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .quick-contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(8, 145, 178, 0.05);
          border-radius: 8px;
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .quick-contact-item:hover {
          background: rgba(8, 145, 178, 0.1);
          transform: translateX(5px);
          color: var(--primary-color);
        }

        .final-cta {
          text-align: center;
        }

        @media (max-width: 1024px) {
          .contact-grid,
          .location-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }

          .quick-info-grid,
          .profiles-grid,
          .commitments-grid {
            grid-template-columns: 1fr;
          }

          .direct-links {
            flex-direction: column;
          }

          .map-placeholder {
            height: 350px;
          }
        }
      `}</style>
    </div>
  );
}

export default ContactPage;

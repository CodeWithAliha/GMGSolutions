import { Phone, Mail, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
          <div className="contact-info">
            <span className="section-badge">Get In Touch</span>
            <h2 className="section-title">
              Let's Build Something <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="contact-text">
              Ready to transform your digital presence? We're here to help bring
              your vision to life with cutting-edge solutions.
            </p>

            <div className="contact-details">
              <a href="tel:+923095999108" className="contact-item">
                <div className="contact-icon-wrapper">
                  <Phone className="contact-icon" />
                </div>
                <div>
                  <div className="contact-label">Call Us</div>
                  <div className="contact-value">+92 309 5999108</div>
                </div>
              </a>

              <a href="mailto:gmgsolutions108@gmail.com" className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail className="contact-icon" />
                </div>
                <div>
                  <div className="contact-label">Email Us</div>
                  <div className="contact-value">GMGSolutions@gmail.com</div>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Subject"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="form-input"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
                <Send className="btn-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

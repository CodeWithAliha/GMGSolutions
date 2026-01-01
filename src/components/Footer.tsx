import { Phone, Mail, Globe, Smartphone, Wrench, Palette } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logo">
              <img src="/logo.webp" alt="GMG Solutions" />
            </div>
            <p className="footer-description">
              Transforming businesses through innovative digital solutions.
              Your trusted partner in web and mobile development.
            </p>
            <div className="footer-contact">
              <a href="tel:+923095999108" className="footer-contact-item">
                <Phone size={18} />
                <span>+92 309 5999108</span>
              </a>
              <a href="mailto:gmgsolutions108@gmail.com" className="footer-contact-item">
                <Mail size={18} />
                <span>gmgsolutions@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li>
                <a href="#services">
                  <Globe size={16} />
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services">
                  <Smartphone size={16} />
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#services">
                  <Wrench size={16} />
                  Website Bug Fixing
                </a>
              </li>
              <li>
                <a href="#services">
                  <Palette size={16} />
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Newsletter</h3>
            <p className="footer-newsletter-text">
              Stay updated with our latest projects and insights.
            </p>
            <form className="footer-newsletter">
              <input
                type="email"
                placeholder="Your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2025 GMG Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

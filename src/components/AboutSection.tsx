import { CheckCircle2, Code2, Users, Trophy } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className={`about-content ${isVisible ? 'visible' : ''}`}>
            <span className="section-badge">About Us</span>
            <h2 className="section-title">
              Building Digital Excellence <span className="gradient-text">Since Day One</span>
            </h2>
            <p className="about-text">
              At GMG Solutions, we're more than just developers—we're digital architects
              crafting the future of your business. Our team combines technical expertise
              with creative innovation to deliver solutions that don't just meet expectations,
              they exceed them.
            </p>
            <p className="about-text">
              We specialize in creating custom digital experiences from the ground up,
              utilizing cutting-edge technologies like React, Node.js, and cloud platforms.
              Whether it's a responsive website, a powerful web application, or a seamless
              mobile experience, we build it with precision and passion.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <CheckCircle2 className="feature-icon" />
                <span>Modern Technology Stack</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 className="feature-icon" />
                <span>Agile Development Process</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 className="feature-icon" />
                <span>24/7 Support & Maintenance</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 className="feature-icon" />
                <span>Scalable Solutions</span>
              </div>
            </div>
          </div>

          <div className={`about-visual ${isVisible ? 'visible' : ''}`}>
            <div className="visual-card card-primary">
              <Code2 size={40} />
              <h3>Clean Code</h3>
              <p>Maintainable & Scalable</p>
            </div>
            <div className="visual-card card-secondary">
              <Users size={40} />
              <h3>Expert Team</h3>
              <p>Skilled Professionals</p>
            </div>
            <div className="visual-card card-tertiary">
              <Trophy size={40} />
              <h3>Quality First</h3>
              <p>Excellence Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

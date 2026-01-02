import { CheckCircle2, Users, Award, Target, Zap, Code2, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function AboutPage() {
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
    <div className="page-wrapper about-page">
      <section className="hero-banner about-hero">
        <div className="banner-content">
          <h1 className="animate-slide-up">
        About GMG <span style={{ color: "#06b6d4" }}>Solutions</span>
      </h1>
          <p className="animate-slide-up delay-1">
            Leading Digital Innovation for Over a Decade
          </p>
        </div>
        <div className="banner-gradient"></div>
      </section>

      <section className="about-intro" ref={sectionRef}>
        <div className="container">
          <div className="intro-grid">
            <div className={`intro-text ${isVisible ? 'visible' : ''}`}>
              <h2>Who We Are</h2>
              <p>
                GMG Solutions is a team of passionate web and mobile developers dedicated to transforming
                businesses through innovative digital solutions. With expertise spanning custom website development,
                mobile applications, and comprehensive web solutions, we've partnered with hundreds of clients
                worldwide to achieve their digital goals.
              </p>
              <p>
                Since our inception, we've been committed to delivering excellence in every project. Our team
                combines cutting-edge technology with creative problem-solving to create solutions that not only
                meet today's needs but anticipate tomorrow's opportunities.
              </p>
            </div>
            <div className={`intro-stats ${isVisible ? 'visible' : ''}`}>
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-text">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">200+</div>
                <div className="stat-text">Mobile Apps</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-text">Countries Served</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-text">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card mission-card-1">
              <div className="mission-icon">
                <Target size={48} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses globally by providing innovative, scalable, and reliable digital solutions
                that drive growth, enhance user experiences, and deliver measurable results in an ever-evolving
                technological landscape.
              </p>
            </div>
            <div className="mission-card mission-card-2">
              <div className="mission-icon">
                <Zap size={48} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted digital partner for businesses seeking transformative technology solutions,
                recognized for our excellence, innovation, and commitment to exceeding client expectations.
              </p>
            </div>
            <div className="mission-card mission-card-3">
              <div className="mission-icon">
                <Code2 size={48} />
              </div>
              <h3>Our Values</h3>
              <p>
                Excellence, integrity, innovation, and client-centricity guide everything we do. We believe in
                transparent communication, continuous learning, and delivering solutions that create lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise-section">
        <div className="container">
          
          <div className={`section-header ${isVisible ? 'animate-slide-up' : ''}`}>

  <span
    className="section-badge"
    style={{
      display: "inline-block",
      marginBottom: "20px",
      marginTop: "-80px",
      padding: "14px 32px",
      borderRadius: "30px",
      fontSize: "16px",
      fontWeight: "500",
      color: "#1ec8e7",
      background: "rgba(30, 200, 231, 0.08)",
      border: "1px solid rgba(30, 200, 231, 0.35)",
    }}
  >
    Expertise
  </span>

  <h2
    style={{
      fontSize: "48px",
      fontWeight: "800",
      color: "#ffffff",
      marginBottom: "16px",
    }}
  >
    Our <span style={{ color: "#06b6d4" }}>Expertise</span>
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
    Comprehensive skills and technologies at your service
  </p>
</div>

          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon">
                <Code2 size={40} />
              </div>
              <h3>Web Development</h3>
              <p>
                Custom websites and applications using React, Node.js, and modern frameworks.
                Responsive, fast, and scalable solutions.
              </p>
              <ul className="tech-list">
                <li>React & TypeScript</li>
                <li>Node.js & Express</li>
                <li>Database Design</li>
                <li>Cloud Infrastructure</li>
              </ul>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">
                <Users size={40} />
              </div>
              <h3>Mobile Development</h3>
              <p>
                Native iOS & Android apps and cross-platform solutions. User-focused design
                with powerful functionality.
              </p>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Native Development</li>
                <li>App Architecture</li>
                <li>API Integration</li>
              </ul>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">
                <Award size={40} />
              </div>
              <h3>UI/UX Design</h3>
              <p>
                Beautiful, intuitive interfaces that engage users. From wireframes to
                pixel-perfect implementations.
              </p>
              <ul className="tech-list">
                <li>User Research</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Design Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="team-culture">
        <div className="container">
          <div className={`section-header ${isVisible ? 'animate-slide-up' : ''}`}>

        <span
          className="section-badge"
          style={{
            display: "inline-block",
            marginBottom: "20px",
            marginTop: "-80px",
            padding: "14px 32px",
            borderRadius: "30px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#1ec8e7",
            background: "rgba(30, 200, 231, 0.08)",
            border: "1px solid rgba(30, 200, 231, 0.35)",
          }}
        >
          Culture
        </span>

        <h2
          style={{
            fontSize: "48px",
            fontWeight: "800",
            color: "#ffffff",
            marginBottom: "16px",
          }}
        >
          Our <span style={{ color: "#06b6d4" }}>Team Culture</span>
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
          Talented professionals dedicated to excellence
        </p>

      </div>

          <div className="culture-grid">
            <div className="culture-item">
              <div className="culture-icon">
                <Zap size={36} />
              </div>
              <h3>Innovation Focused</h3>
              <p>We constantly explore new technologies and methodologies to stay at the forefront of digital innovation.</p>
            </div>
            <div className="culture-item">
              <div className="culture-icon">
                <Users size={36} />
              </div>
              <h3>Collaborative</h3>
              <p>We work closely with clients and each other, fostering open communication and shared success.</p>
            </div>
            <div className="culture-item">
              <div className="culture-icon">
                <TrendingUp size={36} />
              </div>
              <h3>Growth Minded</h3>
              <p>Continuous learning and professional development are core values that drive our team forward.</p>
            </div>
            <div className="culture-item">
              <div className="culture-icon">
                <CheckCircle2 size={36} />
              </div>
              <h3>Quality Driven</h3>
              <p>We never compromise on code quality, design excellence, or client satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-partner">
        <div className="container">
          <div className={`section-header ${isVisible ? 'animate-slide-up' : ''}`}>

        <span
          className="section-badge"
          style={{
            display: "inline-block",
            marginBottom: "20px",
            marginTop: "-80px",
            padding: "14px 32px",
            borderRadius: "30px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#1ec8e7",
            background: "rgba(30, 200, 231, 0.08)",
            border: "1px solid rgba(30, 200, 231, 0.35)",
          }}
        >
          Partnership
        </span>

        <h2
          style={{
            fontSize: "48px",
            fontWeight: "800",
            color: "#ffffff",
            marginBottom: "16px",
          }}
        >
          Why Partner <span style={{ color: "#06b6d4" }}>With Us</span>
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
          Benefits that make a real difference
        </p>

      </div>

          <div className="partner-grid">
            <div className="partner-card">
              <h3>Expert Team</h3>
              <p>Experienced professionals with proven track records in delivering successful projects across industries.</p>
            </div>
            <div className="partner-card">
              <h3>Custom Solutions</h3>
              <p>Tailored approaches for your unique business needs, not one-size-fits-all templates.</p>
            </div>
            <div className="partner-card">
              <h3>Ongoing Support</h3>
              <p>Continuous maintenance, updates, and support to ensure your solutions stay ahead.</p>
            </div>
            <div className="partner-card">
              <h3>Transparent Communication</h3>
              <p>Clear updates, realistic timelines, and honest assessments throughout the project lifecycle.</p>
            </div>
            <div className="partner-card">
              <h3>Competitive Pricing</h3>
              <p>High-quality solutions at rates that provide excellent value for your investment.</p>
            </div>
            <div className="partner-card">
              <h3>Fast Delivery</h3>
              <p>Agile methodologies ensuring quick turnarounds without compromising quality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="our-process">
        <div className="container">
          <div className={`section-header ${isVisible ? 'animate-slide-up' : ''}`}>

        <span
          className="section-badge"
          style={{
            display: "inline-block",
            marginBottom: "20px",
            marginTop: "-80px",
            padding: "14px 32px",
            borderRadius: "30px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#1ec8e7",
            background: "rgba(30, 200, 231, 0.08)",
            border: "1px solid rgba(30, 200, 231, 0.35)",
          }}
        >
          Process
        </span>

        <h2
          style={{
            fontSize: "48px",
            fontWeight: "800",
            color: "#ffffff",
            marginBottom: "16px",
          }}
        >
          Our <span style={{ color: "#06b6d4" }}>Process</span>
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
          How we transform your ideas into reality
        </p>

      </div>

          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Discovery</h3>
              <p>We deeply understand your business, goals, and challenges through comprehensive consultation.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Planning</h3>
              <p>Strategic planning and detailed roadmap creation for successful project execution.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Design</h3>
              <p>Beautiful, user-centric designs that balance aesthetics with functionality.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Development</h3>
              <p>Expert coding using best practices, clean architecture, and cutting-edge technologies.</p>
            </div>
            <div className="process-step">
              <div className="step-number">05</div>
              <h3>Testing</h3>
              <p>Rigorous quality assurance to ensure reliability, security, and optimal performance.</p>
            </div>
            <div className="process-step">
              <div className="step-number">06</div>
              <h3>Deployment</h3>
              <p>Seamless launch and ongoing support to ensure your success.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

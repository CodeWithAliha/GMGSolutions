import { ArrowRight, Code2, Smartphone, Globe } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-badge animate-fade-in">
          <span className="badge-dot"></span>
          <span>Welcome to GMG Solutions</span>
        </div>

        <h1 className="hero-title animate-slide-up">
          Transforming Ideas Into
          <span className="gradient-text"> Digital Reality</span>
        </h1>

        <p className="hero-description animate-slide-up delay-1">
          We craft exceptional web and mobile solutions that empower businesses
          to thrive in the digital landscape. Our expertise transforms your vision
          into powerful, scalable applications.
        </p>

        <div className="hero-buttons animate-slide-up delay-2">
          <button className="btn-primary">
            Start Your Project
            <ArrowRight className="btn-icon" />
          </button>
          <button className="btn-secondary">
            View Our Work
          </button>
        </div>

        <div className="hero-stats animate-fade-in delay-3">
          <div className="stat-item">
            <Code2 className="stat-icon" />
            <div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <Smartphone className="stat-icon" />
            <div>
              <div className="stat-number">200+</div>
              <div className="stat-label">Mobile Apps</div>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <Globe className="stat-icon" />
            <div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="floating-card card-1">
          <Code2 size={32} />
        </div>
        <div className="floating-card card-2">
          <Smartphone size={32} />
        </div>
        <div className="floating-card card-3">
          <Globe size={32} />
        </div>
      </div>
    </section>
  );
}

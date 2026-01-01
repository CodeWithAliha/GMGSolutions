import { Headphones, Award, Layers, DollarSign } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Round-the-clock support and maintenance to ensure your digital solutions stay updated and perform flawlessly.',
  },
  {
    icon: Award,
    title: 'Quality Work',
    description: 'We deliver high-quality, reliable solutions that exceed expectations and drive real business results.',
  },
  {
    icon: Layers,
    title: 'Custom Solutions',
    description: 'Tailored applications designed specifically for your unique business needs and objectives.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive pricing that fits your budget without compromising on quality or functionality.',
  },
];

export default function WhyChooseSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reasons.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
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
    <section className="why-choose-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="section-title">
            Your Trusted <span className="gradient-text">Technology Partner</span>
          </h2>
          <p className="section-description">
            We combine expertise, dedication, and innovation to deliver exceptional results
          </p>
        </div>

        <div className="why-choose-grid">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`why-card ${visibleCards.includes(index) ? 'visible' : ''}`}
            >
              <div className="why-icon-wrapper">
                <reason.icon className="why-icon" />
              </div>
              <h3 className="why-title">{reason.title}</h3>
              <p className="why-description">{reason.description}</p>
              <div className="why-card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Globe, Smartphone, Wrench, Palette, PenTool, Shield } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom websites built with cutting-edge technologies, responsive design, and optimized performance for your business success.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android devices.',
  },
  {
    icon: Wrench,
    title: 'Website Bug Fixing',
    description: 'Expert troubleshooting and quick resolution of technical issues to keep your website running smoothly and efficiently.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Intuitive and visually stunning interfaces designed to engage users and deliver exceptional digital experiences.',
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description: 'Creative visual solutions including branding, marketing materials, and digital assets that make your brand stand out.',
  },
  {
    icon: Shield,
    title: 'Website Security',
    description: 'Comprehensive security solutions to protect your digital assets from threats and ensure data integrity.',
  },
];

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
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
    <section className="services-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Expertise</span>
          <h2 className="section-title">
            Services We <span className="gradient-text">Offer</span>
          </h2>
          <p className="section-description">
            Comprehensive digital solutions tailored to elevate your business and drive growth
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${visibleCards.includes(index) ? 'visible' : ''}`}
            >
              <div className="service-icon-wrapper">
                <service.icon className="service-icon" />
                <div className="service-icon-bg"></div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

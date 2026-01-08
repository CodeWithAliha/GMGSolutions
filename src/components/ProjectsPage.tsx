import React, { useState, useEffect, useRef } from 'react';
import { Code2, Smartphone, Globe, ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    description: 'Full-featured e-commerce platform with payment integration',
    image: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#',
    rating: 5,
  },
  {
    id: 2,
    title: 'Mobile Fitness App',
    category: 'mobile',
    description: 'Cross-platform fitness tracking application',
    image: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    link: '#',
    github: '#',
    rating: 4.8,
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    category: 'web',
    description: 'Real-time data analytics and visualization dashboard',
    image: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    link: '#',
    github: '#',
    rating: 4.9,
  },
  {
    id: 4,
    title: 'Social Media App',
    category: 'mobile',
    description: 'Feature-rich social networking application',
    image: 'linear-gradient(135deg, #0e7490 0%, #06b6d4 100%)',
    technologies: ['React Native', 'Firebase', 'Redux'],
    link: '#',
    github: '#',
    rating: 4.7,
  },
  {
    id: 5,
    title: 'SaaS Management System',
    category: 'web',
    description: 'Multi-tenant SaaS platform with advanced features',
    image: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    technologies: ['React', 'Node.js', 'Supabase', 'Tailwind'],
    link: '#',
    github: '#',
    rating: 5,
  },
  {
    id: 6,
    title: 'AI Chatbot Platform',
    category: 'web',
    description: 'Intelligent chatbot builder with NLP integration',
    image: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
    technologies: ['React', 'Python', 'TensorFlow', 'Node.js'],
    link: '#',
    github: '#',
    rating: 4.8,
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            filteredProjects.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProjects((prev) => [...new Set([...prev, index])]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, [selectedCategory, filteredProjects.length]);

  return (
    <div className="page-wrapper projects-page">
      <section className="hero-banner projects-hero">
        <div className="banner-content">
          <h1 className="animate-slide-up">Our Projects</h1>
          <p className="animate-slide-up delay-1">
            Transforming Ideas Into Remarkable Digital Solutions
          </p>
        </div>
        <div className="banner-gradient"></div>
      </section>

      <section className="projects-intro">
        <div className="container">
          <div className="intro-text-center animate-fade-in delay-1">
            <h2>Showcase of Excellence</h2>
            <p>
              We take pride in our diverse portfolio of projects that showcase our expertise
              across web development, mobile applications, and innovative digital solutions.
              Each project represents our commitment to quality and client satisfaction.
            </p>
          </div>

          <div className="stats-showcase">
            <div className="showcase-stat animate-slide-up delay-2">
              <div className="stat-icon">
                <Code2 size={40} />
              </div>
              <div className="stat-content">
                <div className="stat-value">50+</div>
                <div className="stat-name">Projects Completed</div>
              </div>
            </div>
            <div className="showcase-stat animate-slide-up delay-3">
              <div className="stat-icon">
                <Globe size={40} />
              </div>
              <div className="stat-content">
                <div className="stat-value">30+</div>
                <div className="stat-name">Happy Clients</div>
              </div>
            </div>
            <div className="showcase-stat animate-slide-up delay-4">
              <div className="stat-icon">
                <Star size={40} />
              </div>
              <div className="stat-content">
                <div className="stat-value">4.9★</div>
                <div className="stat-name">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-filter">
        <div className="container">
          <h2 className="filter-title">Filter Projects</h2>
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setVisibleProjects([]);
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-grid-section" ref={projectsRef}>
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${visibleProjects.includes(index) ? 'visible' : ''}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="project-image" style={{ background: project.image }}>
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <a href={project.link} className="project-link">
                        <ExternalLink size={32} />
                      </a>
                      <a href={project.github} className="project-github">
                        <Github size={32} />
                      </a>
                    </div>
                  </div>
                  <div className="project-rating">
                    <Star size={16} fill="currentColor" />
                    <span>{project.rating}</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-studies">
        <div className="container">
          <div className="section-header">
            <h2>Featured Case Studies</h2>
            <p>In-depth look at our most impactful projects</p>
          </div>

          <div className="case-study-grid">
            <div className="case-study-card animate-slide-up">
              <div className="study-number">01</div>
              <h3>E-Commerce Revolution</h3>
              <p className="study-category">Web Development</p>
              <p className="study-description">
                Transformed a traditional retail business into a thriving online marketplace,
                resulting in 300% increase in sales within the first year.
              </p>
              <div className="study-metrics">
                <div className="metric">
                  <div className="metric-value">300%</div>
                  <div className="metric-label">Sales Growth</div>
                </div>
                <div className="metric">
                  <div className="metric-value">50K+</div>
                  <div className="metric-label">Monthly Users</div>
                </div>
              </div>
            </div>

            <div className="case-study-card animate-slide-up delay-1">
              <div className="study-number">02</div>
              <h3>Fitness App Success</h3>
              <p className="study-category">Mobile Development</p>
              <p className="study-description">
                Developed a comprehensive fitness tracking app that gained 100K downloads
                in the first month with excellent user retention rates.
              </p>
              <div className="study-metrics">
                <div className="metric">
                  <div className="metric-value">100K+</div>
                  <div className="metric-label">Downloads</div>
                </div>
                <div className="metric">
                  <div className="metric-value">85%</div>
                  <div className="metric-label">Retention Rate</div>
                </div>
              </div>
            </div>

            <div className="case-study-card animate-slide-up delay-2">
              <div className="study-number">03</div>
              <h3>Analytics Dashboard</h3>
              <p className="study-category">Web Development</p>
              <p className="study-description">
                Created a powerful analytics platform that reduced data processing time
                by 80% and improved decision-making for enterprise clients.
              </p>
              <div className="study-metrics">
                <div className="metric">
                  <div className="metric-value">80%</div>
                  <div className="metric-label">Time Reduction</div>
                </div>
                <div className="metric">
                  <div className="metric-value">500+</div>
                  <div className="metric-label">Data Points</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="technology-stack">
        <div className="container">
          <div className="section-header">
            <h2>Technologies We Master</h2>
            <p>Cutting-edge tools and frameworks for optimal results</p>
          </div>

          <div className="tech-categories">
            <div className="tech-category animate-slide-up">
              <h3>Frontend</h3>
              <div className="tech-list">
                <div className="tech-item">React</div>
                <div className="tech-item">TypeScript</div>
                <div className="tech-item">Tailwind CSS</div>
                <div className="tech-item">Vue.js</div>
                <div className="tech-item">Next.js</div>
                <div className="tech-item">Three.js</div>
              </div>
            </div>

            <div className="tech-category animate-slide-up delay-1">
              <h3>Backend</h3>
              <div className="tech-list">
                <div className="tech-item">Node.js</div>
                <div className="tech-item">Python</div>
                <div className="tech-item">Express</div>
                <div className="tech-item">Django</div>
                <div className="tech-item">GraphQL</div>
                <div className="tech-item">REST APIs</div>
              </div>
            </div>

            <div className="tech-category animate-slide-up delay-2">
              <h3>Mobile</h3>
              <div className="tech-list">
                <div className="tech-item">React Native</div>
                <div className="tech-item">Flutter</div>
                <div className="tech-item">Swift</div>
                <div className="tech-item">Kotlin</div>
                <div className="tech-item">Firebase</div>
                <div className="tech-item">Expo</div>
              </div>
            </div>

            <div className="tech-category animate-slide-up delay-3">
              <h3>Databases & Cloud</h3>
              <div className="tech-list">
                <div className="tech-item">PostgreSQL</div>
                <div className="tech-item">MongoDB</div>
                <div className="tech-item">Firebase</div>
                <div className="tech-item">Supabase</div>
                <div className="tech-item">AWS</div>
                <div className="tech-item">Docker</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client-testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Clients Say</h2>
            <p>Real feedback from our satisfied clients</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card animate-slide-up">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "GMG Solutions delivered an exceptional website that exceeded all our expectations.
                Their attention to detail and professionalism is unmatched."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div>
                  <div className="author-name">John Davis</div>
                  <div className="author-title">CEO, Tech Startup</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card animate-slide-up delay-1">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "The mobile app they created transformed our business. The quality and innovation
                were beyond what we expected from any development team."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SJ</div>
                <div>
                  <div className="author-name">Sarah Johnson</div>
                  <div className="author-title">Founder, Fitness Brand</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card animate-slide-up delay-2">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "Working with GMG Solutions was a game-changer. They understood our vision and
                delivered a product that perfectly aligned with our goals."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">MP</div>
                <div>
                  <div className="author-name">Michael Patterson</div>
                  <div className="author-title">Product Manager, Enterprise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-cta">
        <div className="container">
          <div className="cta-content animate-slide-up">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's create something amazing together</p>
            <button className="btn-primary">Get In Touch</button>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import Testimonials from '../components/Testimonials';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* What We Do Section */}
      <section id="services" className="what-we-do">
        <div className="container">
          <div className="what-we-do-header">
            <img 
              src="/images/KJCI-Logo-5-300x107.png" 
              alt="Keller Johnson Construction" 
              className="section-logo"
            />
            <h2 className="section-title">Building Conway</h2>
            <p className="section-subtitle">
              Our homes embrace elegant exteriors, open flowing interiors, and luxurious details. 
              Keller Johnson Construction offers you the opportunity to build a luxury home within your means. 
              Our team of experts are available to design and build your dream home.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏗️</div>
              <h3>Construction Projects</h3>
              <p>Custom residential and commercial construction projects built to the highest standards of quality and craftsmanship.</p>
              <Link to="/projects/residential" className="service-link">
                Residential Projects →
              </Link>
              <Link to="/projects/commercial" className="service-link">
                Commercial Projects →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Rental Properties</h3>
              <p>Quality rental properties including residential homes, commercial spaces, and beautifully remodeled properties.</p>
              <Link to="/rental/residential" className="service-link">
                Residential Rentals →
              </Link>
              <Link to="/rental/commercial" className="service-link">
                Commercial Rentals →
              </Link>
              <Link to="/rental/remodeled" className="service-link">
                Remodeled Properties →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">✨</div>
              <h3>Custom Homes</h3>
              <p>From concept to completion, we build custom homes that reflect your vision and exceed your expectations.</p>
              <Link to="/projects/residential" className="service-link">
                View Our Work →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Property Management</h3>
              <p>Professional property management services ensuring your investment properties are well-maintained and profitable.</p>
              <Link to="/contact" className="service-link">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏗️</div>
              <h3>Expert Craftsmanship</h3>
              <p>Years of experience in construction and building excellence</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Quality Materials</h3>
              <p>We use only the finest materials for lasting results</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Trusted Partnership</h3>
              <p>Building relationships as strong as our structures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Highlight Section */}
      <section className="interior-highlight">
        <div className="container">
          <div className="highlight-content">
            <div className="highlight-image">
              <img 
                src="/images/KJ_HOMEPAGE_INTERIORHIGHLIGHT_GRAPHIC_SCREEN-01.png" 
                alt="Interior Design"
              />
            </div>
            <div className="highlight-text">
              <h2>Interior Excellence</h2>
              <p>
                Our attention to detail extends beyond the exterior. We create 
                beautiful, functional spaces that stand the test of time.
              </p>
              <Link to="/through-the-years" className="btn btn-primary">
                View Properties
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Projects Preview */}
      <section className="projects-preview">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <Link to="/projects/commercial" className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Commercial Projects</div>
              </div>
              <h3>Commercial Projects</h3>
              <p>Professional commercial construction</p>
            </Link>
            <Link to="/projects/residential" className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Residential Projects</div>
              </div>
              <h3>Residential Projects</h3>
              <p>Custom home construction</p>
            </Link>
            <Link to="/rental/residential" className="project-card">
              <div className="project-image">
                <div className="project-placeholder">Rental Properties</div>
              </div>
              <h3>Rental Properties</h3>
              <p>Quality rental homes and commercial spaces</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import Testimonials from '../components/Testimonials';
import ScrollAnimation from '../components/ScrollAnimation';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* What We Do Section - Split Layout */}
      <section id="services" className="what-we-do">
        <ScrollAnimation animation="fade-in">
          <div className="what-we-do-wrapper">
            <ScrollAnimation animation="slide-right" delay={100}>
              <div className="what-we-do-visual">
                <div className="visual-card">
                  <img 
                    src="/images/KJ_HOMEPAGE_FAMPIC_GRAPHIC_SCREENV2-02.png" 
                    alt="Keller Johnson Construction"
                    className="visual-image"
                  />
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="slide-left" delay={200}>
              <div className="what-we-do-content">
                <div className="content-inner">
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
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>

        {/* Services Grid with Images */}
        <div className="container">
          <div className="services-grid">
            <ScrollAnimation animation="scale" delay={100}>
              <div className="service-card featured">
                <div className="service-image-wrapper">
                  <div className="service-image" style={{ backgroundImage: 'url(/images/KJ_HOMEPAGE_INTERIORHIGHLIGHT_GRAPHIC_SCREEN-01.png)' }}>
                    <div className="service-overlay"></div>
                  </div>
                </div>
                <div className="service-content">
                  <div className="service-icon">🏗️</div>
                  <h3>Construction Projects</h3>
                  <p>Custom residential and commercial construction projects built to the highest standards of quality and craftsmanship.</p>
                  <div className="service-links">
                    <Link to="/projects/residential" className="service-link">
                      Residential Projects →
                    </Link>
                    <Link to="/projects/commercial" className="service-link">
                      Commercial Projects →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={200}>
              <div className="service-card">
                <div className="service-content">
                  <div className="service-icon">🏠</div>
                  <h3>Rental Properties</h3>
                  <p>Quality rental properties including residential homes, commercial spaces, and beautifully remodeled properties.</p>
                  <div className="service-links">
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
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={300}>
              <div className="service-card">
                <div className="service-content">
                  <div className="service-icon">✨</div>
                  <h3>Custom Homes</h3>
                  <p>From concept to completion, we build custom homes that reflect your vision and exceed your expectations.</p>
                  <div className="service-links">
                    <Link to="/projects/residential" className="service-link">
                      View Our Work →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in" delay={400}>
              <div className="service-card">
                <div className="service-content">
                  <div className="service-icon">🔧</div>
                  <h3>Property Management</h3>
                  <p>Professional property management services ensuring your investment properties are well-maintained and profitable.</p>
                  <div className="service-links">
                    <Link to="/contact" className="service-link">
                      Contact Us →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features Section - Asymmetric Layout */}
      <section className="features">
        <div className="container">
          <ScrollAnimation animation="fade-in">
            <div className="features-header">
              <h2 className="section-title">Why Choose Us</h2>
              <p className="features-intro">
                We combine decades of experience with modern techniques to deliver exceptional results 
                that stand the test of time.
              </p>
            </div>
          </ScrollAnimation>
          <div className="features-layout">
            <ScrollAnimation animation="slide-right" delay={100}>
              <div className="feature-large">
                <div className="feature-icon-large">🏗️</div>
                <h3>Expert Craftsmanship</h3>
                <p>Years of experience in construction and building excellence. Our skilled team brings precision and attention to detail to every project, ensuring quality that exceeds expectations.</p>
              </div>
            </ScrollAnimation>
            <div className="features-small">
              <ScrollAnimation animation="fade-in" delay={200}>
                <div className="feature-card">
                  <div className="feature-icon">✨</div>
                  <h3>Quality Materials</h3>
                  <p>We use only the finest materials for lasting results</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-in" delay={300}>
                <div className="feature-card">
                  <div className="feature-icon">🤝</div>
                  <h3>Trusted Partnership</h3>
                  <p>Building relationships as strong as our structures</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Interior Highlight Section - Full Width Split */}
      <section className="interior-highlight">
        <div className="highlight-split">
          <ScrollAnimation animation="slide-right" delay={100}>
            <div className="highlight-image-large">
              <img 
                src="/images/KJ_HOMEPAGE_INTERIORHIGHLIGHT_GRAPHIC_SCREEN-01.png" 
                alt="Interior Design"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="slide-left" delay={200}>
            <div className="highlight-content-large">
              <div className="highlight-badge">Interior Excellence</div>
              <h2>Beautiful Spaces, Built to Last</h2>
              <p>
                Our attention to detail extends beyond the exterior. We create 
                beautiful, functional spaces that stand the test of time. Every 
                corner, every finish, every detail is carefully considered to 
                create homes that are both stunning and practical.
              </p>
              <div className="highlight-features">
                <ScrollAnimation animation="fade-in" delay={300}>
                  <div className="highlight-feature-item">
                    <span className="check-icon">✓</span>
                    <span>Custom Design Solutions</span>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="fade-in" delay={400}>
                  <div className="highlight-feature-item">
                    <span className="check-icon">✓</span>
                    <span>Premium Finishes</span>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation animation="fade-in" delay={500}>
                  <div className="highlight-feature-item">
                    <span className="check-icon">✓</span>
                    <span>Attention to Detail</span>
                  </div>
                </ScrollAnimation>
              </div>
              <Link to="/through-the-years" className="btn btn-primary">
                View Our Properties
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Projects Preview - Masonry Style */}
      <section className="projects-preview">
        <div className="container">
          <ScrollAnimation animation="fade-in">
            <div className="projects-header">
              <h2 className="section-title">Featured Projects</h2>
              <p className="projects-intro">
                Explore our portfolio of exceptional construction projects across Conway and beyond.
              </p>
            </div>
          </ScrollAnimation>
          <div className="projects-masonry">
            <ScrollAnimation animation="scale" delay={100}>
              <Link to="/projects/commercial" className="project-card-large">
                <div className="project-image">
                  <div className="project-placeholder">Commercial Projects</div>
                  <div className="project-overlay">
                    <span className="project-category">Commercial</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>Commercial Projects</h3>
                  <p>Professional commercial construction including corporate facilities, aviation hangars, and cultural centers.</p>
                </div>
              </Link>
            </ScrollAnimation>
            <div className="projects-column">
              <ScrollAnimation animation="fade-in" delay={200}>
                <Link to="/projects/residential" className="project-card">
                  <div className="project-image">
                    <div className="project-placeholder">Residential Projects</div>
                    <div className="project-overlay">
                      <span className="project-category">Residential</span>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>Residential Projects</h3>
                    <p>Custom home construction</p>
                  </div>
                </Link>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-in" delay={300}>
                <Link to="/rental/residential" className="project-card">
                  <div className="project-image">
                    <div className="project-placeholder">Rental Properties</div>
                    <div className="project-overlay">
                      <span className="project-category">Rentals</span>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>Rental Properties</h3>
                    <p>Quality rental homes and commercial spaces</p>
                  </div>
                </Link>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

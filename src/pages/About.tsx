import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About Us</h1>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-images">
              <div className="about-image">
                <img 
                  src="/images/famphoto-scaled.jpg" 
                  alt="Keller Johnson Construction Family"
                />
              </div>
              <div className="about-image">
                <img 
                  src="/images/NEW_KJ_ABOUTUS_IMAGES-01-624x1024.png" 
                  alt="About Keller Johnson Construction"
                />
              </div>
            </div>
            <div className="about-text">
              <h2>Building Excellence Since Day One</h2>
              <p>
                Keller Johnson Construction has been a trusted name in Conway and 
                the surrounding areas, delivering exceptional construction services 
                with unwavering commitment to quality and craftsmanship.
              </p>
              <p>
                Our team brings years of experience and expertise to every project, 
                whether it's a corporate facility, residential property, or cultural 
                center. We understand that construction is more than just building 
                structures—it's about creating spaces that serve communities and 
                stand the test of time.
              </p>
              <h3>Our Mission</h3>
              <p>
                To deliver superior construction services that exceed expectations, 
                build lasting relationships with our clients, and contribute to the 
                growth and development of our community.
              </p>
              <h3>Our Values</h3>
              <ul>
                <li><strong>Quality:</strong> We never compromise on materials or workmanship</li>
                <li><strong>Integrity:</strong> Honest communication and transparent processes</li>
                <li><strong>Excellence:</strong> Striving for perfection in every detail</li>
                <li><strong>Community:</strong> Building for the future of Conway</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


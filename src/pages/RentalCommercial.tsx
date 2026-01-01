import React from 'react';
import './ProjectPage.css';

const RentalCommercial: React.FC = () => {
  return (
    <div className="project-page">
      <section className="project-hero">
        <div className="container">
          <h1 className="page-title">Commercial Rental Properties</h1>
          <p className="project-subtitle">
            Prime commercial rental spaces for your business needs
          </p>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="project-details">
            <div className="project-description">
              <h2>Commercial Rental Properties</h2>
              <p>
                Our commercial rental properties provide excellent spaces for businesses 
                of all sizes. Located in prime areas of Conway, these properties offer 
                the perfect foundation for your business success.
              </p>
              <h3>Property Features</h3>
              <ul>
                <li>Prime business locations</li>
                <li>Flexible floor plans</li>
                <li>Professional-grade construction</li>
                <li>Ample parking facilities</li>
                <li>Modern infrastructure and utilities</li>
                <li>Customizable spaces for your business needs</li>
              </ul>
              <h3>Available Spaces</h3>
              <p>
                We offer a range of commercial rental properties suitable for retail, 
                office, and mixed-use purposes. Contact us to discuss your business 
                requirements and view available properties.
              </p>
            </div>
            <div className="project-image-sidebar">
              <div className="project-image-card">
                <div className="project-placeholder-large">Commercial Rental Property</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentalCommercial;


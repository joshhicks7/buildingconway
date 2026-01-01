import React from 'react';
import './ProjectPage.css';

const RentalResidential: React.FC = () => {
  return (
    <div className="project-page">
      <section className="project-hero">
        <div className="container">
          <h1 className="page-title">Residential Rental Properties</h1>
          <p className="project-subtitle">
            Quality residential rental properties in Conway and surrounding areas
          </p>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="project-details">
            <div className="project-description">
              <h2>Residential Rental Properties</h2>
              <p>
                Our residential rental properties offer comfortable, well-maintained homes 
                for families and individuals. Each property is built with quality materials 
                and attention to detail, ensuring a pleasant living experience.
              </p>
              <h3>Property Features</h3>
              <ul>
                <li>Quality construction materials and finishes</li>
                <li>Energy-efficient design and systems</li>
                <li>Modern amenities and layouts</li>
                <li>Durable construction for long-term value</li>
                <li>Professional property management</li>
                <li>Well-maintained landscaping</li>
              </ul>
              <h3>Available Properties</h3>
              <p>
                We have a variety of residential rental properties available in Conway and 
                the surrounding areas. Contact us to learn more about current availability 
                and to schedule a viewing.
              </p>
            </div>
            <div className="project-image-sidebar">
              <div className="project-image-card">
                <div className="project-placeholder-large">Residential Rental Property</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentalResidential;


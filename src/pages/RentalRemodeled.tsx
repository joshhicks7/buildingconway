import React from 'react';
import './ProjectPage.css';

const RentalRemodeled: React.FC = () => {
  return (
    <div className="project-page">
      <section className="project-hero">
        <div className="container">
          <h1 className="page-title">Remodeled Rental Properties</h1>
          <p className="project-subtitle">
            Beautifully renovated rental properties with modern updates
          </p>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="project-details">
            <div className="project-description">
              <h2>Remodeled Rental Properties</h2>
              <p>
                Our remodeled rental properties combine classic charm with modern 
                convenience. Each property has been thoughtfully updated to provide 
                contemporary amenities while preserving character and quality.
              </p>
              <h3>Remodeling Features</h3>
              <ul>
                <li>Updated kitchens with modern appliances</li>
                <li>Renovated bathrooms with contemporary fixtures</li>
                <li>New flooring and fresh paint throughout</li>
                <li>Improved energy efficiency</li>
                <li>Updated electrical and plumbing systems</li>
                <li>Enhanced curb appeal and landscaping</li>
              </ul>
              <h3>Available Properties</h3>
              <p>
                Our remodeled properties offer the perfect blend of character and 
                modern living. Contact us to learn more about our renovated rental 
                properties and schedule a viewing.
              </p>
            </div>
            <div className="project-image-sidebar">
              <div className="project-image-card">
                <div className="project-placeholder-large">Remodeled Rental Property</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentalRemodeled;


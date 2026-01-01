import React from 'react';
import './ProjectPage.css';

const CorporateHangar: React.FC = () => {
  return (
    <div className="project-page">
      <section className="project-hero">
        <div className="container">
          <h1 className="page-title">Corporate Airplane Hangar</h1>
          <p className="project-subtitle">
            State-of-the-art aviation facility construction
          </p>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="project-details">
            <div className="project-description">
              <h2>Project Overview</h2>
              <p>
                This corporate airplane hangar represents a significant achievement in 
                aviation facility construction. Designed to accommodate large corporate 
                aircraft, the facility features state-of-the-art amenities and infrastructure.
              </p>
              <h3>Key Features</h3>
              <ul>
                <li>Spacious hangar bay for multiple aircraft</li>
                <li>Advanced climate control systems</li>
                <li>Maintenance and service areas</li>
                <li>Office and administrative spaces</li>
                <li>Security and access control systems</li>
                <li>Custom lighting and electrical systems</li>
              </ul>
              <h3>Construction Highlights</h3>
              <p>
                Built with precision and attention to detail, this facility showcases 
                our expertise in large-scale commercial construction. The project required 
                careful coordination of multiple trades and adherence to strict aviation 
                industry standards.
              </p>
            </div>
            <div className="project-image-sidebar">
              <div className="project-image-card">
                <div className="project-placeholder-large">Corporate Hangar Image</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateHangar;


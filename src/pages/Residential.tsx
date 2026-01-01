import React from 'react';
import './ProjectPage.css';

const Residential: React.FC = () => {
  return (
    <div className="project-page">
      <section className="project-hero">
        <div className="container">
          <h1 className="page-title">Residential Property Rental</h1>
          <p className="project-subtitle">
            Quality residential construction and rental properties
          </p>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="project-details">
            <div className="project-description">
              <h2>Project Overview</h2>
              <p>
                Our residential construction projects focus on creating comfortable, 
                durable, and beautiful homes for families and renters. We understand 
                that a home is more than just a building—it's where memories are made.
              </p>
              <h3>Key Features</h3>
              <ul>
                <li>Quality construction materials and finishes</li>
                <li>Energy-efficient design and systems</li>
                <li>Modern amenities and layouts</li>
                <li>Durable construction for long-term value</li>
                <li>Professional property management ready</li>
                <li>Customizable options for homeowners</li>
              </ul>
              <h3>Construction Highlights</h3>
              <p>
                Our residential projects are built with the same attention to detail 
                and quality standards as our commercial work. We focus on creating 
                homes that are not only beautiful but also built to last, providing 
                value for homeowners and tenants alike.
              </p>
            </div>
            <div className="project-image-sidebar">
              <div className="project-image-card">
                <div className="project-placeholder-large">Residential Property Image</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Residential;


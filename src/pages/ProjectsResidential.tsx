import React from 'react';
import './ProjectPage.css';

const ProjectsResidential: React.FC = () => {
  return (
    <div className="project-page">
      <section className="project-hero">
        <div className="container">
          <h1 className="page-title">Residential Construction Projects</h1>
          <p className="project-subtitle">
            Custom residential construction and home building services
          </p>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="project-details">
            <div className="project-description">
              <h2>Residential Construction Projects</h2>
              <p>
                Our residential construction projects showcase our commitment to 
                quality craftsmanship and attention to detail. From custom homes to 
                residential developments, we bring your vision to life.
              </p>
              <h3>Project Highlights</h3>
              <ul>
                <li>Custom home design and construction</li>
                <li>Residential subdivision development</li>
                <li>Quality materials and expert craftsmanship</li>
                <li>Energy-efficient building practices</li>
                <li>Timely project completion</li>
                <li>Ongoing support and maintenance</li>
              </ul>
              <h3>Our Work</h3>
              <p>
                We've completed numerous residential projects throughout Conway and 
                surrounding areas, including custom homes, residential subdivisions, 
                and renovation projects. Each project reflects our dedication to 
                excellence and client satisfaction.
              </p>
            </div>
            <div className="project-image-sidebar">
              <div className="project-image-card">
                <div className="project-placeholder-large">Residential Construction Project</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsResidential;


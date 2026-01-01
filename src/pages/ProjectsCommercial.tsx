import React from 'react';
import './ProjectPage.css';

const ProjectsCommercial: React.FC = () => {
  return (
    <div className="project-page">
      <section className="project-hero">
        <div className="container">
          <h1 className="page-title">Commercial Construction Projects</h1>
          <p className="project-subtitle">
            Professional commercial construction and development services
          </p>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="project-details">
            <div className="project-description">
              <h2>Commercial Construction Projects</h2>
              <p>
                Our commercial construction projects demonstrate our expertise in 
                building facilities that serve businesses and communities. From 
                corporate facilities to cultural centers, we deliver exceptional results.
              </p>
              <h3>Project Types</h3>
              <ul>
                <li>Corporate facilities and office buildings</li>
                <li>Aviation facilities and hangars</li>
                <li>Cultural centers and museums</li>
                <li>Retail and commercial spaces</li>
                <li>Mixed-use developments</li>
                <li>Specialized commercial structures</li>
              </ul>
              <h3>Notable Projects</h3>
              <p>
                Our portfolio includes significant commercial projects such as the 
                Corporate Airplane Hangar and Museum Plaza. Each project showcases 
                our ability to handle complex commercial construction requirements 
                while maintaining the highest standards of quality and professionalism.
              </p>
            </div>
            <div className="project-image-sidebar">
              <div className="project-image-card">
                <div className="project-placeholder-large">Commercial Construction Project</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsCommercial;


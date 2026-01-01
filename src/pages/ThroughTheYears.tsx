import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectPage.css';

const ThroughTheYears: React.FC = () => {
  return (
    <div className="project-page">
      <section className="project-hero">
        <div className="container">
          <h1 className="page-title">Through The Years</h1>
          <p className="project-subtitle">
            A journey through our completed projects and construction excellence
          </p>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="project-intro">
            <p>
              Over the years, Keller Johnson Construction has been proud to work on 
              a diverse range of projects, from corporate facilities to residential 
              properties. Each project represents our commitment to quality, attention 
              to detail, and client satisfaction.
            </p>
          </div>

          <div className="projects-gallery">
            <Link to="/projects/commercial" className="project-item">
              <div className="project-item-image">
                <div className="project-placeholder">Commercial Projects</div>
              </div>
              <div className="project-item-content">
                <h3>Commercial Construction Projects</h3>
                <p>Professional commercial construction including corporate facilities, aviation hangars, and cultural centers.</p>
                <span className="project-link">View Projects →</span>
              </div>
            </Link>

            <Link to="/projects/residential" className="project-item">
              <div className="project-item-image">
                <div className="project-placeholder">Residential Projects</div>
              </div>
              <div className="project-item-content">
                <h3>Residential Construction Projects</h3>
                <p>Custom homes and residential developments built with quality craftsmanship and attention to detail.</p>
                <span className="project-link">View Projects →</span>
              </div>
            </Link>

            <Link to="/rental/residential" className="project-item">
              <div className="project-item-image">
                <div className="project-placeholder">Rental Properties</div>
              </div>
              <div className="project-item-content">
                <h3>Rental Properties</h3>
                <p>Quality residential, commercial, and remodeled rental properties available in Conway and surrounding areas.</p>
                <span className="project-link">View Properties →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThroughTheYears;


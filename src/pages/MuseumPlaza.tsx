import React from 'react';
import './ProjectPage.css';

const MuseumPlaza: React.FC = () => {
  return (
    <div className="project-page">
      <section className="project-hero">
        <div className="container">
          <h1 className="page-title">Museum Plaza</h1>
          <p className="project-subtitle">
            A cultural center bringing art and community together
          </p>
        </div>
      </section>

      <section className="project-content">
        <div className="container">
          <div className="project-details">
            <div className="project-description">
              <h2>Project Overview</h2>
              <p>
                Museum Plaza stands as a testament to our ability to create spaces that 
                serve both functional and cultural purposes. This project required a deep 
                understanding of both construction excellence and the needs of the arts community.
              </p>
              <h3>Key Features</h3>
              <ul>
                <li>Multiple gallery spaces for exhibitions</li>
                <li>Climate-controlled storage for artwork</li>
                <li>Community event spaces</li>
                <li>Educational facilities</li>
                <li>Modern lighting systems for art display</li>
                <li>Accessible design throughout</li>
              </ul>
              <h3>Construction Highlights</h3>
              <p>
                The Museum Plaza project required specialized construction techniques to 
                ensure proper environmental controls for artwork preservation. Our team 
                worked closely with museum curators and architects to deliver a facility 
                that meets the highest standards for cultural institutions.
              </p>
            </div>
            <div className="project-image-sidebar">
              <div className="project-image-card">
                <div className="project-placeholder-large">Museum Plaza Image</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MuseumPlaza;


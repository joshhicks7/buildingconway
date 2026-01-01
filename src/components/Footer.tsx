import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <img 
              src="/images/KJCI-Logo-5-300x107.png" 
              alt="Keller Johnson Construction" 
              className="footer-logo"
            />
            <p className="footer-tagline">
              Building excellence in Conway and beyond.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/through-the-years">Through The Years</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Rental Properties</h3>
            <ul>
              <li><Link to="/rental/residential">Residential Properties</Link></li>
              <li><Link to="/rental/commercial">Commercial Properties</Link></li>
              <li><Link to="/rental/remodeled">Remodeled Properties</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Projects</h3>
            <ul>
              <li><Link to="/projects/residential">Residential Properties</Link></li>
              <li><Link to="/projects/commercial">Commercial Properties</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p>Keller Johnson Construction</p>
            <p>720 S Harkrider St</p>
            <p>Conway, AR 72032</p>
            <p><a href="tel:501-514-5819" style={{ color: 'inherit', textDecoration: 'none' }}>501-514-5819</a></p>
            <p><a href="mailto:kellerjohnson@conwaycorp.net" style={{ color: 'inherit', textDecoration: 'none' }}>kellerjohnson@conwaycorp.net</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Keller Johnson Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


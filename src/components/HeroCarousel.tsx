import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroCarousel.css';

interface Slide {
  id: number;
  url: string;
  alt: string;
}

const HeroCarousel: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1210,
      url: 'https://buildingconway.com/wp-content/uploads/2020/11/KJProperties-Web-22.jpg',
      alt: 'Keller Johnson Construction Project'
    },
    {
      id: 991,
      url: 'https://buildingconway.com/wp-content/uploads/2020/09/38200017_1886166661406654_3520752806141100032_o.jpg',
      alt: 'Keller Johnson Construction Project'
    },
    {
      id: 1711,
      url: 'https://buildingconway.com/wp-content/uploads/2021/01/princeton.png',
      alt: 'Princeton Village Project'
    },
    {
      id: 2149,
      url: 'https://buildingconway.com/wp-content/uploads/2021/01/DSC_1205-scaled.jpg',
      alt: 'Keller Johnson Construction Project'
    },
    {
      id: 1368,
      url: 'https://buildingconway.com/wp-content/uploads/2020/11/53810949_2200462283310422_3838870339287252992_o.jpg',
      alt: 'Keller Johnson Construction Project'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500); // Transition duration
    }, 5000); // Slide duration

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        <div className="carousel-slides">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''} ${isTransitioning ? 'transitioning' : ''}`}
              style={{ backgroundImage: `url(${slide.url})` }}
            >
              <div className="slide-overlay"></div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Carousel Content Overlay */}
        <div className="carousel-content">
          <div className="container">
            <img 
              src="/images/KJCI-Logo-5-300x107.png" 
              alt="Keller Johnson Construction" 
              className="carousel-logo"
            />
            <p className="carousel-subtitle">
              Quality construction, rental properties, and custom homes built with craftsmanship and care
            </p>
            <div className="carousel-buttons">
              <a href="#services" className="btn btn-primary">
                Our Services
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;


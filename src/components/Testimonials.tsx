import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import './Testimonials.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  text: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Buzz Bolding',
      role: 'Homeowner',
      text: 'Two years ago my wife, Carol and I purchased a lot from Keller Johnson and contracted him to build our home on Lost Canyon Drive in Centennial Valley. I am a real perfectionist and know I wasn\'t the easiest client to work with. But, Keller and all of his subs were accommodating throughout each phase of the project. We knew that Keller really wanted to please us and make this home exactly what we wanted. Even now, he will stop by to see if we need anything or to make sure everything is still okay. Our experience with him as our contractor was wonderful.',
      rating: 5
    },
    {
      id: 2,
      name: 'Jan Bradley',
      role: 'Homeowner',
      text: 'While planning the move back to Conway, I reached out to Keller Johnson about building me a home. He mentioned a new subdivision that was in the works called "Princeton Village." As the first home buyer in Princeton, I could not be more pleased with both the aesthetics and soundness of the structure itself, as well as what the neighborhood is becoming. Keller is the integral builder. He is involved in every aspect of the home and moreover, the subdivision. Princeton Village is the place to be if you are looking for a small town atmosphere with access to the multiple amenities that Conway has to offer.',
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials">
      <div className="container">
        <ScrollAnimation animation="fade-in">
          <div className="testimonials-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
        </ScrollAnimation>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={testimonial.id} animation="fade-in" delay={index * 200}>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">
                      {testimonial.role}
                      {testimonial.company && ` • ${testimonial.company}`}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


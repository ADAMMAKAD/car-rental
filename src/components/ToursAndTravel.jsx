// src/components/ToursAndTravel.jsx

import React, { useEffect } from 'react';
import './ToursAndTravel.css';
import { FaPlane, FaHiking, FaCity } from 'react-icons/fa'; // Importing icons
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Initialize AOS
const ToursAndTravel = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  const toursData = [
    {
      id: 1,
      title: 'Beach Paradise',
      description:
        'Enjoy a relaxing week on pristine beaches with all-inclusive amenities.',
      image: '/images/plan/beach-paradise.jpg', // Ensure these images exist in the public folder
      icon: <FaPlane />,
    },
    {
      id: 2,
      title: 'Mountain Adventure',
      description:
        'Experience the thrill of mountain trekking and breathtaking views.',
      image: './images/plan/city-explorer.jpg',
      icon: <FaHiking />,
    },
    {
      id: 3,
      title: 'City Explorer',
      description:
        'Discover the vibrant life and hidden gems of the world’s most exciting cities.',
      image: './images/plan/mountain-adventure.jpg',
      icon: <FaCity />,
    },
    // Add more tours as needed with unique images
  ];

  return (
    <section className="tours-and-travel">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Tours and Travel
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
          Explore our exclusive travel packages tailored just for you.
        </p>
        <div className="tours-grid">
          {toursData.map((tour) => (
            <div
              key={tour.id}
              className="tour-card"
              data-aos="zoom-in"
              data-aos-delay={`${tour.id * 100}`}
            >
              <div className="tour-image-wrapper">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="tour-image"
                />
                <div className="tour-icon">{tour.icon}</div>
              </div>
              <div className="tour-content">
                <h3 className="tour-title">{tour.title}</h3>
                <p className="tour-description">{tour.description}</p>
                <button className="btn learn-more-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursAndTravel;

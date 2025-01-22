// Hero.jsx
import { Link } from "react-router-dom";
import BgShape from "../images/banners/same.jpg";
import { useEffect, useState } from "react";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bookBtn = () => {
    const bookingSection = document.querySelector("#booking-section");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <>
      <section id="home" className="hero-section">
        {/* Overlay */}
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            {/* Text Content */}
            <div className="hero-text">
              <h4 className="sub-heading">Plan Your Trip Now</h4>
              <h1>
                Save <span>Big</span> with Our Car Rental
              </h1>
              <p className="hero-description">
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options, and much more.
              </p>
              <div className="hero-buttons">
                <Link
                  onClick={bookBtn}
                  className="btn book-ride"
                  to="/"
                >
                  Book Car <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link className="btn learn-more" to="/">
                  Learn More <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>

            {/* Car Image */}
           
          </div>
        </div>

        {/* Scroll-to-top button */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
          aria-label="Scroll to top"
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .hero-section {
          position: relative;
          width: 100%;
          height: 100vh;
          background: url('${BgShape}') no-repeat center center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
          color:rgb(0, 0, 0);
          font-family: 'Roboto', sans-serif;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(252, 252, 252, 0);
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 2;
          width: 90%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        /* Text Content */
        .hero-text {
          flex: 1;
          min-width: 300px;
          max-width: 600px;
          margin-right: 20px;
        }

        .sub-heading {
          font-size: 2.9rem;
          color: #f1c40f;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 10px;
          font-family: 'Montserrat', sans-serif;
        }

        .hero-text h1 {
          font-size: 4.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.2;
          font-family: 'Montserrat', sans-serif;
        }

        .hero-text h1 span {
          color: #f1c40f;
        }

        .hero-description {
          font-size: 2.5rem;
          margin-bottom: 30px;
          line-height: 1.6;
          color:rgb(0, 0, 0);
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 15px 30px;
          font-size: 2rem;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: all 0.3s ease;
          font-family: 'Roboto', sans-serif;
        }

        .book-ride {
          background-color: #27ae60;
          color: #ffffff;
        }

        .book-ride:hover {
          background-color: #2ecc71;
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .learn-more {
          background-color: transparent;
          color: #f1c40f;
          border: 2px solid #f1c40f;
        }

        .learn-more:hover {
          background-color: #f1c40f;
          color: #ffffff;
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        /* Car Image */
        .car-image-container {
          flex: 1;
          min-width: 300px;
          max-width: 600px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .car-image {
          width: 100%;
          max-width: 500px;
          height: auto;
          animation: floatCar 6s ease-in-out infinite;
          transition: transform 0.3s ease;
        }

        .car-image:hover {
          transform: scale(1.05);
        }

        @keyframes floatCar {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }

        /* Scroll-to-top button */
        .scroll-up {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background-color: #f1c40f;
          color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
          z-index: 1000;
        }

        .show-scroll {
          opacity: 1;
          visibility: visible;
        }

        .scroll-up i {
          font-size: 1.5rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-text h1 {
            font-size: 3.5rem;
          }

          .hero-description {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column;
            text-align: center;
          }

          .hero-text {
            margin-right: 0;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-buttons {
            justify-content: center;
          }

          .car-image {
            max-width: 70%;
            margin-top: 20px;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 60px 10px;
          }

          .hero-text h1 {
            font-size: 2rem;
          }

          .sub-heading {
            font-size: 1.2rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .btn {
            padding: 12px 25px;
            font-size: 0.9rem;
          }

          .scroll-up {
            width: 40px;
            height: 40px;
            bottom: 20px;
            right: 20px;
          }

          .scroll-up i {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}

export default Hero;

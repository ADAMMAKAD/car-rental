import React from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";


function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            {/* About Image */}
            <div className="about-main__img-wrapper">
              <img
                className="about-main__img"
                src={AboutMain}
                alt="car-renting"
              />
            </div>

            {/* About Text */}
            <div className="about-main__text">
              <h3 className="about-main__subtitle">About Company</h3>
              <h2 className="about-main__title">
                You start the engine and your adventure begins
              </h2>
              <p className="about-main__description">
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>

              {/* About Icons */}
              <div className="about-main__icons">
                <div className="about-main__icon">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>20</h4>
                    <p>Car Types</p>
                  </span>
                </div>
                <div className="about-main__icon">
                  <img src={Box2} alt="car-icon" />
                  <span>
                    <h4>85</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="about-main__icon">
                  <img src={Box3} alt="car-icon" />
                  <span>
                    <h4>75</h4>
                    <p>Repair Shops</p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Plan Trip Section */}
          <PlanTrip />
        </div>
      </section>

      {/* Book Banner */}
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="book-banner__content">
            <h2>Book a car by getting in touch with us</h2>
            <span className="book-banner__contact">
              <i className="fa-solid fa-phone"></i>
              <h3>251912000101</h3>
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;

import React from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import CarImg1 from "../images/cars-big/audi-box.png";
import CarImg2 from "../images/cars-big/golf6-box.png";
import CarImg3 from "../images/cars-big/toyota-box.png";
import CarImg4 from "../images/cars-big/bmw-box.png";
import CarImg5 from "../images/cars-big/benz-box.png";
import CarImg6 from "../images/cars-big/passat-box.png";
import { Link } from "react-router-dom";


function Models() {
  const carData = [
    { id: 1, img: CarImg1, name: "Audi A1", price: 45, type: "Audi" },
    { id: 2, img: CarImg2, name: "Golf 6", price: 37, type: "VW" },
    { id: 3, img: CarImg3, name: "Toyota", price: 30, type: "Camry" },
    { id: 4, img: CarImg4, name: "BMW 320", price: 35, type: "ModernLine" },
    { id: 5, img: CarImg5, name: "Mercedes", price: 50, type: "Benz GLK" },
    { id: 6, img: CarImg6, name: "VW Passat", price: 25, type: "CC" },
  ];

  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">
            {carData.map((car) => (
              <div key={car.id} className="models-div__box">
                <div className="models-div__box__img">
                  <img src={car.img} alt={car.name} />
                  <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                      <div className="models-div__box__descr__name">
                        <p>{car.name}</p>
                        <span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                      <div className="models-div__box__descr__price">
                        <h4>Br{car.price}</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className="models-div__box__descr__details">
                      <span>
                        <i className="fa-solid fa-car-side"></i> {car.type}
                      </span>
                      <span>
                        4/5 <i className="fa-solid fa-user"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-cogs"></i> Manual
                      </span>
                      <span>
                        Diesel <i className="fa-solid fa-gas-pump"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__btn">
                      <Link onClick={() => window.scrollTo(0, 0)} to="/">
                        Book Ride
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Book Banner */}
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="book-banner__content">
              <h2>Book a car by getting in touch with us</h2>
              <span className="book-banner__contact">
                <i className="fa-solid fa-phone"></i>
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Models;

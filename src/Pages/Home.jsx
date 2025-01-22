// src/Pages/Home.jsx

import React from "react";
import { Helmet } from "react-helmet"; // For SEO (if implemented)
import Navbar from "../components/Navbar"; // Already included in App.jsx, no need here
import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import ToursAndTravel from "../components/ToursAndTravel";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Download from "../components/Download";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      {/* If Helmet is used for SEO */}
      <Helmet>
        <title>Jewel Rentals | Car Rental & Tours & Travel</title>
        <meta
          name="description"
          content="Jewel Rentals offers top-notch car rental services and unforgettable tours & travel packages. Book your ride or plan your trip with us today!"
        />
        <meta
          name="keywords"
          content="Car Rental, Tours, Travel, Rent a Car, Book a Tour, Jewel Rentals"
        />
        <meta name="author" content="Your Company Name" />
      </Helmet>
      
      {/* Navbar is already included in App.jsx */}
      {/* <Navbar /> */}

      <Hero />
      <BookCar />
      <ToursAndTravel />
      <PlanTrip />
      <PickCar />
      <Testimonials />
      <Faq />
      <Download />
      <Footer />
    </>
  );
}

export default Home;

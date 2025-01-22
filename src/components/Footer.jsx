// Footer.jsx
import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {/* Brand & Contact Info */}
            <div className="footer-section brand-contact">
              <h2 className="brand-name">
                <span>CAR</span> Rental
              </h2>
              <p className="brand-description">
                We offer a wide range of vehicles for all your tour driving needs. We have the perfect car to meet your requirements.
              </p>
              <div className="contact-info">
                <a href="tel:+25191200789" className="contact-item">
                  <i className="fa-solid fa-phone"></i>
                  <span>(251) -91200-789</span>
                </a>
                <a href="mailto:carrental@xyz.com" className="contact-item">
                  <i className="fa-solid fa-envelope"></i>
                  <span>carrental@xyz.com</span>
                </a>
              </div>
              <div className="design-credit">
                <a
                  href="https://elixone.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Design by Elixone Tech
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div className="footer-section links">
              <h3>Company</h3>
              <ul>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#mobile">Mobile</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#how-we-work">How We Work</a></li>
              </ul>
            </div>

            {/* Working Hours */}
            <div className="footer-section hours">
              <h3>Working Hours</h3>
              <ul>
                <li>Mon - Fri: 9:00 AM - 9:00 PM</li>
                <li>Sat: 9:00 AM - 7:00 PM</li>
                <li>Sun: Closed</li>
              </ul>
            </div>

            {/* Subscription Form */}
            <div className="footer-section subscription">
              <h3>Subscription</h3>
              <p>Subscribe with your email address for the latest news & updates.</p>
              <form className="subscription-form">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  required
                />
                <button type="submit" className="submit-email">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .footer {
          background-color: #1a1a1a;
          color: #ffffff;
          padding: 90px 50px;
          font-size: 14px;
        }

        .container {
          max-width: 1500px;
          margin: 0 auto;
        }

        .footer-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 40px;
        }

        .footer-section {
          flex: 1;
          min-width: 200px;
        }

        /* Brand & Contact Info */
        .brand-name {
          font-size: 1.8rem;
          margin-bottom: 15px;
          color:rgb(23, 121, 63);
        }

        .brand-name span {
          color: #ffffff;
        }

        .brand-description {
          margin-bottom: 20px;
          line-height: 1.6;
          color: #cccccc;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          color: #cccccc;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item:hover {
          color:rgb(44, 185, 138);
        }

        .contact-item i {
          margin-right: 10px;
          font-size: 1.2rem;
          color:rgb(24, 141, 69);
        }

        .design-credit a {
          color: #cccccc;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .design-credit a:hover {
          color:rgb(30, 143, 77);
        }

        /* Company Links */
        .links h3,
        .hours h3,
        .subscription h3 {
          margin-bottom: 15px;
          color: #ffffff;
          font-size: 1.2rem;
        }

        .links ul,
        .hours ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .links ul li,
        .hours ul li {
          margin-bottom: 10px;
        }

        .links ul li a {
          color: #cccccc;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .links ul li a:hover {
          color:rgb(28, 153, 95);
        }

        /* Subscription Form */
        .subscription p {
          margin-bottom: 15px;
          color: #cccccc;
          line-height: 1.6;
        }

        .subscription-form {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .subscription-form input[type="email"] {
          flex: 1;
          padding: 10px 15px;
          border: none;
          border-radius: 5px;
          font-size: 14px;
        }

        .subscription-form input[type="email"]:focus {
          outline: none;
        }

        .submit-email {
          padding: 10px 20px;
          background-color:rgb(17, 131, 87);
          border: none;
          border-radius: 5px;
          color: #ffffff;
          cursor: pointer;
          transition: background-color 0.3s ease;
          font-size: 14px;
        }

        .submit-email:hover {
          background-color:rgb(24, 167, 124);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-content {
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column;
            gap: 20px;
          }

          .footer-section {
            min-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 40px 10px;
          }

          .brand-name {
            font-size: 1.5rem;
          }

          .subscription-form {
            flex-direction: column;
          }

          .subscription-form input[type="email"] {
            width: 100%;
          }

          .submit-email {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;

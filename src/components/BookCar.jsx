// BookCar.jsx
import { useEffect, useState } from "react";
import CarAudi from "../images/cars-big/audia1.jpg";
import CarGolf from "../images/cars-big/golf6.jpg";
import CarToyota from "../images/cars-big/toyotacamry.jpg";
import CarBmw from "../images/cars-big/bmw320.jpg";
import CarMercedes from "../images/cars-big/benz.jpg";
import CarPassat from "../images/cars-big/passatcc.jpg";

function BookCar() {
  const [modal, setModal] = useState(false); // Controls modal visibility

  // Booking car details
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  // Modal personal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  // Handle input changes
  const handleName = (e) => setName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleZip = (e) => setZipCode(e.target.value);

  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };
  const handlePick = (e) => setPickUp(e.target.value);
  const handleDrop = (e) => setDropOff(e.target.value);
  const handlePickTime = (e) => setPickTime(e.target.value);
  const handleDropTime = (e) => setDropTime(e.target.value);

  // Image based on car selection
  let imgUrl;
  switch (carImg) {
    case "Audi A1 S-Line":
      imgUrl = CarAudi;
      break;
    case "VW Golf 6":
      imgUrl = CarGolf;
      break;
    case "Toyota Camry":
      imgUrl = CarToyota;
      break;
    case "BMW 320 ModernLine":
      imgUrl = CarBmw;
      break;
    case "Mercedes-Benz GLK":
      imgUrl = CarMercedes;
      break;
    case "VW Passat CC":
      imgUrl = CarPassat;
      break;
    default:
      imgUrl = "";
  }

  // Toggle modal visibility
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // Disable page scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);

  // Confirm booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  // Hide confirmation message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* Overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a Car</h2>

              <p className="error-message">
                All fields are required! <i className="fa-solid fa-xmark"></i>
              </p>

              <p className="booking-done">
                Check your email to confirm your reservation.{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form" onSubmit={openModal}>
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Car Type{" "}
                    <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar} required>
                    <option value="">Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">
                      BMW 320 ModernLine
                    </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick} required>
                    <option value="">Select pick-up location</option>
                    <option value="Addis Ababa">Addis Ababa</option>
                    <option value="Bahirdar">Bahirdar</option>
                    <option value="Jimma">Jimma</option>
                    <option value="Gonder">Gonder</option>
                    <option value="Hawassa">Hawassa</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-off{" "}
                    <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop} required>
                    <option value="">Select drop-off location</option>
                    <option value="Addis Ababa">Addis Ababa</option>
                    <option value="Bahirdar">Bahirdar</option>
                    <option value="Jimma">Jimma</option>
                    <option value="Gonder">Gonder</option>
                    <option value="Hawassa">Hawassa</option>
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days"></i> &nbsp;
                    Pick-up Date <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                    required
                  />
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days"></i> &nbsp;
                    Drop-off Date <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                    required
                  />
                </div>

                <button type="submit" className="search-button">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* Title */}
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div>
        {/* Message */}
        <div className="booking-modal__message">
          <h4>
            <i className="fa-solid fa-circle-info"></i> Upon completing this
            reservation enquiry, you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        {/* Car Info and Image */}
        <div className="booking-modal__car-info">
          <div className="booking-modal__car-info__details">
            <div className="details-item">
              <i className="fa-solid fa-calendar-days"></i>
              <div>
                <h6>Pick-Up Date & Time</h6>
                <p>
                  {pickTime} / <input type="time" className="input-time" />
                </p>
              </div>
            </div>
            <div className="details-item">
              <i className="fa-solid fa-calendar-days"></i>
              <div>
                <h6>Drop-Off Date & Time</h6>
                <p>
                  {dropTime} / <input type="time" className="input-time" />
                </p>
              </div>
            </div>
            <div className="details-item">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h6>Pick-Up Location</h6>
                <p>{pickUp}</p>
              </div>
            </div>
            <div className="details-item">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h6>Drop-Off Location</h6>
                <p>{dropOff}</p>
              </div>
            </div>
          </div>
          <div className="booking-modal__car-info__model">
            <h5>Car - {carType}</h5>
            {imgUrl && <img src={imgUrl} alt="Car Image" />}
          </div>
        </div>
        {/* Personal Info Form */}
        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form" onSubmit={confirmBooking}>
            <div className="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Enter your first name"
                  required
                />
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="Enter your last name"
                  required
                />
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input
                  value={age}
                  onChange={handleAge}
                  type="number"
                  placeholder="18"
                  min="18"
                  required
                />
                <p className="error-modal">This field is required.</p>
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="Enter your street address"
                  required
                />
                <p className="error-modal">This field is required.</p>
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="Enter your city"
                  required
                />
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  value={zipcode}
                  onChange={handleZip}
                  type="text"
                  placeholder="Enter your zip code"
                  required
                />
                <p className="error-modal">This field is required.</p>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox" id="newsletter" />
              <label htmlFor="newsletter">Please send me the latest news and updates</label>
            </span>

            <div className="reserve-button">
              <button type="submit">Reserve Now</button>
            </div>
          </form>
        </div>
      </div>

      {/* Confirmation Message */}

      <style jsx>{`
        .book-section {
          width: 100%;
          padding: 100px 120px;
          background-color:rgba(248, 250, 252, 0.81);
        }

        .container {
          max-width: 1800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .book-content {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .book-content__box {
          background: #fff;
          border-radius: 25px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          padding: 80px;
          width: 100%;
          max-width: 1300px;
          position: relative;
        }

        .book-content__box h2 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 20px;
          text-align: center;
        }

        .error-message {
          display: none;
          background-color: #ffcccc;
          color: #cc0000;
          padding: 10px 20px;
          border-radius: 5px;
          margin-bottom: 20px;
          align-items: center;
          justify-content: space-between;
          display: flex;
        }

        .error-message i {
          cursor: pointer;
        }

        .booking-done {
          display: none;
          position: fixed;
          top: 20px;
          right: 20px;
          background-color: #d4edda;
          color: #155724;
          padding: 15px 20px;
          border-radius: 5px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          z-index: 1001;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .booking-done p {
          margin: 0;
          display: flex;
          align-items: center;
        }

        .booking-done i {
          margin-left: 10px;
          cursor: pointer;
        }

        .box-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .box-form__car-type label {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 5px;
          display: block;
        }

        .box-form__car-type select {
          width: 100%;
          padding: 12px 20px;
          font-size: 1.7rem;
          border-radius: 8px;
          border: 2px solidrgb(44, 187, 63);
          background-color: #fff;
          transition: border-color 0.3s ease;
          appearance: none;
          background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"><path fill="%23333" d="M6 8L0.75 0.75h10.5L6 8z"/></svg>');
          background-repeat: no-repeat;
          background-position: right 20px center;
          background-size: 12px 8px;
        }

        .box-form__car-type select:hover,
        .box-form__car-type select:focus {
          border-color:rgb(43, 189, 43);
        }

        .box-form__car-time label {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 5px;
          display: block;
        }

        .box-form__car-time input[type="date"] {
          width: 100%;
          padding: 12px 20px;
          font-size: 1.5rem;
          border-radius: 8px;
          border: 2px solidrgb(25, 153, 68);
          background-color: #fff;
          transition: border-color 0.3s ease;
        }

        .box-form__car-time input[type="date"]:hover,
        .box-form__car-time input[type="date"]:focus {
          border-color:rgb(31, 179, 68);
        }

        .search-button {
          width: 100%;
          padding: 15px;
          font-size: 1.4rem;
          color: #fff;
          background-color:rgb(36, 179, 48);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .search-button:hover {
          background-color:rgb(37, 170, 104);
          transform: translateY(-3px);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
          z-index: 1000;
        }

        .modal-overlay.active-modal {
          opacity: 1;
          visibility: visible;
        }

        .booking-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.8);
          background: #fff;
          border-radius: 15px;
          width: 90%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 1001;
        }

        .booking-modal.active-modal {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, -50%) scale(1);
        }

        .booking-modal__title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color:rgb(39, 168, 97);
          color: #fff;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
        }

        .booking-modal__title h2 {
          margin: 0;
          font-size: 1.8rem;
        }

        .booking-modal__title i {
          cursor: pointer;
          font-size: 1.2rem;
        }

        .booking-modal__message {
          padding: 20px;
          background-color: #e9ecef;
        }

        .booking-modal__message h4 {
          font-size: 1.2rem;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #333;
        }

        .booking-modal__message p {
          font-size: 1.5rem;
          color: #555;
        }

        .booking-modal__car-info {
          display: flex;
          flex-direction: row;
          gap: 40px;
          padding: 20px;
          flex-wrap: wrap;
        }

        .booking-modal__car-info__details {
          flex: 1;
          min-width: 250px;
        }

        .details-item {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }

        .details-item i {
          font-size: 1.7rem;
          color:rgb(24, 136, 102);
          margin-right: 10px;
        }

        .details-item h6 {
          margin: 0;
          font-size: 1.5rem;
          color: #333;
        }

        .details-item p {
          margin: 5px 0 0 0;
          font-size: 1.3rem;
          color: #555;
        }

        .booking-modal__car-info__model {
          flex: 1;
          min-width: 250px;
          text-align: center;
        }

        .booking-modal__car-info__model h5 {
          font-size: 1.7rem;
          color: #333;
          margin-bottom: 15px;
        }

        .booking-modal__car-info__model img {
          width: 100%;
          max-width: 400px;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .booking-modal__car-info__model img:hover {
          transform: scale(1.05);
        }

        .booking-modal__person-info {
          padding: 20px;
        }

        .booking-modal__person-info h4 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 15px;
          text-align: center;
        }

        .info-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-form__2col {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .info-form__1col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-form__2col span,
        .info-form__1col span {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .info-form__2col span label,
        .info-form__1col span label {
          font-size: 1.6rem;
          color: #333;
          margin-bottom: 5px;
        }

        .info-form__2col span input,
        .info-form__1col span input {
          padding: 10px 15px;
          font-size: 1.6rem;
          border: 2px solid #ccc;
          border-radius: 8px;
          transition: border-color 0.3s ease;
        }

        .info-form__2col span input:focus,
        .info-form__1col span input:focus {
          border-color:rgb(38, 165, 87);
          outline: none;
        }

        .info-form__checkbox {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .info-form__checkbox input {
          width: 18px;
          height: 18px;
        }

        .reserve-button {
          text-align: center;
        }

        .reserve-button button {
          padding: 12px 30px;
          font-size: 1.7rem;
          color: #fff;
          background-color:rgb(29, 177, 73);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .reserve-button button:hover {
          background-color:rgb(29, 160, 83);
          transform: translateY(-3px);
        }

        .input-time {
          width: 100px;
          padding: 5px;
          font-size: 1.5rem;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        @media (max-width: 768px) {
          .booking-modal__car-info {
            flex-direction: column;
            align-items: center;
          }

          .booking-modal__car-info__model img {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .book-content__box {
            padding: 20px;
          }

          .book-content__box h2 {
            font-size: 1.8rem;
          }

          .box-form__car-type label,
          .box-form__car-time label {
            font-size: 1rem;
          }

          .box-form__car-type select,
          .box-form__car-time input[type="date"] {
            font-size: 0.95rem;
            padding: 10px 15px;
          }

          .search-button {
            font-size: 1rem;
            padding: 10px;
          }

          .booking-modal__title h2 {
            font-size: 1.5rem;
          }

          .booking-modal__car-info__details h6 {
            font-size: 0.95rem;
          }

          .booking-modal__car-info__details p {
            font-size: 0.9rem;
          }

          .booking-modal__car-info__model h5 {
            font-size: 1.2rem;
          }

          .booking-modal__person-info h4 {
            font-size: 1.2rem;
          }

          .info-form__2col {
            flex-direction: column;
          }

          .info-form__2col span,
          .info-form__1col span {
            flex: 1;
          }
        }
      `}</style>
    </>
  );
}

export default BookCar;

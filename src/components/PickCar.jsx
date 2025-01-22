// PickCar.jsx
import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

function PickCar() {
  const [selectedCarIndex, setSelectedCarIndex] = useState(0); // Initialize to first car

  const handleCarSelect = (event) => {
    setSelectedCarIndex(Number(event.target.value));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("pt-Br", {
      style: "currency",
      currency: "Br",
    }).format(amount);
  };

  return (
    <>
      <section className="pick-section">
        <div className="pick-container">
          <div className="pick-container__title">
            <h3>Vehicle Models</h3>
            <h2>Our Rental Fleet</h2>
            <p>
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip.
            </p>
          </div>
          <div className="pick-container__car-content">
            {/* Dropdown for selecting car */}
            <div className="dropdown">
              <label htmlFor="car-select" className="dropdown-label">
                Select a car:
              </label>
              <select
                id="car-select"
                onChange={handleCarSelect}
                className="dropdown-select"
                value={selectedCarIndex}
              >
                {CAR_DATA.map((car, index) => (
                  <option key={car.id} value={index}>
                    {car.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Display selected car details */}
            {CAR_DATA[selectedCarIndex] && (
              <div className="car-details">
                <CarBox data={CAR_DATA[selectedCarIndex]} />
                <img
                  src={CAR_DATA[selectedCarIndex].image}
                  alt={CAR_DATA[selectedCarIndex].name}
                  className="car-image"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .pick-section {
          width: 100%;
          padding: 180px 180px;
          background-color:#179140;
        }

        .pick-container {
          width: 100%;
          margin: 0 auto;
          padding: 100px;
          border-radius: 15px;
          background:rgba(246, 253, 255, 0.96);
          box-shadow: 0 15px 40px rgb(255, 255, 255);
        }

        .pick-container__title {
          text-align: center;
          margin-bottom: 40px;
        }

        .pick-container__title h3 {
          font-size: 2.8rem;
          font-weight: 600;
          color: #333;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .pick-container__title h2 {
          font-size: 1.9rem;
          font-weight: bold;
          color: #333;
          line-height: 1.3;
        }

        .pick-container__car-content {
          display: flex;
          flex-direction: column;
          gap: 30px;
          align-items: center;
        }

        .dropdown {
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }

        .dropdown-label {
          font-size: 1.7rem;
          margin-bottom: 10px;
          color: #333;
          display: block;
          text-align: left;
          font-weight: 500;
        }

        .dropdown-select {
          width: 100%;
          padding: 12px 20px;
          font-size: 1.8rem;
          border-radius: 8px;
          border: 2px solid #4e73df;
          background-color: #fff;
          transition: all 0.3s ease;
          appearance: none;
          background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"><path fill="%23333" d="M6 8L0.75 0.75h10.5L6 8z"/></svg>');
          background-repeat: no-repeat;
          background-position: right 20px center;
          background-size: 12px 8px;
        }

        .dropdown-select:hover {
          border-color: #1c8cdc;
          cursor: pointer;
        }

        .car-details {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 60px;
          width: 100%;
          max-width: 1000px;
          flex-wrap: wrap;
        }

        .car-details .car-box {
          flex: 3;
          min-width: 300px;
        }

        .car-image {
          flex: 1;
          max-width: 500px;
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .car-image:hover {
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .pick-container {
            padding: 30px;
          }

          .pick-container__title h2 {
            font-size: 3rem;
          }

          .car-details {
            flex-direction: row;
          }
        }

        @media (max-width: 768px) {
          .pick-container__car-content {
            flex-direction: column;
          }

          .car-details {
            flex-direction: column;
            align-items: center;
          }

          .car-details .car-box,
          .car-image {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .pick-section {
            padding: 60px 10px;
          }

          .pick-container {
            padding: 20px;
          }

          .pick-container__title h2 {
            font-size: 2.7rem;
          }

          .dropdown-select {
            padding: 10px 15px;
          }

          .car-details {
            gap: 20px;
          }

          .additional-details {
            padding: 15px;
          }
        }
      `}</style>
    </>
  );
}

export default PickCar;

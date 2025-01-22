import SelectCar from "../images/plan/1.png";
import Contact from "../images/plan/2.png";
import Drive from "../images/plan/3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Plan your trip now</h3>
              <h2>Quick & easy car rental</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" className="icon-img" />
                <h3>Select Car</h3>
                <p>
                  We offer a wide range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" className="icon-img" />
                <h3>Contact Operator</h3>
                <p>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" className="icon-img" />
                <h3>Let's Drive</h3>
                <p>
                  Whether you're hitting the open road or city streets, we've
                  got you covered with our wide range of cars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .plan-section {
          background-color: #f0f4f7;
          padding: 80px 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .plan-container {
          width: 100%;
          margin: 0 auto;
          padding: 80px;
          border-radius: 18px;
          background: linear-gradient(135deg,rgb(255, 255, 255),rgba(255, 255, 255, 0));
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0);
        }

        .plan-container__title {
          text-align: center;
          margin-bottom: 40px;
        }

        .plan-container__title h3 {
          font-size: 2.4rem;
          font-weight: 600;
          color: black;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .plan-container__title h2 {
          font-size: 3.5rem;
          font-weight: bold;
          color: black;
          line-height: 1.3;
        }

        .plan-container__boxes {
          display: flex;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
        }

        .plan-container__boxes__box {
          background: white;
          border-radius: 10px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          width: 30%;
        }

        .plan-container__boxes__box:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .icon-img {
          width: 60px;
          margin-bottom: 20px;
          transition: transform 0.3s ease;
        }

        .plan-container__boxes__box:hover .icon-img {
          transform: rotate(15deg);
        }

        .plan-container__boxes__box h3 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 15px;
        }

        .plan-container__boxes__box p {
          font-size: 1.6rem;
          color: #555;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .plan-container__boxes__box {
            width: 100%;
            margin-bottom: 30px;
          }

          .plan-container__title h2 {
            font-size: 2.5rem;
          }

          .plan-container__boxes {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}

export default PlanTrip;

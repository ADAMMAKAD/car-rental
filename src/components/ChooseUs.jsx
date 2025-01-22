import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us</h4>
                <h2>Best valued deals you will ever find</h2>
                <p>
                  Discover the best deals you'll ever find with our unbeatable
                  offers. We're dedicated to providing you with the best value
                  for your money, so you can enjoy top-quality services and
                  products without breaking the bank. Our deals are designed to
                  give you the ultimate renting experience, so don't miss out on
                  your chance to save big.
                </p>
                <a href="#home" className="find-details-link">
                  Find Details &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" className="icon-img" />
                  <div className="text-container__right__box__text">
                    <h4>Cross Country Drive</h4>
                    <p>
                      Take your driving experience to the next level with our
                      top-notch vehicles for your cross-country adventures.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  <img src={Box2} alt="coin-img" className="icon-img" />
                  <div className="text-container__right__box__text">
                    <h4>All Inclusive Pricing</h4>
                    <p>
                      Get everything you need in one convenient, transparent
                      price with our all-inclusive pricing policy.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  <img src={Box3} alt="coin-img" className="icon-img" />
                  <div className="text-container__right__box__text">
                    <h4>No Hidden Charges</h4>
                    <p>
                      Enjoy peace of mind with our no hidden charges policy. We
                      believe in transparent and honest pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .choose-section {
          background-color: #f0f4f7;
          padding: 80px 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .choose-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 30px;
          border-radius: 15px;
          background: linear-gradient(135deg,rgba(107, 99, 255, 0),rgba(255, 58, 58, 0));
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0);
        }

        .choose-container__img {
          max-width: 100%;
          width: 400px;
          border-radius: 10px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }

        .choose-container__img:hover {
          transform: scale(1.05);
        }

        .text-container {
          max-width: 600px;
          color: white;
        }

        .text-container__left h4 {
          font-size: 1.8rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 15px;
        }

        .text-container__left h2 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 25px;
          line-height: 1.4;
        }

        .text-container__left p {
          font-size: 1.1rem;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .find-details-link {
          display: inline-block;
          padding: 12px 30px;
          background-color: #ff4081;
          color: white;
          font-size: 1.1rem;
          border-radius: 5px;
          text-decoration: none;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .find-details-link:hover {
          background-color: #ff80ab;
          transform: translateY(-5px);
        }

        .text-container__right {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .text-container__right__box {
          display: flex;
          align-items: center;
          gap: 20px;
          background: #fff;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .text-container__right__box:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        .icon-img {
          max-width: 50px;
          transition: transform 0.3s ease;
        }

        .text-container__right__box:hover .icon-img {
          transform: rotate(15deg);
        }

        .text-container__right__box__text h4 {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
        }

        .text-container__right__box__text p {
          font-size: 1rem;
          color: #555;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .choose-container {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }

          .choose-container__img {
            width: 300px;
          }

          .text-container__left h2 {
            font-size: 2.5rem;
          }

          .text-container__right__box__text h4 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </>
  );
}

export default ChooseUs;

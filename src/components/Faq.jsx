// Faq.jsx
import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState(null);

  const openQ = (id) => {
    setActiveQ(activeQ === id ? null : id);
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Find answers to the most common questions about our car rental services.
              </p>
            </div>

            <div className="all-questions">
              {faqData.map((faq) => (
                <div className="faq-box" key={faq.id}>
                  <div
                    onClick={() => openQ(faq.id)}
                    className={`faq-box__question ${
                      activeQ === faq.id ? "active-question" : ""
                    }`}
                  >
                    <p>{faq.question}</p>
                    <i
                      className={`fa-solid ${
                        activeQ === faq.id
                          ? "fa-angle-up rotate-icon"
                          : "fa-angle-down rotate-icon"
                      }`}
                    ></i>
                  </div>
                  <div
                    className={`faq-box__answer ${
                      activeQ === faq.id ? "active-answer" : ""
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .faq-section {
          width: 100%;
          padding: 80px 20px;
          background-color:rgb(31, 158, 88);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .faq-content__title {
          text-align: center;
          margin-bottom: 60px;
        }

        .faq-content__title h5 {
          font-size: 1.9rem;
          color:rgb(255, 255, 255);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .faq-content__title h2 {
          font-size: 4.5rem;
          color: #ffffff;
          margin-bottom: 15px;
        }

        .faq-content__title p {
          font-size: 2.8rem;
          color: #ffffff;
          max-width: 900px;
          margin: 0 auto;
        }

        .all-questions {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .faq-box {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .faq-box:hover {
          transform: translateY(-5px);
        }

        .faq-box__question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          cursor: pointer;
          background-color: #4e73df;
          color: #fff;
          transition: background-color 0.3s ease;
        }

        .faq-box__question:hover {
          background-color: #375a7f;
        }

        .faq-box__question.active-question {
          background-color: #1c84c6;
        }

        .faq-box__question p {
          margin: 0;
          font-size: 2.1rem;
          font-weight: 500;
        }

        .rotate-icon {
          transition: transform 0.3s ease;
        }

        .rotate-icon.rotate {
          transform: rotate(180deg);
        }

        .faq-box__answer {
          max-height: 0;
          padding: 0 20px;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
          background-color: #f1f1f1;
        }

        .faq-box__answer.active-answer {
          max-height: 200px;
          padding: 20px;
        }

        .faq-box__answer p {
          margin: 0;
          font-size: 2rem;
          color: #555;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .faq-content__title h2 {
            font-size: 3.6rem;
          }

          .faq-box__question p {
            font-size: 3.1rem;
          }

          .faq-box__answer p {
            font-size: 2.95rem;
          }
        }

        @media (max-width: 480px) {
          .faq-section {
            padding: 60px 10px;
          }

          .faq-content__title h2 {
            font-size: 3.8rem;
          }

          .faq-box__question p {
            font-size: 2.95rem;
          }

          .faq-box__answer p {
            font-size: 2.9rem;
          }
        }
      `}</style>
    </>
  );
}

const faqData = [
  {
    id: "q1",
    question: "What is special about comparing rental car deals?",
    answer:
      "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
  },
  {
    id: "q2",
    question: "How do I find the car rental deals?",
    answer:
      "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
  },
  {
    id: "q3",
    question: "How do I find such low rental car prices?",
    answer:
      "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
  },
];

export default Faq;

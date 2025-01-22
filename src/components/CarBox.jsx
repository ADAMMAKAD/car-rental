// CarBox.jsx
function CarBox({ data }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(amount);
  };

  return (
    <div className="car-box">
      <h3>{data.name}</h3>
      <p><strong>Price: </strong>{formatCurrency(data.price)}</p>
      <p><strong>Features: </strong>{data.features}</p>

      <style jsx>{`
        .car-box {
          text-align: left;
          padding: 20px;
        }

        .car-box h3 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 15px;
        }

        .car-box p {
          font-size: 1.1rem;
          color: #555;
          margin: 10px 0;
        }

        @media (max-width: 768px) {
          .car-box h3 {
            font-size: 1.6rem;
          }

          .car-box p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default CarBox;

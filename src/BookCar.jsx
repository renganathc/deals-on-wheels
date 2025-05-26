import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./book_car.css"
import Header from "./Header";

function BookCar() {

    const location = useLocation();
    const [error, setError] = useState(false);

    let car = (location.state || {}).car;

    if (car === undefined) {
        return (<div style={{textAlign:"center", fontSize:20}}>{"404. Guess no cars for you today ;)"}</div>);
    }

    return (
    <div className="x">
        <Header/>
      <h1 className="payment-title">Secure Checkout</h1>
      <div className="payment-wrapper">
        
        <form className="payment-left">
          <div className="advance-payment" style={{fontWeight:600}} >{"If you pay I will not be giving back your money 😂"}<br/>-Renganath C</div>

          <div className="form-section">
            <h3>Buyer Details</h3>
            <label className="form-label">
              Full Name
              <input type="text" className="form-input" placeholder="Your name" />
            </label>
            <label className="form-label">
              Phone Number
              <input type="tel" className="form-input" placeholder="+91 9876543210" />
            </label>
          </div>

          <div className="form-section" style={{ marginTop: '2rem' }}>
            <h3>Card Details</h3>
            <label className="form-label">
              Card Number
              <input type="text" className="form-input" placeholder="1234 5678 9012 3456" maxLength={19} />
            </label>
            <div className="card-row">
              <label className="form-label half-width">
                Expiry
                <input type="text" className="form-input" placeholder="MM/YY" maxLength={5} />
              </label>
              <label className="form-label half-width">
                CVV
                <input type="password" className="form-input" placeholder="123" maxLength={4} />
              </label>
            </div>
          </div>

          <button type="submit" className="pay-button">Pay Booking Fee</button>
        </form>

        <div className="payment-divider"></div>

        <div className="payment-right car-summary">
          <img src={car.image} alt={`${car.brand} ${car.model}`} className="car-image" />
          <h2>{car.brand} {car.model}</h2>
          <p>{car.year} | {car.variant}</p>
          <p>{car.km.toLocaleString()} km | {car.fuel} | {car.transmission}</p>
          <p>{car.ownerCount} owner</p>
          <div className="car-price">₹{car.price} Lakh</div>
        </div>
      </div>
      <div style={{height: 60}}></div>
    </div>
  );

};

export default BookCar;
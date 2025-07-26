import React, { useState } from 'react';
import './payment.css';

const PaymentPage = () => {
  const [selectedMovie, setSelectedMovie] = useState("Frozen: First Steps");
  const [paymentMethod, setPaymentMethod] = useState("");

  const movieOptions = [
    "Frozen: 2",
    "Avatar:Fire and Ash",
    // "Inside Out 2",
    // "Kung Fu Panda 4"
  ];

  const paymentOptions = [
    'QuikPay',
    'Google Pay',
    'Amazon Pay UPI',
    'BHIM',
    'Paytm',
    'PhonePe',
    'Other UPI',
    'Debit/Credit Card',
    'Net Banking',
    'Mobile Wallets',
    'Gift Voucher',
    'Redeem Points'
  ];

  return (
    <div className="page-background">
      <div className="payment-container">
        <div className="payment-card">
          <h2 className="section-title">Share Your Contact Details</h2>

          {/* Movie Selection */}
          <div className="movie-details">
            <label>
              Select Movie:
              <select
                value={selectedMovie}
                onChange={(e) => setSelectedMovie(e.target.value)}
              >
                {movieOptions.map((movie, index) => (
                  <option key={index} value={movie}>
                    {movie}
                  </option>
                ))}
              </select>
            </label>
            <p><strong>Language:</strong> English</p>
            <p><strong>Date:</strong> 25 July 2025</p>
            <p><strong>Time:</strong> 11:15 PM</p>
          </div>

          <form className="payment-form">
            {/* Contact Info */}
            <div className="contact-details">
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Mobile Number" required />
            </div>

            {/* Payment Method Dropdown */}
            <h3 className="section-subtitle">Payment Method</h3>
            <div className="dropdown-payment">
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="" disabled>Select a payment method</option>
                {paymentOptions.map((method, index) => (
                  <option key={index} value={method}>
                    {method}
                  </option>
                ))}
              </select>
            </div>

            {/* Order Summary */}
            <h3 className="section-subtitle">Order Summary</h3>
            <div className="order-summary">
              <p><strong>{selectedMovie} (INOX 3D)</strong></p>
              <p>Language: English, INOX</p>
              <p>🎟️ M-Ticket – Seats: EL-M28, M27</p>
              <p>🗓️ Fri, 25 Jul, 2025 – 11:15 PM</p>
              <p>Subtotal: ₹1,116.00</p>
              <p>Convenience Fees: ₹141.60</p>
              <p className="donation">Donation to BookAChange: ₹0</p>
              <label className="donation-label">
                <input type="checkbox" name="donation" value="2" /> Add ₹2 to BookAChange
              </label>
              <p className="total">Total Payable: ₹1,257.60</p>
            </div>

            <button type="submit" className="pay-button">Proceed to Pay</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

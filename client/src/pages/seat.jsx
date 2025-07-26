import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './seat.css';
import frozenPoster from './fro.jpg'; // ✅ adjust the path if needed

function SeatSelectionPage() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  const handleSeatClick = (index) => {
    setSelectedSeats((prev) =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const renderSeats = (start) => {
    return Array.from({ length: 50 }, (_, i) => {
      const seatIndex = start + i;
      const isSelected = selectedSeats.includes(seatIndex);
      return (
        <div
          key={seatIndex}
          className={`seat ${isSelected ? 'selected' : ''}`}
          onClick={() => handleSeatClick(seatIndex)}
        >
          {seatIndex + 1}
        </div>
      );
    });
  };

  return (
    <div className="seat-selection-container">
      <h2>Frozen: The Movie (3D)</h2>

      <img src={frozenPoster} alt="Frozen Poster" className="movie-poster" />

      <div className="screen">SCREEN</div>

      <div className="seats-wrapper">
        <div className="seats-section">
          <p><b>Left Side</b></p>
          <div className="seats-grid">
            {renderSeats(0)}
          </div>
        </div>

        <div className="seats-section">
          <p><b>Right Side</b></p>
          <div className="seats-grid">
            {renderSeats(50)}
          </div>
        </div>
      </div>

      <button
        className="proceed-btn"
        onClick={() =>
          navigate('/payment', {
            state: {
              movie: "Frozen",
              date: "25 July 2025",
              time: "03:00 PM",
              seats: selectedSeats
            }
          })
        }
      >
        Proceed to Payment
      </button>
    </div>
  );
}

export default SeatSelectionPage;

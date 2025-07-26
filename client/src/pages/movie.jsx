import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import frozenImg from './fro.jpg';
import avatarImg from './123.jpg';
import './movie.css';

function MoviePage() {
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const movies = [
    {
      title: 'Frozen 2',
      language: 'English',
      duration: '1h 30m',
      image: frozenImg,
      theaters: {
        PVR: ['10:00 AM', '1:00 PM', '5:00 PM'],
        INOX: ['11:00 AM', '2:00 PM', '6:00 PM']
      }
    },
    {
      title: 'Avatar: Fire and Ash',
      language: 'English',
      duration: '2h 45m',
      image: avatarImg,
      theaters: {
        PVR: ['9:00 AM', '12:00 PM', '4:00 PM'],
        INOX: ['10:30 AM', '1:30 PM', '5:30 PM']
      }
    }
  ];

  const dates = ['25', '26', '27', '28'];
  const days = ['Thu', 'Fri', 'Sat', 'Sun'];

  const handleTimeClick = (title, time) => {
    setSelectedMovie(title);
    setSelectedTime(time);
  };

  return (
    <div className="movie-page">
      <h2>Select Your Movie</h2>

      {movies.map((movie, idx) => (
        <div className="movie-card" key={idx}>
          <img src={movie.image} alt={movie.title} className="movie-image" />

          <h3>{movie.title}</h3>
          <p>{movie.language} | {movie.duration}</p>

          <div className="date-selector">
            {dates.map((date, i) => (
              <button
                key={i}
                className={selectedDate === date ? 'active-date' : ''}
                onClick={() => setSelectedDate(date)}
              >
                {date} {days[i]}
              </button>
            ))}
          </div>

          {Object.entries(movie.theaters).map(([theaterName, times], i) => (
            <div key={i}>
              <h4>{theaterName}</h4>
              <div className="showtimes">
                {times.map((time, j) => (
                  <button
                    key={j}
                    className={
                      selectedMovie === movie.title && selectedTime === time
                        ? 'active-time'
                        : ''
                    }
                    onClick={() => handleTimeClick(movie.title, time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button
            className="select-seats"
            onClick={() =>
              selectedTime &&
              navigate('/seats', {
                state: {
                  movie: movie.title,
                  date: selectedDate,
                  time: selectedTime
                }
              })
            }
          >
            SELECT SEATS
          </button>
        </div>
      ))}
    </div>
  );
}

export default MoviePage;

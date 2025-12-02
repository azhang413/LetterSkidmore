import React, { useState } from 'react'
import './Letter.css'
import cardsData from './cards.json'

const cards = Object.values(cardsData);

function Letter() {
  const [index, setIndex] = useState(0);
  const [exitClass, setExitClass] = useState(null);

  const handleNext = () => {
    if (index < cards.length - 1) {
      setExitClass('exit-left');
      setTimeout(() => {
        setIndex(index + 1);
        setExitClass(null);
      }, 500); // Match CSS transition duration
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setExitClass('exit-right');
      setTimeout(() => {
        setIndex(index - 1);
        setExitClass(null);
      }, 500);
    }
  }

  // Determine enter class based on exit class (or lack thereof) isn't strictly necessary 
  // if we just want the new card to appear or slide in.
  // But to make it smooth, let's just rely on the key change to reset state, 
  // and maybe add a default enter animation if we wanted.
  // For now, the exit animation is the key request.

  return (
    <div className="letter-container-wrapper">
      <div className="card-display">
        <div className={`cue-card ${exitClass || ''}`}>
          <p>{cards[index]}</p>
          <div className="card-footer">
            {index + 1} / {cards.length}
          </div>
        </div>
      </div>
      <div className="controls">
        <button className="nav-button" onClick={handlePrev} disabled={index === 0 || exitClass}>Previous</button>
        <button className="nav-button" onClick={handleNext} disabled={index === cards.length - 1 || exitClass}>Next</button>
      </div>
    </div>
  )
}

export default Letter
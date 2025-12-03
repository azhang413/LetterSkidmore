import React, { useState } from 'react'
import './Letter.css'
import cardsData from './cards.json'
import oscarImage from './assets/oscar.jpg'

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

  return (
    <div className="letter-container-wrapper">
      <div className="card-display">
        <div className={`cue-card ${exitClass || ''}`}>
          <p>{cards[index]}</p>
          {index === cards.length - 1 && (
            <div className="oscar-container">
              <span className="oscar-text">And the Oscar goes to... Professor Skidmore!</span>
              <img src={oscarImage} alt="Oscar Award" className="oscar-image" />
            </div>
          )}
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
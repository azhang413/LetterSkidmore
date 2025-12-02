import { useState } from 'react'
import './Landing.css'

function Landing({ entered, setEntered }) {
  const [isOpening, setIsOpening] = useState(false)

  const handleOpen = () => {
    setIsOpening(true)
    setTimeout(() => {
      setEntered()
    }, 500)
  }

  return (
    <>
      <h1>To Prof. Skidmore</h1>
      <div className={`letter-container ${isOpening ? 'open' : ''}`}>
        <div className="letter-flap"></div>
      </div>
      <button className="open-button" onClick={handleOpen}>{'Open'}</button>
    </>
  )
}

export default Landing
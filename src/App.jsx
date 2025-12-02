import { useState } from 'react'
import './App.css'
import Landing from './Landing.jsx'
import Letter from './Letter.jsx'

function App() {
  const [entered, setEntered] = useState(false)

  const handleEnter = () => {
    if (!entered) {
      setEntered(true)
    }
  }


  return (
    <div className="App">
      {!entered ? <Landing entered={entered} setEntered={handleEnter} /> : <Letter />}
    </div>
  )
}

export default App

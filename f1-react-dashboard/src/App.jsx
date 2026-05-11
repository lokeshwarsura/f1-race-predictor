import { useState } from 'react'

import './App.css'

function App() {

  const [probability, setProbability] = useState(0)

  const [driver, setDriver] =
    useState('Max Verstappen')

  const [team, setTeam] =
    useState('Red Bull')

  const [image, setImage] =
    useState('/images/max.png')

  const [logo, setLogo] =
    useState('/images/redbull.png')

  const driverImages = {

    'Max Verstappen': '/images/max.png',

    'Lewis Hamilton': '/images/hamilton.png',

    'Fernando Alonso': '/images/alonso.png',

    'Carlos Sainz': '/images/sainz.png',

    'Sergio Perez': '/images/perez.png'

  }

  const teamLogos = {

    'Red Bull': '/images/redbull.png',

    'Mercedes': '/images/mercedes.png',

    'Ferrari': '/images/ferrari.png',

    'Aston Martin': '/images/astonmartin.png'

  }

  function predictWinner() {

    const randomProbability =
      (Math.random() * 100).toFixed(2)

    setProbability(randomProbability)

    setImage(driverImages[driver])

    setLogo(teamLogos[team])

  }

  return (

    <div className="container">

      <h1>🏎️ F1 React Dashboard</h1>

      <select
        onChange={(e) =>
          setDriver(e.target.value)
        }
      >

        <option>Max Verstappen</option>

        <option>Lewis Hamilton</option>

        <option>Fernando Alonso</option>

        <option>Carlos Sainz</option>

        <option>Sergio Perez</option>

      </select>

      <br />

      <select
        onChange={(e) =>
          setTeam(e.target.value)
        }
      >

        <option>Red Bull</option>

        <option>Mercedes</option>

        <option>Ferrari</option>

        <option>Aston Martin</option>

      </select>

      <br />

      <button onClick={predictWinner}>
        Predict Winner
      </button>

      <h2>
        Win Probability: {probability}%
      </h2>

      <div className="bar-container">

        <div
          className="bar"
          style={{
            width: `${probability}%`
          }}
        >

        </div>

      </div>

      <div className="card">

        <img
          src={image}
          alt="driver"
          className="driver-image"
        />

        <h2>{driver}</h2>

        <h3>{team}</h3>

        <img
          src={logo}
          alt="logo"
          className="team-logo"
        />

      </div>

    </div>

  )

}

export default App
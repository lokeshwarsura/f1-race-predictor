import { useState } from 'react'

import './App.css'

import DriverCard from './components/DriverCard'
import RaceStatus from './components/RaceStatus'
import ProbabilityBar from './components/ProbabilityBar'
import StatsPanel from './components/StatsPanel'

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

  async function predictWinner() {

    try {

      const response = await fetch(
        `https://f1-backend-kwlj.onrender.com/predict?driver=${driver}&team=${team}`
      )

      const data = await response.json()

      setProbability(data.win_probability || 0)

      setImage(driverImages[driver])

      setLogo(teamLogos[team])

    }

    catch (error) {

      console.log(error)

    }

  }

  return (

    <div className="app">

      <h1 className="title">
        🏎️ F1 React Dashboard
      </h1>

      <div className="top-controls">

        <select
          value={driver}
          onChange={(e) => setDriver(e.target.value)}
        >

          <option>Max Verstappen</option>
          <option>Lewis Hamilton</option>
          <option>Fernando Alonso</option>
          <option>Carlos Sainz</option>
          <option>Sergio Perez</option>

        </select>

        <select
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        >

          <option>Red Bull</option>
          <option>Mercedes</option>
          <option>Ferrari</option>
          <option>Aston Martin</option>

        </select>

        <button onClick={predictWinner}>
          Predict Winner
        </button>

      </div>

      <h2 className="probability-text">
        Win Probability: {probability.toFixed(2)}%
      </h2>

      <ProbabilityBar probability={probability} />

      <div className="dashboard-layout">

        <div className="left-panel">

          <DriverCard
            driver={driver}
            team={team}
            image={image}
            logo={logo}
          />

          <StatsPanel />

        </div>

        <div className="right-panel">

          <RaceStatus />

        </div>

      </div>

    </div>

  )

}

export default App
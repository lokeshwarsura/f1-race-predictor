import { useState } from 'react'

import './App.css'

import DriverCard from './components/DriverCard'
import ProbabilityBar from './components/ProbabilityBar'
import StatsPanel from './components/StatsPanel'
import Leaderboard from './components/Leaderboard'

function App() {

  const [probability, setProbability] = useState(0)

  const [driver, setDriver] = useState('Max Verstappen')

  const [team, setTeam] = useState('Red Bull')

  const [image, setImage] = useState('/images/max.png')

  const [logo, setLogo] = useState('/images/redbull.png')

  const driverImages = {

    'Max Verstappen': '/images/max.png',

    'Lewis Hamilton': '/images/hamilton.png',

    'Fernando Alonso': '/images/alonso.png',

    'Carlos Sainz': '/images/sainz.png',

    'Sergio Perez': '/images/perez.png'

  }

  const teamLogos = {

    'Red Bull': '/images/redbull.png',

    'Ferrari': '/images/ferrari.png',

    'Mercedes': '/images/mercedes.png',

    'Aston Martin': '/images/astonmartin.png'

  }

  const driverTeams = {

    'Max Verstappen': 'Red Bull',

    'Lewis Hamilton': 'Ferrari',

    'Fernando Alonso': 'Aston Martin',

    'Carlos Sainz': 'Ferrari',

    'Sergio Perez': 'Red Bull'

  }

  async function predictWinner() {

    const randomProbability =
      Math.floor(Math.random() * 41) + 60

    setProbability(randomProbability)

    setImage(driverImages[driver])

    setLogo(teamLogos[team])

  }

  return (

    <div className="app">

      <h1 className="title">
        🏎️ F1 React Dashboard
      </h1>

      <div>

        <select
          className="dropdown"
          value={driver}
          onChange={(e) => {

            const selectedDriver = e.target.value

            setDriver(selectedDriver)

            setTeam(driverTeams[selectedDriver])

            setLogo(
              teamLogos[
                driverTeams[selectedDriver]
              ]
            )

            setImage(
              driverImages[selectedDriver]
            )

          }}
        >

          <option>Max Verstappen</option>

          <option>Lewis Hamilton</option>

          <option>Fernando Alonso</option>

          <option>Carlos Sainz</option>

          <option>Sergio Perez</option>

        </select>

        <h3
          style={{

            color: 'white',

            marginTop: '15px',

            fontSize: '24px'

          }}
        >

          Team: {team}

        </h3>

      </div>

      <button
        className="predict-btn"
        onClick={predictWinner}
      >
        Predict Winner
      </button>

      <h2 className="probability">
        Win Probability: {probability}%
      </h2>

      <ProbabilityBar probability={probability} />

      <div className="cards-container">

        <DriverCard
          driver={driver}
          team={team}
          image={image}
          logo={logo}
        />

        <StatsPanel probability={probability} />

        <Leaderboard probability={probability} />

      </div>

    </div>

  )

}

export default App
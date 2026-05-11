import { useState } from 'react'

import DriverCard from './components/DriverCard'
import ProbabilityBar from './components/ProbabilityBar'
import StatsPanel from './components/StatsPanel'
import Leaderboard from './components/Leaderboard'

function App() {

  const [probability, setProbability] = useState(75)

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

    let generatedProbability = 0

    if (driver === 'Max Verstappen') {
      generatedProbability = 95
    }

    else if (driver === 'Lewis Hamilton') {
      generatedProbability = 88
    }

    else if (driver === 'Fernando Alonso') {
      generatedProbability = 82
    }

    else if (driver === 'Carlos Sainz') {
      generatedProbability = 80
    }

    else if (driver === 'Sergio Perez') {
      generatedProbability = 84
    }

    generatedProbability =
      generatedProbability +
      Math.floor(Math.random() * 5)

    if (generatedProbability > 100) {
      generatedProbability = 100
    }

    setProbability(generatedProbability)

    setImage(driverImages[driver])

    setLogo(teamLogos[team])

  }

  return (

    <div
      style={{
        background: 'black',
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px'
      }}
    >

      <h1
        style={{
          fontSize: '60px',
          marginBottom: '20px'
        }}
      >
        🏎️ F1 React Dashboard
      </h1>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '20px'
        }}
      >

        <select
          value={driver}
          onChange={(e) => setDriver(e.target.value)}
          style={{
            padding: '12px',
            fontSize: '18px',
            borderRadius: '10px',
            background: '#111',
            color: 'white'
          }}
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
          style={{
            padding: '12px',
            fontSize: '18px',
            borderRadius: '10px',
            background: '#111',
            color: 'white'
          }}
        >

          <option>Red Bull</option>
          <option>Mercedes</option>
          <option>Ferrari</option>
          <option>Aston Martin</option>

        </select>

      </div>

      <button
        onClick={predictWinner}
        style={{
          padding: '15px 30px',
          fontSize: '22px',
          background: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        Predict Winner
      </button>

      <h2
        style={{
          color: 'yellow',
          fontSize: '42px'
        }}
      >
        Win Probability: {probability}%
      </h2>

      <ProbabilityBar probability={probability} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '25px',
          marginTop: '30px'
        }}
      >

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
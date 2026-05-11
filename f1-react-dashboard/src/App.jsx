import { useState } from 'react'

import DriverCard from './components/DriverCard'
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

  function predictWinner() {

    const randomProbability =
      (Math.random() * 40 + 60).toFixed(2)

    setProbability(randomProbability)

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
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        padding: '40px'
      }}
    >

      <h1
        style={{
          color: 'white',
          fontSize: '48px'
        }}
      >
        🏎️ F1 React Dashboard
      </h1>

      <select
        value={driver}
        onChange={(e) => setDriver(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '18px',
          borderRadius: '8px'
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
          padding: '10px',
          fontSize: '18px',
          borderRadius: '8px'
        }}
      >

        <option>Red Bull</option>
        <option>Mercedes</option>
        <option>Ferrari</option>
        <option>Aston Martin</option>

      </select>

      <button
        onClick={predictWinner}
        style={{
          padding: '15px 30px',
          fontSize: '20px',
          background: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
      >
        Predict Winner
      </button>

      <h2
        style={{
          color: 'yellow',
          fontSize: '32px'
        }}
      >
        Win Probability: {probability}%
      </h2>

      <ProbabilityBar probability={probability} />

      <DriverCard
        driver={driver}
        team={team}
        image={image}
        logo={logo}
      />

      <StatsPanel probability={probability} />

    </div>

  )

}

export default App
import { useState } from 'react'

import './App.css'

import DriverCard from './components/DriverCard'
import ProbabilityBar from './components/ProbabilityBar'
import StatsPanel from './components/StatsPanel'
import Leaderboard from './components/Leaderboard'
import WeatherCenter from './components/WeatherCenter'
import LiveTelemetry from './components/LiveTelemetry'
import RaceStatus from './components/RaceStatus'
import PredictionInsights from './components/PredictionInsights'
import StrategyPanel from './components/StrategyPanel'
import DriverComparison from './components/DriverComparison'
import PredictionChart from './components/PredictionChart'
import LiveRaceMap from './components/LiveRaceMap'
import RaceControlCenter from './components/RaceControlCenter'
import TireAnalytics from './components/TireAnalytics'
import SectorAnalysis from './components/SectorAnalysis'

function App() {

  const [probability, setProbability] =
    useState(0)

  const [loading, setLoading] =
    useState(false)

  const [currentLap, setCurrentLap] =
    useState(1)

  const [driver, setDriver] =
    useState('Max Verstappen')

  const [team, setTeam] =
    useState('Red Bull')

  const [image, setImage] =
    useState('/images/max.png')

  const [logo, setLogo] =
    useState('/images/redbull.png')

  const driverImages = {

    'Max Verstappen':
      '/images/max.png',

    'Lewis Hamilton':
      '/images/hamilton.png',

    'Fernando Alonso':
      '/images/alonso.png',

    'Carlos Sainz':
      '/images/sainz.png',

    'Sergio Perez':
      '/images/perez.png'

  }

  const teamLogos = {

    'Red Bull':
      '/images/redbull.png',

    Ferrari:
      '/images/ferrari.png',

    Mercedes:
      '/images/mercedes.png',

    'Aston Martin':
      '/images/astonmartin.png'

  }

  const driverTeams = {

    'Max Verstappen':
      'Red Bull',

    'Lewis Hamilton':
      'Ferrari',

    'Fernando Alonso':
      'Aston Martin',

    'Carlos Sainz':
      'Ferrari',

    'Sergio Perez':
      'Red Bull'

  }

  function predictWinner() {

    setLoading(true)

    setCurrentLap(1)

    setTimeout(() => {

      const randomProbability =

        Math.floor(
          Math.random() * 41
        ) + 60

      setProbability(randomProbability)

      setImage(
        driverImages[driver]
      )

      setLogo(
        teamLogos[team]
      )

      setLoading(false)

    }, 1500)

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

            const selectedDriver =
              e.target.value

            setDriver(selectedDriver)

            setTeam(
              driverTeams[selectedDriver]
            )

            setLogo(

              teamLogos[
                driverTeams[
                  selectedDriver
                ]
              ]

            )

            setImage(

              driverImages[
                selectedDriver
              ]

            )

          }}
        >

          <option>
            Max Verstappen
          </option>

          <option>
            Lewis Hamilton
          </option>

          <option>
            Fernando Alonso
          </option>

          <option>
            Carlos Sainz
          </option>

          <option>
            Sergio Perez
          </option>

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

        {

          loading

            ? 'Analyzing Race Data...'

            : 'Predict Winner'

        }

      </button>

      <h2 className="probability">

        Win Probability:
        {' '}
        {probability}%

      </h2>

      <ProbabilityBar
        probability={probability}
      />

      <div className="cards-container">

        <DriverCard
          driver={driver}
          team={team}
          image={image}
          logo={logo}
        />

        <StatsPanel
          probability={probability}
        />

        <Leaderboard
          probability={probability}
        />

        <WeatherCenter />

        <LiveTelemetry
          currentLap={currentLap}
        />

        <RaceStatus

          currentLap={currentLap}

          setCurrentLap={setCurrentLap}

        />

        <PredictionInsights
          probability={probability}
          driver={driver}
        />

        <StrategyPanel
          probability={probability}
        />

        <DriverComparison
          probability={probability}
          driver={driver}
        />

        <PredictionChart
          probability={probability}
        />

        <LiveRaceMap
          currentLap={currentLap}
        />

        <RaceControlCenter
          probability={probability}
        />

        <TireAnalytics
          probability={probability}
          currentLap={currentLap}
        />

        <SectorAnalysis
          currentLap={currentLap}
        />

      </div>

    </div>

  )

}

export default App
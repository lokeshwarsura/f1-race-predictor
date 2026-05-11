import { useState, useEffect } from 'react'

import './App.css'

import DriverCard from './components/DriverCard'
import ProbabilityBar from './components/ProbabilityBar'
import Leaderboard from './components/Leaderboard'
import StatsPanel from './components/StatsPanel'
import RaceStatus from './components/RaceStatus'
import LiveTelemetry from './components/LiveTelemetry'
import DriverComparison from './components/DriverComparison'
import StrategyPanel from './components/StrategyPanel'
import RaceControlCenter from './components/RaceControlCenter'
import TelemetryChart from './components/TelemetryChart'
import PredictionInsights from './components/PredictionInsights'
import LiveRaceMap from './components/LiveRaceMap'
import WeatherCenter from './components/WeatherCenter'
import TireAnalytics from './components/TireAnalytics'
import SectorAnalysis from './components/SectorAnalysis'

function App() {

  const [probability, setProbability] =
    useState(0)

  const [leaderboardData, setLeaderboardData] =
    useState([])

  const [telemetryHistory,

    setTelemetryHistory] = useState([])

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

    const driverMap = {

      'Max Verstappen': 12,

      'Lewis Hamilton': 10,

      'Fernando Alonso': 4,

      'Carlos Sainz': 1,

      'Sergio Perez': 17

    }

    const teamMap = {

      'Red Bull': 8,

      'Mercedes': 7,

      'Ferrari': 4,

      'Aston Martin': 3

    }

    try {

      const response = await fetch(

        `http://127.0.0.1:8000/predict?grid=1&qualifying_position=1&points=25&average_lap_time=88&tire_compound=1&weather=1&driver=${driverMap[driver]}&team=${teamMap[team]}`

      )

      const data = await response.json()

      const realProbability = (

        data.win_probability * 100

      ).toFixed(2)

      setProbability(realProbability)

      setImage(driverImages[driver])

      setLogo(teamLogos[team])

      const updatedLeaderboard = [

        ...leaderboardData,

        {

          driver: driver,

          probability: realProbability

        }

      ]

      updatedLeaderboard.sort(

        (a, b) =>

          b.probability - a.probability

      )

      setLeaderboardData(

        updatedLeaderboard

      )

    }

    catch(error) {

      console.log(error)

    }

  }

  async function fetchTelemetryHistory() {

    try {

      const response = await fetch(

        'http://127.0.0.1:8000/live_driver_data'

      )

      const data = await response.json()

      setTelemetryHistory((prev) => [

        ...prev.slice(-9),

        {

          time:

            new Date()

            .toLocaleTimeString(),

          speed:

            data.speed

        }

      ])

    }

    catch(error) {

      console.log(error)

    }

  }

  useEffect(() => {

    fetchTelemetryHistory()

    const telemetryInterval = setInterval(

      fetchTelemetryHistory,

      5000

    )

    return () => clearInterval(

      telemetryInterval

    )

  }, [])

  useEffect(() => {

    const interval = setInterval(() => {

      if (leaderboardData.length > 0) {

        setLeaderboardData((prev) =>

          prev.map((entry) => ({

            ...entry,

            probability: Math.max(

              1,

              Math.min(

                99,

                Number(entry.probability) +

                (Math.random() * 10 - 5)

              )

            ).toFixed(2)

          }))

        )

      }

    }, 3000)

    return () => clearInterval(interval)

  }, [leaderboardData])

  return (

    <div className="container">

      <h1>
        🏎️ F1 AI Analytics Dashboard
      </h1>

      <select
        value={driver}
        onChange={(e) =>
          setDriver(e.target.value)
        }
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

      <br />

      <select
        value={team}
        onChange={(e) =>
          setTeam(e.target.value)
        }
      >

        <option>
          Red Bull
        </option>

        <option>
          Mercedes
        </option>

        <option>
          Ferrari
        </option>

        <option>
          Aston Martin
        </option>

      </select>

      <br />

      <button onClick={predictWinner}>
        Predict Winner
      </button>

      <h2>
        Win Probability:
        {' '}
        {probability}%
      </h2>

      <div className="dashboard-grid">

        <div className="left-panel">

          <ProbabilityBar

            probability={probability}

          />

          <DriverCard

            driver={driver}

            team={team}

            image={image}

            logo={logo}

          />

          <StatsPanel

            driver={driver}

          />

          <TelemetryChart

            telemetryHistory={

              telemetryHistory

            }

          />

          <LiveRaceMap />

        </div>

        <div className="right-panel">

          <RaceControlCenter />

          <WeatherCenter />

          <RaceStatus />

          <LiveTelemetry />

          <TireAnalytics />

          <SectorAnalysis />

          <DriverComparison />

          <StrategyPanel />

          <PredictionInsights />

          <Leaderboard

            leaderboardData={
              leaderboardData
            }

          />

        </div>

      </div>

    </div>

  )

}

export default App
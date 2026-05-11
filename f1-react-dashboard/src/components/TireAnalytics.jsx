import { useEffect, useState } from 'react'

function TireAnalytics({

  probability,

  currentLap

}) {

  const totalLaps = 58

  const compounds = [

    'SOFT',

    'MEDIUM',

    'HARD',

    'INTERMEDIATE',

    'WET'

  ]

  const [weather, setWeather] =
    useState('DRY')

  const [currentCompound, setCurrentCompound] =
    useState('SOFT')

  const [pitStops, setPitStops] =
    useState(0)

  const [lastPitLap, setLastPitLap] =
    useState(null)

  const [lapsSincePit, setLapsSincePit] =
    useState(0)

  const [softWear, setSoftWear] =
    useState(0)

  const [mediumWear, setMediumWear] =
    useState(0)

  const [hardWear, setHardWear] =
    useState(0)

  const [intermediateWear, setIntermediateWear] =
    useState(0)

  const [wetWear, setWetWear] =
    useState(0)

  useEffect(() => {

    if (currentLap >= totalLaps) {

      return

    }

    const weatherInterval = setInterval(() => {

      const randomWeather =
        Math.random()

      if (randomWeather > 0.82) {

        setWeather('HEAVY RAIN')

      }

      else if (randomWeather > 0.62) {

        setWeather('LIGHT RAIN')

      }

      else {

        setWeather('DRY')

      }

    }, 12000)

    return () =>
      clearInterval(weatherInterval)

  }, [currentLap])

  useEffect(() => {

    if (lastPitLap !== null) {

      setLapsSincePit(

        currentLap - lastPitLap

      )

    }

  }, [currentLap, lastPitLap])

  function performPitStop() {

    let nextCompound = 'MEDIUM'

    if (weather === 'HEAVY RAIN') {

      nextCompound = 'WET'

    }

    else if (weather === 'LIGHT RAIN') {

      nextCompound = 'INTERMEDIATE'

    }

    else {

      const dryChoices = [

        'SOFT',

        'MEDIUM',

        'HARD'

      ]

      nextCompound =

        dryChoices[

          Math.floor(
            Math.random() *
            dryChoices.length
          )

        ]

    }

    setCurrentCompound(nextCompound)

    setPitStops((prev) => prev + 1)

    setLastPitLap(currentLap)

    setLapsSincePit(0)

  }

  useEffect(() => {

    if (currentLap >= totalLaps) {

      return

    }

    const interval = setInterval(() => {

      if (currentCompound === 'SOFT') {

        setSoftWear((prev) => {

          const updated =

            prev +

            (2 + Math.random() * 1.8)

          if (

            updated >= 75 &&

            currentLap > 12

          ) {

            performPitStop()

          }

          return Math.min(updated, 100)

        })

      }

      else if (

        currentCompound === 'MEDIUM'

      ) {

        setMediumWear((prev) => {

          const updated =

            prev +

            (1.4 + Math.random() * 1.2)

          if (

            updated >= 70 &&

            currentLap > 30

          ) {

            performPitStop()

          }

          return Math.min(updated, 100)

        })

      }

      else if (

        currentCompound === 'HARD'

      ) {

        setHardWear((prev) => {

          const updated =

            prev +

            (0.8 + Math.random() * 0.7)

          return Math.min(updated, 100)

        })

      }

      else if (

        currentCompound === 'INTERMEDIATE'

      ) {

        setIntermediateWear((prev) => {

          const updated =

            prev +

            (1.6 + Math.random() * 1.1)

          if (

            updated >= 65 &&

            currentLap > 20

          ) {

            performPitStop()

          }

          return Math.min(updated, 100)

        })

      }

      else {

        setWetWear((prev) => {

          const updated =

            prev +

            (1.2 + Math.random() * 1)

          if (

            updated >= 60 &&

            currentLap > 15

          ) {

            performPitStop()

          }

          return Math.min(updated, 100)

        })

      }

    }, 4000)

    return () => clearInterval(interval)

  }, [

    currentLap,

    currentCompound,

    weather

  ])

  let activeWear = 0

  if (currentCompound === 'SOFT') {

    activeWear = softWear

  }

  else if (currentCompound === 'MEDIUM') {

    activeWear = mediumWear

  }

  else if (currentCompound === 'HARD') {

    activeWear = hardWear

  }

  else if (

    currentCompound === 'INTERMEDIATE'

  ) {

    activeWear = intermediateWear

  }

  else {

    activeWear = wetWear

  }

  const tireLife =

    Math.max(
      100 - activeWear,
      0
    )

  let weatherColor = 'lime'

  if (weather === 'LIGHT RAIN') {

    weatherColor = 'orange'

  }

  if (weather === 'HEAVY RAIN') {

    weatherColor = 'cyan'

  }

  let recommendation = ''

  if (currentLap >= totalLaps) {

    recommendation =
      '🏁 Tire data frozen after race finish.'

  }

  else if (weather === 'HEAVY RAIN') {

    recommendation =
      '🌧️ Heavy rain strategy active.'

  }

  else if (weather === 'LIGHT RAIN') {

    recommendation =
      '☔ Intermediate tire crossover window.'

  }

  else if (activeWear >= 75) {

    recommendation =
      '🔴 Tire degradation critical.'

  }

  else {

    recommendation =
      '🟢 Tire performance within operating window.'

  }

  return (

    <div className="card">

      <h2
        style={{

          color: 'white',

          marginBottom: '20px'

        }}
      >
        🛞 Live Tire Analytics
      </h2>

      <p
        className="stats-text"
        style={{
          color: weatherColor
        }}
      >
        Weather:
        {' '}
        {weather}
      </p>

      <p className="stats-text">
        Current Compound:
        {' '}
        {currentCompound}
      </p>

      <p className="stats-text">
        Pit Stops:
        {' '}
        {pitStops}
      </p>

      <p className="stats-text">
        Last Pit Lap:
        {' '}
        {

          lastPitLap === null

            ? 'No Stops'

            : `Lap ${lastPitLap}`

        }
      </p>

      <p className="stats-text">
        Laps Since Pit:
        {' '}
        {

          lastPitLap === null

            ? '--'

            : lapsSincePit

        }
      </p>

      {

        compounds.map((compound) => {

          let wear = 0

          let color = 'white'

          if (compound === 'SOFT') {

            wear = softWear
            color = 'red'

          }

          else if (

            compound === 'MEDIUM'

          ) {

            wear = mediumWear
            color = 'gold'

          }

          else if (

            compound === 'HARD'

          ) {

            wear = hardWear
            color = '#ddd'

          }

          else if (

            compound === 'INTERMEDIATE'

          ) {

            wear = intermediateWear
            color = 'green'

          }

          else {

            wear = wetWear
            color = 'blue'

          }

          return (

            <div
              key={compound}
              style={{
                marginTop: '18px'
              }}
            >

              <p className="stats-text">
                {compound} Tire Wear:
                {' '}
                {wear.toFixed(0)}%
              </p>

              <div
                style={{

                  width: '100%',

                  height: '16px',

                  background: '#222',

                  borderRadius: '20px',

                  overflow: 'hidden'

                }}
              >

                <div
                  style={{

                    width: `${wear}%`,

                    height: '100%',

                    background: color,

                    transition: '2s linear'

                  }}
                >

                </div>

              </div>

            </div>

          )

        })

      }

      <div
        style={{
          marginTop: '22px'
        }}
      >

        <p className="stats-text">
          Estimated Tire Life:
          {' '}
          {tireLife.toFixed(0)}%
        </p>

        <p className="stats-text">
          Active Strategy:
          {' '}
          {

            weather === 'HEAVY RAIN'

              ? 'Wet Race Strategy'

              : weather === 'LIGHT RAIN'

              ? 'Crossover Strategy'

              : 'Dry Race Strategy'

          }
        </p>

      </div>

      <div
        style={{

          marginTop: '25px',

          padding: '15px',

          borderRadius: '15px',

          background:
            currentLap >= totalLaps
              ? 'rgba(0,255,0,0.08)'
              : 'rgba(255,255,255,0.05)',

          border:
            '1px solid rgba(255,255,255,0.1)'

        }}
      >

        <p
          style={{

            color:
              currentLap >= totalLaps
                ? 'lime'
                : 'cyan',

            lineHeight: '1.8',

            fontSize: '16px'

          }}
        >
          {recommendation}
        </p>

      </div>

    </div>

  )

}

export default TireAnalytics
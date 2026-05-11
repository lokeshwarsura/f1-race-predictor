import { useEffect, useState } from 'react'

function TireAnalytics({

  probability,

  currentLap

}) {

  const totalLaps = 58

  const [softWear, setSoftWear] =
    useState(5)

  const [mediumWear, setMediumWear] =
    useState(3)

  const [hardWear, setHardWear] =
    useState(2)

  const [pitStops, setPitStops] =
    useState(0)

  const [currentCompound, setCurrentCompound] =
    useState('SOFT')

  useEffect(() => {

    if (currentLap >= totalLaps) {

      return

    }

    const interval = setInterval(() => {

      setSoftWear((prev) => {

        let updated = prev + 2

        if (

          updated >= 80 &&

          pitStops === 0 &&

          currentLap > 15

        ) {

          setPitStops(1)

          setCurrentCompound('MEDIUM')

          return 5

        }

        return Math.min(updated, 100)

      })

      setMediumWear((prev) => {

        let updated = prev + 1.4

        if (

          updated >= 75 &&

          pitStops === 1 &&

          currentLap > 35

        ) {

          setPitStops(2)

          setCurrentCompound('HARD')

          return 5

        }

        return Math.min(updated, 100)

      })

      setHardWear((prev) => {

        let updated = prev + 1

        return Math.min(updated, 100)

      })

    }, 5000)

    return () => clearInterval(interval)

  }, [currentLap, pitStops])

  let activeWear = 0

  if (currentCompound === 'SOFT') {

    activeWear = softWear

  }

  else if (currentCompound === 'MEDIUM') {

    activeWear = mediumWear

  }

  else {

    activeWear = hardWear

  }

  const tireLife =

    Math.max(
      100 - activeWear,
      0
    )

  let recommendation = ''

  if (currentLap >= totalLaps) {

    recommendation =
      '🏁 Tire data frozen after race finish.'

  }

  else if (activeWear >= 80) {

    recommendation =
      '🛞 Immediate pit stop required.'

  }

  else if (activeWear >= 60) {

    recommendation =
      '⚠️ Tire degradation increasing.'

  }

  else {

    recommendation =
      '✅ Tire performance stable.'

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

      <div
        style={{
          marginBottom: '20px',
          marginTop: '20px'
        }}
      >

        <p className="stats-text">
          Soft Tire Wear:
          {' '}
          {softWear.toFixed(0)}%
        </p>

        <div
          style={{

            width: '100%',

            height: '18px',

            background: '#222',

            borderRadius: '20px',

            overflow: 'hidden'

          }}
        >

          <div
            style={{

              width: `${softWear}%`,

              height: '100%',

              background:
                'linear-gradient(to right, red, darkred)',

              transition: '5s linear'

            }}
          >

          </div>

        </div>

      </div>

      <div
        style={{
          marginBottom: '20px'
        }}
      >

        <p className="stats-text">
          Medium Tire Wear:
          {' '}
          {mediumWear.toFixed(0)}%
        </p>

        <div
          style={{

            width: '100%',

            height: '18px',

            background: '#222',

            borderRadius: '20px',

            overflow: 'hidden'

          }}
        >

          <div
            style={{

              width: `${mediumWear}%`,

              height: '100%',

              background:
                'linear-gradient(to right, gold, yellow)',

              transition: '5s linear'

            }}
          >

          </div>

        </div>

      </div>

      <div
        style={{
          marginBottom: '20px'
        }}
      >

        <p className="stats-text">
          Hard Tire Wear:
          {' '}
          {hardWear.toFixed(0)}%
        </p>

        <div
          style={{

            width: '100%',

            height: '18px',

            background: '#222',

            borderRadius: '20px',

            overflow: 'hidden'

          }}
        >

          <div
            style={{

              width: `${hardWear}%`,

              height: '100%',

              background:
                'linear-gradient(to right, white, gray)',

              transition: '5s linear'

            }}
          >

          </div>

        </div>

      </div>

      <p className="stats-text">
        Predicted Pit Window:
        {' '}
        Lap
        {' '}
        {38 + Math.floor(probability / 8)}
      </p>

      <p className="stats-text">
        Estimated Tire Life:
        {' '}
        {tireLife.toFixed(0)}%
      </p>

      <div
        style={{

          marginTop: '20px',

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

            fontSize: '17px'

          }}
        >
          {recommendation}
        </p>

      </div>

    </div>

  )

}

export default TireAnalytics
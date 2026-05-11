import { useEffect, useState } from 'react'

function TireAnalytics({

  probability,

  currentLap

}) {

  const totalLaps = 58

  const [softWear, setSoftWear] =
    useState(0)

  const [mediumWear, setMediumWear] =
    useState(0)

  const [hardWear, setHardWear] =
    useState(0)

  const [pitStops, setPitStops] =
    useState(0)

  const [currentCompound, setCurrentCompound] =
    useState('SOFT')

  const [lastPitLap, setLastPitLap] =
    useState(0)

  useEffect(() => {

    if (currentLap >= totalLaps) {

      return

    }

    const interval = setInterval(() => {

      if (currentCompound === 'SOFT') {

        setSoftWear((prev) => {

          const updated =

            prev +

            (1.8 + Math.random() * 1.4)

          if (

            updated >= 72 &&

            pitStops === 0 &&

            currentLap >= 14

          ) {

            setPitStops(1)

            setCurrentCompound('MEDIUM')

            setLastPitLap(currentLap)

            return updated

          }

          return Math.min(updated, 100)

        })

      }

      else if (currentCompound === 'MEDIUM') {

        setMediumWear((prev) => {

          const updated =

            prev +

            (1.2 + Math.random() * 1.1)

          if (

            updated >= 68 &&

            pitStops === 1 &&

            currentLap >= 36

          ) {

            setPitStops(2)

            setCurrentCompound('HARD')

            setLastPitLap(currentLap)

            return updated

          }

          return Math.min(updated, 100)

        })

      }

      else {

        setHardWear((prev) => {

          const updated =

            prev +

            (0.8 + Math.random() * 0.8)

          return Math.min(updated, 100)

        })

      }

    }, 4000)

    return () => clearInterval(interval)

  }, [

    currentLap,

    currentCompound,

    pitStops

  ])

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

  else if (activeWear >= 75) {

    recommendation =
      '🔴 Severe tire degradation detected.'

  }

  else if (activeWear >= 55) {

    recommendation =
      '🟡 Tire wear entering critical window.'

  }

  else {

    recommendation =
      '🟢 Tire performance within target range.'

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

      <p className="stats-text">
        Last Pit Lap:
        {' '}
        {

          lastPitLap === 0

            ? 'No Stops'

            : `Lap ${lastPitLap}`

        }
      </p>

      <div
        style={{
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

            height: '16px',

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

              transition: '2s linear'

            }}
          >

          </div>

        </div>

      </div>

      <div
        style={{
          marginTop: '20px'
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

            height: '16px',

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

              transition: '2s linear'

            }}
          >

          </div>

        </div>

      </div>

      <div
        style={{
          marginTop: '20px'
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

            height: '16px',

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

              transition: '2s linear'

            }}
          >

          </div>

        </div>

      </div>

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
          Predicted Strategy:
          {' '}
          {

            pitStops === 0

              ? '1 Stop Window'

              : pitStops === 1

              ? 'Final Stop Complete'

              : 'Race Finish Stint'

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
import { useEffect, useState } from 'react'

function RaceStatus() {

  const totalLaps = 58

  const [currentLap, setCurrentLap] =
    useState(1)

  useEffect(() => {

    const lapInterval = setInterval(() => {

      setCurrentLap((prev) => {

        if (prev >= totalLaps) {

          return totalLaps

        }

        return prev + 1

      })

    }, 5000)

    return () => clearInterval(lapInterval)

  }, [])

  const progress =
    (currentLap / totalLaps) * 100

  const remainingLaps =
    totalLaps - currentLap

  const totalRaceSeconds =
    totalLaps * 90

  const elapsedSeconds =
    currentLap * 90

  const remainingSeconds =
    totalRaceSeconds - elapsedSeconds

  const minutes =
    Math.floor(remainingSeconds / 60)

  const seconds =
    remainingSeconds % 60

  let trackFlag = ''

  if (currentLap >= 50) {

    trackFlag = '🟢 GREEN FLAG'

  }

  else if (currentLap >= 30) {

    trackFlag = '🟡 YELLOW FLAG'

  }

  else {

    trackFlag = '🔴 SAFETY CAR'

  }

  return (

    <div className="card">

      <h2
        style={{

          color: 'red',

          marginBottom: '20px'

        }}
      >
        🏁 Live Race HUD
      </h2>

      <p className="stats-text">
        Remaining Race Time:
        {' '}
        {minutes}m {seconds}s
      </p>

      <p className="stats-text">
        Current Lap:
        {' '}
        {currentLap}/{totalLaps}
      </p>

      <p className="stats-text">
        Remaining Laps:
        {' '}
        {remainingLaps}
      </p>

      <p className="stats-text">
        DRS:
        {' '}
        {currentLap >= 5
          ? 'ENABLED'
          : 'DISABLED'}
      </p>

      <p className="stats-text">
        Flag Status:
        {' '}
        {trackFlag}
      </p>

      <div
        style={{

          marginTop: '25px'

        }}
      >

        <p className="stats-text">
          Lap Progress
        </p>

        <div
          style={{

            width: '100%',

            height: '20px',

            background: '#222',

            borderRadius: '20px',

            overflow: 'hidden'

          }}
        >

          <div
            style={{

              width: `${progress}%`,

              height: '100%',

              background:
                'linear-gradient(to right, red, orange)',

              transition: '5s linear'

            }}
          >

          </div>

        </div>

      </div>

      <div
        style={{

          marginTop: '25px',

          padding: '15px',

          borderRadius: '15px',

          background:
            'rgba(255,255,255,0.05)',

          border:
            '1px solid rgba(255,255,255,0.1)'

        }}
      >

        <p
          style={{

            color: 'cyan',

            lineHeight: '1.8',

            fontSize: '17px'

          }}
        >
          {

            currentLap >= 50

              ? 'Final race push underway.'

              : currentLap >= 30

              ? 'Mid-race strategy phase active.'

              : 'Opening race phase in progress.'

          }
        </p>

      </div>

    </div>

  )

}

export default RaceStatus
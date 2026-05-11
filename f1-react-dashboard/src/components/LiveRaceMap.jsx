import { useEffect, useState } from 'react'

function LiveRaceMap() {

  const totalLaps = 58

  const [currentLap, setCurrentLap] =
    useState(1)

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentLap((prev) => {

        if (prev >= totalLaps) {

          return totalLaps

        }

        return prev + 1

      })

    }, 5000)

    return () => clearInterval(interval)

  }, [])

  const progress =
    (currentLap / totalLaps) * 100

  let raceEvent = ''

  if (progress >= 90) {

    raceEvent =
      '🏁 Final sector push underway.'

  }

  else if (progress >= 70) {

    raceEvent =
      '⚡ DRS zone activated.'

  }

  else if (progress >= 40) {

    raceEvent =
      '🛞 Tire temperatures stabilizing.'

  }

  else {

    raceEvent =
      '🚦 Race start sequence active.'

  }

  return (

    <div className="card">

      <h2
        style={{

          color: 'deepskyblue',

          marginBottom: '20px'

        }}
      >
        🗺️ Smart Race Map
      </h2>

      <h1
        style={{

          color: 'white',

          fontSize: '44px',

          marginBottom: '10px'

        }}
      >
        LAP
        {' '}
        <span
          style={{
            color: 'cyan'
          }}
        >
          {currentLap}
        </span>
        {' '}
        / {totalLaps}
      </h1>

      <p
        style={{

          color: 'white',

          marginBottom: '25px',

          fontSize: '20px'

        }}
      >
        <span
          style={{
            color: 'cyan'
          }}
        >
          {progress.toFixed(0)}%
        </span>
        {' '}
        RACE DISTANCE COMPLETED
      </p>

      <div
        style={{

          position: 'relative',

          width: '100%',

          height: '110px',

          background: '#111',

          borderRadius: '20px',

          border: '2px solid cyan',

          overflow: 'hidden'

        }}
      >

        <div
          style={{

            position: 'absolute',

            top: '50%',

            left: '10%',

            width: '80%',

            height: '12px',

            background:
              'linear-gradient(to right, orange, yellow, violet, lime)',

            borderRadius: '20px',

            transform: 'translateY(-50%)'

          }}
        >

        </div>

        <div
          style={{

            position: 'absolute',

            left: `${10 + progress * 0.8}%`,

            top: '50%',

            transform:
              'translate(-50%, -50%)',

            fontSize: '34px',

            transition: '5s linear'

          }}
        >
          🏎️
        </div>

      </div>

      <h2
        style={{

          color: 'cyan',

          marginTop: '25px'

        }}
      >
        TRACK POSITION:
        {' '}
        {progress.toFixed(0)}%
      </h2>

      <div
        style={{

          marginTop: '20px',

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

            fontSize: '17px',

            lineHeight: '1.8'

          }}
        >
          {raceEvent}
        </p>

      </div>

    </div>

  )

}

export default LiveRaceMap
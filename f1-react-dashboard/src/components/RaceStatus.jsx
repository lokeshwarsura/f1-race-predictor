import { useEffect, useState } from 'react'

function RaceStatus({ probability }) {

  const [seconds, setSeconds] = useState(7200)

  useEffect(() => {

    const timer = setInterval(() => {

      setSeconds((prev) => {

        if (prev <= 0) {

          clearInterval(timer)

          return 0

        }

        return prev - 1

      })

    }, 1000)

    return () => clearInterval(timer)

  }, [])

  const hours =
    Math.floor(seconds / 3600)

  const minutes =
    Math.floor((seconds % 3600) / 60)

  const secs =
    seconds % 60

  const totalLaps = 58

  const calculatedLap =
    42 + Math.floor(probability / 5)

  const currentLap =
    Math.min(calculatedLap, totalLaps)

  const lapProgress =
    (currentLap / totalLaps) * 100

  let trackFlag = ''

  if (probability >= 85) {

    trackFlag = '🟢 GREEN FLAG'

  }

  else if (probability >= 70) {

    trackFlag = '🟡 YELLOW FLAG'

  }

  else {

    trackFlag = '🔴 SAFETY CAR'

  }

  const drsStatus =
    probability >= 75
      ? 'ENABLED'
      : 'DISABLED'

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
        Race Timer:
        {' '}
        {hours}h {minutes}m {secs}s
      </p>

      <p className="stats-text">
        Current Lap:
        {' '}
        {currentLap}/{totalLaps}
      </p>

      <p className="stats-text">
        DRS:
        {' '}
        {drsStatus}
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

              width: `${lapProgress}%`,

              height: '100%',

              background:
                'linear-gradient(to right, red, orange)',

              transition: '0.5s'

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
          Race Director Message:
          {' '}
          {probability >= 85
            ? 'Track conditions stable. Continue push laps.'
            : probability >= 70
            ? 'Minor incident ahead. Drivers advised caution.'
            : 'Safety car deployed. Maintain delta pace.'}
        </p>

      </div>

    </div>

  )

}

export default RaceStatus
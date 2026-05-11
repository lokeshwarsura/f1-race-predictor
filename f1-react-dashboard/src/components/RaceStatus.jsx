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

  const currentLap =
    42 + Math.floor(probability / 5)

  const totalLaps = 58

  return (

    <div className="card">

      <h2
        style={{

          color: 'red',

          marginBottom: '20px'

        }}
      >
        ⏱️ Live Race Status
      </h2>

      <p className="stats-text">
        Race Timer:
        {' '}
        {hours}h {minutes}m {secs}s
      </p>

      <p className="stats-text">
        Current Lap: {currentLap}/{totalLaps}
      </p>

      <p className="stats-text">
        DRS: Enabled
      </p>

      <p className="stats-text">
        Safety Car: No
      </p>

      <p className="stats-text">
        Track Status: Green Flag 🟢
      </p>

      <div
        style={{

          marginTop: '20px',

          width: '100%',

          height: '18px',

          background: '#222',

          borderRadius: '20px',

          overflow: 'hidden'

        }}
      >

        <div
          style={{

            width:
              `${(currentLap / totalLaps) * 100}%`,

            height: '100%',

            background:
              'linear-gradient(to right, red, orange)',

            transition: '0.5s'

          }}
        >

        </div>

      </div>

    </div>

  )

}

export default RaceStatus
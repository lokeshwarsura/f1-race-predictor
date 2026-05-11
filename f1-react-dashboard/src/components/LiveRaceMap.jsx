import { useEffect, useState } from 'react'

function LiveRaceMap({ probability }) {

  const [position, setPosition] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setPosition((prev) => {

        if (prev >= probability) {

          return 0

        }

        return prev + 1

      })

    }, 80)

    return () => clearInterval(interval)

  }, [probability])

  let raceEvent = ''

  if (position >= 90) {

    raceEvent =
      '🏁 Final sector push underway.'

  }

  else if (position >= 60) {

    raceEvent =
      '⚡ DRS zone activated.'

  }

  else if (position >= 30) {

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

      <div
        style={{

          position: 'relative',

          width: '100%',

          height: '160px',

          background: '#111',

          borderRadius: '20px',

          overflow: 'hidden',

          border: '2px solid cyan'

        }}
      >

        <div
          style={{

            position: 'absolute',

            top: '50%',

            left: '5%',

            width: '90%',

            height: '6px',

            background: '#444',

            transform: 'translateY(-50%)',

            borderRadius: '10px'

          }}
        >

        </div>

        <div
          style={{

            position: 'absolute',

            left: '10%',

            top: '35%',

            color: 'white'

          }}
        >
          🚦 START
        </div>

        <div
          style={{

            position: 'absolute',

            left: '30%',

            top: '35%',

            color: 'yellow'

          }}
        >
          S1
        </div>

        <div
          style={{

            position: 'absolute',

            left: '55%',

            top: '35%',

            color: 'violet'

          }}
        >
          S2
        </div>

        <div
          style={{

            position: 'absolute',

            left: '80%',

            top: '35%',

            color: 'lime'

          }}
        >
          S3
        </div>

        <div
          style={{

            position: 'absolute',

            right: '5%',

            top: '35%',

            color: 'red'

          }}
        >
          🏁 FINISH
        </div>

        <div
          style={{

            position: 'absolute',

            top: '50%',

            left: `${position}%`,

            transform: 'translate(-50%, -50%)',

            fontSize: '40px',

            transition: '0.08s linear'

          }}
        >
          🏎️
        </div>

      </div>

      <p
        className="stats-text"
        style={{

          marginTop: '20px'

        }}
      >
        Live Track Position:
        {' '}
        {position}%
      </p>

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

            lineHeight: '1.8',

            fontSize: '17px'

          }}
        >
          {raceEvent}
        </p>

      </div>

    </div>

  )

}

export default LiveRaceMap
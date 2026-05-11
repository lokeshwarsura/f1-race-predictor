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

  return (

    <div className="card">

      <h2
        style={{

          color: 'deepskyblue',

          marginBottom: '20px'

        }}
      >
        🗺️ Animated Race Map
      </h2>

      <div
        style={{

          position: 'relative',

          width: '100%',

          height: '140px',

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

            left: '25%',

            top: '38%',

            color: 'yellow',

            fontSize: '18px'

          }}
        >
          S1
        </div>

        <div
          style={{

            position: 'absolute',

            left: '50%',

            top: '38%',

            color: 'violet',

            fontSize: '18px'

          }}
        >
          S2
        </div>

        <div
          style={{

            position: 'absolute',

            left: '75%',

            top: '38%',

            color: 'lime',

            fontSize: '18px'

          }}
        >
          S3
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

    </div>

  )

}

export default LiveRaceMap
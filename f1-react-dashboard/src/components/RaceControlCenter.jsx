import { useState } from 'react'

function RaceControlCenter({ probability }) {

  const [message, setMessage] =
    useState('Awaiting race engineer command...')

  const [commandHistory, setCommandHistory] =
    useState([])

  function activateCommand(command) {

    setMessage(command)

    setCommandHistory((prev) => [

      command,

      ...prev.slice(0, 3)

    ])

  }

  const emergencyAlert =
    probability < 70
      ? '⚠️ Tire temperatures critical.'
      : '✅ Systems operating normally.'

  return (

    <div className="card">

      <h2
        style={{

          color: 'orange',

          marginBottom: '20px'

        }}
      >
        🎛️ Mission Control Center
      </h2>

      <p
        style={{

          color: 'cyan',

          fontSize: '18px',

          lineHeight: '1.8'

        }}
      >
        {message}
      </p>

      <div
        style={{

          marginTop: '25px',

          display: 'flex',

          flexDirection: 'column',

          gap: '12px'

        }}
      >

        <button
          className="predict-btn"
          onClick={() =>
            activateCommand(
              '📻 PUSH NOW! Fastest lap mode activated.'
            )
          }
        >
          PUSH
        </button>

        <button
          className="predict-btn"
          onClick={() =>
            activateCommand(
              '🛞 BOX THIS LAP. Prepare pit crew.'
            )
          }
        >
          BOX
        </button>

        <button
          className="predict-btn"
          onClick={() =>
            activateCommand(
              '🛡️ DEFEND POSITION. Rival within DRS.'
            )
          }
        >
          DEFEND
        </button>

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

            color:
              probability < 70
                ? 'red'
                : 'lime',

            fontSize: '17px'

          }}
        >
          {emergencyAlert}
        </p>

      </div>

      <div
        style={{

          marginTop: '25px'

        }}
      >

        <h3
          style={{

            color: 'gold',

            marginBottom: '15px'

          }}
        >
          📜 Recent Commands
        </h3>

        {

          commandHistory.length === 0

            ? (

              <p className="stats-text">
                No commands issued yet.
              </p>

            )

            : (

              commandHistory.map((cmd, index) => (

                <p
                  key={index}
                  className="stats-text"
                >
                  • {cmd}
                </p>

              ))

            )

        }

      </div>

    </div>

  )

}

export default RaceControlCenter
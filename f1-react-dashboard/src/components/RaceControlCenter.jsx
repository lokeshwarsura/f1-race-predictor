import { useState } from 'react'

function RaceControlCenter({ probability }) {

  const [message, setMessage] =
    useState('Awaiting race engineer command...')

  function activateCommand(command) {

    setMessage(command)

  }

  return (

    <div className="card">

      <h2
        style={{

          color: 'orange',

          marginBottom: '20px'

        }}
      >
        🎛️ Race Control Center
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
              '📻 PUSH NOW! Fastest lap attempt activated.'
            )
          }
        >
          PUSH
        </button>

        <button
          className="predict-btn"
          onClick={() =>
            activateCommand(
              '🛞 BOX THIS LAP. Prepare for tire change.'
            )
          }
        >
          BOX
        </button>

        <button
          className="predict-btn"
          onClick={() =>
            activateCommand(
              '🛡️ DEFEND POSITION. Rival within DRS range.'
            )
          }
        >
          DEFEND
        </button>

      </div>

      <div
        style={{

          marginTop: '25px'

        }}
      >

        <p className="stats-text">
          ERS Deployment:
          {' '}
          {probability > 80
            ? 'Attack Mode'
            : 'Balanced'}
        </p>

        <p className="stats-text">
          Fuel Usage:
          {' '}
          {probability > 75
            ? 'High'
            : 'Moderate'}
        </p>

      </div>

    </div>

  )

}

export default RaceControlCenter
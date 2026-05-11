import { useEffect, useState } from 'react'

function RaceControlCenter({

  probability

}) {

  const [teamRadio, setTeamRadio] =
    useState(
      '📡 Race engineer standing by.'
    )

  const [selectedCommand, setSelectedCommand] =
    useState('NONE')

  const [recentCommands, setRecentCommands] =
    useState([])

  const [raceMode, setRaceMode] =
    useState('STANDARD')

  useEffect(() => {

    if (probability >= 90) {

      setRaceMode('ATTACK')

      setTeamRadio(
        '🟣 Purple sector pace detected. Push now.'
      )

    }

    else if (probability >= 75) {

      setRaceMode('BALANCED')

      setTeamRadio(
        '🟢 Pace advantage stable. Manage tires.'
      )

    }

    else {

      setRaceMode('DEFENSIVE')

      setTeamRadio(
        '🟡 Rivals closing in. Tire saving required.'
      )

    }

  }, [probability])

  function addCommand(command) {

    setSelectedCommand(command)

    let radioMessage = ''

    if (command === 'PUSH') {

      radioMessage =
        '🚀 Push mode enabled. Maximum deployment.'

    }

    else if (command === 'BOX') {

      radioMessage =
        '🛞 BOX THIS LAP. Pit crew preparing.'

    }

    else {

      radioMessage =
        '🛡️ Defensive strategy active. Protect position.'

    }

    setTeamRadio(radioMessage)

    setRecentCommands((prev) => [

      radioMessage,

      ...prev.slice(0, 3)

    ])

  }

  let modeColor = ''

  if (raceMode === 'ATTACK') {

    modeColor = 'red'

  }

  else if (raceMode === 'BALANCED') {

    modeColor = 'lime'

  }

  else {

    modeColor = 'orange'

  }

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

      <div
        style={{

          padding: '14px',

          borderRadius: '15px',

          background:
            'rgba(255,255,255,0.05)',

          border:
            '1px solid rgba(255,255,255,0.08)',

          marginBottom: '20px'

        }}
      >

        <p
          style={{

            color: 'cyan',

            fontSize: '18px',

            lineHeight: '1.8'

          }}
        >
          {teamRadio}
        </p>

      </div>

      <div
        style={{
          marginBottom: '18px'
        }}
      >

        <p
          style={{

            color: modeColor,

            fontSize: '18px',

            fontWeight: 'bold'

          }}
        >
          Race Mode:
          {' '}
          {raceMode}
        </p>

      </div>

      <div
        style={{

          display: 'flex',

          flexDirection: 'column',

          gap: '15px'

        }}
      >

        <button
          className="predict-btn"
          onClick={() =>
            addCommand('PUSH')
          }
          style={{

            background:

              selectedCommand === 'PUSH'

                ? 'linear-gradient(to right, red, darkred)'

                : '#222'

          }}
        >
          🚀 PUSH
        </button>

        <button
          className="predict-btn"
          onClick={() =>
            addCommand('BOX')
          }
          style={{

            background:

              selectedCommand === 'BOX'

                ? 'linear-gradient(to right, orange, red)'

                : '#222'

          }}
        >
          🛞 BOX
        </button>

        <button
          className="predict-btn"
          onClick={() =>
            addCommand('DEFEND')
          }
          style={{

            background:

              selectedCommand === 'DEFEND'

                ? 'linear-gradient(to right, blue, purple)'

                : '#222'

          }}
        >
          🛡️ DEFEND
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
            '1px solid rgba(255,255,255,0.08)'

        }}
      >

        <p
          style={{

            color: 'gold',

            fontSize: '18px',

            marginBottom: '12px'

          }}
        >
          🏆 Race Prediction
        </p>

        <p className="stats-text">
          Win Probability:
          {' '}
          {probability}%
        </p>

        <div
          style={{

            width: '100%',

            height: '16px',

            background: '#222',

            borderRadius: '20px',

            overflow: 'hidden',

            marginTop: '12px'

          }}
        >

          <div
            style={{

              width: `${probability}%`,

              height: '100%',

              background:
                'linear-gradient(to right, yellow, orange)',

              transition: '1s linear'

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
            '1px solid rgba(255,255,255,0.08)'

        }}
      >

        <p
          style={{

            color: 'gold',

            fontSize: '18px',

            marginBottom: '15px'

          }}
        >
          📜 Recent Team Radio
        </p>

        {

          recentCommands.length === 0

            ? (

              <p
                style={{
                  color: '#aaa'
                }}
              >
                Awaiting command...
              </p>

            )

            : recentCommands.map(

              (command, index) => (

                <p
                  key={index}
                  style={{

                    color: 'white',

                    marginBottom: '12px',

                    lineHeight: '1.6'

                  }}
                >
                  • {command}
                </p>

              )

            )

        }

      </div>

    </div>

  )

}

export default RaceControlCenter
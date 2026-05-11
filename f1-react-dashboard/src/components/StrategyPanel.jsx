function StrategyPanel({ probability }) {

  const nextPitLap =
    38 + Math.floor(probability / 8)

  const tireChoice =
    probability > 85
      ? 'Soft 🟥'
      : probability > 70
      ? 'Medium 🟨'
      : 'Hard ⬜'

  const ersMode =
    probability > 85
      ? 'Attack Mode'
      : 'Balanced Mode'

  const fuelMode =
    probability > 80
      ? 'Push'
      : 'Conserve'

  return (

    <div className="card">

      <h2
        style={{

          color: 'cyan',

          marginBottom: '20px'

        }}
      >
        🛠️ Strategy Center
      </h2>

      <p className="stats-text">
        Next Pit Window: Lap {nextPitLap}
      </p>

      <p className="stats-text">
        Recommended Tire: {tireChoice}
      </p>

      <p className="stats-text">
        ERS Deployment: {ersMode}
      </p>

      <p className="stats-text">
        Fuel Mode: {fuelMode}
      </p>

      <p className="stats-text">
        Undercut Risk: Medium
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

            width: `${probability}%`,

            height: '100%',

            background:
              'linear-gradient(to right, cyan, blue)',

            transition: '0.5s'

          }}
        >

        </div>

      </div>

    </div>

  )

}

export default StrategyPanel
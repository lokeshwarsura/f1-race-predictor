function StrategyPanel({ probability }) {

  let tire = ''

  let strategy = ''

  if (probability >= 90) {

    tire = 'Soft 🟥'

    strategy = 'Aggressive Push Strategy'

  }

  else if (probability >= 75) {

    tire = 'Medium 🟨'

    strategy = 'Balanced Race Strategy'

  }

  else {

    tire = 'Hard ⬜'

    strategy = 'Long Stint Defensive Strategy'

  }

  return (

    <div className="card">

      <h2
        style={{

          color: 'cyan',

          marginBottom: '20px'

        }}
      >
        🛠️ Strategy Panel
      </h2>

      <p className="stats-text">
        Recommended Tire: {tire}
      </p>

      <p className="stats-text">
        Strategy: {strategy}
      </p>

      <p className="stats-text">
        Pit Window: Lap 38 - 42
      </p>

      <p className="stats-text">
        Fuel Saving: Minimal
      </p>

      <p className="stats-text">
        ERS Deployment: High
      </p>

    </div>

  )

}

export default StrategyPanel
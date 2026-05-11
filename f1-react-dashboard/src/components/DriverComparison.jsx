function DriverComparison({ driver, probability }) {

  const rival = 'Lewis Hamilton'

  const rivalProbability =
    Math.max(probability - 12, 45)

  return (

    <div className="card">

      <h2
        style={{

          color: 'gold',

          marginBottom: '20px'

        }}
      >
        ⚔️ Driver Comparison
      </h2>

      <div
        style={{

          display: 'flex',

          justifyContent: 'space-between',

          alignItems: 'center',

          marginBottom: '20px'

        }}
      >

        <div>

          <h3
            style={{
              color: 'white'
            }}
          >
            {driver}
          </h3>

          <p className="stats-text">
            Win Chance: {probability}%
          </p>

        </div>

        <div>

          <h3
            style={{
              color: 'white'
            }}
          >
            {rival}
          </h3>

          <p className="stats-text">
            Win Chance: {rivalProbability}%
          </p>

        </div>

      </div>

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

            width: `${probability}%`,

            height: '100%',

            background:
              'linear-gradient(to right, gold, orange)',

            transition: '0.5s'

          }}
        >

        </div>

      </div>

    </div>

  )

}

export default DriverComparison
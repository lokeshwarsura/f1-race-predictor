function StatsPanel({ probability }) {

  const consistency =
    80 + Math.floor(probability / 5)

  const overtakes =
    Math.floor(probability / 12)

  const qualifyingRank =
    probability >= 90
      ? 1
      : probability >= 80
      ? 2
      : 3

  const raceRating =
    probability >= 90
      ? 'S Tier ⭐'
      : probability >= 80
      ? 'A Tier 🔥'
      : probability >= 70
      ? 'B Tier ⚡'
      : 'C Tier'

  return (

    <div className="card">

      <h2
        style={{

          color: 'yellow',

          marginBottom: '20px'

        }}
      >
        📊 Weekend Statistics
      </h2>

      <p className="stats-text">
        Qualifying Position:
        {' '}
        P{qualifyingRank}
      </p>

      <p className="stats-text">
        Race Consistency:
        {' '}
        {consistency}%
      </p>

      <p className="stats-text">
        Predicted Overtakes:
        {' '}
        {overtakes}
      </p>

      <p className="stats-text">
        Fastest Lap Potential:
        {' '}
        {probability}%
      </p>

      <p className="stats-text">
        Driver Rating:
        {' '}
        {raceRating}
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
              'linear-gradient(to right, yellow, orange)',

            transition: '0.5s'

          }}
        >

        </div>

      </div>

    </div>

  )

}

export default StatsPanel
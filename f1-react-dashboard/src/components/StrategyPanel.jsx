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

  const sprintPoints =
    probability >= 90
      ? 8
      : probability >= 80
      ? 6
      : probability >= 70
      ? 4
      : 2

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
        📊 Weekend Command Center
      </h2>

      <p className="stats-text">
        Qualifying Position:
        {' '}
        P{qualifyingRank}
      </p>

      <p className="stats-text">
        Sprint Race Points:
        {' '}
        {sprintPoints}
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

            color: 'lime',

            lineHeight: '1.8',

            fontSize: '17px'

          }}
        >
          🏁 Weekend Summary:
          {' '}
          {probability >= 90
            ? 'Dominant race weekend expected.'
            : probability >= 80
            ? 'Strong podium pace throughout sessions.'
            : probability >= 70
            ? 'Competitive midfield battle predicted.'
            : 'Recovery weekend strategy recommended.'}
        </p>

      </div>

    </div>

  )

}

export default StatsPanel
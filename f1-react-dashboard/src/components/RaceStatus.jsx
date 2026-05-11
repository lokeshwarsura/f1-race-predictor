function RaceStatus({ probability }) {

  const currentLap =
    42 + Math.floor(probability / 5)

  const totalLaps = 58

  const fuelLoad =
    Math.max(100 - probability, 15)

  const gapAhead =
    (Math.random() * 3).toFixed(1)

  const gapBehind =
    (Math.random() * 2).toFixed(1)

  return (

    <div className="card">

      <h2
        style={{

          color: 'red',

          marginBottom: '20px'

        }}
      >
        🏁 Live Race Status
      </h2>

      <p className="stats-text">
        Current Lap: {currentLap}/{totalLaps}
      </p>

      <p className="stats-text">
        Fuel Remaining: {fuelLoad}%
      </p>

      <p className="stats-text">
        Gap Ahead: +{gapAhead}s
      </p>

      <p className="stats-text">
        Gap Behind: +{gapBehind}s
      </p>

      <p className="stats-text">
        Safety Car: No
      </p>

      <p className="stats-text">
        DRS Status: Enabled
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

            width: `${(currentLap / totalLaps) * 100}%`,

            height: '100%',

            background:
              'linear-gradient(to right, red, orange)',

            transition: '0.5s'

          }}
        >

        </div>

      </div>

    </div>

  )

}

export default RaceStatus
function RaceControlCenter({ probability }) {

  const lapsRemaining =
    58 - (42 + Math.floor(probability / 5))

  const estimatedFinish =
    `${1 + Math.floor(lapsRemaining / 10)} mins`

  const raceMode =
    probability > 85
      ? 'Full Attack'
      : probability > 70
      ? 'Balanced Push'
      : 'Recovery Mode'

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

      <p className="stats-text">
        Race Mode: {raceMode}
      </p>

      <p className="stats-text">
        Laps Remaining: {lapsRemaining}
      </p>

      <p className="stats-text">
        Estimated Finish: {estimatedFinish}
      </p>

      <p className="stats-text">
        Team Radio: Clear ✅
      </p>

      <p className="stats-text">
        Overtake Mode: Active
      </p>

      <div
        style={{

          marginTop: '20px',

          display: 'flex',

          gap: '10px',

          flexWrap: 'wrap'

        }}
      >

        <button className="predict-btn">
          PUSH
        </button>

        <button className="predict-btn">
          BOX
        </button>

        <button className="predict-btn">
          DEFEND
        </button>

      </div>

    </div>

  )

}

export default RaceControlCenter
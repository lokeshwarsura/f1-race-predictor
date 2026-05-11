function RaceStatus({ probability }) {

  const laps =
    45 + Math.floor(probability / 10)

  const tireWear =
    20 + Math.floor(probability / 2)

  const pitStops =
    probability > 80 ? 1 : 2

  return (

    <div className="card">

      <h2
        style={{

          color: 'cyan',

          marginBottom: '20px'

        }}
      >
        🏁 Race Status
      </h2>

      <p className="stats-text">
        Current Lap: {laps}/58
      </p>

      <p className="stats-text">
        Tire Wear: {tireWear}%
      </p>

      <p className="stats-text">
        Pit Stops: {pitStops}
      </p>

      <p className="stats-text">
        DRS: Enabled
      </p>

      <p className="stats-text">
        Track Status: Green Flag 🟢
      </p>

    </div>

  )

}

export default RaceStatus
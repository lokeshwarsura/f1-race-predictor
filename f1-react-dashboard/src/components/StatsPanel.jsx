function StatsPanel({ probability }) {

  const poleChance =
    probability

  const fastestLap =
    Math.max(probability - 8, 0)

  const podiumChance =
    Math.min(probability + 5, 100)

  const tireEfficiency =
    85 + Math.floor(Math.random() * 10)

  const fuelStrategy =
    80 + Math.floor(Math.random() * 15)

  return (

    <div className="card">

      <h2
        style={{

          color: 'yellow',

          marginBottom: '20px'

        }}
      >
        📊 Race Statistics
      </h2>

      <p className="stats-text">
        🏁 Pole Position: {poleChance}%
      </p>

      <p className="stats-text">
        ⚡ Fastest Lap: {fastestLap}%
      </p>

      <p className="stats-text">
        🔥 Podium Chance: {podiumChance}%
      </p>

      <p className="stats-text">
        🛞 Tire Efficiency: {tireEfficiency}%
      </p>

      <p className="stats-text">
        ⛽ Fuel Strategy: {fuelStrategy}%
      </p>

    </div>

  )

}

export default StatsPanel
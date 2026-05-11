function StatsPanel({ probability }) {

  const pole =
    Number(probability).toFixed(2)

  const fastestLap =
    Math.max(probability - 8, 0).toFixed(2)

  const podium =
    Math.min(Number(probability) + 5, 100).toFixed(2)

  const tire =
    (85 + Math.random() * 10).toFixed(0)

  const fuel =
    (80 + Math.random() * 15).toFixed(0)

  return (

    <div
      style={{
        background: '#111',
        padding: '20px',
        borderRadius: '15px',
        border: '2px solid red',
        width: '320px',
        color: 'white',
        marginTop: '20px',
        textAlign: 'left',
        boxShadow: '0 0 20px red'
      }}
    >

      <h2
        style={{
          color: 'yellow',
          marginBottom: '20px'
        }}
      >
        📊 Race Statistics
      </h2>

      <p>🏁 Pole Position Chance: {pole}%</p>

      <p>⚡ Fastest Lap Chance: {fastestLap}%</p>

      <p>🔥 Podium Chance: {podium}%</p>

      <p>🛞 Tire Efficiency: {tire}%</p>

      <p>⛽ Fuel Strategy Score: {fuel}%</p>

    </div>

  )

}

export default StatsPanel
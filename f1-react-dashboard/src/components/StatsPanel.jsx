function StatsPanel({ probability }) {

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
        textAlign: 'left'
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

      <p>🏁 Pole Position Chance: {probability}%</p>

      <p>⚡ Fastest Lap Chance: {(probability - 10).toFixed(2)}%</p>

      <p>🔥 Podium Chance: {(Number(probability) + 15).toFixed(2)}%</p>

      <p>🛞 Tire Efficiency: 92%</p>

      <p>⛽ Fuel Strategy Score: 88%</p>

    </div>

  )

}

export default StatsPanel
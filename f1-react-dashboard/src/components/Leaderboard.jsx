function Leaderboard({ probability }) {

  const drivers = [

    {
      name: 'Max Verstappen',
      points: 410
    },

    {
      name: 'Lewis Hamilton',
      points: 332
    },

    {
      name: 'Charles Leclerc',
      points: 301
    },

    {
      name: 'Carlos Sainz',
      points: 280
    },

    {
      name: 'Fernando Alonso',
      points: 255
    }

  ]

  return (

    <div
      style={{
        background: '#111',
        padding: '20px',
        borderRadius: '15px',
        border: '2px solid cyan',
        width: '320px',
        color: 'white',
        marginTop: '20px',
        boxShadow: '0 0 20px cyan'
      }}
    >

      <h2
        style={{
          color: 'cyan',
          marginBottom: '20px'
        }}
      >
        🏆 Driver Leaderboard
      </h2>

      {

        drivers.map((driver, index) => (

          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px',
              marginBottom: '10px',
              background: '#1a1a1a',
              borderRadius: '10px'
            }}
          >

            <span>
              #{index + 1} {driver.name}
            </span>

            <span>
              {driver.points} pts
            </span>

          </div>

        ))

      }

      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          background: '#222',
          borderRadius: '10px',
          color: 'yellow',
          textAlign: 'center',
          fontWeight: 'bold'
        }}
      >
        Predicted Win Chance: {probability}%
      </div>

    </div>

  )

}

export default Leaderboard
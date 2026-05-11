function Leaderboard({ probability }) {

  const drivers = [

    {

      name: 'Max Verstappen',

      team: 'Red Bull',

      points: 410

    },

    {

      name: 'Lewis Hamilton',

      team: 'Ferrari',

      points: 362

    },

    {

      name: 'Carlos Sainz',

      team: 'Ferrari',

      points: 330

    },

    {

      name: 'Fernando Alonso',

      team: 'Aston Martin',

      points: 287

    },

    {

      name: 'Sergio Perez',

      team: 'Red Bull',

      points: 275

    }

  ]

  return (

    <div className="card leaderboard-card">

      <h2
        style={{

          color: 'cyan',

          marginBottom: '20px'

        }}
      >
        🏆 Championship Leaderboard
      </h2>

      {

        drivers.map((driver, index) => (

          <div
            key={index}
            className="leaderboard-row"
          >

            <div>

              #{index + 1} {driver.name}

            </div>

            <div>

              {driver.points} pts

            </div>

          </div>

        ))

      }

      <h3
        style={{

          marginTop: '25px',

          color: 'yellow'

        }}
      >
        Predicted Win Chance: {probability}%
      </h3>

    </div>

  )

}

export default Leaderboard
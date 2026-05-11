function Leaderboard({ probability }) {

  const standings = [

    {

      position: 1,

      driver: 'Max Verstappen',

      team: 'Red Bull',

      points: 410,

      gap: '+0'

    },

    {

      position: 2,

      driver: 'Lewis Hamilton',

      team: 'Ferrari',

      points: 362,

      gap: '+48'

    },

    {

      position: 3,

      driver: 'Carlos Sainz',

      team: 'Ferrari',

      points: 330,

      gap: '+80'

    },

    {

      position: 4,

      driver: 'Fernando Alonso',

      team: 'Aston Martin',

      points: 287,

      gap: '+123'

    },

    {

      position: 5,

      driver: 'Sergio Perez',

      team: 'Red Bull',

      points: 275,

      gap: '+135'

    }

  ]

  return (

    <div className="card leaderboard-card">

      <h2
        style={{

          color: 'gold',

          marginBottom: '20px'

        }}
      >
        🏆 Championship Center
      </h2>

      {

        standings.map((item, index) => (

          <div
            key={index}
            className="leaderboard-row"
          >

            <div>

              #{item.position}
              {' '}
              {item.driver}

            </div>

            <div>

              {item.points} pts

            </div>

          </div>

        ))

      }

      <div
        style={{

          marginTop: '25px',

          padding: '15px',

          borderRadius: '15px',

          background: '#111',

          border: '2px solid gold'

        }}
      >

        <h3
          style={{

            color: 'gold',

            marginBottom: '15px'

          }}
        >
          🏁 Constructor Standings
        </h3>

        <p className="stats-text">
          1️⃣ Red Bull — 685 pts
        </p>

        <p className="stats-text">
          2️⃣ Ferrari — 650 pts
        </p>

        <p className="stats-text">
          3️⃣ Mercedes — 502 pts
        </p>

        <p className="stats-text">
          4️⃣ Aston Martin — 411 pts
        </p>

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

            color: 'cyan',

            lineHeight: '1.8',

            fontSize: '17px'

          }}
        >
          Live Championship Prediction:
          {' '}
          {probability >= 90
            ? 'Dominant title campaign expected.'
            : probability >= 75
            ? 'Strong championship battle ahead.'
            : 'Championship pressure increasing.'}
        </p>

      </div>

    </div>

  )

}

export default Leaderboard
function StatsPanel({

  driver

}) {

  const stats = {

    'Max Verstappen': {

      championships: 3,

      wins: 61,

      podiums: 107,

      nationality: 'Netherlands',

      age: 27

    },

    'Lewis Hamilton': {

      championships: 7,

      wins: 105,

      podiums: 202,

      nationality: 'United Kingdom',

      age: 40

    },

    'Fernando Alonso': {

      championships: 2,

      wins: 32,

      podiums: 106,

      nationality: 'Spain',

      age: 43

    },

    'Carlos Sainz': {

      championships: 0,

      wins: 4,

      podiums: 27,

      nationality: 'Spain',

      age: 30

    },

    'Sergio Perez': {

      championships: 0,

      wins: 6,

      podiums: 39,

      nationality: 'Mexico',

      age: 35

    }

  }

  const current = stats[driver]

  return (

    <div className="stats-panel">

      <h2>
        📊 Driver Statistics
      </h2>

      <p>
        🏆 Championships:
        {' '}
        {current.championships}
      </p>

      <p>
        🥇 Wins:
        {' '}
        {current.wins}
      </p>

      <p>
        🥈 Podiums:
        {' '}
        {current.podiums}
      </p>

      <p>
        🌍 Nationality:
        {' '}
        {current.nationality}
      </p>

      <p>
        🎂 Age:
        {' '}
        {current.age}
      </p>

    </div>

  )

}

export default StatsPanel
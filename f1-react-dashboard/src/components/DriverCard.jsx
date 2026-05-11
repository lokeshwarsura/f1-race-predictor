function DriverCard({

  driver,

  team,

  image,

  logo

}) {

  let borderColor = 'red'

  let shadowColor = 'red'

  let powerRating = '92'

  let raceCondition = 'Optimal'

  if (team === 'Ferrari') {

    borderColor = 'crimson'

    shadowColor = 'crimson'

    powerRating = '94'

  }

  else if (team === 'Mercedes') {

    borderColor = 'cyan'

    shadowColor = 'cyan'

    powerRating = '90'

  }

  else if (team === 'Aston Martin') {

    borderColor = 'limegreen'

    shadowColor = 'limegreen'

    powerRating = '88'

  }

  else if (team === 'Red Bull') {

    borderColor = 'royalblue'

    shadowColor = 'royalblue'

    powerRating = '98'

  }

  return (

    <div
      className="card"
      style={{

        border: `2px solid ${borderColor}`,

        boxShadow:
          `0 0 25px ${shadowColor}`

      }}
    >

      <img
        src={image}
        alt={driver}
        className="driver-image"
      />

      <h2
        style={{

          color: 'white',

          marginTop: '20px'

        }}
      >
        {driver}
      </h2>

      <h3
        style={{

          color: borderColor

        }}
      >
        {team}
      </h3>

      <img
        src={logo}
        alt={team}
        className="team-logo"
      />

      <div
        style={{

          marginTop: '20px',

          padding: '15px',

          borderRadius: '15px',

          background:
            'rgba(255,255,255,0.05)',

          border:
            '1px solid rgba(255,255,255,0.1)'

        }}
      >

        <p className="stats-text">
          ⚡ Team Power Rating:
          {' '}
          {powerRating}
        </p>

        <p className="stats-text">
          🟢 Car Condition:
          {' '}
          {raceCondition}
        </p>

        <p className="stats-text">
          🏁 Race Status:
          {' '}
          Ready To Push
        </p>

      </div>

    </div>

  )

}

export default DriverCard
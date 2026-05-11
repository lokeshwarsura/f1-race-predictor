function DriverCard({

  driver,

  team,

  image,

  logo

}) {

  let borderColor = 'red'

  let shadowColor = 'red'

  if (team === 'Ferrari') {

    borderColor = 'crimson'

    shadowColor = 'crimson'

  }

  else if (team === 'Mercedes') {

    borderColor = 'cyan'

    shadowColor = 'cyan'

  }

  else if (team === 'Aston Martin') {

    borderColor = 'limegreen'

    shadowColor = 'limegreen'

  }

  else if (team === 'Red Bull') {

    borderColor = 'royalblue'

    shadowColor = 'royalblue'

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

          padding: '12px',

          borderRadius: '12px',

          background: '#111'

        }}
      >

        <p className="stats-text">
          Team Theme Active
        </p>

      </div>

    </div>

  )

}

export default DriverCard
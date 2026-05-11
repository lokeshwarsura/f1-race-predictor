function DriverCard({

  driver,

  team,

  image,

  logo

}) {

  return (

    <div className="card">

      <img
        src={image}
        alt={driver}
        className="driver-image"
      />

      <h2
        style={{

          color: 'yellow',

          marginTop: '20px'

        }}
      >
        {driver}
      </h2>

      <h3
        style={{

          color: 'white'

        }}
      >
        {team}
      </h3>

      <img
        src={logo}
        alt={team}
        className="team-logo"
      />

    </div>

  )

}

export default DriverCard
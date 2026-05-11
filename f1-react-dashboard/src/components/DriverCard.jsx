function DriverCard({

  driver,

  team,

  image,

  logo

}) {

  return (

    <div className="driver-card">

      <img

        src={image}

        alt={driver}

        className="driver-image"

      />

      <h2>
        {driver}
      </h2>

      <h3>
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
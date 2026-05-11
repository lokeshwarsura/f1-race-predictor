function DriverCard({ driver, team, image, logo }) {

  return (

    <div
      style={{
        background: '#111',
        border: '2px solid red',
        borderRadius: '20px',
        padding: '25px',
        width: '320px',
        textAlign: 'center',
        color: 'white',
        boxShadow: '0 0 20px rgba(255,0,0,0.5)'
      }}
    >

      <img
        src={image}
        alt={driver}
        style={{
          width: '220px',
          height: '220px',
          objectFit: 'cover',
          borderRadius: '15px'
        }}
      />

      <h2
        style={{
          marginTop: '15px',
          color: 'yellow'
        }}
      >
        {driver}
      </h2>

      <h3>
        {team}
      </h3>

      <img
        src={logo}
        alt={team}
        style={{
          width: '140px',
          marginTop: '20px',
          borderRadius: '10px',
          background: 'white',
          padding: '10px'
        }}
      />

    </div>

  )

}

export default DriverCard
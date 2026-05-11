function LiveTelemetry({ probability }) {

  const speed =
    280 + Math.floor(probability)

  const rpm =
    11000 + Math.floor(probability * 50)

  const gear =
    Math.floor(probability / 15)

  return (

    <div className="card">

      <h2
        style={{

          color: 'lime',

          marginBottom: '20px'

        }}
      >
        ⚡ Live Telemetry
      </h2>

      <h1
        style={{

          fontSize: '60px',

          color: 'white',

          marginBottom: '10px'

        }}
      >
        {speed}
      </h1>

      <p
        style={{

          color: 'lime',

          fontSize: '22px'

        }}
      >
        km/h
      </p>

      <div
        style={{

          width: '100%',

          height: '20px',

          background: '#222',

          borderRadius: '20px',

          overflow: 'hidden',

          marginTop: '20px'

        }}
      >

        <div
          style={{

            width: `${speed / 4}%`,

            height: '100%',

            background:
              'linear-gradient(to right, lime, green)',

            transition: '0.5s'

          }}
        >

        </div>

      </div>

      <p
        className="stats-text"
        style={{

          marginTop: '20px'

        }}
      >
        RPM: {rpm}
      </p>

      <p className="stats-text">
        Gear: {gear}
      </p>

    </div>

  )

}

export default LiveTelemetry
function LiveTelemetry({ probability }) {

  const speed =
    280 + Math.floor(probability)

  const rpm =
    11000 + Math.floor(probability * 45)

  const gear =
    Math.min(
      8,
      Math.max(
        1,
        Math.floor(probability / 12)
      )
    )

  const ersBattery =
    Math.max(
      15,
      100 - Math.floor(probability / 1.5)
    )

  const engineTemp =
    90 + Math.floor(probability / 3)

  let alert = ''

  if (probability >= 90) {

    alert =
      '🔥 Maximum attack pace detected.'

  }

  else if (probability >= 75) {

    alert =
      '⚡ Stable race pace maintained.'

  }

  else {

    alert =
      '🛞 Tire degradation increasing.'

  }

  return (

    <div className="card">

      <h2
        style={{

          color: 'lime',

          marginBottom: '20px'

        }}
      >
        ⚡ Advanced Telemetry
      </h2>

      <h1
        style={{

          fontSize: '64px',

          margin: '10px 0',

          color: 'white'

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

      <p className="stats-text">
        Engine Temp: {engineTemp}°C
      </p>

      <div
        style={{
          marginTop: '20px'
        }}
      >

        <p className="stats-text">
          ERS Battery: {ersBattery}%
        </p>

        <div
          style={{

            width: '100%',

            height: '18px',

            background: '#222',

            borderRadius: '20px',

            overflow: 'hidden'

          }}
        >

          <div
            style={{

              width: `${ersBattery}%`,

              height: '100%',

              background:
                'linear-gradient(to right, cyan, blue)',

              transition: '0.5s'

            }}
          >

          </div>

        </div>

      </div>

      <p
        style={{

          marginTop: '20px',

          color: 'yellow',

          lineHeight: '1.7',

          fontSize: '18px'

        }}
      >
        {alert}
      </p>

    </div>

  )

}

export default LiveTelemetry
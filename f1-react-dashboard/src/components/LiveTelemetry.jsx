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

  const throttle =
    70 + Math.floor(probability / 4)

  const brakePressure =
    20 + Math.floor((100 - probability) / 4)

  const turboEfficiency =
    80 + Math.floor(probability / 5)

  let engineStatus = ''

  if (probability >= 90) {

    engineStatus =
      '🔥 Peak Performance Mode'

  }

  else if (probability >= 75) {

    engineStatus =
      '⚡ Stable Performance Window'

  }

  else {

    engineStatus =
      '🛠️ Engine Conservation Active'

  }

  return (

    <div className="card">

      <h2
        style={{

          color: 'lime',

          marginBottom: '20px'

        }}
      >
        ⚡ Ultimate Telemetry Hub
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
        RPM:
        {' '}
        {rpm}
      </p>

      <p className="stats-text">
        Gear:
        {' '}
        {gear}
      </p>

      <p className="stats-text">
        Engine Temp:
        {' '}
        {engineTemp}°C
      </p>

      <p className="stats-text">
        Turbo Efficiency:
        {' '}
        {turboEfficiency}%
      </p>

      <div
        style={{
          marginTop: '20px'
        }}
      >

        <p className="stats-text">
          ERS Battery:
          {' '}
          {ersBattery}%
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

      <div
        style={{
          marginTop: '20px'
        }}
      >

        <p className="stats-text">
          Throttle Input:
          {' '}
          {throttle}%
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

              width: `${throttle}%`,

              height: '100%',

              background:
                'linear-gradient(to right, lime, yellow)',

              transition: '0.5s'

            }}
          >

          </div>

        </div>

      </div>

      <div
        style={{
          marginTop: '20px'
        }}
      >

        <p className="stats-text">
          Brake Pressure:
          {' '}
          {brakePressure}%
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

              width: `${brakePressure}%`,

              height: '100%',

              background:
                'linear-gradient(to right, red, orange)',

              transition: '0.5s'

            }}
          >

          </div>

        </div>

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

            color: 'yellow',

            lineHeight: '1.8',

            fontSize: '17px'

          }}
        >
          {engineStatus}
        </p>

      </div>

    </div>

  )

}

export default LiveTelemetry
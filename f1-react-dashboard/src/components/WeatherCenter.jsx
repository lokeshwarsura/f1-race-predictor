function WeatherCenter() {

  const rainChance =
    Math.floor(Math.random() * 40)

  const humidity =
    40 + Math.floor(Math.random() * 35)

  const windSpeed =
    8 + Math.floor(Math.random() * 12)

  let trackCondition = ''

  let weatherAdvice = ''

  if (rainChance >= 30) {

    trackCondition = '🌧️ Damp Track'

    weatherAdvice =
      'Teams preparing intermediate tire strategies.'

  }

  else if (rainChance >= 15) {

    trackCondition = '☁️ Cloudy Conditions'

    weatherAdvice =
      'Grip levels stable with moderate cooling.'

  }

  else {

    trackCondition = '☀️ Dry Track'

    weatherAdvice =
      'Optimal conditions for aggressive push laps.'

  }

  return (

    <div className="card">

      <h2
        style={{

          color: 'orange',

          marginBottom: '20px'

        }}
      >
        🌦️ Weather Intelligence Center
      </h2>

      <p className="stats-text">
        Track Condition:
        {' '}
        {trackCondition}
      </p>

      <p className="stats-text">
        Rain Probability:
        {' '}
        {rainChance}%
      </p>

      <p className="stats-text">
        Humidity:
        {' '}
        {humidity}%
      </p>

      <p className="stats-text">
        Wind Speed:
        {' '}
        {windSpeed} km/h
      </p>

      <div
        style={{

          marginTop: '20px'

        }}
      >

        <p className="stats-text">
          Rain Radar
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

              width: `${rainChance}%`,

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

            color: 'lime',

            lineHeight: '1.8',

            fontSize: '17px'

          }}
        >
          {weatherAdvice}
        </p>

      </div>

    </div>

  )

}

export default WeatherCenter
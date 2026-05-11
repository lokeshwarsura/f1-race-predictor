import { useEffect, useState } from 'react'

function WeatherCenter() {

  const [weather, setWeather] =
    useState('CLEAR')

  const [trackTemp, setTrackTemp] =
    useState(34)

  const [airTemp, setAirTemp] =
    useState(27)

  const [humidity, setHumidity] =
    useState(42)

  const [windSpeed, setWindSpeed] =
    useState(11)

  const [rainChance, setRainChance] =
    useState(5)

  const [trackGrip, setTrackGrip] =
    useState('HIGH')

  const [raceForecast, setRaceForecast] =
    useState(
      'Stable dry race expected.'
    )

  useEffect(() => {

    const interval = setInterval(() => {

      const randomWeather =
        Math.random()

      if (randomWeather > 0.82) {

        setWeather('HEAVY RAIN')

        setTrackTemp(

          19 +
          Math.floor(Math.random() * 4)

        )

        setAirTemp(

          18 +
          Math.floor(Math.random() * 4)

        )

        setHumidity(

          80 +
          Math.floor(Math.random() * 15)

        )

        setWindSpeed(

          18 +
          Math.floor(Math.random() * 10)

        )

        setRainChance(

          85 +
          Math.floor(Math.random() * 15)

        )

        setTrackGrip('LOW')

        setRaceForecast(
          'Wet race conditions expected. Full wet strategy likely.'
        )

      }

      else if (randomWeather > 0.58) {

        setWeather('LIGHT RAIN')

        setTrackTemp(

          22 +
          Math.floor(Math.random() * 5)

        )

        setAirTemp(

          20 +
          Math.floor(Math.random() * 4)

        )

        setHumidity(

          62 +
          Math.floor(Math.random() * 12)

        )

        setWindSpeed(

          12 +
          Math.floor(Math.random() * 7)

        )

        setRainChance(

          45 +
          Math.floor(Math.random() * 25)

        )

        setTrackGrip('MEDIUM')

        setRaceForecast(
          'Intermediate crossover window possible.'
        )

      }

      else {

        setWeather('CLEAR')

        setTrackTemp(

          32 +
          Math.floor(Math.random() * 7)

        )

        setAirTemp(

          25 +
          Math.floor(Math.random() * 5)

        )

        setHumidity(

          35 +
          Math.floor(Math.random() * 15)

        )

        setWindSpeed(

          8 +
          Math.floor(Math.random() * 8)

        )

        setRainChance(

          5 +
          Math.floor(Math.random() * 10)

        )

        setTrackGrip('HIGH')

        setRaceForecast(
          'Stable dry race conditions.'
        )

      }

    }, 12000)

    return () => clearInterval(interval)

  }, [])

  let weatherColor = 'lime'

  if (weather === 'LIGHT RAIN') {

    weatherColor = 'orange'

  }

  if (weather === 'HEAVY RAIN') {

    weatherColor = 'cyan'

  }

  let gripColor = 'lime'

  if (trackGrip === 'MEDIUM') {

    gripColor = 'yellow'

  }

  if (trackGrip === 'LOW') {

    gripColor = 'red'

  }

  return (

    <div className="card">

      <h2
        style={{

          color: 'gold',

          marginBottom: '20px'

        }}
      >
        🌦️ Dynamic Weather Center
      </h2>

      <p
        className="stats-text"
        style={{
          color: weatherColor
        }}
      >
        Weather:
        {' '}
        {weather}
      </p>

      <p className="stats-text">
        Track Temp:
        {' '}
        {trackTemp}°C
      </p>

      <p className="stats-text">
        Air Temp:
        {' '}
        {airTemp}°C
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
          marginTop: '18px'
        }}
      >

        <p className="stats-text">
          Rain Probability:
          {' '}
          {rainChance}%
        </p>

        <div
          style={{

            width: '100%',

            height: '16px',

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
                weather === 'HEAVY RAIN'
                  ? 'linear-gradient(to right, cyan, blue)'
                  : weather === 'LIGHT RAIN'
                  ? 'linear-gradient(to right, orange, yellow)'
                  : 'linear-gradient(to right, lime, green)',

              transition: '2s linear'

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

        <p
          className="stats-text"
          style={{
            color: gripColor
          }}
        >
          Track Grip:
          {' '}
          {trackGrip}
        </p>

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

            color: weatherColor,

            lineHeight: '1.8',

            fontSize: '16px'

          }}
        >
          {raceForecast}
        </p>

      </div>

    </div>

  )

}

export default WeatherCenter
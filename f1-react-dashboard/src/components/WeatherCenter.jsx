import {

  useEffect,

  useState

} from 'react'

function WeatherCenter() {

  const [weather,

    setWeather] = useState({})

  function updateWeather() {

    const conditions = [

      'Sunny',

      'Cloudy',

      'Light Rain',

      'Heavy Rain'

    ]

    const randomCondition =

      conditions[

        Math.floor(

          Math.random() *

          conditions.length

        )

      ]

    const temperature =

      Math.floor(

        Math.random() * 15

      ) + 20

    const humidity =

      Math.floor(

        Math.random() * 50

      ) + 30

    const windSpeed =

      Math.floor(

        Math.random() * 20

      ) + 5

    setWeather({

      condition:

        randomCondition,

      temperature,

      humidity,

      windSpeed

    })

  }

  useEffect(() => {

    updateWeather()

    const interval = setInterval(

      updateWeather,

      5000

    )

    return () => clearInterval(

      interval

    )

  }, [])

  return (

    <div className="weather-panel">

      <h2>
        🌦️ Weather Center
      </h2>

      <p>
        🌤️ Condition:
        {' '}
        {weather.condition}
      </p>

      <p>
        🌡️ Temperature:
        {' '}
        {weather.temperature}°C
      </p>

      <p>
        💧 Humidity:
        {' '}
        {weather.humidity}%
      </p>

      <p>
        🌬️ Wind Speed:
        {' '}
        {weather.windSpeed} km/h
      </p>

    </div>

  )

}

export default WeatherCenter
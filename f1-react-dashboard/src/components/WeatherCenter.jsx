function WeatherPanel() {

  const weather = [

    {

      condition: 'Sunny ☀️',

      temp: '32°C',

      humidity: '41%'

    }

  ]

  return (

    <div className="card">

      <h2
        style={{

          color: 'orange',

          marginBottom: '20px'

        }}
      >
        🌦️ Race Weather
      </h2>

      {

        weather.map((item, index) => (

          <div key={index}>

            <p className="stats-text">

              Condition: {item.condition}

            </p>

            <p className="stats-text">

              Temperature: {item.temp}

            </p>

            <p className="stats-text">

              Humidity: {item.humidity}

            </p>

          </div>

        ))

      }

    </div>

  )

}

export default WeatherPanel
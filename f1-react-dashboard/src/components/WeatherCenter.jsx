function WeatherPanel() {

  return (

    <div className="card">

      <h2
        style={{

          color: 'orange',

          marginBottom: '20px'

        }}
      >
        🌦️ Weather Conditions
      </h2>

      <p className="stats-text">
        Condition: Sunny ☀️
      </p>

      <p className="stats-text">
        Temperature: 32°C
      </p>

      <p className="stats-text">
        Humidity: 41%
      </p>

      <p className="stats-text">
        Wind Speed: 12 km/h
      </p>

    </div>

  )

}

export default WeatherPanel
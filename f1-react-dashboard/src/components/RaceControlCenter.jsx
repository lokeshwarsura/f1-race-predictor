function RaceControlCenter({ probability }) {

  let raceMessage = ''

  if (probability >= 90) {

    raceMessage =
      'Push mode enabled. Driver is dominating the race.'

  }

  else if (probability >= 75) {

    raceMessage =
      'Maintain current pace and monitor tire wear.'

  }

  else {

    raceMessage =
      'Consider alternative pit strategy and energy saving.'

  }

  return (

    <div className="card">

      <h2
        style={{

          color: 'red',

          marginBottom: '20px'

        }}
      >
        🎛️ Race Control Center
      </h2>

      <p
        style={{

          color: 'white',

          fontSize: '18px',

          lineHeight: '1.8'

        }}
      >
        {raceMessage}
      </p>

      <div
        style={{

          marginTop: '20px',

          display: 'flex',

          flexDirection: 'column',

          gap: '10px'

        }}
      >

        <button className="predict-btn">
          Radio Check
        </button>

        <button className="predict-btn">
          Deploy ERS
        </button>

        <button className="predict-btn">
          Box This Lap
        </button>

      </div>

    </div>

  )

}

export default RaceControlCenter
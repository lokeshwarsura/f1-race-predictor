function TireAnalytics({ probability }) {

  const softWear =
    65 + Math.floor(probability / 8)

  const mediumWear =
    45 + Math.floor(probability / 10)

  const hardWear =
    30 + Math.floor(probability / 12)

  const predictedPitLap =
    36 + Math.floor(probability / 7)

  const tireLife =
    100 - Math.floor(probability / 1.8)

  let recommendation = ''

  if (probability >= 90) {

    recommendation =
      'Aggressive soft tire strategy recommended.'

  }

  else if (probability >= 75) {

    recommendation =
      'Medium tires optimal for race balance.'

  }

  else {

    recommendation =
      'Hard tires recommended for long stint defense.'

  }

  return (

    <div className="card">

      <h2
        style={{

          color: 'white',

          marginBottom: '20px'

        }}
      >
        🛞 Advanced Tire Analytics
      </h2>

      <div
        style={{
          marginBottom: '20px'
        }}
      >

        <p className="stats-text">
          Soft Tire Wear: {softWear}%
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

              width: `${softWear}%`,

              height: '100%',

              background:
                'linear-gradient(to right, red, darkred)'

            }}
          >

          </div>

        </div>

      </div>

      <div
        style={{
          marginBottom: '20px'
        }}
      >

        <p className="stats-text">
          Medium Tire Wear: {mediumWear}%
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

              width: `${mediumWear}%`,

              height: '100%',

              background:
                'linear-gradient(to right, gold, yellow)'

            }}
          >

          </div>

        </div>

      </div>

      <div
        style={{
          marginBottom: '20px'
        }}
      >

        <p className="stats-text">
          Hard Tire Wear: {hardWear}%
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

              width: `${hardWear}%`,

              height: '100%',

              background:
                'linear-gradient(to right, white, gray)'

            }}
          >

          </div>

        </div>

      </div>

      <p className="stats-text">
        Predicted Pit Stop Lap: {predictedPitLap}
      </p>

      <p className="stats-text">
        Estimated Tire Life: {tireLife}%
      </p>

      <div
        style={{

          marginTop: '20px',

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

            color: 'cyan',

            lineHeight: '1.8',

            fontSize: '17px'

          }}
        >
          {recommendation}
        </p>

      </div>

    </div>

  )

}

export default TireAnalytics
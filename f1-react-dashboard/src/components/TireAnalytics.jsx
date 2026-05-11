function TireAnalytics({ probability }) {

  const softWear =
    65 + Math.floor(probability / 8)

  const mediumWear =
    45 + Math.floor(probability / 10)

  const hardWear =
    30 + Math.floor(probability / 12)

  return (

    <div className="card">

      <h2
        style={{

          color: 'white',

          marginBottom: '20px'

        }}
      >
        🛞 Tire Analytics
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

      <div>

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

    </div>

  )

}

export default TireAnalytics
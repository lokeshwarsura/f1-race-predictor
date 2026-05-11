function PredictionChart({ probability }) {

  const practice1 =
    Math.min(70 + Math.floor(probability / 4), 100)

  const practice2 =
    Math.min(75 + Math.floor(probability / 5), 100)

  const practice3 =
    Math.min(80 + Math.floor(probability / 5), 100)

  const qualifying =
    Math.min(78 + Math.floor(probability / 4), 100)

  const sprint =
    Math.min(82 + Math.floor(probability / 5), 100)

  const racePace =
    Math.min(probability, 100)

  const performanceData = [

    {
      label: 'Practice 1',
      value: practice1
    },

    {
      label: 'Practice 2',
      value: practice2
    },

    {
      label: 'Practice 3',
      value: practice3
    },

    {
      label: 'Qualifying',
      value: qualifying
    },

    {
      label: 'Sprint',
      value: sprint
    },

    {
      label: 'Race Pace',
      value: racePace
    }

  ]

  let aiInsight = ''

  if (probability >= 90) {

    aiInsight =
      '🏆 Dominating weekend performance detected.'

  }

  else if (probability >= 75) {

    aiInsight =
      '⚡ Strong race pace with podium potential.'

  }

  else {

    aiInsight =
      '⚠️ Additional setup optimization required.'

  }

  return (

    <div className="card">

      <h2
        style={{

          color: 'lime',

          marginBottom: '25px'

        }}
      >
        📊 AI Performance Analyzer
      </h2>

      {

        performanceData.map((item) => (

          <div
            key={item.label}
            style={{
              marginBottom: '18px'
            }}
          >

            <div
              style={{

                display: 'flex',

                justifyContent:
                  'space-between',

                marginBottom: '8px'

              }}
            >

              <span
                style={{
                  color: 'white'
                }}
              >
                {item.label}
              </span>

              <span
                style={{
                  color: 'cyan'
                }}
              >
                {item.value}%
              </span>

            </div>

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

                  width: `${item.value}%`,

                  height: '100%',

                  background:
                    'linear-gradient(to right, blue, cyan)',

                  transition: '1s'

                }}
              >

              </div>

            </div>

          </div>

        ))

      }

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

            fontSize: '17px',

            lineHeight: '1.8'

          }}
        >
          {aiInsight}
        </p>

      </div>

    </div>

  )

}

export default PredictionChart
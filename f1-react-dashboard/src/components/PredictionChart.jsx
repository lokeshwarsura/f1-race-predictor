function PredictionChart({ probability }) {

  const performance = [

    {

      label: 'Practice 1',

      value: 62

    },

    {

      label: 'Practice 2',

      value: 68

    },

    {

      label: 'Practice 3',

      value: 74

    },

    {

      label: 'Qualifying',

      value: 83

    },

    {

      label: 'Sprint',

      value: 88

    },

    {

      label: 'Race Pace',

      value: probability

    }

  ]

  const momentum =

    probability >= 90

      ? 'Dominant momentum detected 🔥'

      : probability >= 80

      ? 'Strong pace advantage ⚡'

      : probability >= 70

      ? 'Balanced race pace 🟡'

      : 'Recovery strategy required 🔴'

  return (

    <div className="card">

      <h2
        style={{

          color: 'lime',

          marginBottom: '25px'

        }}
      >
        📈 AI Performance Analyzer
      </h2>

      <div
        style={{

          display: 'flex',

          alignItems: 'flex-end',

          justifyContent: 'space-between',

          gap: '12px',

          height: '260px'

        }}
      >

        {

          performance.map((item, index) => (

            <div
              key={index}
              style={{

                display: 'flex',

                flexDirection: 'column',

                alignItems: 'center',

                flex: 1

              }}
            >

              <div
                style={{

                  width: '100%',

                  maxWidth: '45px',

                  height: `${item.value * 2}px`,

                  background:
                    'linear-gradient(to top, cyan, blue)',

                  borderRadius: '12px',

                  transition: '0.5s'

                }}
              >

              </div>

              <p
                style={{

                  color: 'white',

                  marginTop: '10px',

                  fontSize: '12px',

                  textAlign: 'center'

                }}
              >
                {item.label}
              </p>

            </div>

          ))

        }

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
          🤖 AI Momentum:
          {' '}
          {momentum}
        </p>

      </div>

    </div>

  )

}

export default PredictionChart
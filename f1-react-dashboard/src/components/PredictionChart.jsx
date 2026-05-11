function PredictionChart({ probability }) {

  const laps = [

    58,
    62,
    66,
    71,
    74,
    probability

  ]

  return (

    <div className="card">

      <h2
        style={{

          color: 'lime',

          marginBottom: '20px'

        }}
      >
        📈 Prediction Trend
      </h2>

      <div
        style={{

          display: 'flex',

          alignItems: 'flex-end',

          justifyContent: 'space-between',

          height: '220px',

          marginTop: '20px'

        }}
      >

        {

          laps.map((lap, index) => (

            <div
              key={index}
              style={{

                display: 'flex',

                flexDirection: 'column',

                alignItems: 'center'

              }}
            >

              <div
                style={{

                  width: '35px',

                  height: `${lap * 1.5}px`,

                  background:
                    'linear-gradient(to top, cyan, blue)',

                  borderRadius: '10px',

                  marginBottom: '10px',

                  transition: '0.5s'

                }}
              >

              </div>

              <p
                style={{

                  color: 'white',

                  fontSize: '14px'

                }}
              >
                L{index + 1}
              </p>

            </div>

          ))

        }

      </div>

    </div>

  )

}

export default PredictionChart
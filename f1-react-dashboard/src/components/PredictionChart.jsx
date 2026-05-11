function PredictionChart({ probability }) {

  const performance = [

    62,
    68,
    72,
    79,
    83,
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
        📈 Qualifying Pace Trend
      </h2>

      <div
        style={{

          display: 'flex',

          alignItems: 'flex-end',

          justifyContent: 'space-between',

          height: '240px',

          marginTop: '20px'

        }}
      >

        {

          performance.map((value, index) => (

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

                  width: '38px',

                  height: `${value * 2}px`,

                  background:
                    'linear-gradient(to top, lime, cyan)',

                  borderRadius: '12px',

                  transition: '0.5s'

                }}
              >

              </div>

              <p
                style={{

                  color: 'white',

                  marginTop: '10px'

                }}
              >
                Q{index + 1}
              </p>

            </div>

          ))

        }

      </div>

      <p
        style={{

          color: 'white',

          marginTop: '20px',

          fontSize: '18px'

        }}
      >
        Final Pace Score: {probability}%
      </p>

    </div>

  )

}

export default PredictionChart
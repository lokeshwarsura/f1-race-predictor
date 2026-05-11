function SectorAnalysis({ probability }) {

  const sector1 =
    (28 + probability / 20).toFixed(2)

  const sector2 =
    (31 + probability / 18).toFixed(2)

  const sector3 =
    (26 + probability / 22).toFixed(2)

  return (

    <div className="card">

      <h2
        style={{

          color: 'aqua',

          marginBottom: '20px'

        }}
      >
        📊 Sector Analysis
      </h2>

      <div
        style={{
          marginBottom: '20px'
        }}
      >

        <p className="stats-text">
          Sector 1: {sector1}s
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

              width: '88%',

              height: '100%',

              background:
                'linear-gradient(to right, cyan, blue)'

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
          Sector 2: {sector2}s
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

              width: '92%',

              height: '100%',

              background:
                'linear-gradient(to right, violet, purple)'

            }}
          >

          </div>

        </div>

      </div>

      <div>

        <p className="stats-text">
          Sector 3: {sector3}s
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

              width: '84%',

              height: '100%',

              background:
                'linear-gradient(to right, lime, green)'

            }}
          >

          </div>

        </div>

      </div>

    </div>

  )

}

export default SectorAnalysis
import { useEffect, useState } from 'react'

function SectorAnalysis() {

  const [sector1, setSector1] =
    useState(28.45)

  const [sector2, setSector2] =
    useState(29.22)

  const [sector3, setSector3] =
    useState(27.88)

  useEffect(() => {

    const interval = setInterval(() => {

      setSector1(

        (
          Math.random() * 8 + 26
        ).toFixed(2)

      )

      setSector2(

        (
          Math.random() * 8 + 26
        ).toFixed(2)

      )

      setSector3(

        (
          Math.random() * 8 + 26
        ).toFixed(2)

      )

    }, 2500)

    return () => clearInterval(interval)

  }, [])

  const sectors = [

    Number(sector1),

    Number(sector2),

    Number(sector3)

  ]

  const fastestSector =

    sectors.indexOf(

      Math.min(...sectors)

    ) + 1

  const lapDelta =

    (
      Math.random() * 1.5
    ).toFixed(2)

  return (

    <div className="card">

      <h2
        style={{

          color: 'aqua',

          marginBottom: '20px'

        }}
      >
        📊 Live Sector Analysis
      </h2>

      <div
        style={{
          marginBottom: '20px'
        }}
      >

        <p className="stats-text">
          Sector 1:
          {' '}
          {sector1}s
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

              width:
                `${sector1 * 2.5}%`,

              height: '100%',

              background:
                'linear-gradient(to right, cyan, blue)',

              transition: '2s linear'

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
          Sector 2:
          {' '}
          {sector2}s
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

              width:
                `${sector2 * 2.5}%`,

              height: '100%',

              background:
                'linear-gradient(to right, violet, purple)',

              transition: '2s linear'

            }}
          >

          </div>

        </div>

      </div>

      <div>

        <p className="stats-text">
          Sector 3:
          {' '}
          {sector3}s
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

              width:
                `${sector3 * 2.5}%`,

              height: '100%',

              background:
                'linear-gradient(to right, lime, green)',

              transition: '2s linear'

            }}
          >

          </div>

        </div>

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

        <p className="stats-text">
          ⚡ Fastest Sector:
          {' '}
          Sector {fastestSector}
        </p>

        <p className="stats-text">
          📉 Lap Delta:
          {' '}
          -{lapDelta}s
        </p>

      </div>

    </div>

  )

}

export default SectorAnalysis
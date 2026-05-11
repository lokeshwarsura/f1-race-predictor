import { useEffect, useState } from 'react'

function SectorAnalysis({ currentLap }) {

  const totalLaps = 58

  const [sector1, setSector1] =
    useState(29.845)

  const [sector2, setSector2] =
    useState(31.112)

  const [sector3, setSector3] =
    useState(28.556)

  const [lapDelta, setLapDelta] =
    useState(-0.184)

  const [topSpeed, setTopSpeed] =
    useState(327)

  const [miniSectors, setMiniSectors] =
    useState('GREEN')

  useEffect(() => {

    if (currentLap >= totalLaps) {

      return

    }

    const interval = setInterval(() => {

      const s1 =
        28.4 + Math.random() * 2.2

      const s2 =
        29.7 + Math.random() * 2.6

      const s3 =
        27.8 + Math.random() * 2.1

      setSector1(s1)

      setSector2(s2)

      setSector3(s3)

      const delta =

        (
          (Math.random() - 0.45) * 1.4
        ).toFixed(3)

      setLapDelta(delta)

      setTopSpeed(

        312 +
        Math.floor(Math.random() * 18)

      )

      const colors = [

        'GREEN',

        'PURPLE',

        'YELLOW'

      ]

      setMiniSectors(

        colors[
          Math.floor(
            Math.random() * colors.length
          )
        ]

      )

    }, 3000)

    return () => clearInterval(interval)

  }, [currentLap])

  const sectors = [

    sector1,

    sector2,

    sector3

  ]

  const fastestSector =

    sectors.indexOf(

      Math.min(...sectors)

    ) + 1

  const totalLapTime =

    sector1 +
    sector2 +
    sector3

  let paceStatus = ''

  let paceColor = ''

  if (totalLapTime < 89.5) {

    paceStatus =
      '🟣 Purple lap pace detected.'

    paceColor = 'violet'

  }

  else if (totalLapTime < 91) {

    paceStatus =
      '🟢 Competitive race pace.'

    paceColor = 'lime'

  }

  else {

    paceStatus =
      '🟡 Tire management phase active.'

    paceColor = 'orange'

  }

  let sectorCondition = ''

  if (miniSectors === 'PURPLE') {

    sectorCondition =
      'Fastest overall mini-sector.'

  }

  else if (miniSectors === 'GREEN') {

    sectorCondition =
      'Personal best sector pace.'

  }

  else {

    sectorCondition =
      'Time loss detected in sector.'

  }

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
          marginBottom: '22px'
        }}
      >

        <p className="stats-text">
          Sector 1:
          {' '}
          {sector1.toFixed(3)}s
        </p>

        <div
          style={{

            width: '100%',

            height: '16px',

            background: '#222',

            borderRadius: '20px',

            overflow: 'hidden'

          }}
        >

          <div
            style={{

              width:
                `${(sector1 / 35) * 100}%`,

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
          marginBottom: '22px'
        }}
      >

        <p className="stats-text">
          Sector 2:
          {' '}
          {sector2.toFixed(3)}s
        </p>

        <div
          style={{

            width: '100%',

            height: '16px',

            background: '#222',

            borderRadius: '20px',

            overflow: 'hidden'

          }}
        >

          <div
            style={{

              width:
                `${(sector2 / 35) * 100}%`,

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
          {sector3.toFixed(3)}s
        </p>

        <div
          style={{

            width: '100%',

            height: '16px',

            background: '#222',

            borderRadius: '20px',

            overflow: 'hidden'

          }}
        >

          <div
            style={{

              width:
                `${(sector3 / 35) * 100}%`,

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

          padding: '18px',

          borderRadius: '15px',

          background:
            currentLap >= totalLaps
              ? 'rgba(0,255,0,0.08)'
              : 'rgba(255,255,255,0.05)',

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
          ⏱️ Full Lap Time:
          {' '}
          {totalLapTime.toFixed(3)}s
        </p>

        <p className="stats-text">
          📉 Lap Delta:
          {' '}
          {lapDelta > 0 ? '+' : ''}
          {lapDelta}s
        </p>

        <p className="stats-text">
          🚀 Top Speed:
          {' '}
          {topSpeed} km/h
        </p>

        <p className="stats-text">
          🎯 Mini Sector:
          {' '}
          <span
            style={{

              color:

                miniSectors === 'PURPLE'

                  ? 'violet'

                  : miniSectors === 'GREEN'

                  ? 'lime'

                  : 'orange'

            }}
          >
            {miniSectors}
          </span>
        </p>

        <p
          style={{

            color: '#aaa',

            marginTop: '12px',

            lineHeight: '1.8'

          }}
        >
          {sectorCondition}
        </p>

        <p
          style={{

            color:
              currentLap >= totalLaps
                ? 'lime'
                : paceColor,

            marginTop: '15px',

            lineHeight: '1.8',

            fontWeight: 'bold'

          }}
        >
          {

            currentLap >= totalLaps

              ? '🏁 Sector timing frozen after race finish.'

              : paceStatus

          }
        </p>

      </div>

    </div>

  )

}

export default SectorAnalysis
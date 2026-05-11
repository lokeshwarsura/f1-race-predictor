import { useEffect, useState } from 'react'

function TireAnalytics({

  probability,

  currentLap

}) {

  const totalLaps = 58

  const [softWear, setSoftWear] =
    useState(5)

  const [mediumWear, setMediumWear] =
    useState(3)

  const [hardWear, setHardWear] =
    useState(2)

  useEffect(() => {

    if (currentLap >= totalLaps) {

      return

    }

    const interval = setInterval(() => {

      setSoftWear((prev) =>

        Math.min(prev + 2, 100)

      )

      setMediumWear((prev) =>

        Math.min(prev + 1.4, 100)

      )

      setHardWear((prev) =>

        Math.min(prev + 1, 100)

      )

    }, 5000)

    return () => clearInterval(interval)

  }, [currentLap])

  const predictedPitLap =
    38 + Math.floor(probability / 8)

  const tireLife =

    Math.max(

      100 -

      (
        softWear +
        mediumWear +
        hardWear
      ) / 3,

      0

    )

  let recommendation = ''

  if (softWear >= 80) {

    recommendation =
      '🛞 Immediate pit stop required.'

  }

  else if (mediumWear >= 60) {

    recommendation =
      '⚠️ Tire degradation increasing.'

  }

  else {

    recommendation =
      '✅ Tire performance stable.'

  }

  return (

    <div className="card">

      <h2
        style={{

          color: 'white',

          marginBottom: '20px'

        }}
      >
        🛞 Live Tire Analytics
      </h2>

      <div
        style={{
          marginBottom: '20px'
        }}
      >

        <p className="stats-text">
          Soft Tire Wear:
          {' '}
          {softWear.toFixed(0)}%
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
                'linear-gradient(to right, red, darkred)',

              transition: '5s linear'

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
          Medium Tire Wear:
          {' '}
          {mediumWear.toFixed(0)}%
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
                'linear-gradient(to right, gold, yellow)',

              transition: '5s linear'

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
          Hard Tire Wear:
          {' '}
          {hardWear.toFixed(0)}%
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
                'linear-gradient(to right, white, gray)',

              transition: '5s linear'

            }}
          >

          </div>

        </div>

      </div>

      <p className="stats-text">
        Predicted Pit Stop Lap:
        {' '}
        {predictedPitLap}
      </p>

      <p className="stats-text">
        Estimated Tire Life:
        {' '}
        {tireLife.toFixed(0)}%
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
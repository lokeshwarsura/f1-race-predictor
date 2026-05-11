import { useEffect, useState } from 'react'

function LiveTelemetry() {

  const [speed, setSpeed] =
    useState(290)

  const [rpm, setRpm] =
    useState(12500)

  const [gear, setGear] =
    useState(6)

  const [ersBattery, setErsBattery] =
    useState(72)

  const [engineTemp, setEngineTemp] =
    useState(101)

  const [throttle, setThrottle] =
    useState(84)

  const [brakePressure, setBrakePressure] =
    useState(12)

  const [turboEfficiency, setTurboEfficiency] =
    useState(93)

  const [trackSection, setTrackSection] =
    useState('STRAIGHT')

  useEffect(() => {

    const interval = setInterval(() => {

      const randomSection =
        Math.random()

      if (randomSection > 0.6) {

        setTrackSection('STRAIGHT')

        const newSpeed =

          310 +
          Math.floor(Math.random() * 35)

        setSpeed(newSpeed)

        setThrottle(
          88 +
          Math.floor(Math.random() * 10)
        )

        setBrakePressure(
          5 +
          Math.floor(Math.random() * 8)
        )

        setGear(8)

      }

      else {

        setTrackSection('CORNER')

        const newSpeed =

          160 +
          Math.floor(Math.random() * 90)

        setSpeed(newSpeed)

        setThrottle(
          40 +
          Math.floor(Math.random() * 35)
        )

        setBrakePressure(
          45 +
          Math.floor(Math.random() * 40)
        )

        setGear(
          3 +
          Math.floor(Math.random() * 3)
        )

      }

      setRpm(

        9000 +
        Math.floor(Math.random() * 5000)

      )

      setEngineTemp(

        95 +
        Math.floor(Math.random() * 20)

      )

      setTurboEfficiency(

        88 +
        Math.floor(Math.random() * 10)

      )

      setErsBattery((prev) => {

        if (prev <= 20) {

          return 85

        }

        return prev - Math.random() * 4

      })

    }, 3000)

    return () => clearInterval(interval)

  }, [])

  let engineStatus = ''

  if (trackSection === 'STRAIGHT') {

    engineStatus =
      '🚀 Full throttle on straight.'

  }

  else {

    engineStatus =
      '🛞 Heavy braking into corner.'

  }

  return (

    <div className="card">

      <h2
        style={{

          color: 'lime',

          marginBottom: '20px'

        }}
      >
        ⚡ Ultimate Telemetry Hub
      </h2>

      <h1
        style={{

          fontSize: '72px',

          margin: '10px 0',

          color: 'white'

        }}
      >
        {speed}
      </h1>

      <p
        style={{

          color: 'lime',

          fontSize: '24px'

        }}
      >
        km/h
      </p>

      <div
        style={{

          width: '100%',

          height: '20px',

          background: '#222',

          borderRadius: '20px',

          overflow: 'hidden',

          marginTop: '20px'

        }}
      >

        <div
          style={{

            width: `${speed / 3.5}%`,

            height: '100%',

            background:
              'linear-gradient(to right, lime, green)',

            transition: '3s linear'

          }}
        >

        </div>

      </div>

      <p
        className="stats-text"
        style={{
          marginTop: '20px'
        }}
      >
        RPM:
        {' '}
        {rpm}
      </p>

      <p className="stats-text">
        Gear:
        {' '}
        {gear}
      </p>

      <p className="stats-text">
        Track Section:
        {' '}
        {trackSection}
      </p>

      <p className="stats-text">
        Engine Temp:
        {' '}
        {engineTemp}°C
      </p>

      <p className="stats-text">
        Turbo Efficiency:
        {' '}
        {turboEfficiency}%
      </p>

      <div
        style={{
          marginTop: '20px'
        }}
      >

        <p className="stats-text">
          ERS Battery:
          {' '}
          {ersBattery.toFixed(0)}%
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

              width: `${ersBattery}%`,

              height: '100%',

              background:
                'linear-gradient(to right, cyan, blue)',

              transition: '3s linear'

            }}
          >

          </div>

        </div>

      </div>

      <div
        style={{
          marginTop: '20px'
        }}
      >

        <p className="stats-text">
          Throttle Input:
          {' '}
          {throttle}%
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

              width: `${throttle}%`,

              height: '100%',

              background:
                'linear-gradient(to right, lime, yellow)',

              transition: '3s linear'

            }}
          >

          </div>

        </div>

      </div>

      <div
        style={{
          marginTop: '20px'
        }}
      >

        <p className="stats-text">
          Brake Pressure:
          {' '}
          {brakePressure}%
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

              width: `${brakePressure}%`,

              height: '100%',

              background:
                'linear-gradient(to right, red, orange)',

              transition: '3s linear'

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

        <p
          style={{

            color: 'yellow',

            lineHeight: '1.8',

            fontSize: '17px'

          }}
        >
          {engineStatus}
        </p>

      </div>

    </div>

  )

}

export default LiveTelemetry
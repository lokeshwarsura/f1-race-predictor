import { useEffect, useState } from 'react'

function LiveTelemetry({ currentLap }) {

  const totalLaps = 58

  const [speed, setSpeed] =
    useState(120)

  const [targetSpeed, setTargetSpeed] =
    useState(120)

  const [rpm, setRpm] =
    useState(8000)

  const [gear, setGear] =
    useState(1)

  const [ersBattery, setErsBattery] =
    useState(80)

  const [engineTemp, setEngineTemp] =
    useState(98)

  const [throttle, setThrottle] =
    useState(40)

  const [brakePressure, setBrakePressure] =
    useState(10)

  const [turboEfficiency, setTurboEfficiency] =
    useState(92)

  const [trackSection, setTrackSection] =
    useState('CORNER')

  useEffect(() => {

    if (currentLap >= totalLaps) {

      return

    }

    const simulation = setInterval(() => {

      const randomTrack =
        Math.random()

      let nextGear = 1

      let nextTargetSpeed = 120

      let nextThrottle = 40

      let nextBrake = 10

      let nextRPM = 8500

      if (randomTrack > 0.6) {

        setTrackSection('STRAIGHT')

        nextGear =
          6 + Math.floor(Math.random() * 3)

        if (nextGear === 6) {

          nextTargetSpeed =
            250 + Math.floor(Math.random() * 15)

        }

        else if (nextGear === 7) {

          nextTargetSpeed =
            285 + Math.floor(Math.random() * 20)

        }

        else {

          nextTargetSpeed =
            320 + Math.floor(Math.random() * 15)

        }

        nextThrottle =
          92 + Math.floor(Math.random() * 8)

        nextBrake =
          Math.floor(Math.random() * 6)

        nextRPM =
          11000 + Math.floor(Math.random() * 2000)

      }

      else {

        setTrackSection('CORNER')

        nextGear =
          2 + Math.floor(Math.random() * 4)

        if (nextGear === 2) {

          nextTargetSpeed =
            95 + Math.floor(Math.random() * 20)

        }

        else if (nextGear === 3) {

          nextTargetSpeed =
            130 + Math.floor(Math.random() * 20)

        }

        else if (nextGear === 4) {

          nextTargetSpeed =
            170 + Math.floor(Math.random() * 20)

        }

        else {

          nextTargetSpeed =
            210 + Math.floor(Math.random() * 20)

        }

        nextThrottle =
          25 + Math.floor(Math.random() * 40)

        nextBrake =
          50 + Math.floor(Math.random() * 40)

        nextRPM =
          7000 + Math.floor(Math.random() * 2500)

      }

      setGear(nextGear)

      setTargetSpeed(nextTargetSpeed)

      setThrottle(nextThrottle)

      setBrakePressure(nextBrake)

      setRpm(nextRPM)

      setEngineTemp(

        95 +
        Math.floor(Math.random() * 12)

      )

      setTurboEfficiency(

        88 +
        Math.floor(Math.random() * 10)

      )

      setErsBattery((prev) => {

        if (randomTrack > 0.6) {

          return Math.max(
            prev - 3,
            10
          )

        }

        return Math.min(
          prev + 2,
          100
        )

      })

    }, 4000)

    return () => clearInterval(simulation)

  }, [currentLap])

  useEffect(() => {

    if (currentLap >= totalLaps) {

      return

    }

    const smoothSpeed = setInterval(() => {

      setSpeed((prev) => {

        if (prev < targetSpeed) {

          return Math.min(
            prev + 4,
            targetSpeed
          )

        }

        else if (prev > targetSpeed) {

          return Math.max(
            prev - 5,
            targetSpeed
          )

        }

        return prev

      })

    }, 120)

    return () => clearInterval(smoothSpeed)

  }, [targetSpeed, currentLap])

  let engineStatus = ''

  if (currentLap >= totalLaps) {

    engineStatus =
      '🏁 Telemetry frozen after race finish.'

  }

  else if (trackSection === 'STRAIGHT') {

    engineStatus =
      '🚀 Maximum acceleration zone.'

  }

  else {

    engineStatus =
      '🛞 Controlled corner braking.'

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

            transition: '0.1s linear'

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

              transition: '1s linear'

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

              transition: '1s linear'

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

            width: `${brakePressure}%`,

            height: '18px',

            background:
              'linear-gradient(to right, red, orange)',

            borderRadius: '20px',

            transition: '1s linear'

          }}
        >

        </div>

      </div>

      <div
        style={{

          marginTop: '25px',

          padding: '15px',

          borderRadius: '15px',

          background:
            currentLap >= totalLaps
              ? 'rgba(0,255,0,0.08)'
              : 'rgba(255,255,255,0.05)',

          border:
            '1px solid rgba(255,255,255,0.1)'

        }}
      >

        <p
          style={{

            color:
              currentLap >= totalLaps
                ? 'lime'
                : 'yellow',

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
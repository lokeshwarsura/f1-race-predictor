import { useEffect, useState } from 'react'

function LiveTelemetry({ currentLap }) {

  const totalLaps = 58

  const [speed, setSpeed] =
    useState(145)

  const [targetSpeed, setTargetSpeed] =
    useState(145)

  const [rpm, setRpm] =
    useState(8200)

  const [gear, setGear] =
    useState(3)

  const [ersBattery, setErsBattery] =
    useState(78)

  const [engineTemp, setEngineTemp] =
    useState(97)

  const [throttle, setThrottle] =
    useState(55)

  const [brakePressure, setBrakePressure] =
    useState(18)

  const [turboEfficiency, setTurboEfficiency] =
    useState(92)

  const [trackSection, setTrackSection] =
    useState('MID CORNER')

  const [drsStatus, setDrsStatus] =
    useState('DISABLED')

  const [fuelLoad, setFuelLoad] =
    useState(100)

  useEffect(() => {

    if (currentLap >= totalLaps) {

      setSpeed(0)

      setTargetSpeed(0)

      setRpm(0)

      setGear(0)

      setThrottle(0)

      setBrakePressure(0)

      setTurboEfficiency(0)

      setDrsStatus('DISABLED')

      setTrackSection('RACE FINISHED')

      return

    }

    const simulation = setInterval(() => {

      const randomTrack =
        Math.random()

      let nextGear = 3

      let nextTargetSpeed = 150

      let nextThrottle = 55

      let nextBrake = 10

      let nextRPM = 9000

      let nextDRS = 'DISABLED'

      if (randomTrack > 0.72) {

        setTrackSection('MAIN STRAIGHT')

        nextGear = 8

        nextTargetSpeed =
          318 +
          Math.floor(Math.random() * 14)

        nextThrottle =
          98 +
          Math.floor(Math.random() * 3)

        nextBrake =
          Math.floor(Math.random() * 3)

        nextRPM =
          11800 +
          Math.floor(Math.random() * 900)

        nextDRS = 'ENABLED'

      }

      else if (randomTrack > 0.45) {

        setTrackSection('HIGH SPEED')

        nextGear =
          6 + Math.floor(Math.random() * 2)

        nextTargetSpeed =
          245 +
          Math.floor(Math.random() * 35)

        nextThrottle =
          78 +
          Math.floor(Math.random() * 18)

        nextBrake =
          8 +
          Math.floor(Math.random() * 15)

        nextRPM =
          10200 +
          Math.floor(Math.random() * 1400)

      }

      else if (randomTrack > 0.2) {

        setTrackSection('MID CORNER')

        nextGear =
          4 + Math.floor(Math.random() * 2)

        nextTargetSpeed =
          165 +
          Math.floor(Math.random() * 35)

        nextThrottle =
          45 +
          Math.floor(Math.random() * 20)

        nextBrake =
          28 +
          Math.floor(Math.random() * 20)

        nextRPM =
          8200 +
          Math.floor(Math.random() * 1400)

      }

      else {

        setTrackSection('HAIRPIN')

        nextGear =
          2 + Math.floor(Math.random() * 2)

        nextTargetSpeed =
          82 +
          Math.floor(Math.random() * 35)

        nextThrottle =
          15 +
          Math.floor(Math.random() * 20)

        nextBrake =
          72 +
          Math.floor(Math.random() * 20)

        nextRPM =
          6200 +
          Math.floor(Math.random() * 1200)

      }

      setGear(nextGear)

      setTargetSpeed(nextTargetSpeed)

      setThrottle(nextThrottle)

      setBrakePressure(nextBrake)

      setRpm(nextRPM)

      setDrsStatus(nextDRS)

      setEngineTemp(

        96 +
        Math.floor(Math.random() * 11)

      )

      setTurboEfficiency(

        89 +
        Math.floor(Math.random() * 8)

      )

      setFuelLoad((prev) =>

        Math.max(prev - 0.7, 5)

      )

      setErsBattery((prev) => {

        if (nextDRS === 'ENABLED') {

          return Math.max(
            prev - 4,
            8
          )

        }

        if (nextBrake > 40) {

          return Math.min(
            prev + 3,
            100
          )

        }

        return prev

      })

    }, 3500)

    return () => clearInterval(simulation)

  }, [currentLap])

  useEffect(() => {

    if (currentLap >= totalLaps) {

      setSpeed(0)

      return

    }

    const smoothSpeed = setInterval(() => {

      setSpeed((prev) => {

        if (prev < targetSpeed) {

          return Math.min(
            prev + 3,
            targetSpeed
          )

        }

        else if (prev > targetSpeed) {

          return Math.max(
            prev - 4,
            targetSpeed
          )

        }

        return prev

      })

    }, 80)

    return () => clearInterval(smoothSpeed)

  }, [targetSpeed, currentLap])

  let engineStatus = ''

  if (currentLap >= totalLaps) {

    engineStatus =
      '🏁 Telemetry shutdown after race finish.'

  }

  else if (trackSection === 'MAIN STRAIGHT') {

    engineStatus =
      '🚀 DRS active. Maximum deployment.'

  }

  else if (trackSection === 'HIGH SPEED') {

    engineStatus =
      '⚡ High-speed aerodynamic section.'

  }

  else if (trackSection === 'MID CORNER') {

    engineStatus =
      '🛞 Balanced corner rotation.'

  }

  else {

    engineStatus =
      '🔻 Heavy braking for hairpin.'

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

          fontSize: '78px',

          margin: '5px 0',

          color: 'white',

          lineHeight: '1'

        }}
      >
        {speed}
      </h1>

      <p
        style={{

          color: 'lime',

          fontSize: '24px',

          marginBottom: '15px'

        }}
      >
        km/h
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

            width: `${speed / 3.4}%`,

            height: '100%',

            background:
              'linear-gradient(to right, lime, green)',

            transition: '0.1s linear'

          }}
        >

        </div>

      </div>

      <div
        style={{
          marginTop: '20px'
        }}
      >

        <p className="stats-text">
          RPM: {rpm}
        </p>

        <p className="stats-text">
          Gear: {gear}
        </p>

        <p className="stats-text">
          Track Section: {trackSection}
        </p>

        <p className="stats-text">
          DRS: {drsStatus}
        </p>

        <p className="stats-text">
          Fuel Load:
          {' '}
          {fuelLoad.toFixed(0)}%
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

      </div>

      <div
        style={{
          marginTop: '18px'
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

            height: '16px',

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
          marginTop: '18px'
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

            height: '16px',

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
          marginTop: '18px'
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

            height: '16px',

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

              transition: '1s linear'

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
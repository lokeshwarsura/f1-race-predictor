import {

  useEffect,

  useState

} from 'react'

import TelemetryChart from './TelemetryChart'

function LiveTelemetry() {

  const [telemetry,

    setTelemetry] = useState(null)

  const [telemetryHistory,

    setTelemetryHistory] = useState([])

  async function fetchTelemetry() {

    try {

      const response = await fetch(

        'http://127.0.0.1:8000/live_driver_data'

      )

      const data = await response.json()

      setTelemetry(data)

      setTelemetryHistory((prev) => [

        ...prev.slice(-9),

        {

          time:

            new Date()

            .toLocaleTimeString(),

          speed:

            data.speed

        }

      ])

    }

    catch(error) {

      console.log(error)

    }

  }

  useEffect(() => {

    fetchTelemetry()

    const interval = setInterval(

      fetchTelemetry,

      5000

    )

    return () => clearInterval(interval)

  }, [])

  if (!telemetry) {

    return (

      <div>

        Loading telemetry...

      </div>

    )

  }

  return (

    <div className="telemetry-panel">

      <h2>
        📡 Live Telemetry
      </h2>

      <p>
        🏎️ Driver:
        {' '}
        {telemetry.driver}
      </p>

      <p>
        ⏱️ Lap Time:
        {' '}
        {telemetry.lap_time}
      </p>

      <p>
        📍 Position:
        {' '}
        {telemetry.position}
      </p>

      <p>
        🚦 Track Status:
        {' '}
        {telemetry.track_status}
      </p>

      <p>
        ⚡ Speed:
        {' '}
        {telemetry.speed}
        km/h
      </p>

      <TelemetryChart

        telemetryHistory={

          telemetryHistory

        }

      />

    </div>

  )

}

export default LiveTelemetry
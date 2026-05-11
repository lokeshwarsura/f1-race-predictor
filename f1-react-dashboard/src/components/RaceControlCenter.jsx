import {

  useEffect,

  useState

} from 'react'

function RaceControlCenter() {

  const [raceData,

    setRaceData] = useState(null)

  async function fetchRaceControl() {

    try {

      const response = await fetch(

        'http://https://f1-backend-kwlj.onrender.com/race_control'

      )

      const data = await response.json()

      setRaceData(data)

    }

    catch(error) {

      console.log(error)

    }

  }

  useEffect(() => {

    fetchRaceControl()

    const interval = setInterval(

      fetchRaceControl,

      5000

    )

    return () => clearInterval(interval)

  }, [])

  if (!raceData) {

    return (

      <div>

        Loading race control...

      </div>

    )

  }

  return (

    <div className="race-control-panel">

      <h2>
        🚦 Race Control Center
      </h2>

      <p>
        🏁 Flag Status:
        {' '}
        {raceData.flag}
      </p>

      <p>
        ⚡ DRS:
        {' '}
        {raceData.drs}
      </p>

      <p>
        🚗 Safety Car:
        {' '}
        {raceData.safety_car}
      </p>

      <p>
        📍 Current Lap:
        {' '}
        {raceData.lap}
      </p>

    </div>

  )

}

export default RaceControlCenter
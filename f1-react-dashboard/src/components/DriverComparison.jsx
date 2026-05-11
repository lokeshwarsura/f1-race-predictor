import {

  useEffect,

  useState

} from 'react'

function DriverComparison() {

  const [comparison,

    setComparison] = useState(null)

  async function fetchComparison() {

    try {

      const response = await fetch(

        'https://f1-backend-kwlj.onrender.com/compare_drivers'

      )

      const data = await response.json()

      setComparison(data)

    }

    catch(error) {

      console.log(error)

    }

  }

  useEffect(() => {

    fetchComparison()

    const interval = setInterval(

      fetchComparison,

      5000

    )

    return () => clearInterval(interval)

  }, [])

  if (!comparison) {

    return (

      <div>

        Loading comparison...

      </div>

    )

  }

  return (

    <div className="comparison-panel">

      <h2>
        ⚔️ Driver Comparison
      </h2>

      <div>

        <h3>
          Lewis Hamilton
        </h3>

        <p>
          ⏱️ Lap:
          {' '}
          {

            comparison.hamilton.lap_time

          }
        </p>

        <p>
          ⚡ Speed:
          {' '}
          {

            comparison.hamilton.speed

          }
          km/h
        </p>

      </div>

      <hr />

      <div>

        <h3>
          Max Verstappen
        </h3>

        <p>
          ⏱️ Lap:
          {' '}
          {

            comparison.verstappen.lap_time

          }
        </p>

        <p>
          ⚡ Speed:
          {' '}
          {

            comparison.verstappen.speed

          }
          km/h
        </p>

      </div>

    </div>

  )

}

export default DriverComparison
import {

  useEffect,

  useState

} from 'react'

function StrategyPanel() {

  const [strategy,

    setStrategy] = useState({})

  function generateStrategy() {

    const tireWear = Math.floor(

      Math.random() * 100

    )

    const fuelLoad = Math.floor(

      Math.random() * 100

    )

    let recommendation = ''

    if (tireWear > 75) {

      recommendation =

        '🔴 PIT NOW'

    }

    else if (fuelLoad < 25) {

      recommendation =

        '⛽ Fuel Saving Mode'

    }

    else if (tireWear > 50) {

      recommendation =

        '🟡 Prepare Pit Window'

    }

    else {

      recommendation =

        '🟢 Push Current Stint'

    }

    setStrategy({

      tireWear,

      fuelLoad,

      recommendation

    })

  }

  useEffect(() => {

    generateStrategy()

    const interval = setInterval(

      generateStrategy,

      5000

    )

    return () => clearInterval(

      interval

    )

  }, [])

  return (

    <div className="strategy-panel">

      <h2>
        🧠 AI Race Strategy
      </h2>

      <p>
        🛞 Tire Wear:
        {' '}
        {strategy.tireWear}%
      </p>

      <p>
        ⛽ Fuel Load:
        {' '}
        {strategy.fuelLoad}%
      </p>

      <h3>
        {

          strategy.recommendation

        }
      </h3>

    </div>

  )

}

export default StrategyPanel
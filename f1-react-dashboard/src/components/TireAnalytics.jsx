import {

  useEffect,

  useState

} from 'react'

function TireAnalytics() {

  const [tireData,

    setTireData] = useState({})

  function generateTireData() {

    const compounds = [

      'Soft',

      'Medium',

      'Hard',

      'Intermediate',

      'Wet'

    ]

    const selectedCompound =

      compounds[

        Math.floor(

          Math.random() *

          compounds.length

        )

      ]

    const tireLife =

      Math.floor(

        Math.random() * 100

      )

    const degradation =

      Math.floor(

        Math.random() * 10

      ) + '%'

    setTireData({

      compound:

        selectedCompound,

      life:

        tireLife,

      degradation

    })

  }

  useEffect(() => {

    generateTireData()

    const interval = setInterval(

      generateTireData,

      5000

    )

    return () => clearInterval(

      interval

    )

  }, [])

  return (

    <div className="tire-panel">

      <h2>
        🛞 Tire Analytics
      </h2>

      <p>
        Compound:
        {' '}
        {tireData.compound}
      </p>

      <p>
        Tire Life:
        {' '}
        {tireData.life}%
      </p>

      <p>
        Degradation:
        {' '}
        {tireData.degradation}
      </p>

      <div className="tire-life-bar">

        <div

          className="tire-life-fill"

          style={{

            width:

              `${tireData.life}%`

          }}

        >

        </div>

      </div>

    </div>

  )

}

export default TireAnalytics
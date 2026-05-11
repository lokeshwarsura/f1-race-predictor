import {

  useEffect,

  useState

} from 'react'

function PredictionInsights() {

  const [insights,

    setInsights] = useState([])

  useEffect(() => {

    const generatedInsights = [

      '🏎️ Verstappen showing strongest race pace',

      '⚡ Mercedes gaining sector 2 advantage',

      '🟡 Tire degradation increasing rapidly',

      '🚗 Pit stop window opening soon',

      '🌧️ Weather conditions stable'

    ]

    setInsights(

      generatedInsights

    )

  }, [])

  return (

    <div className="insights-panel">

      <h2>
        🧠 AI Prediction Insights
      </h2>

      {

        insights.map((item, index) => (

          <p key={index}>
            {item}
          </p>

        ))

      }

    </div>

  )

}

export default PredictionInsights
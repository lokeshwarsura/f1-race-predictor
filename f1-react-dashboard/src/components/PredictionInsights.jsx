function PredictionInsights({ probability, driver }) {

  let insight = ''

  if (probability >= 90) {

    insight =
      `${driver} is dominating the race with excellent pace and tire management.`

  }

  else if (probability >= 75) {

    insight =
      `${driver} has a strong chance of winning if strategy execution stays clean.`

  }

  else {

    insight =
      `${driver} needs a stronger final stint and pit strategy to secure victory.`

  }

  return (

    <div className="card">

      <h2
        style={{

          color: 'violet',

          marginBottom: '20px'

        }}
      >
        🧠 Prediction Insights
      </h2>

      <p
        style={{

          color: 'white',

          lineHeight: '1.8',

          fontSize: '18px'

        }}
      >
        {insight}
      </p>

    </div>

  )

}

export default PredictionInsights
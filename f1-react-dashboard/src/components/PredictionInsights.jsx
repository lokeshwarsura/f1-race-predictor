function PredictionInsights({

  probability,

  driver

}) {

  let engineerMessage = ''

  let confidence = ''

  if (probability >= 90) {

    engineerMessage =
      'Excellent pace. Push for fastest lap.'

    confidence = 'High Confidence 🟢'

  }

  else if (probability >= 75) {

    engineerMessage =
      'Maintain tire management and current pace.'

    confidence = 'Medium Confidence 🟡'

  }

  else {

    engineerMessage =
      'We need a stronger final stint. Save tires.'

    confidence = 'Low Confidence 🔴'

  }

  return (

    <div className="card">

      <h2
        style={{

          color: 'violet',

          marginBottom: '20px'

        }}
      >
        📻 Team Radio Insights
      </h2>

      <p
        style={{

          color: 'white',

          fontSize: '18px',

          lineHeight: '1.8'

        }}
      >
        Engineer to {driver}:
      </p>

      <p
        style={{

          color: 'cyan',

          marginTop: '15px',

          fontSize: '18px',

          lineHeight: '1.8'

        }}
      >
        "{engineerMessage}"
      </p>

      <p
        style={{

          color: 'yellow',

          marginTop: '20px',

          fontSize: '18px'

        }}
      >
        Prediction Confidence:
        {' '}
        {confidence}
      </p>

    </div>

  )

}

export default PredictionInsights
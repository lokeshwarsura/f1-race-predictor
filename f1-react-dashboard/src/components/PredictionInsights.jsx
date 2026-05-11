function PredictionInsights({

  probability,

  driver

}) {

  let engineerMessage = ''

  let confidence = ''

  let aiPrediction = ''

  if (probability >= 90) {

    engineerMessage =
      'Excellent pace. Push for fastest lap.'

    confidence =
      'High Confidence 🟢'

    aiPrediction =
      'AI predicts dominant race control with minimal tire degradation.'

  }

  else if (probability >= 75) {

    engineerMessage =
      'Maintain tire management and current pace.'

    confidence =
      'Medium Confidence 🟡'

    aiPrediction =
      'AI suggests balanced pace with strong podium probability.'

  }

  else {

    engineerMessage =
      'We need a stronger final stint. Save tires.'

    confidence =
      'Low Confidence 🔴'

    aiPrediction =
      'AI predicts increased undercut pressure from rivals.'

  }

  return (

    <div className="card">

      <h2
        style={{

          color: 'violet',

          marginBottom: '20px'

        }}
      >
        🤖 AI Prediction Insights
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

      <div
        style={{

          marginTop: '25px',

          padding: '15px',

          borderRadius: '15px',

          background:
            'rgba(255,255,255,0.05)',

          border:
            '1px solid rgba(255,255,255,0.1)'

        }}
      >

        <p
          style={{

            color: 'lime',

            lineHeight: '1.8',

            fontSize: '17px'

          }}
        >
          {aiPrediction}
        </p>

      </div>

    </div>

  )

}

export default PredictionInsights
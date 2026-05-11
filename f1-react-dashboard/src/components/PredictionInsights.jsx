import { useEffect, useState } from 'react'

function PredictionInsights({

  probability,

  driver,

  currentLap = 1

}) {

  const totalLaps = 58

  const [radioMessage, setRadioMessage] =
    useState('')

  const [strategyInsight, setStrategyInsight] =
    useState('')

  const [confidence, setConfidence] =
    useState('')

  const [racePhase, setRacePhase] =
    useState('Opening Stint')

  const engineerMessages = {

    aggressive: [

      'Push now. Rival pace dropping ahead.',

      'Deploy ERS on main straight.',

      'We are fastest in Sector 2.',

      'DRS train breaking ahead. Attack now.',

      'Tyre temps are in the optimal window.',

      'Excellent traction out of final corner.'

    ],

    balanced: [

      'Maintain current pace target.',

      'Tyre degradation under control.',

      'Fuel target achieved. Continue management.',

      'Gap behind stable. Focus forward.',

      'Front tyres beginning to slide slightly.',

      'Battery deployment balanced across lap.'

    ],

    defensive: [

      'Save tyres. Long race ahead.',

      'Rear tyre degradation increasing.',

      'Protect position into Turn 1.',

      'Lift and coast recommended.',

      'Heavy traffic expected after pit cycle.',

      'We may face undercut pressure soon.'

    ],

    rain: [

      'Track grip falling rapidly.',

      'Rain intensity increasing sector by sector.',

      'Intermediate crossover window approaching.',

      'Standing water reported in final sector.',

      'Careful on throttle application.',

      'Aquaplaning risk increasing.'

    ]

  }

  useEffect(() => {

    if (currentLap >= totalLaps) {

      setRacePhase('Race Finished')

      setConfidence('Race Complete')

      setRadioMessage(

        `🏁 Engineer to ${driver}: Excellent work. Race completed successfully.`

      )

      setStrategyInsight(

        'Final telemetry locked. Strategy simulation ended.'

      )

      return

    }

    const interval = setInterval(() => {

      let selectedCategory = 'balanced'

      if (probability >= 90) {

        selectedCategory = 'aggressive'

        setConfidence('High Confidence')

      }

      else if (probability >= 75) {

        selectedCategory = 'balanced'

        setConfidence('Medium Confidence')

      }

      else {

        selectedCategory = 'defensive'

        setConfidence('Low Confidence')

      }

      const rainChance =
        Math.random()

      if (rainChance > 0.88) {

        selectedCategory = 'rain'

      }

      const messages =

        engineerMessages[
          selectedCategory
        ]

      const randomMessage =

        messages[

          Math.floor(
            Math.random() *
            messages.length
          )

        ]

      setRadioMessage(

        `🎧 Engineer to ${driver}: "${randomMessage}"`

      )

      if (currentLap < 15) {

        setRacePhase('Opening Stint')

      }

      else if (currentLap < 38) {

        setRacePhase('Mid Race Strategy')

      }

      else {

        setRacePhase('Final Push Phase')

      }

      if (

        selectedCategory === 'aggressive'

      ) {

        setStrategyInsight(

          'AI predicts strong race-winning pace advantage.'

        )

      }

      else if (

        selectedCategory === 'balanced'

      ) {

        setStrategyInsight(

          'AI predicts stable race management window.'

        )

      }

      else if (

        selectedCategory === 'rain'

      ) {

        setStrategyInsight(

          'AI predicts changing weather could impact strategy.'

        )

      }

      else {

        setStrategyInsight(

          'AI predicts defensive tyre preservation phase.'

        )

      }

    }, 5000)

    return () => clearInterval(interval)

  }, [

    probability,

    driver,

    currentLap

  ])

  let confidenceColor = 'lime'

  if (confidence === 'Medium Confidence') {

    confidenceColor = 'yellow'

  }

  if (confidence === 'Low Confidence') {

    confidenceColor = 'orange'

  }

  if (confidence === 'Race Complete') {

    confidenceColor = 'cyan'

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

      <div
        style={{

          padding: '15px',

          borderRadius: '15px',

          background:
            'rgba(255,255,255,0.04)',

          border:
            '1px solid rgba(255,255,255,0.08)',

          marginBottom: '20px'

        }}
      >

        <p
          style={{

            color: 'cyan',

            lineHeight: '2',

            fontSize: '20px',

            textAlign: 'center'

          }}
        >
          {radioMessage}
        </p>

      </div>

      <p
        style={{

          color: confidenceColor,

          fontSize: '20px',

          textAlign: 'center',

          marginBottom: '12px',

          fontWeight: 'bold'

        }}
      >
        Prediction Confidence:
        {' '}
        {confidence}
      </p>

      <div
        style={{

          width: '22px',

          height: '22px',

          borderRadius: '50%',

          background: confidenceColor,

          margin: '0 auto 20px auto',

          boxShadow:
            `0 0 18px ${confidenceColor}`

        }}
      >

      </div>

      <div
        style={{

          padding: '15px',

          borderRadius: '15px',

          background:
            'rgba(255,255,255,0.05)',

          border:
            '1px solid rgba(255,255,255,0.08)',

          marginBottom: '18px'

        }}
      >

        <p
          style={{

            color: 'gold',

            fontSize: '18px',

            marginBottom: '10px'

          }}
        >
          🧠 AI Race Analysis
        </p>

        <p
          style={{

            color: 'lime',

            lineHeight: '1.8',

            fontSize: '17px'

          }}
        >
          {strategyInsight}
        </p>

      </div>

      <div
        style={{

          padding: '15px',

          borderRadius: '15px',

          background:
            'rgba(255,255,255,0.05)',

          border:
            '1px solid rgba(255,255,255,0.08)'

        }}
      >

        <p
          style={{

            color: 'aqua',

            fontSize: '18px',

            marginBottom: '10px'

          }}
        >
          🏎️ Race Phase
        </p>

        <p
          style={{

            color: 'white',

            fontSize: '18px',

            lineHeight: '1.8'

          }}
        >
          {racePhase}
        </p>

        <p
          style={{

            color: '#aaa',

            marginTop: '12px',

            lineHeight: '1.7'

          }}
        >
          Current Lap:
          {' '}
          {currentLap}/{totalLaps}
        </p>

      </div>

    </div>

  )

}

export default PredictionInsights
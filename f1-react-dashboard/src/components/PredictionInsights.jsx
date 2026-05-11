import { useEffect, useState } from 'react'

function PredictionInsights({

  probability,

  driver,

  currentLap

}) {

  const totalLaps = 58

  const raceFinished =
    currentLap >= totalLaps

  const [engineerMessage, setEngineerMessage] =
    useState('')

  const [analysisMessage, setAnalysisMessage] =
    useState('')

  const [confidence, setConfidence] =
    useState('High Confidence')

  useEffect(() => {

    if (raceFinished) {

      setEngineerMessage(
        'Race complete. Excellent execution today.'
      )

      setAnalysisMessage(
        'Final race analysis locked after checkered flag.'
      )

      setConfidence('Race Finished')

      return

    }

    const engineerMessages = [

      `"Push now, tyre temps are optimal."`,

      `"Protect position into Turn 1."`,

      `"Fuel target positive. Keep this pace."`,

      `"DRS opportunity ahead. Deploy overtake mode."`,

      `"Tyre degradation under control."`,

      `"Push through Sector 2. Pace is strong."`,

      `"Traffic window opening in three laps."`,

      `"Maintain consistent exits through final corner."`,

      `"Battery charge looking strong for attack laps."`,

      `"Rain risk increasing slightly in Sector 3."`

    ]

    const analysisMessages = [

      'AI predicts defensive tyre preservation phase.',

      'Race pace currently matching podium targets.',

      'Undercut strategy window approaching.',

      'High probability of late-race charge.',

      'Competitors showing increased degradation.',

      'Optimal pit window approaching soon.',

      'Track evolution improving lap potential.',

      'Strong race consistency detected.',

      'Tyre wear model remains stable.',

      'AI predicts increasing overtake probability.'

    ]

    const confidenceLevels = [

      'High Confidence',

      'Medium Confidence',

      'Low Confidence'

    ]

    const interval = setInterval(() => {

      setEngineerMessage(

        engineerMessages[
          Math.floor(
            Math.random() *
            engineerMessages.length
          )
        ]

      )

      setAnalysisMessage(

        analysisMessages[
          Math.floor(
            Math.random() *
            analysisMessages.length
          )
        ]

      )

      setConfidence(

        confidenceLevels[
          Math.floor(
            Math.random() *
            confidenceLevels.length
          )
        ]

      )

    }, 5000)

    return () => clearInterval(interval)

  }, [currentLap, raceFinished])

  const confidenceColor =

    confidence === 'High Confidence'

      ? 'lime'

      : confidence === 'Medium Confidence'

      ? 'orange'

      : confidence === 'Race Finished'

      ? 'cyan'

      : 'gold'

  return (

    <div className="card">

      <h2
        style={{

          color: 'violet',

          textAlign: 'center',

          marginBottom: '25px'

        }}
      >
        🤖 AI Prediction Insights
      </h2>

      <div
        style={{

          padding: '20px',

          borderRadius: '18px',

          background:
            'rgba(255,255,255,0.05)',

          border:
            '1px solid rgba(255,255,255,0.08)',

          marginBottom: '30px'

        }}
      >

        <h2
          style={{

            color: 'cyan',

            textAlign: 'center',

            lineHeight: '1.7'

          }}
        >
          🎧 Engineer to {driver}:
        </h2>

        <h2
          style={{

            color: 'cyan',

            textAlign: 'center',

            lineHeight: '1.8',

            marginTop: '20px'

          }}
        >
          {engineerMessage}
        </h2>

      </div>

      <h2
        style={{

          color: confidenceColor,

          textAlign: 'center',

          marginBottom: '10px'

        }}
      >
        Prediction Confidence:
        {' '}
        {confidence}
      </h2>

      <div
        style={{

          width: '24px',

          height: '24px',

          borderRadius: '50%',

          background: confidenceColor,

          margin: '20px auto',

          boxShadow:
            `0 0 20px ${confidenceColor}`

        }}
      >

      </div>

      <div
        style={{

          padding: '20px',

          borderRadius: '18px',

          background:
            'rgba(255,255,255,0.05)',

          border:
            '1px solid rgba(255,255,255,0.08)'

        }}
      >

        <h2
          style={{

            color: 'gold',

            textAlign: 'center',

            marginBottom: '20px'

          }}
        >
          🧠 AI Race Analysis
        </h2>

        <h2
          style={{

            color: 'lime',

            textAlign: 'center',

            lineHeight: '1.8'

          }}
        >
          {analysisMessage}
        </h2>

      </div>

    </div>

  )

}

export default PredictionInsights
import React from "react"

function PredictionChart() {

  const leaderboardData = [
    { driver: "Max Verstappen", probability: 95 },
    { driver: "Lewis Hamilton", probability: 80 },
    { driver: "Fernando Alonso", probability: 72 }
  ]

  return (

    <div className="panel">

      <h2>📈 Prediction Chart</h2>

      {(leaderboardData || []).map((item, index) => (

        <div key={index}>

          <p>
            {item.driver}: {item.probability}%
          </p>

        </div>

      ))}

    </div>

  )

}

export default PredictionChart
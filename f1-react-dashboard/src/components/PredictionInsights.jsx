import React from "react"

function PredictionInsights() {

  const insights = [
    "Max Verstappen has strong pace advantage",
    "Mercedes showing tire degradation",
    "Ferrari improving sector timings"
  ]

  return (

    <div className="panel">

      <h2>💡 Prediction Insights</h2>

      {(insights || []).map((item, index) => (

        <p key={index}>
          {item}
        </p>

      ))}

    </div>

  )

}

export default PredictionInsights
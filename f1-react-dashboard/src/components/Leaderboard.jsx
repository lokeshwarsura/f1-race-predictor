import React from "react"

function Leaderboard({ probability }) {

  const leaderboardData = [
    { driver: "Max Verstappen", points: 575 },
    { driver: "Lewis Hamilton", points: 387 },
    { driver: "Fernando Alonso", points: 301 },
    { driver: "Carlos Sainz", points: 275 }
  ]

  return (

    <div className="panel">

      <h2>🏆 Leaderboard</h2>

      {(leaderboardData || []).map((item, index) => (

        <div key={index}>

          <p>
            {item.driver} - {item.points} pts
          </p>

        </div>

      ))}

      <p>
        Prediction Accuracy: {probability.toFixed(2)}%
      </p>

    </div>

  )

}

export default Leaderboard
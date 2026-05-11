import { useState, useEffect } from "react"

function StatsPanel() {

  const [current, setCurrent] = useState(null)

  useEffect(() => {

    const stats = {
      driver: "Max Verstappen",
      wins: 56,
      podiums: 98,
      points: 575,
      championships: 3
    }

    setCurrent(stats)

  }, [])

  return (

    <div className="stats-panel">

      <h2>📊 Driver Stats</h2>

      <p>
        Driver: {current?.driver || "Loading..."}
      </p>

      <p>
        Wins: {current?.wins || 0}
      </p>

      <p>
        Podiums: {current?.podiums || 0}
      </p>

      <p>
        Points: {current?.points || 0}
      </p>

      <p>
        Championships: {current?.championships || 0}
      </p>

    </div>

  )

}

export default StatsPanel
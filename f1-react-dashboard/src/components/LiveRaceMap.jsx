import React, { useState, useEffect } from "react"

function LiveRaceMap() {

  const [cars, setCars] = useState([])

  useEffect(() => {

    const interval = setInterval(() => {

      setCars((prev) => {

        const updated = (prev || []).map((car) => ({
          ...car,
          x: car.x + Math.random() * 10
        }))

        return updated

      })

    }, 2000)

    return () => clearInterval(interval)

  }, [])

  return (

    <div className="panel">

      <h2>🗺️ Live Race Map</h2>

      {(cars || []).map((car, index) => (

        <div key={index}>

          <p>
            {car.name}
          </p>

        </div>

      ))}

    </div>

  )

}

export default LiveRaceMap
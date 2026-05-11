import { useEffect, useState } from 'react'

function LiveRaceMap() {

  const [cars, setCars] = useState([

    {

      id: 1,

      name: 'VER',

      left: 10,

      top: 220,

      color: 'red'

    },

    {

      id: 2,

      name: 'HAM',

      left: 60,

      top: 260,

      color: 'cyan'

    }

  ])

  useEffect(() => {

    const interval = setInterval(() => {

      setCars((prev) =>

        prev.map((car) => ({

          ...car,

          left:

            car.left >= 90

              ? 10

              : car.left + 2

        }))

      )

    }, 300)

    return () => clearInterval(interval)

  }, [])

  return (

    <div className="race-map-panel">

      <h2>
        🗺️ Live Race Map
      </h2>

      <div className="track-container">

        <img

          src="/images/monaco-track.png"

          alt="track"

          className="track-map-image"

        />

        {

          cars.map((car) => (

            <div

              key={car.id}

              className="car-marker"

              style={{

                left: `${car.left}%`,

                top: `${car.top}px`,

                backgroundColor: car.color

              }}

            >

              {car.name}

            </div>

          ))

        }

      </div>

      <p>
        📍 Current Circuit:
        {' '}
        Monaco
      </p>

    </div>

  )

}

export default LiveRaceMap
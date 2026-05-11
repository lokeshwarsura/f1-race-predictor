function LiveRaceMap({ probability }) {

  const progress =
    Math.min(probability, 100)

  return (

    <div className="card">

      <h2
        style={{

          color: 'deepskyblue',

          marginBottom: '20px'

        }}
      >
        🗺️ Live Race Map
      </h2>

      <div
        style={{

          position: 'relative',

          width: '100%',

          height: '120px',

          background: '#111',

          borderRadius: '20px',

          overflow: 'hidden',

          border: '2px solid cyan'

        }}
      >

        <div
          style={{

            position: 'absolute',

            top: '50%',

            left: '5%',

            width: '90%',

            height: '6px',

            background: '#444',

            transform: 'translateY(-50%)',

            borderRadius: '10px'

          }}
        >

        </div>

        <div
          style={{

            position: 'absolute',

            top: '38%',

            left: `${progress}%`,

            transform: 'translate(-50%, -50%)',

            fontSize: '36px',

            transition: '0.5s'

          }}
        >
          🏎️
        </div>

      </div>

      <p
        className="stats-text"
        style={{

          marginTop: '20px'

        }}
      >
        Track Progress: {progress}%
      </p>

    </div>

  )

}

export default LiveRaceMap
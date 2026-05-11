function LiveRaceMap({ probability }) {

  const totalLaps = 58

  const currentLap =
    Math.min(
      42 + Math.floor(probability / 5),
      totalLaps
    )

  const progress =
    Math.floor(
      (currentLap / totalLaps) * 100
    )

  let raceEvent = ''

  if (progress >= 90) {

    raceEvent =
      '🏁 Final sector push underway.'

  }

  else if (progress >= 70) {

    raceEvent =
      '⚡ DRS zone activated.'

  }

  else if (progress >= 40) {

    raceEvent =
      '🛞 Tire temperatures stabilizing.'

  }

  else {

    raceEvent =
      '🚦 Race start sequence active.'

  }

  return (

    <div className="card">

      <h2
        style={{

          color: 'deepskyblue',

          marginBottom: '20px'

        }}
      >
        🗺️ Smart Race Map
      </h2>

      <h1
        style={{

          color: 'white',

          marginBottom: '10px',

          fontSize: '38px'

        }}
      >
        LAP
        {' '}
        <span
          style={{
            color: 'cyan'
          }}
        >
          {currentLap}
        </span>
        {' '}
        / {totalLaps}
      </h1>

      <p
        style={{

          color: 'white',

          marginBottom: '25px',

          fontSize: '22px'

        }}
      >
        <span
          style={{
            color: 'cyan'
          }}
        >
          {progress}%
        </span>
        {' '}
        RACE DISTANCE COMPLETED
      </p>

      <div
        style={{

          position: 'relative',

          width: '100%',

          height: '170px',

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

            left: '10%',

            width: '80%',

            height: '14px',

            background:
              'linear-gradient(to right, orange, yellow, violet, lime, gray)',

            transform: 'translateY(-50%)',

            borderRadius: '20px'

          }}
        >

        </div>

        <div
          style={{

            position: 'absolute',

            left: '10%',

            top: '30%',

            color: 'white'

          }}
        >
          🚦 START
        </div>

        <div
          style={{

            position: 'absolute',

            left: '32%',

            top: '30%',

            color: 'yellow',

            fontWeight: 'bold'

          }}
        >
          S1
        </div>

        <div
          style={{

            position: 'absolute',

            left: '57%',

            top: '30%',

            color: 'violet',

            fontWeight: 'bold'

          }}
        >
          S2
        </div>

        <div
          style={{

            position: 'absolute',

            left: '80%',

            top: '30%',

            color: 'lime',

            fontWeight: 'bold'

          }}
        >
          S3
        </div>

        <div
          style={{

            position: 'absolute',

            right: '8%',

            top: '30%',

            color: 'red',

            fontWeight: 'bold'

          }}
        >
          🏁 FINISH
        </div>

        <div
          style={{

            position: 'absolute',

            top: '50%',

            left: `${10 + (progress * 0.8)}%`,

            transform:
              'translate(-50%, -50%)',

            fontSize: '40px',

            transition: '1s linear'

          }}
        >
          🏎️
        </div>

        <div
          style={{

            position: 'absolute',

            bottom: '15px',

            left: '10%',

            color: 'white'

          }}
        >
          0%
        </div>

        <div
          style={{

            position: 'absolute',

            bottom: '15px',

            left: '31%',

            color: 'white'

          }}
        >
          33%
        </div>

        <div
          style={{

            position: 'absolute',

            bottom: '15px',

            left: '56%',

            color: 'white'

          }}
        >
          66%
        </div>

        <div
          style={{

            position: 'absolute',

            bottom: '15px',

            right: '8%',

            color: 'white'

          }}
        >
          100%
        </div>

      </div>

      <h2
        style={{

          color: 'cyan',

          marginTop: '25px'

        }}
      >
        TRACK POSITION:
        {' '}
        {progress}%
      </h2>

      <div
        style={{

          marginTop: '20px',

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

            color: 'cyan',

            lineHeight: '1.8',

            fontSize: '17px'

          }}
        >
          {raceEvent}
        </p>

      </div>

    </div>

  )

}

export default LiveRaceMap
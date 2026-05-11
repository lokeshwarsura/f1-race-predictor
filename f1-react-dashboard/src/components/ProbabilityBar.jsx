function ProbabilityBar({ probability }) {

  return (

    <div className="probability-container">

      <div
        className="probability-fill"
        style={{
          width: `${probability}%`
        }}
      >

      </div>

    </div>

  )

}

export default ProbabilityBar
function ProbabilityBar({

  probability

}) {

  return (

    <div className="bar-container">

      <div
        className="bar"
        style={{
          width: `${probability}%`
        }}
      >

      </div>

    </div>

  )

}

export default ProbabilityBar
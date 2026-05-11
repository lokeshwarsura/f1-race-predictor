function ProbabilityBar({ probability }) {

  return (

    <div
      style={{
        width: '350px',
        height: '35px',
        background: '#333',
        borderRadius: '20px',
        overflow: 'hidden',
        marginTop: '10px'
      }}
    >

      <div
        style={{
          width: `${probability}%`,
          height: '100%',
          background: 'red',
          transition: '0.5s'
        }}
      />

    </div>

  )

}

export default ProbabilityBar
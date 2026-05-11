import { useState } from 'react'

function App() {

  const [probability, setProbability] = useState(0)

  function predictWinner() {

    setProbability(78.42)

  }

  return (

    <div
      style={{
        background: 'black',
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
      }}
    >

      <h1
        style={{
          color: 'white',
          fontSize: '48px'
        }}
      >
        🏎️ F1 React Dashboard
      </h1>

      <button
        onClick={predictWinner}
        style={{
          padding: '15px 30px',
          fontSize: '20px',
          background: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
      >
        Predict Winner
      </button>

      <h2
        style={{
          color: 'yellow',
          fontSize: '32px'
        }}
      >
        Win Probability: {probability}%
      </h2>

    </div>

  )

}

export default App
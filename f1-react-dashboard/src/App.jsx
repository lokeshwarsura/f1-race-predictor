import { useState } from 'react'

function App() {

  const [probability, setProbability] = useState(0)

  async function predictWinner() {

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
        alignItems: 'center'
      }}
    >

      <h1>🏎️ F1 React Dashboard</h1>

      <button
        onClick={predictWinner}
        style={{
          padding: '15px 25px',
          fontSize: '18px',
          cursor: 'pointer'
        }}
      >
        Predict Winner
      </button>

      <h2>
        Win Probability: {probability}%
      </h2>

    </div>

  )

}

export default App
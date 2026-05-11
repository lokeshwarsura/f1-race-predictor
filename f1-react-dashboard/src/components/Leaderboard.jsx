function Leaderboard({

  leaderboardData

}) {

  return (

    <div>

      <h2>
        🏁 Live Leaderboard
      </h2>

      <table>

        <thead>

          <tr>

            <th>Position</th>

            <th>Driver</th>

            <th>Win Probability</th>

          </tr>

        </thead>

        <tbody>

          {leaderboardData.map(
            (entry, index) => (

            <tr key={index}>

              <td>
                {index + 1}
              </td>

              <td>
                {entry.driver}
              </td>

              <td>
                {entry.probability}%
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )

}

export default Leaderboard
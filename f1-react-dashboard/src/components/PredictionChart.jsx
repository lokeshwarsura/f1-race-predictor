import {

  Line

} from 'react-chartjs-2'

import {

  Chart as ChartJS,

  CategoryScale,

  LinearScale,

  PointElement,

  LineElement,

  Title,

  Tooltip,

  Legend

} from 'chart.js'

ChartJS.register(

  CategoryScale,

  LinearScale,

  PointElement,

  LineElement,

  Title,

  Tooltip,

  Legend

)

function PredictionChart({

  leaderboardData

}) {

  const data = {

    labels:

      leaderboardData.map(

        (entry, index) =>

          `Prediction ${index + 1}`

      ),

    datasets: [

      {

        label:

          'Win Probability %',

        data:

          leaderboardData.map(

            (entry) =>

              entry.probability

          ),

        borderColor: 'red',

        backgroundColor:

          'rgba(255,0,0,0.2)',

        tension: 0.4

      }

    ]

  }

  const options = {

    responsive: true,

    plugins: {

      legend: {

        labels: {

          color: 'white'

        }

      }

    },

    scales: {

      x: {

        ticks: {

          color: 'white'

        }

      },

      y: {

        ticks: {

          color: 'white'

        }

      }

    }

  }

  return (

    <div
      style={{
        width: '800px',
        margin: '40px auto'
      }}
    >

      <Line

        data={data}

        options={options}

      />

    </div>

  )

}

export default PredictionChart
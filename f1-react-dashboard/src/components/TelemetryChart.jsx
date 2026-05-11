import {

  LineChart,

  Line,

  XAxis,

  YAxis,

  CartesianGrid,

  Tooltip,

  ResponsiveContainer

} from 'recharts'

function TelemetryChart({

  telemetryHistory

}) {

  return (

    <div className="chart-panel">

      <h2>
        📈 Speed Telemetry
      </h2>

      <ResponsiveContainer

        width="100%"

        height={300}

      >

        <LineChart

          data={telemetryHistory}

        >

          <CartesianGrid stroke="#333" />

          <XAxis dataKey="time" />

          <YAxis />

          <Tooltip />

          <Line

            type="monotone"

            dataKey="speed"

            stroke="#ff0000"

            strokeWidth={3}

          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  )

}

export default TelemetryChart
import {

  useEffect,

  useState

} from 'react'

function SectorAnalysis() {

  const [sectorData,

    setSectorData] = useState({})

  function formatLapTime(totalSeconds) {

    const minutes = Math.floor(

      totalSeconds / 60

    )

    const seconds = (

      totalSeconds % 60

    ).toFixed(3)

    return `${minutes}:${seconds.padStart(6, '0')}`

  }

  function generateSectorData() {

    const sector1 = (

      Math.random() * 10 + 28

    ).toFixed(3)

    const sector2 = (

      Math.random() * 10 + 35

    ).toFixed(3)

    const sector3 = (

      Math.random() * 10 + 24

    ).toFixed(3)

    const total = (

      Number(sector1) +

      Number(sector2) +

      Number(sector3)

    ).toFixed(3)

    const formattedLap =

      formatLapTime(

        Number(total)

      )

    setSectorData({

      sector1,

      sector2,

      sector3,

      total: formattedLap

    })

  }

  useEffect(() => {

    generateSectorData()

    const interval = setInterval(

      generateSectorData,

      5000

    )

    return () => clearInterval(

      interval

    )

  }, [])

  return (

    <div className="sector-panel">

      <h2>
        ⏱️ Sector Analysis
      </h2>

      <p>
        Sector 1:
        {' '}
        {sectorData.sector1}s
      </p>

      <p>
        Sector 2:
        {' '}
        {sectorData.sector2}s
      </p>

      <p>
        Sector 3:
        {' '}
        {sectorData.sector3}s
      </p>

      <h3>
        Fast Lap:
        {' '}
        {sectorData.total}
      </h3>

    </div>

  )

}

export default SectorAnalysis
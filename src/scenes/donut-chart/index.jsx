import { Box } from '@mui/material'
import Header from '../../components/Header'
import { DonutChart as DonutChartComponent } from "../../components/Charts/DonutChart"

const DonutChart = () => {
  return (
    <>
      <Header title="DONUT CHART" subtitle="Donut Chart - Distribution of Activities by Category" />
      <Box display="flex" flexDirection="column" sx={{ width:"100%", height: "75vh" }}>
        <DonutChartComponent isDashboard={false} />
      </Box>
    </>
  )
}

export default DonutChart

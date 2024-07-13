import { Box } from '@mui/material'
import Header from '../../components/Header'
import { LineChart as LineChartComponent } from "../../components/Charts/LineChart"

const LineChart = () => {
  return (
    <>
    <Header title="LINE CHART" subtitle="Line Chart - Transportation Usage Comparison Across Countries" />
    <Box display="flex" flexDirection="column" height={{ xs: "40vh", md: "75vh" }} width={{ xs: "115%", md: "100%" }}>
        <LineChartComponent isDashboard={false} />
      </Box>
    </>
  )
}

export default LineChart

import { Box } from '@mui/material'
import Header from '../../components/Header'
import { BarChart as  BarChartComponent } from "../../components/Charts/BarChart"

const BarChart = () => {
  return (
    <>
      <Header title="BAR CHART" subtitle="Stacked Bar Chart - Food Consumption by Country" />
      <Box display="flex" flexDirection="column" height={{ xs: "50vh", md: "75vh" }} width={{ xs: "125%", md: "100%" }}>
        <BarChartComponent isDashboard={false} />
      </Box>
    </>
  )
}

export default BarChart

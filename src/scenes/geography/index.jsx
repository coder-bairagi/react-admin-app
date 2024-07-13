import { Box } from '@mui/material'
import { GeographyChart } from "../../components/Charts/GeographyChart"
import { useTheme } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header'

const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <>
            <Header title="GEOGRAPHY CHART" subtitle="Geography Chart - A Choropleth Map" />
            <Box display="flex" flexDirection="column" border={`1px solid ${colors.grey[100]}`} borderRadius="4px" sx={{ width: "100%", height: "75vh" }}>
                <GeographyChart isDashboard={false} />
            </Box>
        </>
    )
}

export default Geography

import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { DataGrid } from '@mui/x-data-grid'
import { mockDataTeam } from '../../data/mockData'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import Header from '../../components/Header'

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            minWidth: 150,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
            minWidth: 150,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
            minWidth: 200,
        },
        {
            field: "access",
            headerName: "Access Level",
            flex: 1,
            minWidth: 150,
            renderCell: ({ row: { access } }) => {
                return (
                    <Box width="60%" marginTop="10px" p="5px" display="flex" justifyContent="center" backgroundColor={access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]} borderRadius="4px">
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <LockOpenOutlinedIcon />}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {access}
                        </Typography>
                    </Box>
                )
            }
        }
    ]

    return (
        <>
            <Header title="TEAM" subtitle="Managing the Team Members" />
            <Box m="40px 0 0 0" height="95vh" width="100%" sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                    overflowX: "hidden",
                },
                "& .MuiDataGrid-columnHeaderTitle": {
                    color: colors.greenAccent[300],
                    fontWeight: "bold",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                }
            }}>
                <DataGrid rows={mockDataTeam} columns={columns} />
            </Box>
        </>
    )
}

export default Team

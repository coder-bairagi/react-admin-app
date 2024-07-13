import React from 'react'
import { Box, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { mockDataContacts } from '../../data/mockData'
import Header from '../../components/Header'

const Contact = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID" },
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
            field: "address",
            headerName: "Address",
            flex: 1,
            minWidth: 250,
        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
            minWidth: 150,
        },
        {
            field: "zipCode",
            headerName: "Zip Code",
            flex: 1,
            minWidth: 100,
        },
    ]

    return (
        <>
            <Header title="CONTACTS" subtitle="List of Contacts for Future References" />
            <Box m="40px 0 0 0" height="95vh" width="100%" sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
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
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: colors.grey[100],
                }
            }}>
                <DataGrid rows={mockDataContacts} columns={columns} slots={{ toolbar: GridToolbar }}/>
            </Box>
        </>
    )
}

export default Contact

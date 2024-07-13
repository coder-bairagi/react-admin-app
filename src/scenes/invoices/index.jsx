import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import { DataGrid } from '@mui/x-data-grid'
import { mockDataInvoices } from '../../data/mockData'
import Header from '../../components/Header'

const Invoices = () => {
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
            field: "cost",
            headerName: "Cost",
            flex: 1,
            minWidth: 100,
            renderCell: ({ row: { cost } }) => {
                return (<Typography marginTop="14px" color={colors.greenAccent[500]}>{cost}</Typography>)
            }
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1,
            minWidth: 100,
        }
    ]

    return (
        <>
            <Header title="INVOICES" subtitle="List of Invoice Balances" />
            <Box m="40px 0 0 0" height="95vh" sx={{
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
                },
                "& .MuiCheckbox-root": {
                    color: colors.greenAccent[200],
                },
                "& .Mui-checked": {
                    color: colors.greenAccent[200],
                },
            }}>
                <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns}/>
            </Box>
        </>
    )
}

export default Invoices

import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { data } from "../../data/data.js";
import { format } from "date-fns";

const Donations = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "amount",
      headerName: "$ Amount",
      flex: 0.5,
       renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(params.row.amount.toFixed(2))}
        </Typography> )
    },
    {
      field: "paid_at",
      headerName: "Donation Date",
      flex: 1,
      renderCell: (params) =>
        format(new Date(params.row.paid_at), "yyyy-MM-dd"),
    },
    {
      field: "refcode",
      headerName: "RefCode",
      flex: 1,
    },
    {
      field: "recurring_period",
      headerName: "Recurring",
      flex: 0.5,
    },
    {
      field: "recurring_duration",
      headerName: "Duration",
      flex: 0.5,
    },
    {
      field: "order_number",
      headerName: "Order Number",
      flex: 0.5,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="DONATIONS" subtitle="Most recent donations"/>
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            // border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.primary.dark,
            color: "#fcfcfc",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.primary.dark,
            color: "#fcfcfc",
            // borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          //   getRowId={(row) => row._id}
          initialState={{
            sorting: {
              sortModel: [
                {
                  field: "paid_at",
                  sort: "desc",
                },
              ],
            },
          }}
          rows={data}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Donations;

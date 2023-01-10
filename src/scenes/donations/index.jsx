import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetDonationsQuery } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";

const Donations = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetDonationsQuery();
  console.log("data", data);

  const columns = [
    {
      field: "amount",
      headerName: "$ Amount",
      flex: 0.5,
    },
    {
      field: "paid_at",
      headerName: "Donation Date",
      flex: 1,
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
      <Header title="DONATIONS" subtitle="Filter Donations Client-Side" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Donations;

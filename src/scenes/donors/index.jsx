import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetDonorsQuery } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";

const Donors = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetDonorsQuery();

  const columns = [
    {
      field: "refcode",
      headerName: "RefCode",
      flex: .5,
    },
    {
      field: "paid_at",
      headerName: "Donation Date",
      flex: 1,
    },
    {
      field: "donor_firstname",
      headerName: "First",
      flex: 0.5,
    },
    {
      field: "donor_lastname",
      headerName: "Last",
      flex: 0.5,
    },
    {
      field: "donor_phone",
      headerName: "Phone",
      flex: 0.5,
    },
    {
      field: "donor_city",
      headerName: "City",
      flex: 0.4,
    },

  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="DONORS" subtitle="Filter Donors Client-Side" />
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

export default Donors;
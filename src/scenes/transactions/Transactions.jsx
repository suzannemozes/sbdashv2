import React, { useState } from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { data } from "../../data/data";
import DataGridCustomToolbar from "../../components/DataGridCustomToolbar";
import { format, parse } from "date-fns";

const Transactions = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");

  const [searchInput, setSearchInput] = useState("");
  const columns = [
    { field: "unique_identifier", headerName: "Unique Identifier" },
    {
      field: "order_number",
      headerName: "Order Number",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "paid_at",
      headerName: "Date of Payment",
      flex: 1,
      type: "string",
      renderCell: (params) =>
        format(new Date(params.row.paid_at), "yyyy-MM-dd"),
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(params.row.amount.toFixed(2))}
        </Typography>
      ),
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Transactions" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        backgroundColor={colors.greenAccent[500]}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={data}
          columns={columns}
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
          rowsPerPageOptions={[20, 50, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
        />
      </Box>
    </Box>
  );
};

export default Transactions;

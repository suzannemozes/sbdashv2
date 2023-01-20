import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { data } from "../../data/data.js";
import { format } from "date-fns";
import { red } from "@mui/material/colors";

const Donors = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "refcode",
      headerName: "RefCode",
      flex: 0.25,
    },
    {
      field: "paid_at",
      headerName: "Donation Date",
      flex: 0.5,
      type: "string",
      renderCell: (params) =>
        format(new Date(params.row.paid_at), "MM/dd/yyyy"),
    },
    {
      field: "donor_firstname",
      headerName: "First",
      flex: 0.25,
      
    },
    {
      field: "donor_lastname",
      headerName: "Last",
      flex: 0.15,
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
      <Header title="DONORS" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            // border: "none",
          },
          "& .MuiDataGrid-cell": {
            // borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            // borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            // borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          getRowId={(row) => row.id}
          initialState={{
            sorting: {
              sortModel: [
                {
                  field: "paid_at",
                  sort: "desc",
                },
              ],
            },
            // filter: {
            //   filterModel: {
            //     items : [
            //       {
            //         // columnField: "refcode",
            //         // operatorValue: '=',
            //         // value: 'eel'
            //       }
            //     ]
            //   }
            // }
          }}
          rows={data}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Donors;

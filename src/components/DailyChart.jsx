import React, { useState, useEffect, useMemo, useTable } from "react";
import axios from "axios";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { data } from "../data/data";
import StatBox from "../components/StatBox";
import DailyStatBox from "./DailyStatBox";
import {
  TrafficOutlined,
  EmailOutlined,
  PointOfSaleOutlined,
  PersonAddAlt1Outlined,
} from "@mui/icons-material";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DailyChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [totalDailyAmount, setTotalDailyAmount] = useState(0);

  useEffect(() => {
    let sum = 0;
    data.forEach((item) => {
      const paidDate = new Date(item.paid_at);
      if (
        format(paidDate, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
      ) {
        sum += item.amount;
      }
    });
    setTotalDailyAmount(sum);
  }, [selectedDate]);

  // TALLY FOR FILTERED DATA NOT FUNCTIONING
  // const [filteredData, setFilteredData] = useState(data);
  // const [totalAmount, setTotalAmount] = useState(0);

  // useEffect(() => {
  //   setTotalAmount(filteredData.reduce((acc, curr) => acc + curr.amount, 0));
  // }, [filteredData]);

  // const handleFilter = (column, value) => {
  //   const filteredData = data.filter((row) => row[column] === value);
  //   setFilteredData(filteredData);
  // };

  const columns = [
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.5,
    },
    {
      field: "refcode",
      headerName: "RefCode",
      flex: 0.5,
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
      field: "donor_city",
      headerName: "City",
      flex: 0.4,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Box mb="1rem">
        <Typography>Total: {totalDailyAmount}</Typography>
      </Box>
      <Box>
        <DatePicker >
          
        </DatePicker>
      </Box>
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
          // rows={filteredData}
          rows={data}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
          initialState={{
            sorting: {
              sortModel: [
                {
                  field: "amount",
                  sort: "desc",
                },
              ],
            },
            filter: {
              filterModel: [
                {
                  columnField: "paid_at",
                  operatorValue: "=",
                  value: {selectedDate},
                }
              ]
            }
          }}
          // onFilter={handleFilter}
        />
      </Box>
    </Box>
  );
};

export default DailyChart;

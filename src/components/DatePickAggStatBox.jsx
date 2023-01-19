import React, { useState, useEffect, useMemo, useTable } from "react";
import axios from "axios";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { data } from "../data/data";
import StatBox from "../components/StatBox";
import { format } from "date-fns";

const DatePickAggStatBox = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const columns = [
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
      field: "amount",
      headerName: "Amount",
      flex: 0.5,
    },
    {
      field: "donor_city",
      headerName: "City",
      flex: 0.4,
    },
  ];

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
    setTotalAmount(sum);
  }, [selectedDate]);

  return (
    <Box>
      <Typography
        id="date"
        label="Select Date"
        type="date"
        value={format(selectedDate, "yyyy-MM-dd")}
        onChange={(e) => setSelectedDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Box display="flex" justifyContent="flex-end" m={1}>
        <Box m={1}>
          <Typography variant="subtitle2">
            Total Amount: ${totalAmount}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DatePickAggStatBox;

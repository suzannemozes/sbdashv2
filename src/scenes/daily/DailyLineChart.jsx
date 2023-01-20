import React, { useMemo, useState } from "react";
import Header from "../../components/Header";
import { ResponsiveLine } from "@nivo/line";
import { data } from "../../data/data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { format } from "date-fns";
import TotalAggStatBox from "../../components/TotalAggStatBox";
import DailyStatBox from "../../components/DailyStatBox";
import MonthlyAggStatBox from "../../components/MonthlyAggStatBox";
import WeeklyAggStatBox from "../../components/WeeklyStatBox";

const DailyLineChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date("2021-05-01"));
  const [endDate, setEndDate] = useState(new Date("2021-10-31"));

  const amounts = data.map((item) => item.amount);
  const amountCounts = {};
  amounts.forEach((id) => {
    if (!amountCounts[id]) {
      amountCounts[id] = 1;
    } else {
      amountCounts[id] += 1;
    }
  });

  const chartData = Object.keys(amountCounts).map((key) => ({
    id: key,
    label: key,
    value: amountCounts[key],
  }));
  console.log("chartData", chartData);

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="DAILY COUNTS"
        subtitle={`Today is ${currentDate.toLocaleDateString()}`}
      />
      <Box height="75vh">
        <Box display="flex" justifyContent="flex-end">
          <Box>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
          </Box>
          <Box>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
          >
            <DailyStatBox />
            <WeeklyAggStatBox />
            <MonthlyAggStatBox />
            <TotalAggStatBox />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DailyLineChart;

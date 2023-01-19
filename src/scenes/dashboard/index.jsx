import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { data } from "../../data/data";
import TotalAggStatBox from "../../components/TotalAggStatBox";
import DailyStatBox from "../../components/DailyStatBox";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  return (
    <Box m="20px">
      <Header title="DASHBOARD" />

      <Typography>Select today's date:</Typography>
      <Header subtitle={`Today is ${currentDate.toLocaleDateString()}`} />

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          <DailyStatBox />
          <TotalAggStatBox />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

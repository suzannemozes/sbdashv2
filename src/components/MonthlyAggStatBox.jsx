import React, { useState, useEffect } from "react";
import { data } from "../data/data";
import StatBox from "../components/StatBox";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { MonetizationOnOutlined } from "@mui/icons-material";
import { format, parse, isBetween } from "date-fns";


const MonthlyAggStatBox = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

 useEffect(() => {
   const startDate = new Date("2021-09-01");
   const endDate = new Date("2021-09-30");
   const filteredData = data.filter((item) => {
     const paidAtDate = new Date(item.paid_at);
     return paidAtDate >= startDate && paidAtDate <= endDate;
   });

   const totalAmount = filteredData.reduce((acc, curr) => acc + curr.amount, 0);
   setTotalAmount(totalAmount);
 }, []);

  return (
    <Box
      gridColumn="span 3"
      backgroundColor={colors.primary[400]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <StatBox
        title={new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(totalAmount.toFixed(2))}
        subtitle="Last Month"
        progress="0.75"
        increase="+14%"
        icon={
          <MonetizationOnOutlined
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        }
      />
    </Box>
  );
};

export default MonthlyAggStatBox;

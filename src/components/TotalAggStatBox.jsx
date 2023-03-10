import React, { useState, useEffect } from "react";
import { data } from "../data/data";
import StatBox from "../components/StatBox";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { MoneyOutlined } from "@mui/icons-material";

const TotalAggStatBox = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    let sum = 0;
    data.forEach((item) => {
       sum += item.amount;
    });
    setTotalAmount(sum);
  }, []);

  const increase = () => {
    
  }

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
        subtitle="All Time"
        progress="0.75"
        increase="+14%"
        icon={
          <MoneyOutlined
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        }
      />
    </Box>
  );
};

export default TotalAggStatBox;

import React, { useState, useEffect, handleClick } from "react";
import { data } from "../data/data";
import StatBox from "../components/StatBox";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { PointOfSaleOutlined } from "@mui/icons-material";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DailyStatBox = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [totalDailyAmount, setTotalDailyAmount] = useState(0);
  const [totalYesterdayAmount, setTotalYesterdayAmount] = useState(0);
  const [refcode, setRefcode] = useState("");

  useEffect(() => {
    let sum = 0;
    let yesterdaySum = 0;
    const yesterday = new Date(selectedDate);
    yesterday.setDate(yesterday.getDate() - 1);

    data.forEach((item) => {
      const paidDate = new Date(item.paid_at);
      if (
        format(paidDate, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
      ) {
        sum += item.amount;
      }
      if (format(paidDate, "yyyy-MM-dd") === format(yesterday, "yyyy-MM-dd")) {
        yesterdaySum += item.amount;
      }
    });
    setTotalDailyAmount(sum);
    setTotalYesterdayAmount(yesterdaySum);
  }, [selectedDate]);

   const filteredData = data.filter((item) => item.refcode === refcode);

  return (
    <Box
      gridColumn="span 3"
      backgroundColor={colors.primary[400]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <StatBox
        onClick={() => handleClick()}
        title={new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(totalDailyAmount.toFixed(2))}
        subtitle={`Donations TODAY`}
        // subtitle="Donations TODAY"
        progress="0.50"
        increase={`${totalDailyAmount > totalYesterdayAmount ? "+" : "-"} ${Math.abs(
          totalDailyAmount / totalYesterdayAmount
        )}%`}
        icon={
          <PointOfSaleOutlined
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        }
      />
    </Box>
  );
};

export default DailyStatBox;
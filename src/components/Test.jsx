import React, { useState, useEffect, handleClick } from "react";
import { data } from "../data/data";
import StatBox from "../components/StatBox";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { PointOfSaleOutlined } from "@mui/icons-material";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DonationTally = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [donations, setDonations] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleDonationsChange = (newDonations) => {
    setDonations(newDonations);
  };

  const handleSubmit = () => {
    let filteredDonations = donations.filter((donation) => {
      return donation.date >= startDate && donation.date <= endDate;
    });

    let total = filteredDonations.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
    setTotalAmount(total);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        placeholderText="Start date"
      />
      <DatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        placeholderText="End date"
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>Total Amount: {totalAmount}</p>
    </div>
  );
};

export default DonationTally;

import { Box } from "@mui/material";
import Header from "../../components/Header";
import DailyChart from "../../components/DailyChart";
import DatePickAggStatBox from "../../components/DatePickAggStatBox";

const Daily = () => {
  return (
    <Box m="20px">
      <Header title="Daily Chart" subtitle="Daily Totals" />
      <Box height="75vh">
        <DailyChart />
        {/* <DatePickAggStatBox /> */}
      </Box>
    </Box>
  );
};

export default Daily;

import React, { useMemo } from "react";
// import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { useGetStatsQuery } from "state/api";

//default view is dashboard so this is not dashboard
const Stats = ({ isDashboard = false, view }) => {
//   const theme = useTheme();
//   const { data, isLoading } = useGetStatsQuery();
//   console.log("data", data);

//    const [totalStatesLine, totalUnitsLine] = useMemo(() => {
//     if (!data) return [];

//     const { monthlyData } = data;
//     const totalStatsLine = {
//       id: "totalStats",
//       color: theme.palette.secondary.main,
//       data: [],
//     };
//     const totalUnitsLine = {
//       id: "totalUnits",
//       color: theme.palette.secondary[600],
//       data: [],
//     };


  return <div>Overview</div>;
};

export default Stats;

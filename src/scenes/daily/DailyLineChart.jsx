import React, { useMemo, useState, useEffect } from "react";
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
import { parse } from "date-fns";

const DailyLineChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date("2021-05-01"));
  const [endDate, setEndDate] = useState(new Date("2021-10-31"));
  // const [chartData, setChartData]=useState()

  // useEffect(() => {
  //   const filteredData = data.filter((item) => {
  //     const paidAtDate = new Date(item.paid_at);
  //     return paidAtDate >= startDate && paidAtDate <= endDate;
  //   });
  //   const groupedData = groupBy(filteredData, (d) =>
  //     format(parse(d.paid_at), "yyyy-MM-dd")
  //   );
  //   const chartData = Object.keys(groupedData).map((key) => ({
  //     x: key,
  //     y: groupedData[key].length,
  //   }));
  //   setChartData(chartData);
  // }, [startDate, endDate]);

  const filteredData = data.filter((item) => {
    const paidAtDate = parse(item.paid_at, "yyyy-MM-dd", new Date());
    return paidAtDate >= startDate && paidAtDate <= endDate;
  });
  const donationCount = filteredData.map((item) => {
    return {
      date: parse(item.paid_at, "yyyy-MM-dd", new Date()),
      count: 1,
    };
  });

  console.log('filteredData', filteredData);

  const aggregatedDonations = donationCount.reduce((acc, curr) => {
    const existing = acc.find((item) => item.date === curr.date);
    if (existing) {
      existing.count += curr.count;
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
  

  const chartData = aggregatedDonations.map((item) => {
    return {
      x: item.date.toLocaleDateString(),
      y: item.count,
    };
  });

  console.log("chartData", chartData)

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
        {data ? (
          <ResponsiveLine
            data={chartData}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: theme.palette.secondary[200],
                  },
                },
                legend: {
                  text: {
                    fill: theme.palette.secondary[200],
                  },
                },
                ticks: {
                  line: {
                    stroke: theme.palette.secondary[200],
                    strokeWidth: 1,
                  },
                  text: {
                    fill: theme.palette.secondary[200],
                  },
                },
              },
              legends: {
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
              tooltip: {
                container: {
                  color: theme.palette.primary.main,
                },
              },
            }}
            colors={{ datum: "color" }}
            margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: false,
              reverse: false,
            }}
            yFormat=" >-.2f"
            curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 90,
              legend: "Month",
              legendOffset: 60,
              legendPosition: "middle",
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Total",
              legendOffset: -50,
              legendPosition: "middle",
            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: "top-right",
                direction: "column",
                justify: false,
                translateX: 50,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        ) : (
          <>Loading...</>
        )}
      </Box>
    </Box>
  );
};

export default DailyLineChart;

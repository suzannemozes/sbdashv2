import { ResponsiveBar } from "@nivo/bar";
import { data } from "../data/data";

const BarChart = ({ isDashboard = false }) => {

  const refcodes = data.map((item) => item.refcode);
  const refcodeCounts = {};
  refcodes.forEach((refcode) => {
    if (!refcodeCounts[refcode]) {
      refcodeCounts[refcode] = 1;
    } else {
      refcodeCounts[refcode] += 1;
    }
  });

  const chartData = Object.keys(refcodeCounts).map((key) => ({
    refcode: key,
    count: refcodeCounts[key],
  }));

  return (
    <ResponsiveBar
      data={chartData}
      keys={["count"]}
      indexBy="refcode"
      margin={{ top: 20, right: 130, bottom: 50, left: 60 }}
      padding={0.5}
      colors={{ scheme: "category10" }}
      labelTextColor={{
        from: "#000000",
      }}
      colorBy="indexValue"
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#38bcb2",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [
          ["darker", 0.6],
          ["opacity", 0.5],
        ],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "RefCode",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Count",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={true}
      labelSkipWidth={12}
      labelSkipHeight={12}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 0,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + ": " + e.indexValue;
      }}
    />
  );
};

export default BarChart;

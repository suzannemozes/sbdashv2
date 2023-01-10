import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";
import Header from "components/Header";
import OverviewChart from "components/Stats";

const Stats = () => {
  const [view, setView] = useState("units");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="OVERVIEW STATS" />
      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>STATE</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="AK">AK</MenuItem>
            <MenuItem value="AZ">AZ</MenuItem>
            <MenuItem value="CA">CA</MenuItem>
            <MenuItem value="CO">CO</MenuItem>
            <MenuItem value="CT">CT</MenuItem>
            <MenuItem value="FL">FL</MenuItem>
            <MenuItem value="GA">GA</MenuItem>
            <MenuItem value="IL">IL</MenuItem>
            <MenuItem value="IN">IN</MenuItem>
            <MenuItem value="KY">KY</MenuItem>
            <MenuItem value="LA">LA</MenuItem>
            <MenuItem value="MA">MA</MenuItem>
            <MenuItem value="MD">MD</MenuItem>
            <MenuItem value="MI">MI</MenuItem>
            <MenuItem value="MN">MN</MenuItem>
            <MenuItem value="MO">MO</MenuItem>
            <MenuItem value="NE">NE</MenuItem>
            <MenuItem value="NJ">NJ</MenuItem>
            <MenuItem value="NV">NV</MenuItem>
            <MenuItem value="NY">NY</MenuItem>
            <MenuItem value="OK">OK</MenuItem>
            <MenuItem value="OR">OR</MenuItem>
            <MenuItem value="PA">PA</MenuItem>
            <MenuItem value="PR">PR</MenuItem>
            <MenuItem value="SC">SC</MenuItem>
            <MenuItem value="TN">TN</MenuItem>
            <MenuItem value="TX">TX</MenuItem>
            <MenuItem value="UT">UT</MenuItem>
            <MenuItem value="VA">VA</MenuItem>
            <MenuItem value="WA">WA</MenuItem>
            <MenuItem value="WI">WI</MenuItem>
            <MenuItem value="WV">WV</MenuItem>
            <MenuItem value="WY">WY</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default Stats;

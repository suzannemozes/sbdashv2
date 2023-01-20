import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Navbar from "./scenes/global/Navbar";
import Sidebar from "./scenes/global/Sidebar";
// import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
import Donors from "./scenes/donors/Donors"
import Donations from "./scenes/donations/Donations";
import Transactions from "./scenes/transactions/Transactions.jsx";
import Bar from "./scenes/bar/index.jsx"
import Pie from "./scenes/pie/index.jsx";
// import Stats from "./scenes/stats/Stats";
import DailyLineChart from "./scenes/daily/DailyLineChart";
// import Geo from "./scenes/geo/index";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Navbar setIsSidebar={setIsSidebar} />
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/donors" element={<Donors />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/daily" element={<DailyLineChart />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Navbar from "./scenes/global/Navbar";
import Sidebar from "./scenes/global/Sidebar";
// import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
// import Donors from "./scenes/donors/index";
// import Donations from "./scenes/donations/index";
// import Transactions from "./scenes/transactions/index";
// import Stats from "./scenes/stats/index";
// import Daily from "./scenes/daily/index";
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
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
              {/* <Route path="/donors" element={<Donors />} /> */}
              {/* <Route path="/donations" element={<Donations />} /> */}
              {/* <Route path="/transactions" element={<Transactions />} /> */}
              {/* <Route path="/stats" element={<Stats />} /> */}
              {/* <Route path="/daily" element={<Daily />} /> */}
              {/* <Route path="/geo" element={<Geo />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

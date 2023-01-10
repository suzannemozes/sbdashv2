import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Donors from "scenes/donors";
import Donations from "scenes/donations";
import Transactions from "scenes/transactions";
import Stats from "scenes/stats";
import Daily from "scenes/daily";
import Geo from "scenes/geo";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/donors" element={<Donors />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/geo" element={<Geo />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

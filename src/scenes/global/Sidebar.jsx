import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  Groups2Outlined,
  PublicOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  CalendarTodayOutlined,
  PieChartOutlined,
  BarChartOutlined,
  VolunteerActivismOutlined,
  AttachMoneyOutlined,
  TimelineOutlined,
  MenuOutlined,
  MapOutlined,
} from "@mui/icons-material";
import Beshear from "../../assets/Beshear.png";
import FlexBetween from "../../components/FlexBetween";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.greenAccent[400],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      height="100%"
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box width="100%">
                <Box m="1.5rem 2rem 2rem 3rem">
                  <FlexBetween color={theme.palette.secondary.main}>
                    <Box display="flex" alignItems="center" gap="0.5rem">
                      <Box
                        component="img"
                        alt="bashear logo"
                        src={Beshear}
                        width="120px"
                        sx={{ objectFit: "cover" }}
                      />
                    </Box>

                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                      <ChevronLeft />
                    </IconButton>
                  </FlexBetween>
                </Box>
              </Box>
            )}
          </MenuItem>
<Divider />
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <FlexBetween />
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              color={colors.grey[100]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              CONTRIBUTIONS
            </Typography>
            <Item
              title="Donors"
              to="/donors"
              icon={<Groups2Outlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Donations"
              to="/donations"
              icon={<VolunteerActivismOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Transactions"
              to="/transactions"
              icon={<AttachMoneyOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              color={colors.grey[100]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              STATS
            </Typography>
            <Item
              title="Daily"
              to="/daily"
              icon={<TodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Last 7 Days"
              to="/weekly"
              icon={<CalendarTodayOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Last 30 Days"
              to="/monthly"
              icon={<CalendarMonthOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h5"
              color={colors.grey[100]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              CHARTS
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;

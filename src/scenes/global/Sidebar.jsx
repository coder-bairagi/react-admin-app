import { useState } from 'react';
import PropTypes from 'prop-types';
import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import LineAxisOutlinedIcon from '@mui/icons-material/LineAxisOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { tokens } from '../../theme';
import { shadeColor } from '../../helper';

const Item = ({ title, to, icon, selected, setSelected, isMobile, setIsCollapsed }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box paddingLeft="2px">
      <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
        <MenuItem
          active={selected === title}
          style={{ color: colors.grey[100] }}
          onClick={() => {
            setSelected(title)
            if (isMobile) {
              setIsCollapsed(true)
            }
          }}
          icon={icon}
        >
          <Typography>{title}</Typography>
        </MenuItem>
      </Link>
    </Box>
  );
};

const Sidebar = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const menuHoverColor = theme.palette.mode === "dark" ? shadeColor(colors.primary[400], 30) : shadeColor(colors.primary[400], -20);

  return (
    <>
      {(!props.isMobile || !props.isCollapsed) &&
        <ProSidebar
          collapsed={props.isCollapsed}
          backgroundColor={colors.primary[400]}
          style={props.isMobile && !props.isCollapsed ?
            {
              position: "absolute",
              width: "50%",
              height: "100vh",
              zIndex: "1000",
              top: "0",
              left: "0",
            } : {}
          }
        >
          <Menu iconShape="square" menuItemStyles={{
            button: ({ active }) => {
              if (active) {
                return {
                  backgroundColor: menuHoverColor,
                  [`&:hover`]: {
                    backgroundColor: menuHoverColor,
                  },
                }
              }
              return {
                [`&:hover`]: {
                  backgroundColor: menuHoverColor,
                },
              }
            }
          }}>
            {/* Logo and Menu Icons */}
            <MenuItem
              onClick={() => { props.setIsCollapsed(!props.isCollapsed); }}
              icon={props.isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{ margin: "10px 0px 20px 0px", color: colors.grey[100] }}
            >
              {!props.isCollapsed && (
                <Box display="flex" justifyContent="space-between" alignItems="center" ml="8px">
                  <Typography variant="h3" color={colors.grey[100]}>{props.companyName}</Typography>
                  <IconButton onClick={() => { props.setIsCollapsed(!props.isCollapsed); }}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>
            {/* User */}
            {!props.isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img src="https://faceshapes101.wordpress.com/wp-content/uploads/2017/11/c754b-bqmkpjajvmkrx4d3kr6k5xgro1_500.jpg?w=408&h=356" width="100px" height="100px" alt="user_pic" style={{ cursor: "pointer", borderRadius: "50%" }} />
                </Box>
                <Box textAlign="center">
                  <Typography variant="h3" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>{props.userName}</Typography>
                  <Typography variant="h5" color={theme.palette.mode === "dark" ? colors.greenAccent[500] : colors.blueAccent[500]}>{props.userDesignation}</Typography>
                </Box>
              </Box>
            )}
            {/* Menu Items */}
            <Box>
              <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} isMobile={props.isMobile} setIsCollapsed={props.setIsCollapsed}></Item>
              {/* Data */}
              <Typography variant="h5" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Data</Typography>
              <Item title="Manage Team" to="/team" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} isMobile={props.isMobile} setIsCollapsed={props.setIsCollapsed}></Item>
              <Item title="Contacts Information" to="/contacts" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} isMobile={props.isMobile} setIsCollapsed={props.setIsCollapsed}></Item>
              <Item title="Invoices Balances" to="/invoices" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} isMobile={props.isMobile} setIsCollapsed={props.setIsCollapsed}></Item>
              {/* Pages */}
              <Typography variant="h5" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Pages</Typography>
              <Item title="Profile Form" to="/form" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} isMobile={props.isMobile} setIsCollapsed={props.setIsCollapsed}></Item>
              <Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} isMobile={props.isMobile} setIsCollapsed={props.setIsCollapsed}></Item>
              <Item title="FAQs" to="/faq" icon={<HelpOutlinedIcon />} selected={selected} setSelected={setSelected} isMobile={props.isMobile} setIsCollapsed={props.setIsCollapsed}></Item>
              {/* Graphs / Charts */}
              <Typography variant="h5" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Graphs / Charts</Typography>
              <Item title="Bar Graph" to="/bar-chart" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} isMobile={props.isMobile} setIsCollapsed={props.setIsCollapsed}></Item>
              <Item title="Donut Chart" to="/donut-chart" icon={<DonutLargeOutlinedIcon />} selected={selected} setSelected={setSelected} isMobile={props.isMobile} setIsCollapsed={props.setIsCollapsed}></Item>
              <Item title="Line Chart" to="/line-chart" icon={<LineAxisOutlinedIcon />} selected={selected} setSelected={setSelected} isMobile={props.isMobile} setIsCollapsed={props.setIsCollapsed}></Item>
              <Item title="Geography" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} isMobile={props.isMobile} setIsCollapsed={props.setIsCollapsed}></Item>
            </Box>
          </Menu>
        </ProSidebar>
      }
    </>
  );
};

Sidebar.propTypes = {
  isMobile: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  setIsCollapsed: PropTypes.func,
  companyName: PropTypes.string,
  userName: PropTypes.string,
  userDesignation: PropTypes.string,
};

export default Sidebar;

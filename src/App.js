import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { ColorModeContext, useMode } from './theme'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './scenes/global/Topbar'
import Sidebar from './scenes/global/Sidebar'
import Dashboard from './scenes/dashboard'
import Team from './scenes/team'
import Contacts from './scenes/contacts'
import Invoices from './scenes/invoices'
import Form from './scenes/form'
import Calendar from './scenes/calendar'
import FAQ from './scenes/faq'
import BarChart from './scenes/bar-chart'
import DonutChart from './scenes/donut-chart'
import LineChart from './scenes/line-chart'
import Geography from './scenes/geography'

function App() {
  const [theme, colorMode] = useMode();
  const companyName = "Stark Industries";
  const userName = "Robert Downey Jr.";
  const userDesignation = "Vice President";

  // Handline sidebar collapse
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    const mobileView = window.innerWidth < 768;
    setIsMobile(mobileView);
    setIsCollapsed(mobileView);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isMobile={isMobile} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} companyName={companyName} userName={userName} userDesignation={userDesignation} />
          <main className="content scroll-content">
            <Box className="topbar">
              <Topbar isMobile={isMobile} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            </Box>
            <Box m="20px">
              <Routes>
                <Route exact path="/" element={<Dashboard userName={userName} />}></Route>
                <Route exact path="/team" element={<Team />}></Route>
                <Route path="/contacts" element={<Contacts />}></Route>
                <Route path="/invoices" element={<Invoices />}></Route>
                <Route path="/form" element={<Form />}></Route>
                <Route path="/calendar" element={<Calendar />}></Route>
                <Route path="/faq" element={<FAQ />}></Route>
                <Route path="/bar-chart" element={<BarChart />}></Route>
                <Route path="/donut-chart" element={<DonutChart />}></Route>
                <Route path="/line-chart" element={<LineChart />}></Route>
                <Route path="/geography" element={<Geography />}></Route>
              </Routes>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

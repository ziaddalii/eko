import React, { useState } from 'react'
import { GradientBoxRight, SectionBox, SectionContentBox, SectionTitle } from '../../contexts/ThemeContext'
import { Box, Button, Grid, Paper, Typography, useTheme } from '@mui/material'
import { PortfolioData } from '../../data/PortfolioData'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MobileProjects from './MobileProjects';
import WebProjects from './WebProjects';
import AllProjects from './AllProjects';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ pt: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function PortfolioGrid() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <Box>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="All" {...a11yProps(0)} />
                    <Tab label="Web" {...a11yProps(1)} />
                    <Tab label="Mobile" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <AllProjects/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <MobileProjects/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <WebProjects/>
            </TabPanel>
        </Box>

    </Box>
  )
}

export default PortfolioGrid
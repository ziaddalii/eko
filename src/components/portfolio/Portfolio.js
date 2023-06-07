import { Box, Typography, useTheme } from '@mui/material'
import React, { useState, useEffect } from 'react'

import {SectionBox, SectionContentBox } from '../../contexts/ThemeContext'
import PortfolioGrid from './PortfolioGrid'



function Portfolio() {
    const theme = useTheme()
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <SectionBox>
            <SectionContentBox>
                <Box>
                    <Box
                    sx={{
                        backgroundColor:"#7A4DCC",
                        color:"white",
                        borderRadius:"0 0 50% 50%",
                        height:"70vh",
                        width:"150%",
                        minWidth:"1900px",
                        position: "absolute",
                        transform: "translate(-50%, 0%)",
                        top:"0",
                        left: "50%",
                    }}>
                        <Box sx={{
                            position: "absolute",
                            transform: "translate(-50%, -50%)",
                            top:"50%",
                            left: "50%",
                            padding: "1rem",
                            width:"100vw",
                        }}>
                            <Box data-aos="fade-down">
                                <Typography component={"h2"} color={theme.palette.common.white} fontSize={"56px"} fontWeight={"bold"} textAlign={"center"}>Portfolio</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box marginTop={"60vh"}>
                        <PortfolioGrid/>
                    </Box>
                </Box>
            </SectionContentBox>
        </SectionBox>
        
  )
}

export default Portfolio
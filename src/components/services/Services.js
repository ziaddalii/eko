import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

import { BlueButton, GradientBoxLeft, SectionBox, SectionContentBox } from '../../contexts/ThemeContext'
import ServicesGrid from './ServicesGrid'



function Services() {
    const theme = useTheme()

    return (
        <SectionBox>
            <SectionContentBox>
                <Box>
                    <Box
                    sx={{
                        backgroundColor:"#7A4DCC",
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
                                <Typography component={"h2"} color={theme.palette.common.white} fontSize={"56px"} fontWeight={"bold"} textAlign={"center"}>Services</Typography>
                            </Box>
                        </Box>
                        </Box>
                        <Box marginTop={"45vh"}>
                            <ServicesGrid/>
                        </Box>
                </Box>
            </SectionContentBox>
        </SectionBox>
        
  )
}

export default Services
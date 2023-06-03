import { Box, Typography, useTheme } from '@mui/material'
import React, { useState, useEffect } from 'react'

import { BlueButton, GradientBoxLeft, SectionBox, SectionContentBox } from '../../contexts/ThemeContext'
import ContactUsForm from './ContactUsForm'


function ContactUs() {
    const theme = useTheme()

    return (
        <SectionBox>
            <SectionContentBox>
                <Box>
                    <Box
                    sx={{
                        backgroundColor:theme.palette.contrastColor.main,
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
                                <Typography component={"h2"} fontSize={"56px"} fontWeight={"bold"} textAlign={"center"}>Contact Us</Typography>
                            </Box>
                        </Box>
                        </Box>
                        <Box marginTop={"60vh"}>
                            <ContactUsForm/>
                        </Box>
                </Box>
            </SectionContentBox>
        </SectionBox>
        
  )
}

export default ContactUs
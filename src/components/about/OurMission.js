import { Box, Button, Grid, Paper, Typography, styled, useTheme } from '@mui/material'
import React from 'react'
import { SectionContentBox } from '../../contexts/ThemeContext'


function OurMission() {
    const theme = useTheme()

  return (
    <Box data-aos="fade-left" margin={"auto"} 
    padding={{md:"2rem", xs:"0"}}
    width={{md:"65%", sm:"80%", xs:"90%"}}
    >
        <Typography component={"p"} fontSize={"1.5rem"} fontWeight={"bold"} textAlign={"center"} marginY={"1rem"}>Our Mission</Typography>
        <Box margin={"auto"} sx={{width:"140px", height:"2px",  backgroundColor:theme.palette.primary.main}}></Box>
        <Typography component={"p"} width={"90%"} marginTop={"2rem"} marginX={"auto"} fontWeight={"light"} textAlign={"center"} color={theme.palette.text.secondary}>
        We seek to provide a truly distinguished service to customers in the world and help improve the software infrastructure for global competition in terms of the technologies used in building programs and content provided to users and provide our customers with world-class software technology that works to complete operations and procedures in an optimal manner as we seek To be an entity that pushes towards the development of the software industry in the region according to the latest scientific methods and the consolidation of the thought of creativity and mastery in this industry based on cadres with a distinguished scientific level and great experience in the software market, as it aims to develop and manage pioneering software ideas and projects, in addition to providing integrated solutions to its customers in the fields of Web applications and smart phone applications with all their systems and the fulfillment of their requirements with accuracy and high efficiency.        </Typography>
    </Box>
  )
}

export default OurMission
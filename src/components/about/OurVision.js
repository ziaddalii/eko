import { Box, Button, Grid, Paper, Typography, styled, useTheme } from '@mui/material'
import React from 'react'
import { SectionContentBox } from '../../contexts/ThemeContext'


function OurVision() {
    const theme = useTheme()

  return (
    <Box data-aos="fade-right" margin={"auto"} 
    width={{md:"65%", sm:"80%", xs:"90%"}}
    sx={{
        padding:"3rem 0",
        [theme.breakpoints.down('sm')]: {
          padding: '3rem 2rem',
        },
    }}>
        <Typography component={"p"} fontSize={"1.5rem"} fontWeight={"bold"} textAlign={"center"} marginY={"1rem"}>Our Vision</Typography>
        <Box margin={"auto"} sx={{width:"140px", height:"2px",  backgroundColor:theme.palette.primary.main}}></Box>
        <Typography component={"p"} width={"90%"} marginTop={"2rem"} marginX={"auto"} fontWeight={"light"} textAlign={"center"} color={theme.palette.text.secondary}>
        We seek to be the best software industry in the World. We work to build software solutions that are the most innovative, and we always look forward to providing an environment with the latest resources and technology so that we help our customers reach success.
        </Typography>
    </Box>
  )
}

export default OurVision
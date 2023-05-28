import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { BlueButton, GradientBoxLeft } from '../contexts/ThemeContext'

function About() {
    const theme = useTheme()
    return (
    <Box sx={{
        position:"relative",
        backgroundColor: `${theme.palette.backgroundColor.main}`,
        minHeight:"100vh",
    }}
    p={10}>
        <GradientBoxLeft></GradientBoxLeft>
        <Box sx={{position:"relative",zIndex:"1"}}>
        <BlueButton>ABOUT</BlueButton>
        <Typography variant='h1' color={theme.palette.contrastColor.main}>ABOUT</Typography>
        </Box>
    </Box>
  )
}

export default About
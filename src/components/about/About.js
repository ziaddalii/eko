import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { BlueButton, GradientBoxLeft, SectionBox } from '../../contexts/ThemeContext'
import AboutHero from './AboutHero'
import Footer from '../Footer';

function About() {
    const theme = useTheme()
    return (
        <SectionBox sx={{position:"relative", backgroundColor: `${theme.palette.backgroundColor.main}`}}>
            <Box sx={{height:"100vh", overflowY:"scroll", overflowX:"hidden", perspective:"10px"}}>
                <AboutHero/>
            </Box>
        </SectionBox>
  )
}

export default About
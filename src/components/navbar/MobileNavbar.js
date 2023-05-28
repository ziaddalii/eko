import { Box, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import Logo from "../../images/logo.png"
import { Link, NavLink } from 'react-router-dom'
import { TypographyLink } from '../../contexts/ThemeContext'

function MobileNavbar() {
  const theme = useTheme()
  return (
    <Box className="mobile-navbar" display={{ xs: "block", md: "none" }}>
        <NavLink to="/"><img className='nav-logo' src={Logo}/></NavLink>
        <Grid container className='nav-links' p={"1rem"} flexDirection={"column"} justifyContent="flex-start" sx={{background:"transparent"}}>
            <TypographyLink variant='span' my={".5rem"} component={NavLink} to="/">home</TypographyLink>
            <TypographyLink variant='span' my={".5rem"} component={NavLink} to="/about">about us</TypographyLink>
            <TypographyLink variant='span' my={".5rem"} component={NavLink} to="/services">services</TypographyLink>
            <TypographyLink variant='span' my={".5rem"} component={NavLink} to="/hosting">hosting</TypographyLink>
            <TypographyLink variant='span' my={".5rem"} component={NavLink} to="/portfolio">portfolio</TypographyLink>
            <TypographyLink variant='span' my={".5rem"} component={NavLink} to="/blog">blog</TypographyLink>
            <TypographyLink variant='span' my={".5rem"} component={NavLink} to="/contactus">contact us</TypographyLink>
        </Grid>
    </Box>
  )
}

export default MobileNavbar
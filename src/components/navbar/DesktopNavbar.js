import { Box, Grid } from '@mui/material'
import React from 'react'
import { TypographyLink } from '../../contexts/ThemeContext'
import { NavLink } from 'react-router-dom'

function DesktopNavbar() {
  return (
    <Box display={{ xs: "none", md: "block" }}>
        <Grid container className='nav-links' justifyContent="flex-end" >
            <TypographyLink variant='span' component={NavLink} to="/">home</TypographyLink>
            <TypographyLink variant='span' component={NavLink} to="/about">about us</TypographyLink>
            <TypographyLink variant='span' component={NavLink} to="/services">services</TypographyLink>
            <TypographyLink variant='span' component={NavLink} to="/portfolio">portfolio</TypographyLink>
            <TypographyLink variant='span' component={NavLink} to="/blog">blog</TypographyLink>
            <TypographyLink variant='span' component={NavLink} to="/contact-us">contact us</TypographyLink>
        </Grid>
    </Box>
  )
}

export default DesktopNavbar
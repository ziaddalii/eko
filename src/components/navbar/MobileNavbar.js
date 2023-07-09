import { Box, Grid, useTheme } from '@mui/material'
import React from 'react'
import Logo from "../../images/logo.png"
import { NavLink } from 'react-router-dom'
import { TypographyLink } from '../../contexts/ThemeContext'

function MobileNavbar({ setToggleSideNavbar }) {
  return (
    <Box className="mobile-navbar" display={{ xs: "block", md: "none" }}>
        <NavLink to="/"><img className='nav-logo' src={Logo}/></NavLink>
        <Grid container className='nav-links' p={"1rem"} flexDirection={"column"} justifyContent="flex-start" sx={{background:"transparent"}}>
            <TypographyLink onClick={() => setToggleSideNavbar(false)} variant='span' my={".5rem"} component={NavLink} to="/">home</TypographyLink>
            <TypographyLink onClick={() => setToggleSideNavbar(false)} variant='span' my={".5rem"} component={NavLink} to="/about">about us</TypographyLink>
            <TypographyLink onClick={() => setToggleSideNavbar(false)} variant='span' my={".5rem"} component={NavLink} to="/services">services</TypographyLink>
            <TypographyLink onClick={() => setToggleSideNavbar(false)} variant='span' my={".5rem"} component={NavLink} to="/portfolio">portfolio</TypographyLink>
            <TypographyLink onClick={() => setToggleSideNavbar(false)} variant='span' my={".5rem"} component={NavLink} to="/blog">blog</TypographyLink>
            <TypographyLink onClick={() => setToggleSideNavbar(false)} variant='span' my={".5rem"} component={NavLink} to="/contact-us">contact us</TypographyLink>
        </Grid>
    </Box>
  )
}

export default MobileNavbar
import { AppBar, Box, Button, Container, Grid, SwipeableDrawer, Toolbar, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom'
import Logo from "../../images/logo2.png"
import "../../styles/navbar.css"
import React, { useState } from 'react'
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';

function Navbar() {
  const [toggleSideNavbar, setToggleSideNavbar] = useState(false)
  const theme = useTheme()
  return (
    <AppBar sx={{
      position:'fixed', 
      background:"rgba(255,255,255,.1)", 
      backdropFilter:"blur(50px)",
      boxShadow:"none",
  }}>
      <Toolbar>
        <Container>
          <Grid container justifyContent={'space-between'} alignItems={"center"} color={theme.palette.text.primary}>
            <Grid item xs={4} md={1}>
              <NavLink to="/"><img className='nav-logo' src={Logo}/></NavLink>
            </Grid>
            <Grid item
            xs={8}
            md={11} 
            >
              <DesktopNavbar/>
              <Box display={{ xs: "block", md: "none" }}>
                <Grid container justifyContent="flex-end">
                  <Button sx={{background:"none"}} onClick={() => setToggleSideNavbar(true)}>
                    <MenuIcon sx={{color:`${theme.palette.text.primary}`}} fontSize="large"/>
                  </Button>
                </Grid>
              </Box>
              <SwipeableDrawer
                open={toggleSideNavbar}
                onClose={() => setToggleSideNavbar(false)}
                onOpen={() => setToggleSideNavbar(true)}
                sx={{
                '& .MuiPaper-root': {
                  background:"rgba(255,255,255,.1)",
                  backdropFilter:"blur(30px)",
                  width:"200px",
                },
                '& .MuiBackdrop-root': {
                  background:"transparent",
                },
                [theme.breakpoints.up('xs')]: {
                  display:"block"
                },
                [theme.breakpoints.up('md')]: {
                  display:"none"
                },
              }}
              >
                <MobileNavbar/>
              </SwipeableDrawer>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
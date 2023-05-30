import { Box, Button, Grid, Paper, Typography, styled, useTheme } from '@mui/material'
import React from 'react'
import Development from "../../images/services/development.png"


function WhoWeAre() {
    const theme = useTheme()

  return (
    <Paper elevation={1} sx={{
        width:"70%",
        margin:"auto",
        backgroundColor:"transparent",
        backdropFilter:"blur(50px)",
        padding:"2rem",
        transition:".2s",
        borderLeft:"solid 1px rgba(255,255,255,.1)",
        borderTop:"solid 1px rgba(255,255,255,.1)",
        boxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
        webkitBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
        mozBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
        transform:"translateZ(-5px) scale(1.5)",
        zIndex:"-1",
    }}>
        <Typography component={"p"} fontSize={"1.5rem"} fontWeight={"bold"} textAlign={"center"} marginTop={"1rem"}>Who We Are?</Typography>
        <Typography component={"p"} fontWeight={"light"} color={theme.palette.text.secondary}>We live at the present time in a technical era excellence at the level of the world and the Arab countries, especially in the Kingdom of Saudi Arabia, so it is necessary for us to focus our energies on the field of technical innovation that keeps pace with the ambitious initiatives of the Kingdom’s Vision 2030 , which includes digital transformation in all fields and the digitization of all procedures and converting them into procedures fully electronic within all governmental and private agencies,
        at “qTech.” technical solutions that keep pace with the current era are combined with effective systems that meet the needs of our partners in all sectors.
        We have been able for more than 12 years continuously inside the Kingdom of Saudi Arabia to develop many systems and programs that contribute to achieving the goals of digital transformation in the Kingdom, through the implementation of more than 1000 projects with more than 100 success partners in more than 6 different sectors At the level of the Kingdom of Saudi Arabia, the percentage of satisfaction with the programs, solutions and systems provided exceeds 98%.
        Finally, we always strive to help our customers achieve leadership, prosperity and effectiveness in achieving the new vision in a way that meets the aspirations of the Kingdom of Saudi Arabia.</Typography>
        <Button variant={"contained"} sx={{marginTop:".5rem",}}>More</Button>
    </Paper>
  )
}

export default WhoWeAre
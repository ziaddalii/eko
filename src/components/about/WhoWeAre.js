import { Box, Button, Grid, Paper, Typography, styled, useTheme } from '@mui/material'
import React from 'react'


function WhoWeAre() {
    const theme = useTheme()

  return (
    <Box
    padding={{md:"2rem", xs:"1rem"}}
    width={{md:"65%", sm:"80%", xs:"90%"}}
    sx={{
        margin:"auto",
        backgroundColor:"transparent",
        backdropFilter:"blur(20px)",
        borderLeft:"solid 1px rgba(255,255,255,.1)",
        borderTop:"solid 1px rgba(255,255,255,.1)",
        boxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
        webkitBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
        mozBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
    }}>
        <Typography component={"p"} fontSize={"1.5rem"} fontWeight={"bold"} textAlign={"center"} marginTop={"1rem"}>Who We Are?</Typography>
        <Typography component={"p"} marginTop={"2rem"} fontWeight={"light"} textAlign={"center"} color={theme.palette.text.secondary}>
        We live at the present time in a technical era excellence at the level of the world, especially in the United States of America, so it is necessary for us to focus our energies on the field of technical innovation that keeps pace with the ambitious initiatives of the USA Vision 2030 , which includes digital transformation in all fields and the digitization of all procedures and converting them into procedures fully electronic within all governmental and private agencies,
        </Typography>
        <Typography component={"p"} marginTop={"2rem"} fontWeight={"bold"} textAlign={"center"} color={theme.palette.text.secondary}>
        at “EKO.” technical solutions that keep pace with the current era are combined with effective systems that meet the needs of our partners in all sectors.
        </Typography>
        <Typography component={"p"} marginTop={"2rem"} fontWeight={"light"} textAlign={"center"} color={theme.palette.text.secondary}>
        We have been able for more than 12 years continuously inside the United States to develop many systems and programs that contribute to achieving the goals of digital transformation in the States, through the implementation of more than 1000 projects with more than 100 success partners in more than 6 different sectors At the level of the United States, the percentage of satisfaction with the programs, solutions and systems provided exceeds 98%.
        </Typography>
        <Typography component={"p"} marginTop={"2rem"} fontWeight={"bold"} textAlign={"center"} color={theme.palette.text.secondary}>
        Finally, we always strive to help our customers achieve leadership, prosperity and effectiveness in achieving the new vision in a way that meets the aspirations of the United States.
        </Typography>
    </Box>
  )
}

export default WhoWeAre
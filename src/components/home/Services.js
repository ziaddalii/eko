import React from 'react'
import { GradientBoxRight, SectionBox, SectionContentBox, SectionTitle } from '../../contexts/ThemeContext'
import { useTheme } from '@emotion/react'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import Development from "../../images/services/development.png"
import DigitalMarketing from "../../images/services/digital-marketing.png"
import CreativeDesign from "../../images/services/creative-design.png"
function Services() {
  const theme = useTheme()

  return (
    <SectionBox>
        <SectionContentBox>
            <Grid container data-aos="fade-right" alignItems={"center"} justifyContent={"space-between"} paddingBottom={"2rem"}>
                <Grid item>
                    <SectionTitle>Services</SectionTitle>
                </Grid>
                <Grid item>
                    <Button variant={"contained"}>Show More</Button>
                </Grid>
            </Grid>
            <Grid container data-aos="fade-left" spacing={"1rem"} justifyContent={"center"}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={1} sx={{
                        backgroundImage: `linear-gradient(45deg, rgba(50,50,50,.1) 30%, rgba(255,255,255,.1) 90%)`,
                        padding:"1rem",
                        transition:".2s",
                        borderLeft:"solid 1px rgba(255,255,255,.1)",
                        borderTop:"solid 1px rgba(255,255,255,.1)",
                        boxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
                        webkitBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
                        mozBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
                        "&:hover": {
                            backgroundImage: `linear-gradient(45deg, ${theme.palette.contrastColor.main} 30%, ${theme.palette.secondary.main} 90%)`,
                            scale:"1.05",
                            boxShadow: "10px 10px 32px 0px rgba(0,0,0,0.50)",
                            webkitBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.50)",
                            mozBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.50)",
                        },
                    }}>
                        <img src={Development} style={{maxHeight:"190px"}}/>
                        <Typography component={"p"} fontSize={"1.5rem"} fontWeight={"bold"} marginTop={"1rem"}>Development</Typography>
                        <Typography component={"p"} fontWeight={"light"} color={theme.palette.text.secondary}>The best astonishing apps and websites with high quality which users deserve</Typography>
                        <Button variant={"contained"} sx={{marginTop:".5rem",}}>More</Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={1} sx={{
                        backgroundImage: `linear-gradient(45deg, rgba(50,50,50,.1) 30%, rgba(255,255,255,.1) 90%)`,
                        padding:"1rem",
                        transition:".2s",
                        borderLeft:"solid 1px rgba(255,255,255,.1)",
                        borderTop:"solid 1px rgba(255,255,255,.1)",
                        boxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
                        webkitBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
                        mozBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
                        "&:hover": {
                            backgroundImage: `linear-gradient(45deg, ${theme.palette.contrastColor.main} 30%, ${theme.palette.secondary.main} 90%)`,
                            scale:"1.05",
                            boxShadow: "10px 10px 32px 0px rgba(0,0,0,0.50)",
                            webkitBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.50)",
                            mozBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.50)",
                        },
                    }}>
                        <img src={DigitalMarketing} style={{maxHeight:"190px"}}/>
                        <Typography component={"p"} fontSize={"1.5rem"} fontWeight={"bold"} marginTop={"1rem"}>Digital Marketing</Typography>
                        <Typography component={"p"} fontWeight={"light"} color={theme.palette.text.secondary}>Giving our clients the level of service and support they expect in our services.</Typography>
                        <Button variant={"contained"} sx={{marginTop:".5rem",}}>More</Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={0} sx={{
                        backgroundImage: `linear-gradient(45deg, rgba(50,50,50,.1) 30%, rgba(255,255,255,.1) 90%)`,
                        padding:"1rem",
                        transition:".2s",
                        borderLeft:"solid 1px rgba(255,255,255,.1)",
                        borderTop:"solid 1px rgba(255,255,255,.1)",
                        boxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
                        webkitBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
                        mozBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
                        "&:hover": {
                            backgroundImage: `linear-gradient(45deg, ${theme.palette.contrastColor.main} 30%, ${theme.palette.secondary.main} 90%)`,
                            scale:"1.05",
                            boxShadow: "10px 10px 32px 0px rgba(0,0,0,0.50)",
                            webkitBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.50)",
                            mozBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.50)",
                        },
                    }}>
                        <img src={CreativeDesign} style={{maxHeight:"190px"}}/>
                        <Typography component={"p"} fontSize={"1.5rem"} fontWeight={"bold"} marginTop={"1rem"}>Creative Design</Typography>
                        <Typography component={"p"} fontWeight={"light"} color={theme.palette.text.secondary}>We provide the best UI/UX Design, Campaign Designs Animation, & Video production</Typography>
                        <Button variant={"contained"} sx={{marginTop:".5rem"}}>More</Button>
                    </Paper>
                </Grid>
            </Grid>
        </SectionContentBox>
    </SectionBox>
  )
}

export default Services
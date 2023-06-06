import React from 'react'
import { GradientBoxRight, SectionBox, SectionContentBox, SectionTitle } from '../../contexts/ThemeContext'
import { Box, Button, Grid, Paper, Typography, useTheme } from '@mui/material'
import { PortfolioData } from '../../data/PortfolioData'

function Portfolio() {
  const theme = useTheme()

  return (
    <SectionBox sx={{
        overflowX:"hidden",
    }}>
    <GradientBoxRight></GradientBoxRight>
        <SectionContentBox>
            <Grid container data-aos="fade-left" alignItems={"center"} justifyContent={"space-between"} paddingBottom={"2rem"}>
                <Grid item>
                    <SectionTitle>Portfolio</SectionTitle>
                </Grid>
                <Grid item>
                    <Button variant={"contained"}>Show More</Button>
                </Grid>
            </Grid>
            <Grid container data-aos="fade-right" spacing={"1rem"}>
                {
                    PortfolioData.map((portfolioPost) => {
                        return (
                            <Grid item key={portfolioPost.id} xs={12} sm={6} md={4} overflow="hidden" height={"230px"}>
                            <Paper elevation={0}
                            sx={{
                                position:"relative",
                                background:"transparent",
                                '&:hover .portfolio-desc':{
                                    bottom:"7%",
                                    opacity:"100%",
                                }
                            }}
                            >
                                <img className='portfolio-img' src={portfolioPost.imgUrl} style={{height:"215px", objectFit:"cover"}}/>
                                <Box className="portfolio-desc" sx={{
                                    background:"rgba(0,0,0,.15)", 
                                    backdropFilter:"blur(10px)",
                                    padding:"1rem",
                                    position:"absolute",
                                    bottom:"5%",
                                    left:"3%",
                                    opacity:"0%",
                                    transition:".5s",
                                }}>
                                    <Typography component={"p"} fontWeight={"bold"} sx={{
                                        textShadow:"10px 10px 10px 0 rgba(255,255,255,.5)",
                                        color:`${theme.palette.common.white}`
                                    }}>{portfolioPost.desc}</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                        )
                    })
                }
            </Grid>
        </SectionContentBox>
    </SectionBox>
  )
}

export default Portfolio
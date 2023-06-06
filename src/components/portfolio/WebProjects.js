import { Box, Grid, Paper, Typography, useTheme } from '@mui/material'
import React from 'react'
import { PortfolioData } from '../../data/PortfolioData'

function WebProjects() {
    const theme = useTheme()
  return (
    <Grid container spacing={"1rem"}>
        {
            PortfolioData.filter((portfolioProject) => portfolioProject.category === "web").map((project) => {
                return (
                    <Grid item key={project.id} xs={12} sm={6} md={4} overflow="hidden" height={"230px"}>

                    <Paper elevation={0}
                    sx={{
                        position:"relative",
                        background:"transparent",
                        '&:hover .portfolio-desc':{
                            bottom:"7%",
                            opacity:"100%",
                        }
                    }}>
                        <img className='portfolio-img' src={project.imgUrl} style={{height:"215px", objectFit:"cover"}}/>
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
                            }}>{project.desc}</Typography>
                        </Box>
                    </Paper>
                </Grid>
                )
            })
        }
    </Grid>
    )
}

export default WebProjects
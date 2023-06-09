import React from 'react'
import { SectionBox } from '../../contexts/ThemeContext'
import { Container, Grid, Typography, useTheme } from '@mui/material'
import "../../styles/trusted.css"
import Amazon from "../../images/trusted/amazon.png"
import Microsoft from "../../images/trusted/microsoft.png"
import Coke from "../../images/trusted/cocacola.png"
import Linkedin from "../../images/trusted/linkedin.png"
import Netflix from "../../images/trusted/netflix.png"
function TrustedBy() {
    const theme = useTheme()
  return (
    <SectionBox sx={{
        backgroundImage: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.contrastColor.main} 90%)`,
        zIndex:"2",
    }}>
        <Typography component={"p"} paddingTop={"1rem"} textAlign={"center"} fontWeight={"bold"} color={theme.palette.common.black}>TRUSTED BY</Typography>
        <Container sx={{paddingY:"1rem"}}>
            <Grid container data-aos="fade-up" justifyContent={"center"} marginLeft={"0"} width={"100%"} alignItems={"center"} spacing={"1rem"} overflow={"hidden"}>
                <Grid className='trusted-item' item xs={4} md={2} sx={{
                    position:"relative",
                }}>
                    <img className='trusted-img-faded' src={Netflix}/>
                    <img className='trusted-img' src={Netflix}/>
                </Grid>
                <Grid className='trusted-item' item xs={4} md={2} sx={{
                    position:"relative",
                }}>
                    <img className='trusted-img-faded' src={Amazon}/>
                    <img className='trusted-img' src={Amazon}/>
                </Grid>
                <Grid className='trusted-item' item xs={4} md={2} sx={{
                    position:"relative",
                }}>
                    <img className='trusted-img-faded' src={Linkedin}/>
                    <img className='trusted-img' src={Linkedin}/>
                </Grid>
                <Grid className='trusted-item' item xs={4} md={2} sx={{
                    position:"relative",
                }}>
                    <img className='trusted-img-faded' src={Coke}/>
                    <img className='trusted-img' src={Coke}/>
                </Grid>
                <Grid className='trusted-item' item xs={4} md={2} sx={{
                    position:"relative",
                }}>
                    <img className='trusted-img-faded' src={Microsoft}/>
                    <img className='trusted-img' src={Microsoft}/>
                </Grid>
            </Grid>
        </Container>
    </SectionBox>
  )
}

export default TrustedBy
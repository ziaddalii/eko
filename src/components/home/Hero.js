import React from 'react'
import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { GradientBoxLeft, GradientBoxRight, SectionBox, SectionContentBox } from '../../contexts/ThemeContext';
import Laptop from "../../images/hero/computing.png";
import "../../styles/hero.css"
function Hero() {
    const theme = useTheme()
  return (
    <SectionBox>
        <GradientBoxLeft></GradientBoxLeft>
        <SectionContentBox>
            <Box pt={"4rem"}>
                <Grid container alignItems={"center"} justifyContent={"center"}>
                    <Grid item xs={12} md={6} justifyContent={"center"} alignItems={"center"}  data-aos="fade-right">
                        <Box>
                        <Typography variant='h2' fontWeight={"bold"} sx={{
                            background: theme.palette.primary.main,
                            display:'inline',
                            background: `linear-gradient(to right, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                            >EKO </Typography>
                            <Typography variant='h2' color={theme.palette.text.primary}
                            sx={{
                                background: theme.palette.text.primary,
                                WebkitBackgroundClip: "text",
                            }}
                            component={"span"}> IS THE ONE FOR YOU</Typography>
                        </Box>
                        <Typography component={"p"} color={theme.palette.text.secondary} fontWeight={"300"}>We believe that we succeed when our clients succeed Which is why we never stop learning</Typography>
                        <Button variant='contained' 
                        sx={{
                            marginTop:"1rem",
                            background: theme.palette.primary.main,
                            background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                            backgroundSize:"200%",
                            transition: "0.5s",
                            '&:hover':{
                                backgroundPosition:"right",
                            scale:"1.1"
                        },
                        }}
                        >Learn More</Button>
                    </Grid>

                    <Grid item container justifyContent={"center"} alignItems={"center"} xs={12} md={6} marginTop={{md:"0", xs:"1rem"}} data-aos="fade-left">
                        <img className='hero-img' src={Laptop}/>
                    </Grid>
                </Grid>
            </Box>
        </SectionContentBox>
    </SectionBox>
    )
}

export default Hero
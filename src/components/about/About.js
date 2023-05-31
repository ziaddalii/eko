import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import { BlueButton, GradientBoxLeft, SectionBox } from '../../contexts/ThemeContext'
import Footer from '../Footer';
import WhoWeAre from './WhoWeAre'
import WhyWeAreDifferent from './WhyWeAreDifferent';

function About() {
    const theme = useTheme()
    return (
        <Box sx={{
            backgroundColor: theme.palette.backgroundColor.main,
            height: "100vh",
        }}>
            <Box>
                <Parallax pages={2} style={{ top: '0', left: '0'}} className='animation'>
                    <ParallaxLayer offset={0} speed={0.5}>
                        <Box className="animation-layer parallax" id="background-color"
                        sx={{
                            backgroundColor:theme.palette.contrastColor.main,
                            borderRadius:"0 0 50% 50%",
                            height:"90%",
                            width:"150%",
                            minWidth:"1900px",
                            position: "absolute",
                            transform: "translate(-50%, 0%)",
                            left: "50%",
                        }}></Box>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.3} speed={0.9}>
                        <Box className="animation-layer parallax" id="title" sx={{padding: "1rem"}}>
                            <Typography component={"h2"} fontSize={"56px"} textAlign={"center"}>About Us</Typography>
                            <Typography component={"p"} textAlign={"center"} sx={{
                                maxWidth: "600px",
                                margin: "auto",
                            }}>If you want to Know more about us, you’re in the right place. Read to know how we managed to grow our business so fast.</Typography>
                        </Box>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.7} speed={0.2}>
                        <WhoWeAre />
                        <WhyWeAreDifferent/>
                    </ParallaxLayer>
                </Parallax>
            </Box>
        </Box>
  )
}

export default About
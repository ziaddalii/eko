import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import WhoWeAre from './WhoWeAre'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function AboutHero() {
    const theme = useTheme()
  return (
    <Box>
        <Parallax pages={2} style={{ top: '0', left: '0'}} className='animation'>
            <ParallaxLayer offset={0} speed={0.5}>
                <Box className="animation-layer parallax" id="background-color"
                sx={{
                    backgroundColor:theme.palette.contrastColor.main,
                    borderRadius:"0 0 50% 50%",
                    height:"90%",
                }}></Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.2} speed={0.9}>
                <Box className="animation-layer parallax" id="title">
                    <Typography component={"h2"} fontSize={"128px"} textAlign={"center"}>About Us</Typography>
                    <Typography component={"p"} textAlign={"center"}>If you want to Know more about us, you’re in the right place. Read to know how we managed to grow our business so fast.</Typography>
                </Box>
            </ParallaxLayer>
            <ParallaxLayer offset={0.7} speed={0.2}>
                <WhoWeAre />
            </ParallaxLayer>
        </Parallax>
    </Box>
  )
}

export default AboutHero
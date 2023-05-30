import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import WhoWeAre from './WhoWeAre'
function AboutHero() {
    const theme = useTheme()
  return (
    <Box position={"relative"} sx={{transformStyle:"preserve-3d", zIndex:"-1", height:"90%"}}>
        <Box sx={{
            backgroundColor:theme.palette.contrastColor.dark,
            height:"80vh", 
            borderRadius:"0 0 50% 50%",
            transform:"translateZ(-10px) scale(2)",
            zIndex:"-1",
        }}></Box>
        <Box position={"absolute"} sx={{
            top:"50%", 
            left:"50%",
            transform:"translate(-50%, -50%)",
        }}>
            <Typography component={"h2"} fontSize={"128px"} textAlign={"center"}>About Us</Typography>
            <Typography component={"p"} textAlign={"center"}>If you want to Know more about us, you’re in the right place. Read to know how we managed to grow our business so fast.</Typography>
        </Box>
        <WhoWeAre/>
        
    </Box>
  )
}

export default AboutHero
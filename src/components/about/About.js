import { Box, Typography, useTheme } from '@mui/material'
import React, { useState, useEffect } from 'react'

import { BlueButton, GradientBoxLeft, SectionBox, SectionContentBox } from '../../contexts/ThemeContext'
import Footer from '../Footer';
import WhoWeAre from './WhoWeAre'
import WhyWeAreDifferent from './WhyWeAreDifferent';
import OurVision from './OurVision';
import OurMission from './OurMission';
import OurClients from './OurClients';


function About() {
    const theme = useTheme()
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
      <SectionBox sx={{overflowX:"hidden",}}>
            <SectionContentBox>
                <Box>
                    <Box
                    sx={{
                        backgroundColor:"#7A4DCC",
                        borderRadius:"0 0 50% 50%",
                        height:"90vh",
                        width:"150%",
                        minWidth:"1900px",
                        position: "absolute",
                        transform: "translate(-50%, 0%)",
                        top:"0",
                        left: "50%",
                    }}>
                        <Box sx={{
                            position: "absolute",
                            transform: "translate(-50%, -50%)",
                            top:"50%",
                            left: "50%",
                            padding: "1rem",
                            width:"100vw",
                        }}>
                            <Box data-aos="fade-down">
                                <Typography component={"h2"} color={theme.palette.common.white} fontSize={"56px"} fontWeight={"bold"} textAlign={"center"}>About Us</Typography>
                                <Typography component={"p"} color={theme.palette.common.white} textAlign={"center"} sx={{
                                    maxWidth: "600px",
                                    margin: "auto",
                                }}>If you want to Know more about us, you’re in the right place. Read to know how we managed to grow our business so fast.</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box marginTop={"65vh"}>
                        <WhoWeAre/>
                        <WhyWeAreDifferent/>
                        <OurVision/>
                        <OurMission/>
                        <OurClients/>
                    </Box>
                </Box>
            </SectionContentBox>
        </SectionBox>
        
  )
}

export default About
import React, { useState } from 'react'
import { SectionBox, SectionContentBox, SectionTitle } from '../../contexts/ThemeContext'
import { Box, Grid, Paper, Typography, styled, useTheme } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups';
import DoneIcon from '@mui/icons-material/Done';
import CodeIcon from '@mui/icons-material/Code';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
function OurStatistics() {
    const theme = useTheme()
    const [counterOn, setCounterOn] = useState(false)

    const StatisticContainer = styled(Paper)(({theme}) => ({
        backgroundImage: `linear-gradient(45deg, rgba(50,50,50,.1) 30%, rgba(255,255,255,.1) 90%)`,
        backdropFilter:"blur(200px)",
        padding:"2rem",
        transition:".2s",
        borderLeft:"solid 1px rgba(255,255,255,.1)",
        borderTop:"solid 1px rgba(255,255,255,.1)",
        boxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
        webkitBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
        mozBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
        "&:hover": {

        },
    }))
  return (
    
        <SectionBox>
            <SectionContentBox>
                <Grid container data-aos="fade-right" alignItems={"center"} justifyContent={"space-between"} paddingBottom={"2rem"}>
                    <Grid item>
                        <SectionTitle>Our Statistics</SectionTitle>
                    </Grid>
                </Grid>
                <ScrollTrigger onEnter={() => setCounterOn(true)}>

                <Grid container spacing={"1rem"} data-aos="fade-left">
                    <Grid item xs={12} md={6} lg={3}>
                        <StatisticContainer elevation={0}>
                            <GroupsIcon sx={{
                                fontSize:"5rem",
                                width:"100%",
                                color:theme.palette.primary.main,
                            }}></GroupsIcon>
                            <Typography component={"p"} fontWeight={"bolder"} fontSize={"3rem"} textAlign={"center"}>+
                                <CountUp start={0} end={447} duration={4} delay={1} scrollSpyDelay={counterOn}></CountUp>
                            </Typography>
                            <Typography component={"p"} fontWeight={"bold"} fontSize={"1rem"} textAlign={"center"}>Clients</Typography>
                        </StatisticContainer>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <StatisticContainer elevation={0}>
                            <DoneIcon sx={{
                                fontSize:"5rem",
                                width:"100%",
                                color:theme.palette.primary.main,
                            }}></DoneIcon>
                            <Typography component={"p"} fontWeight={"bolder"} fontSize={"3rem"} textAlign={"center"}>+
                                <CountUp start={0} end={893} duration={4} delay={1} scrollSpyDelay={counterOn}></CountUp>
                            </Typography>
                            <Typography component={"p"} fontWeight={"bold"} fontSize={"1rem"} textAlign={"center"}>Projects</Typography>
                        </StatisticContainer>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <StatisticContainer elevation={0}>
                            <CodeIcon sx={{
                                fontSize:"5rem",
                                width:"100%",
                                color:theme.palette.primary.main,
                            }}></CodeIcon>
                            <Typography component={"p"} fontWeight={"bolder"} fontSize={"3rem"} textAlign={"center"}>+
                                <CountUp start={0} end={334} duration={4} delay={1} scrollSpyDelay={counterOn}></CountUp>
                            </Typography>                            
                            <Typography component={"p"} fontWeight={"bold"} fontSize={"1rem"} textAlign={"center"}>Web Design</Typography>
                        </StatisticContainer>
                    </Grid>     
                    <Grid item xs={12} md={6} lg={3}>
                        <StatisticContainer elevation={0}>
                            <MobileFriendlyIcon sx={{
                                fontSize:"5rem",
                                width:"100%",
                                color:theme.palette.primary.main,
                            }}></MobileFriendlyIcon>
                            <Typography component={"p"} fontWeight={"bolder"} fontSize={"3rem"} textAlign={"center"}>+
                                <CountUp start={0} end={221} duration={4} delay={1} scrollSpyDelay={counterOn}></CountUp>
                            </Typography>                            
                            <Typography component={"p"} fontWeight={"bold"} fontSize={"1rem"} textAlign={"center"}>Mobile Applications</Typography>
                        </StatisticContainer>
                    </Grid>          
                </Grid>
                </ScrollTrigger>
            </SectionContentBox>
        </SectionBox>

    )
}

export default OurStatistics
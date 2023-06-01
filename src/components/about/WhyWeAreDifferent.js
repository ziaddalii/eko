import React from 'react'
import { SectionContentBox } from '../../contexts/ThemeContext'
import { Box, Grid, Typography, useTheme } from '@mui/material';
import "../../styles/about/why-we-are-diff.css"
import StarIcon from '@mui/icons-material/Star';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SpeedIcon from '@mui/icons-material/Speed';
import TeamWorkIcon from '@mui/icons-material/Diversity3';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function WhyWeAreDifferent() {
    const theme = useTheme()
  return (
    <SectionContentBox data-aos="fade-up">
        <Typography component={"p"} fontWeight={"bold"} fontSize={"32px"} textAlign={"center"} marginBottom={"2rem"}>Why We Are Different ?</Typography>
        <Grid container spacing={"1rem"} justifyContent={'space'}>
            <Grid container item xs={12} sm={4} justifyContent={'center'}>
                <div className="flip-card" tabIndex="0">
                    <div className="flip-card-inner">
                        <Grid container justifyContent={"center"} alignItems={"center"} className="flip-card-front">
                            <Grid item>
                                <StarIcon sx={{
                                    fontSize:"5rem",
                                    width:"100%",
                                    color:theme.palette.primary.main,
                                    marginBottom:"2rem",
                                }}></StarIcon>
                                <Typography component={"p"} textAlign={"center"}>100% Customer Satisfaction</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={"center"} alignItems={"center"} className="flip-card-back">
                            <Grid item>
                                <Typography component={"p"} textAlign={"center"}>
                                Gaining the satisfaction of our customers is our primary and most important goal
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={4}>
                <div className="flip-card" tabIndex="0">
                    <div className="flip-card-inner">
                        <Grid container justifyContent={"center"} alignItems={"center"} className="flip-card-front">
                            <Grid item>
                                <RocketLaunchIcon sx={{
                                    fontSize:"5rem",
                                    width:"100%",
                                    color:theme.palette.primary.main,
                                    marginBottom:"2rem",                                }}></RocketLaunchIcon>
                                <Typography component={"p"} textAlign={"center"}>Technology Pioneers</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={"center"} alignItems={"center"} className="flip-card-back">
                            <Grid item>
                                <Typography component={"p"} textAlign={"center"}>
                                We make sure that the software solutions offered by us are always developed using the latest technologies available
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={4}>
                <div className="flip-card" tabIndex="0">
                    <div className="flip-card-inner">
                        <Grid container justifyContent={"center"} alignItems={"center"} className="flip-card-front">
                            <Grid item>
                                <SpeedIcon sx={{
                                    fontSize:"5rem",
                                    width:"100%",
                                    color:theme.palette.primary.main,
                                    marginBottom:"2rem",                                }}></SpeedIcon>
                                <Typography component={"p"} textAlign={"center"}>Best performance at competitive prices</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={"center"} alignItems={"center"} className="flip-card-back">
                            <Grid item>
                                <Typography component={"p"} textAlign={"center"}>Providing outstanding software solutions at an affordable cost</Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={4}>
                <div className="flip-card" tabIndex="0">
                    <div className="flip-card-inner">
                        <Grid container justifyContent={"center"} alignItems={"center"} className="flip-card-front">
                            <Grid item>
                                <TeamWorkIcon sx={{
                                    fontSize:"5rem",
                                    width:"100%",
                                    color:theme.palette.primary.main,
                                    marginBottom:"2rem",                                }}></TeamWorkIcon>
                                <Typography component={"p"} textAlign={"center"}>Distinguished Team Work</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={"center"} alignItems={"center"} className="flip-card-back">
                            <Grid item>
                                <Typography component={"p"} textAlign={"center"}>We are characterized as a excellent team by having the best talents Ever</Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={4}>
                <div className="flip-card" tabIndex="0">
                    <div className="flip-card-inner">
                        <Grid container justifyContent={"center"} alignItems={"center"} className="flip-card-front">
                            <Grid item>
                                <HandshakeIcon sx={{
                                    fontSize:"5rem",
                                    width:"100%",
                                    color:theme.palette.primary.main,
                                    marginBottom:"2rem",                                
                                }}></HandshakeIcon>
                                <Typography component={"p"} textAlign={"center"}>After Sales Service</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={"center"} alignItems={"center"} className="flip-card-back">
                            <Grid item>
                                <Typography component={"p"} textAlign={"center"}>We maintain constant communication with you during and after delivering The project</Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={4}>
                <div className="flip-card" tabIndex="0">
                    <div className="flip-card-inner">
                        <Grid container justifyContent={"center"} alignItems={"center"} className="flip-card-front">
                            <Grid item>
                                <AccessTimeIcon sx={{
                                    fontSize:"5rem",
                                    width:"100%",
                                    color:theme.palette.primary.main,
                                    marginBottom:"2rem",                                
                                }}></AccessTimeIcon>
                                <Typography component={"p"} textAlign={"center"}>Productivity speed</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={"center"} alignItems={"center"} className="flip-card-back">
                            <Grid item>
                                <Typography component={"p"} textAlign={"center"}>applying The agile concept ensures that our publications will be delivered in a short period of time</Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Grid>
        </Grid>
    </SectionContentBox>
  )
}

export default WhyWeAreDifferent
import { Box, Grid, Typography, useTheme } from '@mui/material'
import React, { useEffect } from 'react'

import {SectionBox, SectionContentBox } from '../../contexts/ThemeContext'
import BlogFeed from './BlogFeed'
import RightBar from './RightBar'


function Blog() {
    const theme = useTheme()
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <SectionBox>
            <Box sx={{position:"relative",height:"70vh", width:"100%", overflowX:"hidden",}}>
                <Box
                sx={{
                    backgroundColor:"#7A4DCC",
                    borderRadius:"0 0 50% 50%",
                    height:"70vh",
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
                            <Typography component={"h2"} color={theme.palette.common.white} fontSize={"56px"} fontWeight={"bold"} textAlign={"center"}>Blogs</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <SectionContentBox>
                <Box>
                    <Box >
                        <Grid container>
                            <Grid item xs={12} sm={8}>
                                <BlogFeed/>
                            </Grid>
                            <Grid item sm={4} display={{xs : "none", sm:"block"}} overflow={"visible"}>
                                <RightBar/>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </SectionContentBox>
        </SectionBox>
        
  )
}

export default Blog
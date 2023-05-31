import React from 'react'
import { SectionContentBox } from '../../contexts/ThemeContext'
import { Box, Grid, Typography } from '@mui/material';

function WhyWeAreDifferent() {
  return (
    <SectionContentBox>
        <Typography component={"p"} fontWeight={"bold"} fontSize={"24px"} textAlign={"center"}>Why We Are Different ?</Typography>
        <Grid container spacing={"1rem"}>
            <Grid item xs={12} md={6} lg={4}>
                <Box>
                    <Typography component={"p"} textAlign={"center"}>Why We Are Different?</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Box>
                    <Typography component={"p"} textAlign={"center"}>Why We Are Different?</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <Box>
                    <Typography component={"p"} textAlign={"center"}>Why We Are Different?</Typography>
                </Box>
            </Grid>
        </Grid>
    </SectionContentBox>
  )
}

export default WhyWeAreDifferent
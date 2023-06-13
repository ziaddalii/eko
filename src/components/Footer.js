import React from 'react'
import { SectionBox, SectionContentBox, TypographyLinkFooter } from '../contexts/ThemeContext'
import { Box, Grid, useTheme } from '@mui/material'
import { Typography } from '@mui/material';
import Logo from "../images/logo.png"
import { Link, NavLink } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
function Footer() {
    const theme = useTheme()
  return (
    <SectionBox>
        <SectionContentBox>
            <Box>
                <Grid container alignItems={"flex-start"}>
                    <Grid item md={4} sm={6} xs={12} alignItems={"flex-start"}>
                        <Grid container alignItems={"center"}>
                            <Grid item xs={4}>
                                <img src={Logo}/>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography component={"p"} fontSize={"32px"} fontWeight={"bold"}>EKO</Typography>
                            </Grid>
                        </Grid>
                        <Typography component={"p"}>Software House Specialized In Mobile Application Development And Web Technologies</Typography>
                    </Grid>  
                    <Grid container item md={2} sm={6} xs={12} alignItems={"flex-start"}>
                        <Typography component='p' marginTop={"1rem"} fontWeight={"bold"} fontSize={"24px"}>Company</Typography>
                        <Grid item marginTop={"1rem"} xs={12}>
                            <TypographyLinkFooter variant='p' component={NavLink} to="/">home</TypographyLinkFooter>
                        </Grid>
                        <Grid item marginTop={"1rem"} xs={12}>
                            <TypographyLinkFooter variant='p' component={NavLink} to="/about">about us</TypographyLinkFooter>
                        </Grid>
                        <Grid item marginTop={"1rem"} xs={12}>
                            <TypographyLinkFooter variant='p' component={NavLink} to="/services">services</TypographyLinkFooter>
                        </Grid>
                        <Grid item marginTop={"1rem"} xs={12}>
                            <TypographyLinkFooter variant='p' component={NavLink} to="/portfolio">portfolio</TypographyLinkFooter>
                        </Grid>
                    </Grid>
                    <Grid container item md={2} sm={6} xs={12}>
                        <Typography component='p' marginTop={"1rem"} fontWeight={"bold"} fontSize={"24px"}>Services</Typography>
                        <Grid item marginTop={"1rem"} xs={12}>
                            <TypographyLinkFooter variant='p' component={Link} to="/#">Creative Design</TypographyLinkFooter>
                        </Grid>
                        <Grid item marginTop={"1rem"} xs={12}>
                            <TypographyLinkFooter variant='p' component={Link} to="/#">Development</TypographyLinkFooter>
                        </Grid>
                        <Grid item marginTop={"1rem"} xs={12}>
                            <TypographyLinkFooter variant='p' component={Link} to="/#">Digital Marketing</TypographyLinkFooter>
                        </Grid>
                        <Grid item marginTop={"1rem"} xs={12}>
                            <TypographyLinkFooter variant='p' component={Link} to="/#">Others</TypographyLinkFooter>
                        </Grid>
                    </Grid>
                    <Grid container item md={4} sm={6} xs={12}>
                        <Typography component='p' marginTop={"1rem"} fontWeight={"bold"} fontSize={"24px"}>Contact</Typography>
                        <Grid container item marginTop={"1rem"} xs={12} alignItems={"center"}>
                            <EmailIcon fontSize='small' sx={{
                            color:theme.palette.text.primary,
                            marginRight:".5rem"
                        }}/>
                            <Typography color={theme.palette.text.primary} component='p' to="/">NYC, USA</Typography>
                        </Grid>
                        <Grid container item marginTop={"1rem"} xs={12} alignItems={"center"}>
                            <LocationOnIcon fontSize='small' sx={{
                                color:theme.palette.text.primary,
                                marginRight:".5rem"
                            }}/>
                            <Typography color={theme.palette.text.primary} component='p' to="/about">info@eko.com</Typography>
                        </Grid>
                        <Grid container item marginTop={"1rem"} xs={12} alignItems={"center"}>
                            <PhoneIphoneIcon fontSize='small' sx={{
                                color:theme.palette.text.primary,
                                marginRight:".5rem"
                            }}/>
                            <Typography color={theme.palette.text.primary} component='p' to="/services">(123) 456 789</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Typography component={"p"} marginTop={"2rem"} textAlign={"center"}>© All Rights Reserved 2023.</Typography>
            </Box>
        </SectionContentBox>
    </SectionBox>
  )
}

export default Footer
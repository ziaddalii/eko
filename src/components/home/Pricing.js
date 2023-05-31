import React, {useEffect, useRef} from 'react'
import { GradientBoxRight, SectionBox, SectionContentBox, SectionTitle } from '../../contexts/ThemeContext'
import { Box, Button, Grid,Paper,Typography, useTheme } from '@mui/material'
import Card from "../../images/pricing/card.png"
import "../../styles/pricing.css"
import VanillaTilt from 'vanilla-tilt'
import styled from "@emotion/styled";
import CreativeDesign from "../../images/services/creative-design.png"

function Pricing() {
    const theme = useTheme()

    const cardRef = useRef(null);

    useEffect(() => {
      if (cardRef.current) {
        VanillaTilt.init(cardRef.current, {
            max: 25,
            speed: 400,
            glare:true,
            "max-glare":0.8,
            startX:40
        });
      }
    }, []);

    const TableContainer = styled(Paper)(({theme}) => ({
        backgroundImage: `linear-gradient(45deg, rgba(50,50,50,.1) 30%, rgba(255,255,255,.1) 90%)`,
        padding:"1rem",
        transition:".2s",
        borderLeft:"solid 1px rgba(255,255,255,.1)",
        borderTop:"solid 1px rgba(255,255,255,.1)",
        boxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
        webkitBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
        mozBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
        "&:hover": {
            backgroundImage: `linear-gradient(45deg, ${theme.palette.contrastColor.main} 30%, ${theme.palette.secondary.main} 90%)`,
            scale:"1.05",
            boxShadow: "10px 10px 32px 0px rgba(0,0,0,0.50)",
            webkitBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.50)",
            mozBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.50)",
        },
    }))
    const TableTitle = styled(Typography)(({ theme }) => ({
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
          padding:"1rem",
          textAlign:"center",
          fontWeight:"bold",
      }));

      const TableRow = styled(Typography)(({ theme }) => ({
        padding:"1rem",
        textAlign:"center",
        fontSize: 14,
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
          fontSize: 14,
          padding:"1rem .5rem",
          textAlign:"center"
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

      const OrderButton = styled(Button)(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        // color: theme.palette.common.black,
        padding:".5rem",
        // textAlign:"center",
        marginTop:"1rem",
        fontWeight:"bold",
        width:"100%"
    }));

  return (
    <SectionBox>
        <SectionContentBox>
            <Grid container data-aos="fade-right" alignItems={"center"} justifyContent={"space-between"} paddingBottom={"2rem"}>
                <Grid item>
                    <SectionTitle>Pricing</SectionTitle>
                </Grid>
                <Grid item>
                    <Button variant={"contained"}>Show More</Button>
                </Grid>
            </Grid>
            <Grid container spacing={"1rem"} justifyContent={"center"} data-aos="fade-left">
                <Grid item xs={12} sm={6} md={3}>
                    <TableContainer elevation={0}>
                        <TableTitle component={"p"}>Basic Web Design</TableTitle>
                        <TableRow component={"p"}>Responsive Design</TableRow>
                        <TableRow component={"p"}>Design visual identity</TableRow>
                        <TableRow component={"p"}>Advanced Features</TableRow>
                        <TableRow component={"p"}>Advanced SEO optimization</TableRow>
                        <OrderButton variant='contained'>Order Now</OrderButton>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TableContainer elevation={0}>
                        <TableTitle component={"p"}>Professional Web Design</TableTitle>
                        <TableRow component={"p"}>Responsive Design</TableRow>
                        <TableRow component={"p"}>Design visual identity</TableRow>
                        <TableRow component={"p"}>Advanced Features</TableRow>
                        <TableRow component={"p"}>Advanced SEO optimization</TableRow>  
                        <OrderButton variant='contained'>Order Now</OrderButton>
                  </TableContainer>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TableContainer elevation={0}>
                        <TableTitle component={"p"}>Advanced Web Design</TableTitle>
                        <TableRow component={"p"}>Responsive Design</TableRow>
                        <TableRow component={"p"}>Design visual identity</TableRow>
                        <TableRow component={"p"}>Advanced Features</TableRow>
                        <TableRow component={"p"}>Advanced SEO optimization</TableRow>
                        <OrderButton variant='contained'>Order Now</OrderButton>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{position:"relative"}} order={{md:"0", xs:"-1"}}>
                    <Grid container justifyContent={"end"} alignItems={"center"}>
                        <img className='pricing-credit' src={Card}/>
                        <Grid container>
                            <Box sx={{width:"100%"}}>
                                <Box ref={cardRef} className="card">
                                    <Box className="view back">
                                        <Box className="blackbar"></Box>
                                        <Box className="cvvtext">
                                            <Box className="whiteBar"></Box>
                                            <Box className="whiteBarText"></Box>
                                            <Box className="cvv">123</Box>
                                        </Box>
                                    </Box>
                                </Box>    
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </SectionContentBox>
    </SectionBox>
  )
}

export default Pricing
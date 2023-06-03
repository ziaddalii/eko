import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay} from "swiper";
// Import Swiper styles
import "swiper/css";
import { SectionBox, SectionContentBox } from '../../contexts/ThemeContext';
import Amazon from "../../images/trusted/amazon.png"
import Microsoft from "../../images/trusted/microsoft.png"
import Coke from "../../images/trusted/cocacola.png"
import Linkedin from "../../images/trusted/linkedin.png"
import Netflix from "../../images/trusted/netflix.png"
import { Box, Grid, Typography, useTheme } from '@mui/material';
SwiperCore.use([Autoplay]);

function OurClients() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const theme = useTheme()
    const smScreen = theme.breakpoints.values.sm

    useEffect(() => {    
        function handleWidth() {
            setScreenWidth(window.innerWidth)
        }
        handleWidth()
      
        window.addEventListener('resize', handleWidth);
      
        return () => {
        window.removeEventListener('resize', handleWidth);
        };
        }, []);

    const clients=[
            {
                clientlogo:Microsoft,
                id:1
            },
            {
                clientlogo:Amazon,
                id:2
            },
            {
                clientlogo:Linkedin,
                id:3
            },
            {
                clientlogo:Netflix,
                id:4
            },
            {
                clientlogo:Coke,
                id:5
            },
        ]
  return (
    <SectionBox data-aos="fade-right">
        <Typography component={"p"} fontSize={"1.5rem"} fontWeight={"bold"} textAlign={"center"} marginY={"1rem"}>Our Clients</Typography>
        <Box margin={"auto"} sx={{width:"140px", height:"2px",  backgroundColor:theme.palette.primary.main}}></Box>
        <SectionContentBox>
            <Swiper
            slidesPerView={screenWidth > smScreen ? 3 : 1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            >
                <Grid container alignItems={"center"} >
                {
                    clients.map((client) => {
                        return(
                            <Grid key={client.id} item container justifyContent={"center"} xs={12} md={4}>
                                <SwiperSlide key={client.id}>
                                    <img style={{height:"80px", padding:"1rem"}} src={client.clientlogo}/>
                                </SwiperSlide>
                            </Grid>
                        )
                    })
                }
                </Grid>
            </Swiper>
        </SectionContentBox> 
    </SectionBox>
  )
}

export default OurClients
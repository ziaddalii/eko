import { Box, Typography, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import { BlueButton, GradientBoxLeft, SectionBox, SectionContentBox } from '../../contexts/ThemeContext'
import Hero from './Hero'
import Services from './Services'
import Portfolio from './Portfolio'
import TrustedBy from './TrustedBy'
import Feedbacks from './Feedbacks'
import Pricing from './Pricing'
import OurStatistics from './OurStatistics'
import ContactUs from './ContactUs'
import Footer from '../Footer';


function Home() {
  const theme = useTheme()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SectionBox sx={{position:"relative", backgroundColor: `${theme.palette.backgroundColor.main}`}}>
          <Hero/>
          <Services/>
          <Portfolio/>
          <TrustedBy/>
          <Feedbacks/>
          <Pricing/>
          <OurStatistics/>
          <ContactUs/>
    </SectionBox>
    
  )
}

export default Home
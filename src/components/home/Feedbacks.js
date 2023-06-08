import { Box, Grid, Typography, useTheme } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react'
import {SectionBox, SectionContentBox, SectionTitle } from '../../contexts/ThemeContext'
import Stars from "../../images/Feedbacks/stars.png"
import "../../styles/feedbacks.css"
import { FeedbacksData } from '../../data/FeedbacksData'
import VanillaTilt from 'vanilla-tilt'
function Feedbacks() {
    const theme = useTheme()
    const feedbackRef = useRef(null);

    const [feedbacks, setFeedbacks] = useState(FeedbacksData)
    
    useEffect(() => {
        if (feedbackRef.current) {
            VanillaTilt.init(feedbackRef.current, {
                max: 15,
                speed: 600,
                glare:true,
                "max-glare":0.8,
            });
          }
    }, [feedbacks])
    const handleFeedbackClick = (id) => {
        const updatedFeedbacks = FeedbacksData.map((feedback) => {
          if (feedback.id === id) {
            return { ...feedback, active: true };
          } else {
            return { ...feedback, active: false };
          }
        })
        setFeedbacks(updatedFeedbacks)
    };

    useEffect(() => {
        let currentActiveIndex = 0;
      
        const interval = setInterval(() => {
          const nextActiveIndex = (currentActiveIndex + 1) % FeedbacksData.length;
          const nextActiveFeedback = FeedbacksData[nextActiveIndex];
      
          handleFeedbackClick(nextActiveFeedback.id);
          currentActiveIndex = nextActiveIndex;
        }, 5000);
      
        return () => clearInterval(interval);
      }, []);

  return (
    <SectionBox>
        <Box sx={{
            position:"absolute",
            top:"50%",
            left:"50%",
            transform:"translate(-50% , -50%)",
            backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            height: "30vw",
            width: "30vw",
            minHeight: "200px",
            minWidth:"200px",
            borderRadius:"50%",
            filter: "blur(200px)",
        }}></Box>

        <SectionContentBox>
            <Grid container data-aos="fade-right" alignItems={"center"} justifyContent={"space-between"} paddingBottom={"2rem"}>
                <Grid item>
                    <SectionTitle>Feedbacks</SectionTitle>
                </Grid>
            </Grid>
            <Box data-aos="fade-left" sx={{position:"relative", height:"400px",}}>
                {
                    feedbacks.map((feedback) => {
                    return feedback.active ?
                        (
                        <Box className='active-feedback'  key={feedback.id}>
                            <Box ref={feedbackRef} className={"active-feedback-card"} >
                                <img className="user-pic" src={feedback.userImg}/>
                                <Grid container justifyContent={"space-between"} alignItems={"center"}>
                                    <Grid item xs={8}>
                                        <Typography component={"p"} color={theme.palette.text.primary} fontSize="1.5rem" fontWeight="bold">{feedback.username}</Typography>
                                    </Grid>
                                    <Grid container item xs={4} flex={"end"}>
                                        <img src={Stars}/>
                                    </Grid>
                                </Grid>
                                <Typography component={"p"} fontWeight="thin" color={theme.palette.text.primary}>
                                    {feedback.comment}
                                </Typography>
                                <Typography component={"p"} marginTop={".75rem"} fontSize={".75rem"} fontWeight="thin" color={theme.palette.text.secondary}>{feedback.date} ago</Typography>
                            </Box>
                        </Box>
                        )
                        :
                        <Box key={feedback.id} className={`not-active-feedback not-active-feedback-${feedback.id}`}>
                            <img onClick={() => handleFeedbackClick(feedback.id)} className="user-pic" src={feedback.userImg}/>
                            <Grid container justifyContent={"space-between"} alignItems={"center"}>
                                <Grid item xs={8}>
                                    <Typography component={"p"} color={theme.palette.text.primary} fontSize="1.5rem" fontWeight="bold">{feedback.username}</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <img src={Stars}/>
                                </Grid>
                            </Grid>
                            <Typography component={"p"} fontWeight="thin" color={theme.palette.text.primary}>
                                {feedback.comment}
                            </Typography>
                            <Typography component={"p"} marginTop={".75rem"} fontSize={".75rem"} fontWeight="thin" color={theme.palette.text.secondary}>{feedback.date} ago</Typography>
                        </Box>
                    })
                }
            </Box>
        </SectionContentBox>
    </SectionBox>
  )

}

export default Feedbacks
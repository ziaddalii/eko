import React, { useState } from 'react'
import { GradientBoxRight, SectionBox, SectionContentBox, SectionTitle } from '../../contexts/ThemeContext'
import { useTheme } from '@emotion/react'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import Development from "../../images/services/development.png"
import DigitalMarketing from "../../images/services/digital-marketing.png"
import CreativeDesign from "../../images/services/creative-design.png"
import { useNavigate } from 'react-router-dom'


import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ServicesData } from './../../data/ServicesData';

const ServiceModal = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  function ServiceModalTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  ServiceModalTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };


export const ContainerPaper = styled(Paper)(({theme}) => ({
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
      }));

function Services() {
  const theme = useTheme()
  const navigate = useNavigate()

  return (
    <SectionBox sx={{overflowX:"hidden",}}>
        <SectionContentBox>
            <Grid container data-aos="fade-right" alignItems={"center"} justifyContent={"space-between"} paddingBottom={"2rem"}>
                <Grid item>
                    <SectionTitle>Services</SectionTitle>
                </Grid>
                <Grid item>
                    <Button onClick={() => navigate()} variant={"contained"}>Show More</Button>
                </Grid>
            </Grid>
            <Grid container data-aos="fade-left" spacing={"1rem"} justifyContent={"center"}>
            {        
                ServicesData.map((service) => {
                    const [open, setOpen] = useState(false);
        
                    const handleClickOpen = () => {
                      setOpen(true);
                    };
                
                    const handleClose = () => {
                      setOpen(false);
                    };
                    return(
                    <Grid key={service.id} item xs={12} sm={6} md={4}>
                        <ContainerPaper elevation={1}>
                            <img src={service.img} style={{maxHeight:"190px"}}/>
                            <Typography component={"p"} fontSize="24px" fontWeight={"bold"} marginTop={"1rem"}>{service.title}</Typography>
                            <Typography component={"p"} fontSize="12px" fontWeight={"light"} color={theme.palette.text.secondary}>{service.desc}</Typography>
                            <Button onClick={handleClickOpen} variant={"contained"} sx={{marginTop:".5rem",}}>More</Button>
                            <ServiceModal
                                onClose={handleClose}
                                aria-labelledby="customized-dialog-title"
                                open={open}
                                >
                                <ServiceModalTitle id="customized-dialog-title" onClose={handleClose}>
                                    {service.title}
                                </ServiceModalTitle>
                                <DialogContent dividers>
                                    <Typography gutterBottom>
                                        {service.content}
                                    </Typography>
                                </DialogContent>
                                <DialogActions>
                                    <Button autoFocus onClick={handleClose}>
                                        Close
                                    </Button>
                                </DialogActions>
                            </ServiceModal>
                        </ContainerPaper>
                    </Grid>
                    )
                })
            }
            </Grid>
        </SectionContentBox>
    </SectionBox>
  )
}

export default Services
import React, {useState} from 'react'
import { useTheme } from '@emotion/react'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'

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
    backgroundColor:"transparent",
    backdropFilter:"blur(15px)",
    padding:"1rem",
    transition:".2s",
    borderLeft:"solid 1px rgba(255,255,255,.1)",
    borderTop:"solid 1px rgba(255,255,255,.1)",
    boxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
    webkitBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
    mozBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
    "&:hover": {
        scale:"1.02",
        boxShadow: "10px 10px 32px 0px rgba(0,0,0,0.50)",
        webkitBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.50)",
        mozBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.50)",
    },
  }));

function ServicesGrid() {
  const theme = useTheme()
  return (
    <Box
    sx={{
        margin:"auto",
        borderLeft:"solid 1px rgba(255,255,255,.1)",
        borderTop:"solid 1px rgba(255,255,255,.1)",
        boxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
        webkitBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
        mozBoxShadow: "10px 10px 32px 0px rgba(0,0,0,0.1)",
    }}>
        <Grid container spacing={"1rem"} justifyContent={"center"}>
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
    </Box>
  )
}

export default ServicesGrid
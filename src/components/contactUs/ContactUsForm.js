import React from 'react'
import { SectionBox} from '../../contexts/ThemeContext'
import {Button, Grid, MenuItem, Paper, TextField, Typography } from '@mui/material'

function ContactUsForm() {
  return (
    <SectionBox>
            <Grid container>
                <Grid item md={4} xs={12} sx={{padding:"1rem 0"}}>
                    <Typography component={"p"} fontSize={"12px"} fontWeight={"bold"} textTransform={'uppercase'}>making a contract:</Typography>
                    <Typography component={"p"} fontSize={"16px"} fontWeight={"bold"} textTransform={'uppercase'}>contract@eko.com</Typography>
                    <Typography component={"p"} fontSize={"12px"} fontWeight={"bold"} textTransform={'uppercase'} marginTop={"1rem"}>applying for jobs:</Typography>
                    <Typography component={"p"} fontSize={"16px"} fontWeight={"bold"} textTransform={'uppercase'}>jobs@eko.com</Typography>
                </Grid>
                <Grid item md={8} xs={12}>
                    <Paper
                        elevation={4}
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {
                                width: '100%',
                                marginBottom:"1rem"
                            },
                            padding:"1rem",
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <Grid container spacing={"1rem"}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                id="outlined-multiline-flexible"
                                label="Name"
                                multiline
                                maxRows={4}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                id="outlined-multiline-flexible"
                                label="Company Name"
                                multiline
                                maxRows={4}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={"1rem"}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                id="outlined-multiline-flexible"
                                label="E-Mail"
                                multiline
                                maxRows={4}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                id="outlined-multiline-flexible"
                                label="Phone Number"
                                multiline
                                maxRows={4}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={"1rem"}>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Service needed"
                                    defaultValue="E-Commerce"
                                >
                                    <MenuItem value={"E-Commerce"}>
                                        E-commerce
                                    </MenuItem>
                                    <MenuItem value={"Mobile Applications"}>
                                        Mobile Applications
                                    </MenuItem>
                                    <MenuItem value={"Brand Identity"}>
                                        Brand Identity
                                    </MenuItem>
                                    <MenuItem value={"Digital Marketing"}>
                                        Digital Marketing
                                    </MenuItem>
                                </TextField>
                            </Grid>
                        </Grid>
                        <Grid container spacing={"1rem"}>
                            <Grid item xs={12}>
                                <TextField
                                id="outlined-multiline-flexible"
                                label="Project Details"
                                multiline
                                minRows={4}
                                maxRows={8}
                                />
                            </Grid>
                        </Grid>
                        <Button variant='contained'>Send</Button>
                    </Paper>
                </Grid>
            </Grid>
    </SectionBox>
  )
}

export default ContactUsForm
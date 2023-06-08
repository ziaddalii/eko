import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid, useTheme } from '@mui/material';
import React from 'react'
import { BlogsData } from '../../data/BlogsData';

function BlogFeed() {
    const theme = useTheme()
  return (
    <Grid container sx={{padding:"1rem"}} spacing={"1rem"}>
        {
        BlogsData.map((blog) => {
            return (
                <Grid key={blog.id} item xs={12} md={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={blog.img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {blog.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {blog.desc}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" variant={"contained"}>
                                Read More
                            </Button>
                        </CardActions>
                        <Box padding={"0px 8px 8px 8px"}>
                            <Grid container justifyContent={"space-between"}>
                                <Typography component={"span"} fontSize={"12px"} fontWeight={"bold"} color={theme.palette.text.secondary}>BY: {blog.author}</Typography>
                                <Typography component={"span"} fontSize={"12px"} fontWeight={"bold"} color={theme.palette.text.secondary} ml={"auto"}>{blog.date}</Typography> 
                            </Grid>
                        </Box>
                    </Card>
                </Grid>
                )
            })
        }
    </Grid>
  )
}

export default BlogFeed
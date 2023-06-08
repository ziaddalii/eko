import { Box, Divider, Link, Typography, useTheme } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { Search } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import { BlogsData } from './../../data/BlogsData';

function RightBar() {
    const theme = useTheme()
    const lastThree = BlogsData.slice(-3);

  return (
    <Box className="stickyElement" sx={{padding:"1rem", position:"sticky", top:"80px"}}>
        <Typography fontSize={"24px"} fontWeight={"bold"} component={"p"}>Search</Typography>
        <TextField fullWidth label="Search" variant="outlined" sx={{
            marginY:'1rem',
        }}
        InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
         />
         <Divider/>
         <Typography marginTop={"1rem"} fontSize={"24px"} fontWeight={"bold"} component={"p"}>
         Recent Posts
         </Typography>
         {
            lastThree.map((blog) => {
                return (
                    <Box key={blog.id} padding={".5rem 0"}>
                        <Link href="#" underline='hover' fontSize={"16px"} fontWeight={"bold"}>
                            {blog.title}
                        </Link>
                        <Typography fontSize={"12px"} fontWeight={"thin"} color={theme.palette.text.secondary} component={"p"}>
                            {blog.date}
                        </Typography>
                    </Box>
                )
            })
         }
    </Box>
  )
}

export default RightBar
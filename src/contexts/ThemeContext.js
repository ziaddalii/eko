import styled from "@emotion/styled";
import { Box, Button, Container, Typography } from "@mui/material"
import {createTheme} from "@mui/material/styles";
import React, { useContext, useState } from 'react'
import Aurora from "../images/auroras/1.png"
const ThemeModeContext = React.createContext();

export function useThemeMode(){
  return useContext(ThemeModeContext)
}

const ThemeModeProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeModeContext.Provider
      value={{
        setDarkMode,
        darkMode,
      }}
    >
    {children}
    </ThemeModeContext.Provider>
  )
}
  
export default ThemeModeProvider

export const darkTheme = createTheme({
    palette: {
      mode:"dark",
      primary:{
        main:"#CEEB62",
        light:"#def291",
        dark:"b9d350",
      },
      secondary:{
        main: "#25B4BF",
        dark:"#20a1aa",
        light:"#56d4dd",
      },
      contrastColor:{
        main:"#7A4DCC",
        light:"#9c76e2",
        dark:"#6140a0",
      },
      backgroundColor:{
        main:"#1C191F",
      },
      text:{
        primary:"#F3F0F1",
        secondary:"#D6D6D6"
      }
    },
    typography: {
      allVariants: {
        color: "#f2f2f2"
    }},
  })
export const lightTheme = createTheme({
    palette: {
      mode:"light",
      primary:{
        main:"#7A4DCC",
        light:"#b096e0",
        dark:"#6140a0",
      },
      secondary:{
        main: "#25B4BF",
        dark:"#20a1aa",
        light:"#56d4dd",
      },
      contrastColor:{
        main:"#CEEB62",
        light:"#def291",
        dark:"b9d350",
      },
      backgroundColor:{
        main:"#F3F0F1",
      },
      text:{
        primary:"#000",
        secondary:"#565656"
      }
    },
    typography: {
    allVariants: {
      color: "#000"
    }},
  })

  export const SectionBox = styled(Box)(({theme}) => ({
    webkitBackfaceVisibility: "hidden",
    webkitPerspective: "1000",
    webkitTransform: "translate3d(0,0,0)",
    webkitTransform: "translateZ(0)",
    backfaceVisibility: "hidden",
    position:"relative",
    backgroundColor: theme.palette.backgroundColor.main,
  }));

  export const SectionContentBox = styled(Container)(({theme}) => ({
    zIndex:"1",
    position:"relative",
    padding:"4rem 0",
    [theme.breakpoints.down('sm')]: {
      padding: '3rem 2rem',
    },
  }));

  export const SectionTitle = styled(Typography)(({theme}) => ({
    fontSize:"2rem",
    fontWeight:"bold",
  }));

  export const TypographyLink = styled(Typography)(({theme}) => ({
    position: "relative",
    textDecoration: "none",
    padding: "0 .75rem",
    textTransform: "uppercase",
    fontSize: ".8rem",
    color:theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.primary.light,
    },
    '&:after': {
      content:'""',
      position: "absolute",
      left: "12px",
      bottom: "-10px",
      width: "0%" ,
      height: "2px",
      backgroundColor: `${theme.palette.primary.main}`,
      transition: ".5s",
    },
    '&:hover:after': {
      width: "25%" ,
    },
    "&.active": {
      color: theme.palette.primary.main,
      fontWeight:"bold",
      '&:after': {
        content:'""',
        position: "absolute",
        left: "12px",
        bottom: "-10px",
        width: "25%" ,
        height: "2px",
        backgroundColor: `${theme.palette.primary.main}`,
        transition: ".5s",
      },
    },
    
  }));

  export const TypographyLinkFooter = styled(Typography)(({theme}) => ({
    textDecoration: "none",
    textTransform: "capitalize",
    color:theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.primary.light,
    },
    "&.active": {
      color: theme.palette.primary.main,
      fontWeight:"bold",
    },
    
  }));

import styled from "@emotion/styled";
import { Box, Button, Container, Switch, Typography } from "@mui/material"
import {createTheme} from "@mui/material/styles";
import React, { useContext, useState } from 'react'

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

  export const GradientBoxLeft = styled(Box)(({theme}) => ({
    position:"absolute",
    backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
    height: "30vw",
    width: "30vw",
    minHeight: "200px",
    minWidth:"200px",
    borderRadius:"50%",
    filter: "blur(200px)",
    animation: 'move-left 10s infinite',
    '@keyframes move-left': {
      '0%': { transform: 'rotate(0deg)', top:"-50px" },
      '100%': { transform: 'rotate(0deg)', top:"-50px" },
      '50%': { transform: 'rotate(20deg)', top:"150px" },
    },
  }));

  export const GradientBoxRight = styled(Box)(({theme}) => ({
    position:"absolute",
    backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
    height: "30vw",
    width: "30vw",
    minHeight: "200px",
    minWidth:"200px",
    borderRadius:"50%",
    filter: "blur(200px)",
    animation: 'move-right 10s infinite',
    '@keyframes move-right': {
      '0%': { transform: 'rotate(0deg)', top:"-50px", right:"0px" },
      '100%': { transform: 'rotate(0deg)', top:"-50px", right:"0px" },
      '50%': { transform: 'rotate(20deg)', top:"150px", right:"0px" },
    },
  }));

  
  export const BlueButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    color:theme.palette.primary.contrastText,
    margin: 5,
    "&:hover": {
        backgroundColor:theme.palette.primary.dark,
    },
    "&:disabled": {
        backgroundColor: "grey",
        color: "white",
    },
  }));

  export const SectionBox = styled(Box)(({theme}) => ({
    position:"relative",
    backgroundColor: theme.palette.backgroundColor.main,
  }));

  export const SectionContentBox = styled(Container)(({theme}) => ({
    zIndex:"1",
    position:"relative",
    padding:"6rem 0",
    [theme.breakpoints.down('sm')]: {
      padding: '4rem 2rem',
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

  export const GlassyBox = styled(Box)(({theme}) => ({
    background:"rgba(255,255,255,.05)",
    backdropFilter:"blur(20px)",
  }));

  export const GlassyButton = styled(Button)(({theme}) => ({
    background:"rgba(255,255,255,.05)",
    backdropFilter:"blur(20px)",
  }));
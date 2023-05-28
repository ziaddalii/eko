import React from 'react'
import ThemeModeContext from '../contexts/ThemeContext'
import Pages from './Pages'
import "../styles/app.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'

function App() {
  return (
    <ThemeModeContext>
      <Pages/>
    </ThemeModeContext>
  )
}

export default App
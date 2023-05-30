import React from 'react'
import ThemeModeContext from '../contexts/ThemeContext'
import Pages from './Pages'
import "../styles/app.css"
function App() {
  return (
    <ThemeModeContext>
      <Pages/>
    </ThemeModeContext>
  )
}

export default App
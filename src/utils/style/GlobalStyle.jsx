/*
Projet 07 "Shiny" cours OpenClassrooms 
par Manuel MILLET le 03 novembre 2022 15h00
P2C3 19h00
*/

import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../hooks'


const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    a {
      text-decoration: none;
    }
    body {
      background-color: ${(props) =>
        props.isDarkMode ? '#2F2E41' : 'white'};
      margin: 0;
  }
`

function GlobalStyle() {
  const { theme } = useTheme()

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle

/*
import { ThemeContext } from '../context'
import { useContext } from 'react'

function GlobalStyle() {
  const { theme } = useTheme()

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}
const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    a {
      text-decoration: none;
    }
    body {
        background-color: ${(props) =>
          props.isDarkMode ? '#2F2E41' : 'white'};
        margin: 0;
    }
`
*/
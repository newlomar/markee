import { ThemeProvider, createGlobalStyle, css } from 'styled-components'
import { App } from './app'
import { theme } from 'resources/theme'

import 'normalize.css'

function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`${({ theme }) => css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    color: ${theme.colors.black}
  }

  #app {
    display: flex;
  }
`}`

export { Root }

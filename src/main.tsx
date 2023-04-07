import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App'
import theme from './theme/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    {localStorage.setItem('chakra-ui-color-mode', 'dark')}
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </>
)

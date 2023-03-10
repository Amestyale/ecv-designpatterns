import { extendTheme } from '@chakra-ui/theme-utils'

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  styles: {
    global: () => ({
      body: {
        bg: "url('/bg.jpg') no-repeat center/cover",
      },
    }),
  },
})
export default theme

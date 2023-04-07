import { extendTheme } from '@chakra-ui/theme-utils'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "url('/bg.webp') no-repeat center/cover",
      },
    }),
  },
})
export default theme

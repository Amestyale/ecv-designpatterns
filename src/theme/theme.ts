import { mode } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/theme-utils'
import { color } from 'framer-motion'
import bg from '../assets/bg.jpg'

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: "url('/bg.jpg') no-repeat center/cover",
      },
    }),
  },
})
export default theme

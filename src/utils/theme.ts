import { extendTheme } from '@chakra-ui/core'
import { transparentize } from 'polished'

const theme = extendTheme({
  colors: {
    black: '#292728',
    brand: {
      50: '#fbe9ee',
      100: '#f4beca',
      200: '#ec92a4',
      300: '#e5677b',
      400: '#dd3b50',
      500: '#d7182a',
      600: '#a3121b',
      700: '#780d10',
      800: '#4c0808',
      900: '#210403'
    },
    white: '#fff'
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif'
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 9999,
        _focus: {
          boxShadow: `0 0 0 3px ${transparentize(0.5, '#d7182a')}`
        }
      }
    },
    Popover: {
      baseStyle: () => ({
        content: {
          _focus: {
            boxShadow: `0 0 0 3px ${transparentize(0.5, '#d7182a')}`
          }
        }
      })
    },
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: `0 0 0 3px ${transparentize(0.5, '#d7182a')}`
        }
      }
    },
    Heading: {
      baseStyle: {
        fontWeight: 600
      }
    }
  }
})

export default theme

import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            '900': '#000000',
            '700': '#47585B',
            '500': '#999999',
            '300': '#DADADA',
            '100': '#F5F8FA',
            '50': '#FFFFFF',


        },
        yellow: {
            '500': '#FFBA08',
        },
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.100',
                color: 'gray.700',
            }
        }
    },
    components: {
        Divider: {
          defaultProps: { size: "md" },
          sizes: {
            lg: { borderWidth: "4px" },
            md: { borderWidth: "2px" },
            sm: { borderWidth: "1px" },
          },
        },
      },
})
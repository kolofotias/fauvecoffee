import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  brand: {
    purple: '#6B46C1',
    blue: '#3182CE',
    pink: '#D53F8C',
    lightBg: '#FFFFFF',
    darkBg: '#1A202C',
  },
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode('white', 'gray.800')(props),
      color: mode('gray.800', 'white')(props),
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
      borderRadius: 'md',
    },
    variants: {
      solid: (props) => ({
        bg: mode('brand.purple', 'brand.pink')(props),
        color: 'white',
        _hover: {
          bg: mode('brand.blue', 'brand.purple')(props),
        },
      }),
    },
  },
};

const theme = extendTheme({
  config,
  colors,
  styles,
  components,
});

export default theme;

import { extendTheme } from '@chakra-ui/react';

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
      bg: props.colorMode === 'light' ? 'white' : 'gray.800',
      color: props.colorMode === 'light' ? 'gray.800' : 'white',
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
        bg: props.colorMode === 'light' ? 'brand.purple' : 'brand.pink',
        color: 'white',
        _hover: {
          bg: props.colorMode === 'light' ? 'brand.blue' : 'brand.purple',
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

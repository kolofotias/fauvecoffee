import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useColorMode,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { FaMoon, FaSun, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'white');

  return (
    <Box bg={bgColor} px={4} shadow="md" position="fixed" width="full" zIndex={999}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <RouterLink to="/">
          <Image
            src="/logo.png"
            alt="Fauve Coffee"
            height="40px"
            fallbackSrc="https://via.placeholder.com/40x40"
          />
        </RouterLink>

        <HStack spacing={8} alignItems="center">
          <Link as={RouterLink} to="/" color={textColor}>
            Home
          </Link>
          <Link as={RouterLink} to="/products" color={textColor}>
            Products
          </Link>
          <Link as={RouterLink} to="/about" color={textColor}>
            About
          </Link>
          <IconButton
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            variant="ghost"
          />
          <RouterLink to="/cart">
            <IconButton
              icon={<FaShoppingCart />}
              variant="ghost"
              aria-label="Shopping Cart"
            />
          </RouterLink>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  Image,
  Grid,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  const features = [
    {
      title: 'Specialty Coffee',
      description: 'Carefully selected beans from the finest coffee regions',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800',
    },
    {
      title: 'Coffee Van',
      description: 'Find our mobile coffee van around Berlin',
      image: 'https://images.unsplash.com/photo-1515017804404-308ac887a442?auto=format&fit=crop&w=800',
    },
    {
      title: 'Roasted Fresh',
      description: 'Small-batch roasting for maximum flavor',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800',
    },
  ];

  return (
    <Box bg={bgColor} pt={20}>
      {/* Hero Section */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={8} alignItems="center" textAlign="center">
          <Heading size="2xl">Welcome to Fauve Coffee</Heading>
          <Text fontSize="xl">
            Bringing Berlin's finest specialty coffee to your doorstep
          </Text>
          <Button
            as={RouterLink}
            to="/products"
            size="lg"
            colorScheme="purple"
            mt={8}
          >
            Shop Now
          </Button>
        </VStack>
      </Container>

      {/* Features Grid */}
      <Box bg={cardBg} py={20}>
        <Container maxW="container.xl">
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
            gap={8}
          >
            {features.map((feature, index) => (
              <Box
                key={index}
                bg={cardBg}
                p={6}
                rounded="lg"
                shadow="md"
                textAlign="center"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  rounded="lg"
                  mb={4}
                  h="200px"
                  w="full"
                  objectFit="cover"
                />
                <Heading size="md" mb={4}>
                  {feature.title}
                </Heading>
                <Text>{feature.description}</Text>
              </Box>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

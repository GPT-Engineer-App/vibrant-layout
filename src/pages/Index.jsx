import { Box, Container, Flex, Heading, Text, Button, VStack, Link, Image } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <VStack spacing={8} align="stretch">
          <Box as="header">
            <Flex justify="space-between" align="center" p={4}>
              <Heading size="lg">BrandName</Heading>
              <Button colorScheme="blue" leftIcon={<FaRocket />}>
                Get Started
              </Button>
            </Flex>
          </Box>
          <VStack spacing={4} align="center">
            <Text fontSize="2xl" fontWeight="bold">
              Welcome to Your New App
            </Text>
            <Text fontSize="md" color="gray.600">
              Explore the features and improvements.
            </Text>
            <Button colorScheme="blue" size="lg">
              Learn More
            </Button>
          </VStack>
          <Box as="footer" p={4}>
            <Flex justify="space-between">
              <Link href="#" color="blue.500">
                Privacy Policy
              </Link>
              <Link href="#" color="blue.500">
                Terms of Service
              </Link>
            </Flex>
          </Box>
        </VStack>
        <Image src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MHx8fHwxNzE1MzU3OTgyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Modern Office" />
      </Flex>
    </Container>
  );
};

export default Index;

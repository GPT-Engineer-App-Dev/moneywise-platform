import { Box, Container, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">Financial Times</Heading>
            <Flex>
              <Link href="#" mx={2} color="white">Home</Link>
              <Link href="#" mx={2} color="white">World</Link>
              <Link href="#" mx={2} color="white">Business</Link>
              <Link href="#" mx={2} color="white">Tech</Link>
              <Link href="#" mx={2} color="white">Markets</Link>
              <Link href="#" mx={2} color="white">Opinion</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="md" mb={4}>Top Stories</Heading>
            <Text>Article 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            <Text>Article 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <Text>Article 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md" mb={4}>Latest News</Heading>
            <Text>Article 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
            <Text>Article 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Text textAlign="center">&copy; 2023 Financial Times. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
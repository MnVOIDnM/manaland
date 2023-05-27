import { Container, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Container
      as="footer"
      py={{ base: "1", md: "2" }}
      position="fixed"
      bottom="0"
      left="0"
      minW="100%"
      bg="gray.100"
    >
      <Text fontSize="sm" color="subtle" textAlign="center">
        &copy; 2023 まなランド
      </Text>
    </Container>
  );
}

export default Footer;

import { Container, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Text fontSize="sm" color="subtle" textAlign="center">
        &copy; 2023 まなランド
      </Text>
    </Container>
  );
}

export default Footer;

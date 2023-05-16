import { Box, Button, Container, Flex, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box as="section">
      <Box as="nav" boxShadow="sm">
        <Container py={{ base: "2", lg: "3" }}>
          <HStack>
            <Flex justifyContent="space-between" alignItems="center" w="100%">
              <Link to="home">ホーム</Link>
              <Link to="pref-quiz">都道府県クイズ</Link>
              <Link to="capital-quiz">県庁所在地クイズ</Link>
              <Link to="map-icon-quiz">地図記号クイズ</Link>
            </Flex>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}

export default Header;

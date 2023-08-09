import { Flex, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HStack
      justifyContent="space-between"
      py={{ base: "2", lg: "3" }}
      boxShadow="sm"
      w="100vw"
    >
      <Flex>
        <Link to="home">←もどる</Link>
      </Flex>
      <Flex>
        <Link to="home">まなランド</Link>
      </Flex>
      <Flex>
        <Link to="login">ログイン</Link>
      </Flex>
    </HStack>
  );
}

export default Header;

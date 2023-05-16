import React from "react";
import { Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Flex direction="column" align="center" justify="center" h="50vh">
      <Heading p={10}>社会</Heading>
      <ButtonGroup>
        <Button onClick={() => navigate("/pref-quiz")}>都道府県クイズ</Button>
        <Button onClick={() => navigate("/capital-quiz")}>
          県庁所在地クイズ
        </Button>
        <Button onClick={() => navigate("/map-icon-quiz")}>
          地図記号クイズ
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Home;

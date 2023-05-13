import { Button, HStack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import QuizImage from "../QuizImage";
import QuizChoices from "../QuizChoices";
function CapitalQuizPlay() {
  const [restQuiz, setRestQuiz] = useState(47);
  const counter = 47 - restQuiz;

  const updateQuiz = () => {
    if (restQuiz > 1) {
      setRestQuiz((prev) => prev - 1);
    }
  };

  return (
    <HStack w="100vw" h="90vh" justifyContent="center" alignItems="center">
      <QuizImage counter={counter} />
      <VStack h="70%">
        <Button my={10}>もどる</Button>
        <QuizChoices updateQuiz={updateQuiz} counter={counter} />
      </VStack>
    </HStack>
  );
}

export default CapitalQuizPlay;

import { Heading, Img, Square, VStack } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { quizQueueState } from "../atoms/capital_quiz_atoms";

const QuizImage = React.memo(({ counter }) => {
  const quizQueue = useRecoilValue(quizQueueState);

  return (
    <>
      <VStack>
        <Heading size="4xl">{quizQueue.answer[counter].name}</Heading>
        <Square size="70vh" m={5}>
          <Img
            src={quizQueue.answer[counter].imgSingle}
            alt={`image ${quizQueue.answer[counter].name}`}
            h="500px"
            w="500px"
          />
        </Square>
      </VStack>
    </>
  );
});

export default QuizImage;

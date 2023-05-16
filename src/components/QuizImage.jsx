import React from "react";
import { Heading, Img, Square, VStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import {
  counterState,
  gameModeState,
  quizQueueState,
} from "../state/capital_quiz_atoms";

const QuizImage = React.memo(() => {
  const quizQueue = useRecoilValue(quizQueueState);
  const counter = useRecoilValue(counterState);
  const gameMode = useRecoilValue(gameModeState);
  const { name, imgSingle } = quizQueue.answer[counter];

  return (
    <VStack>
      {gameMode === "pref" ? null : <Heading size="4xl">{name}</Heading>}
      <Square size="60vh" m={5}>
        <Img src={imgSingle} alt={`image ${name}`} />
      </Square>
    </VStack>
  );
});

export default QuizImage;

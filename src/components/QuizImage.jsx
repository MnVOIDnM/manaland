import React from "react";
import { Heading, Img, Square, VStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import {
  counterState,
  gameModeState,
  quizQueueState,
} from "../state/capital_quiz_atoms";
import { quizAnswerState } from "../state/capital_quiz_selectors";

const QuizImage = React.memo(() => {
  const counter = useRecoilValue(counterState);
  const gameMode = useRecoilValue(gameModeState);
  const answer = useRecoilValue(quizAnswerState(counter));

  const { image, imgSingle, name } = answer;

  return (
    <VStack>
      {gameMode === "capital" ? <Heading size="4xl">{name}</Heading> : null}
      <Square size="60vh" m={5}>
        {gameMode === "mapicon" ? (
          <Img src={image} alt={`image ${name}`} />
        ) : (
          <Img src={imgSingle} alt={`image ${name}`} />
        )}
      </Square>
    </VStack>
  );
});

export default QuizImage;

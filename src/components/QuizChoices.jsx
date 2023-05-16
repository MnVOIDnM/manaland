import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { counterState, quizSizeState } from "../state/capital_quiz_atoms";
import { useNavigate } from "react-router-dom";
import {
  quizAnswerState,
  quizChoicesState,
} from "../state/capital_quiz_selectors";
import { determineColorScheme } from "../utils/helper";

const QuizChoices = React.memo(() => {
  const navigate = useNavigate();
  const [quizSize, setQuizSize] = useRecoilState(quizSizeState);
  const [counter, setCounter] = useRecoilState(counterState);
  const [buttonState, setButtonState] = useState("default");
  const answer = useRecoilValue(quizAnswerState(counter));
  const choices = useRecoilValue(quizChoicesState(counter));

  const { city, name, id } = answer;

  const updateQuiz = useCallback(() => {
    if (quizSize > counter + 1) {
      setCounter((prev) => prev + 1);
    } else {
      navigate("/capital-quiz");
    }
  }, [navigate, quizSize, counter, setCounter, setQuizSize]);

  const judgeChoice = useCallback(
    (select) => {
      if (select === city || select === name) {
        updateQuiz();
        setButtonState("correct");
      } else {
        setButtonState("incorrect");
      }
    },
    [city, name, updateQuiz]
  );

  useEffect(() => {
    let timer;
    if (buttonState === "correct" || buttonState === "incorrect") {
      timer = setTimeout(
        () => {
          setButtonState("default");
        },
        buttonState === "correct" ? 200 : 500
      );
    }
    return () => {
      clearTimeout(timer);
    };
  }, [buttonState]);

  return (
    <Flex px={5}>
      <SimpleGrid columns={2} spacing={5}>
        {choices.map((choice) => (
          <Button
            h="20vh"
            w="20vh"
            colorScheme={determineColorScheme(buttonState)}
            fontSize="3xl"
            key={`${choice}-${id}`}
            isDisabled={buttonState !== "default"}
            onClick={() => judgeChoice(choice)}
          >
            {choice}
          </Button>
        ))}
      </SimpleGrid>
    </Flex>
  );
});

export default QuizChoices;

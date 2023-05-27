import { useEffect } from "react";
import { Button, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { createCapitalQuiz } from "../utils/helper";
import SelectQuizSize from "../components/SelectQuizSize";
import { imgSingleUrls } from "../utils/imgURL/imgSingleUrl";
import { useSetRecoilState } from "recoil";
import {
  counterState,
  gameModeState,
  imageUrlsState,
  quizQueueState,
  quizSizeState,
} from "../state/capital_quiz_atoms";

function CapitalQuizApp() {
  const navigate = useNavigate();

  const setQuizQueue = useSetRecoilState(quizQueueState);
  const setImageUrls = useSetRecoilState(imageUrlsState);
  const setGameMode = useSetRecoilState(gameModeState);
  const setCounter = useSetRecoilState(counterState);
  const setQuizSize = useSetRecoilState(quizSizeState);

  useEffect(() => {
    setQuizQueue(createCapitalQuiz);
    setGameMode("capital");
    setCounter(0);
    setQuizSize(10);
    setImageUrls(imgSingleUrls);
  }, []);

  return (
    <VStack justifyContent="center" alignItems="center" height="60vh">
      <Heading m={5}>県庁所在地クイズ</Heading>
      <SelectQuizSize quizSizeOptions={["20", "30", "47"]} />
      <Button
        onClick={() => navigate("/play")}
        fontSize="2xl"
        size="lg"
        w="200px"
        p={5}
        colorScheme="teal"
        variant="outline"
        border="2px"
      >
        スタート
      </Button>
    </VStack>
  );
}

export default CapitalQuizApp;

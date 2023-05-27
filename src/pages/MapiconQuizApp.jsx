import { useEffect } from "react";
import { Button, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { createMapiconQuiz } from "../utils/helper";
import SelectQuizSize from "../components/SelectQuizSize";
import { mapiconUrl } from "../utils/imgURL/mapiconUrl";
import { useSetRecoilState } from "recoil";
import {
  counterState,
  gameModeState,
  imageUrlsState,
  quizQueueState,
  quizSizeState,
} from "../state/capital_quiz_atoms";

function MapIconQuizApp() {
  const navigate = useNavigate();
  const setQuizQueue = useSetRecoilState(quizQueueState);
  const setImageUrls = useSetRecoilState(imageUrlsState);
  const setGameMode = useSetRecoilState(gameModeState);
  const setCounter = useSetRecoilState(counterState);
  const setQuizSize = useSetRecoilState(quizSizeState);

  useEffect(() => {
    setQuizQueue(createMapiconQuiz);
    setGameMode("mapicon");
    setCounter(0);
    setQuizSize(10);
    setImageUrls(mapiconUrl);
  }, []);

  return (
    <VStack justifyContent="center" alignItems="center" height="60vh">
      <Heading m={5}>地図記号クイズ</Heading>
      <SelectQuizSize quizSizeOptions={["30", "50", "70"]} />
      {/* {difficulty === "easy" ? (
        <SelectQuizSize quizSizeOptions={["20", "35"]} />
      ) : "hard" ? (
        <SelectQuizSize quizSizeOptions={["20", "35"]} />
      ) : (
        <SelectQuizSize quizSizeOptions={["30", "50", "70"]} />
      )} */}
      <Button
        onClick={() => navigate("/play")}
        三項
        fontSize="2xl"
        size="lg"
        w="200px"
        p={5}
        colorScheme="whatsapp"
        variant="outline"
        border="2px"
      >
        スタート
      </Button>
    </VStack>
  );
}

export default MapIconQuizApp;

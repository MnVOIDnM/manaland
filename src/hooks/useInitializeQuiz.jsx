import { useSetRecoilState } from "recoil";
import {
  counterState,
  gameModeState,
  imageUrlsState,
  quizQueueState,
  quizSizeState,
} from "../state/capital_quiz_atoms";

export function useInitializeQuiz(createQuizFunction) {
  const setQuizQueue = useSetRecoilState(quizQueueState);
  const setImageUrls = useSetRecoilState(imageUrlsState);
  const setGameMode = useSetRecoilState(gameModeState);
  const setCounter = useSetRecoilState(counterState);
  const setQuizSize = useSetRecoilState(quizSizeState);

  const initialize = () => {
    setQuizQueue(createQuizFunction);
    setGameMode("capital");
    setCounter(0);
    setQuizSize(10);
    // setImageUrls(imgSingleUrls);
  };

  return initialize;
}

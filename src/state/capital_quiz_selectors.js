import { selector, selectorFamily } from "recoil";
import {
  counterState,
  quizSizeState,
  imageUrlsState,
  quizQueueState,
} from "./capital_quiz_atoms";

export const quizImageState = selector({
  key: "quizImage",
  get: ({ get }) => {
    const urls = get(imageUrlsState);
    const loadedImage = urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
    return loadedImage;
  },
});

export const restQuizLabelState = selector({
  key: "restQuizLabel",
  get: ({ get }) => {
    const restQuiz = get(quizSizeState);
    const currentQuiz = get(counterState);

    return `${currentQuiz + 1}/${restQuiz}`;
  },
});

export const quizAnswerState = selectorFamily({
  key: "answerSelector",
  get:
    (counter) =>
    ({ get }) => {
      const queue = get(quizQueueState);
      return queue.answer[counter];
    },
});

export const quizChoicesState = selectorFamily({
  key: "choicesSelector",
  get:
    (counter) =>
    ({ get }) => {
      const queue = get(quizQueueState);
      return queue.choices[counter];
    },
});

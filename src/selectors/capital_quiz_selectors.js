import { selector } from "recoil";
import { imageUrlsState } from "../atoms/capital_quiz_atoms";

export const quizImageState = selector({
  key: "quizImageState",
  get: ({ get }) => {
    const urls = get(imageUrlsState);
    const loadedImage = urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
    return loadedImage;
  },
});

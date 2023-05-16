import { atom } from "recoil";

export const quizQueueState = atom({
  key: "quizQueue",
  default: [],
});

export const counterState = atom({
  key: "counter",
  default: 0, // from 0 to 46
});

export const imageUrlsState = atom({
  key: "imageUrls",
  default: [],
});

export const quizSizeState = atom({
  key: "quizSize",
  default: 10, // 10, 20, 30, 47
});

export const gameModeState = atom({
  key: "gameMode",
  default: "pref", // pref, capital
});

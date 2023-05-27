import { mapiconData } from "./mapiconData";
import { prefData } from "./prefData";

export const determineColorScheme = (state) => {
  switch (state) {
    case "correct":
      return "green";
    case "incorrect":
      return "red";
    default:
      return "gray";
  }
};

const shuffle = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export const createCapitalQuiz = () => {
  const shuffledData = shuffle(prefData);

  const quizChoices = shuffledData.map((data) => {
    const choices = [...data.fakes, data.city];
    return shuffle(choices);
  });

  return {
    choices: quizChoices,
    answer: shuffledData,
  };
};

function createChoice(data) {
  const shuffledData = shuffle(data);

  const quizChoices = shuffledData.map((answer, index) => {
    const restData = shuffledData.filter((_, idx) => idx !== index);
    const fake = shuffle(restData)
      .slice(0, 3)
      .map((data) => {
        return data.name;
      });
    const choices = [...fake, answer.name];
    return shuffle(choices);
  });

  return {
    choices: quizChoices,
    answer: shuffledData,
  };
}

export const createPrefQuiz = () => {
  return createChoice(prefData);
};

export const createMapiconQuiz = () => {
  return createChoice(mapiconData);
};

import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { isStartedState, quizQueueState } from "../../atoms/capital_quiz_atoms";

const CapitalQuizPlay = () => {
  const setIsStarted = useSetRecoilState(isStartedState);
  const quizQueue = useRecoilValue(quizQueueState);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [choiceButtonColor, setChoiceButtonColor] = useState("gray");
  const { name, imgSingle } = quizQueue.answer[counter];

  const [restQuiz, setRestQuiz] = useState(47);
  const counter = 47 - restQuiz;

  function setButtonEffect(color, timeout) {
    setIsButtonDisabled(true);
    setChoiceButtonColor(color);
    setTimeout(() => {
      setIsButtonDisabled(false);
      setChoiceButtonColor("gray");
    }, timeout);
  }
  function judge(select) {
    if (select === quizQueue.answer[counter].city) {
      setButtonEffect("green", 200);
      updateQuiz();
    } else {
      setButtonEffect("red", 500);
    }
  }

  const updateQuiz = () => {
    if (restQuiz > 1) {
      setRestQuiz((prev) => prev - 1);
    } else {
      setIsStarted(false);
    }
  };

  return (
    <>
      <div>
        <h1>{name}</h1>
        <div>
          <img src={imgSingle} alt={`prefecture image ${name}`} />
        </div>
      </div>
      <div>
        <button>もどる</button>
        <div>
          {quizQueue.choices[counter].map((choice) => (
            <button
              key={choice}
              isDisabled={isButtonDisabled}
              onClick={() => judge(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CapitalQuizPlay;

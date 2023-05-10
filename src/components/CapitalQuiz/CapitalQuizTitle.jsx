import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import {
  imageUrlsState,
  quizQueueState,
} from "../../atoms/capital_quiz_atoms";
import { createCapitalQuiz } from "../../utils/helper";
import { Link } from "react-router-dom";
import { imgSingleUrls } from "../../utils/imgURL/imgSingleUrl";

const CapitalQuizTitle = () => {
  const setQuizQueue = useSetRecoilState(quizQueueState);
  const setImageUrls = useSetRecoilState(imageUrlsState);

  useEffect(() => {
    Promise.all(
      imgSingleUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            resolve(url);
          };
          img.onerror = reject;
          img.src = url;
        });
      })
    )
      .then((imgSingleUrls) => {
        setImageUrls(imgSingleUrls);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setQuizQueue(createCapitalQuiz());
  }, []);

  return (
    <div class="text-center">
      <h1 class="text-3xl font-bold">県庁所在地クイズ</h1>
      <div class="mt-5 flex items-center justify-center">
        <Link
          to="play"
          class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          スタート
        </Link>
      </div>
    </div>
  );
};

export default CapitalQuizTitle;

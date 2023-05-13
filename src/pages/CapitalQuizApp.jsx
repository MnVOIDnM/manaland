import { Button, Heading, VStack } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import React, { useEffect } from "react";
import { createCapitalQuiz } from "../utils/helper";
import { imageUrlsState, quizQueueState } from "../atoms/capital_quiz_atoms";
import { Link } from "react-router-dom";
import { imgSingleUrls } from "../utils/imgURL/imgSingleUrl";

function CapitalQuizApp() {
  const setQuizQueue = useSetRecoilState(quizQueueState);
  const setImageUrls = useSetRecoilState(imageUrlsState);

  useEffect(() => {
    setQuizQueue(createCapitalQuiz());
    setImageUrls(imgSingleUrls);
  }, []);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <VStack justifyContent="center" alignItems="center" height="100vh">
        <Heading>県庁所在地クイズ</Heading>
        <Link to="play">start</Link>
      </VStack>
    </React.Suspense>
  );
}

export default CapitalQuizApp;

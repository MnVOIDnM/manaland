import { Button, HStack, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import QuizImage from "../components/QuizImage";
import QuizChoices from "../components/QuizChoices";
import { restQuizLabelState } from "../state/capital_quiz_selectors";

function QuizPlay() {
  const navigate = useNavigate();
  const restQuizLabel = useRecoilValue(restQuizLabelState);

  function onClickBackButton() {
    navigate("/capital-quiz");
  }

  return (
    <HStack w="100vw" h="90vh" justifyContent="center" alignItems="center">
      <QuizImage />
      <VStack h="100%">
        <Heading>{restQuizLabel}</Heading>
        <Button p={5} my={10} onClick={onClickBackButton}>
          もどる
        </Button>
        <QuizChoices />
      </VStack>
    </HStack>
  );
}

export default QuizPlay;

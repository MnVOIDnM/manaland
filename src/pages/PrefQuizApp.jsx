import { useEffect } from "react";
import { Button, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { createPrefQuiz } from "../utils/helper";
import SelectQuizSize from "../components/SelectQuizSize";
import { useInitializeQuiz } from "../hooks/useInitializeQuiz";

function PrefQuizApp() {
  const navigate = useNavigate();
  const initQuiz = useInitializeQuiz(createPrefQuiz);

  useEffect(() => {
    initQuiz();
  }, [initQuiz]);

  return (
    <VStack justifyContent="center" alignItems="center" height="60vh">
      <Heading m={5}>都道府県クイズ</Heading>
      <SelectQuizSize />
      <Button
        onClick={() => navigate("/play")}
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

export default PrefQuizApp;

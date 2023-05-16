import React from "react";
import { HStack, useRadioGroup } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { quizSizeState } from "../state/capital_quiz_atoms";
import RadioCard from "./RadioCard";

const SelectQuizSize = React.memo(() => {
  const setQuizSize = useSetRecoilState(quizSizeState);

  function handleChange(value) {
    setQuizSize(parseInt(value, 10));
  }

  const DEFAULT_QUIZ_SIZE = "10";
  const QUIZ_SIZE_OPTIONS = [DEFAULT_QUIZ_SIZE, "20", "30", "47"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    defaultValue: DEFAULT_QUIZ_SIZE,
    onChange: handleChange,
  });
  const group = getRootProps();

  return (
    <HStack {...group} spacing={5} p={10}>
      {QUIZ_SIZE_OPTIONS.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}問
          </RadioCard>
        );
      })}
    </HStack>
  );
});

export default SelectQuizSize;

import { VStack } from "@chakra-ui/react";
import { VFC } from "react";
import { data } from "./data";
import { transformYears } from "./transformYears";
import { YearWords } from "./YearWords";

export const Chronology: VFC = () => {
  const { list } = data;
  const years = transformYears(list);

  return (
    <VStack spacing={0}>
      {years.map(({ id, ...year }, index) => (
        <YearWords key={id} years={year} index={index} />
      ))}
    </VStack>
  );
};
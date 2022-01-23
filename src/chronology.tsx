import { VStack } from "@chakra-ui/react";
import { VFC } from "react";
import { transformYears } from "./transformYears";
import { YearWords } from "./yearWords";
import { Data } from "./data";

type Props = {
  data: Data;
};

export const Chronology: VFC<Props> = ({ data }) => {
  const { list } = data;
  const years = transformYears(list);

  return (
    <>
      <VStack spacing={0} py={5}>
        {years.map(({ id, ...year }, index) => (
          <YearWords key={id} years={year} index={index} />
        ))}
      </VStack>
    </>
  );
};

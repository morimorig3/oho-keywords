import { VFC } from "react";
import {
  Container,
  Box,
  HStack,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Year } from "./transformYears";

type Props = {
  years: Year;
  index: number;
};

export const YearWords: VFC<Props> = ({ years, index }) => (
  <Box w="full" bg={`${index % 2 ? "gray.200" : ""}`} py={4}>
    <Container>
      <HStack>
        <Text px={4}>{years.year}年</Text>
        <UnorderedList px={4}>
          {years.list.map(({ keywords, id }) => (
            <ListItem key={id}>{keywords}</ListItem>
          ))}
        </UnorderedList>
      </HStack>
    </Container>
  </Box>
);

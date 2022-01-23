import { VFC } from "react";
import { Container, Box, HStack, Text, Tooltip } from "@chakra-ui/react";
import { Year } from "./transformYears";

type Props = {
  years: Year;
  index: number;
};

const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
};

const fontSizeKey = Object.keys(fontSizes);

export const YearWords: VFC<Props> = ({ years, index }) => (
  <Box w="full" bg={`${index % 2 ? "gray.100" : ""}`} py={4}>
    <Container maxW="container.md">
      <HStack spacing={4}>
        <Text fontSize="sm" flexShrink={0}>
          {years.year}年 {years.year - 1992}歳
        </Text>
        <HStack spacing={0} gap={4} wrap="wrap">
          {years.list.map(({ keywords, weight, note, id }) => (
            <Tooltip
              key={id}
              label={note}
              placement="top"
              hasArrow
              defaultIsOpen={index === 0}
            >
              <Text
                cursor="pointer"
                fontWeight="bold"
                fontSize={fontSizeKey[weight] ?? "md"}
              >
                {keywords}
              </Text>
            </Tooltip>
          ))}
        </HStack>
      </HStack>
    </Container>
  </Box>
);

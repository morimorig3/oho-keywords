import { VFC } from "react";
import { data } from "./data";
import { Container, Box, VStack, Heading, Text } from "@chakra-ui/react";
import { getBirthDay } from "./utils";

export const Header: VFC = () => {
  const { user } = data;
  const userName = `${user.lastName} ${user.fitstName}`;
  const birthDay = getBirthDay(user.birthday);
  return (
    <Box py={4}>
      <Container>
        <VStack as="header" spacing={0}>
          <Heading fontSize="xl" as="h1">
            {userName}のキーワード101
          </Heading>
          <Text>{birthDay}生まれ</Text>
        </VStack>
      </Container>
    </Box>
  );
};

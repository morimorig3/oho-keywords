import { VFC } from "react";
import { Container, Box, VStack, Heading, Text } from "@chakra-ui/react";
import { getBirthDay } from "./utils";
import { Data } from "./data";

type Props = {
  data: Data;
};

export const Header: VFC<Props> = ({ data }) => {
  const { user } = data;
  const userName = `${user.lastName} ${user.fitstName}`;
  const birthDay = getBirthDay(user.birthday);
  return (
    <Box as="header" py={4}>
      <Container>
        <VStack spacing={0}>
          <Heading fontSize="xl" as="h1">
            {userName}のキーワード101
          </Heading>
          <Text>{birthDay}生まれ</Text>
        </VStack>
      </Container>
    </Box>
  );
};

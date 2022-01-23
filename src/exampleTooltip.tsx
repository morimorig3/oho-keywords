import { Container, HStack, Text, Tooltip } from "@chakra-ui/react";

export const ExampleTooltip = () => (
  <Container maxW="container.md" my={4}>
    <HStack spacing={4} justifyContent="center" mt={10}>
      <Text fontSize="sm" flexShrink={0}>
        2020年 28歳
      </Text>
      <HStack spacing={0} gap={4} wrap="wrap">
        <Tooltip
          label="面白い。意外性ナンバーワン言語"
          placement="top"
          defaultIsOpen
          hasArrow
        >
          <Text cursor="pointer" fontWeight="bold" fontSize="md">
            JavaScript
          </Text>
        </Tooltip>
      </HStack>
    </HStack>
  </Container>
);

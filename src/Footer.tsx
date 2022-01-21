import { VFC } from "react";
import { Container, Box, HStack, Link } from "@chakra-ui/react";

export const Footer: VFC = () => (
  <Box w="full" as="footer" bg="gray.700" py={1} color="gray.200">
    <Container>
      <HStack justifyContent="center" spacing={2}>
        <Link href="https://www.morimorig3.com/" isExternal>
          https://www.morimorig3.com/
        </Link>
        <Link href="https://github.com/morimorig3/oho-keywords" isExternal>
          Github
        </Link>
      </HStack>
    </Container>
  </Box>
);

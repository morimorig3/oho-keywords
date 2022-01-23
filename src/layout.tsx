import { VFC, ReactNode } from "react";
import { VStack, Box } from "@chakra-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => (
  <VStack minH="100vh" bg="gray.50" spacing={0}>
    <Header />
    <Box as="main" w="full" flex="1">
      {children}
    </Box>
    <Footer />
  </VStack>
);

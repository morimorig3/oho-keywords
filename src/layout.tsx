import { VFC, ReactNode } from "react";
import { VStack, Box } from "@chakra-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => (
  <VStack minH="100vh" bg="gray.100">
    <Header />
    <Box w="full" flex="1">
      {children}
    </Box>
    <Footer />
  </VStack>
);

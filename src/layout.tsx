import { VFC, ReactNode } from "react";
import { VStack, Box } from "@chakra-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Data } from "./data";

type Props = {
  data: Data;
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ data, children }) => (
  <VStack minH="100vh" bg="gray.50" spacing={0}>
    <Header data={data} />
    <Box as="main" w="full" flex="1">
      {children}
    </Box>
    <Footer />
  </VStack>
);

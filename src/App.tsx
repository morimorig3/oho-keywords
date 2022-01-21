import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./layout";
import { Chronology } from "./chronology";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Chronology />
      </Layout>
    </ChakraProvider>
  );
}

export default App;

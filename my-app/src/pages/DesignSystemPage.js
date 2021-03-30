import { Box } from "@chakra-ui/react";
import Buttons from "../components/DesignSystem/Buttons";
import Colors from "../components/DesignSystem/Colors";

function DesignSystemPage() {
  return (
    <Box bg="muted.200" minH="100vh">
      <Box bg="primary.200" color="white" p="5" fontSize="2xl">
        App's Design System
      </Box>
      <Box p="10">
        <Colors />
        <Buttons />
      </Box>
    </Box>
  );
}

export default DesignSystemPage;

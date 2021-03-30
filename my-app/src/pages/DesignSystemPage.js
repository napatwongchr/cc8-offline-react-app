import { Box } from "@chakra-ui/react";
import Buttons from "../components/DesignSystem/Buttons";

function DesignSystemPage() {
  return (
    <Box bg="muted.200" minH="100vh">
      <Box bg="primary.200" color="white" p="5" fontSize="2xl">
        App's Design System
      </Box>
      <Box p="10">
        <Buttons />
      </Box>
    </Box>
  );
}

export default DesignSystemPage;

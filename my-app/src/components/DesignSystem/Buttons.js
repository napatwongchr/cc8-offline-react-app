import { Button, Box, Flex, Heading } from "@chakra-ui/react";

function Buttons() {
  return (
    <Flex direction="column" bg="muted.300" p="5" borderRadius="xl" mb="5">
      <Heading as="h1" size="lg" mb="5">
        Buttons
      </Heading>

      <Box mb="5">
        <Heading as="h2" size="lg" mb="5">
          Sizes
        </Heading>
        <Flex justify="space-between" alignItems="center" width="40%">
          <Button size="sm">Size sm</Button>
          <Button size="md">Size md</Button>
          <Button size="lg">Size lg</Button>
        </Flex>
      </Box>

      <Box mb="5">
        <Heading as="h2" size="lg" mb="5">
          Variants
        </Heading>
        <Flex justify="space-between" width="40%">
          <Button size="md" variant="primary">
            Primary
          </Button>
          <Button size="md" variant="secondary">
            Secondary
          </Button>
          <Button size="md" variant="outline">
            Outline
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Buttons;

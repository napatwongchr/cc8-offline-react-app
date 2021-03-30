import { Box, Input, Flex, Heading, Divider } from "@chakra-ui/react";

function Inputs() {
  return (
    <Flex direction="column" bg="muted.300" p="5" borderRadius="xl" mb="5">
      <Heading as="h1" size="lg" mb="5">
        Inputs
      </Heading>
      <Box>
        <Heading as="h2" size="lg" mb="5">
          Variants
        </Heading>
        <Box mb="5">
          <Heading as="h2" size="md" mb="5">
            Outline
          </Heading>
          <Input type="text" />
        </Box>

        <Box mb="5">
          <Heading as="h2" size="md" mb="5">
            Filled
          </Heading>
          <Input variant="filled" type="text" />
        </Box>

        <Box mb="5">
          <Heading as="h2" size="md" mb="5">
            Flushed
          </Heading>
          <Input variant="flushed" type="text" />
        </Box>

        <Box mb="5">
          <Heading as="h2" size="md" mb="5">
            Unstyled
          </Heading>
          <Input variant="unstyled" type="text" />
        </Box>
      </Box>
      <Divider orientation="horizontal" variant="solid" mb="10" />
      <Box>
        <Heading as="h2" size="lg" mb="5">
          Sizes
        </Heading>
        <Box mb="5">
          <Heading as="h2" size="md" mb="5">
            sm
          </Heading>
          <Input type="text" size="sm" />
        </Box>

        <Box mb="5">
          <Heading as="h2" size="md" mb="5">
            md
          </Heading>
          <Input type="text" size="md" />
        </Box>

        <Box mb="5">
          <Heading as="h2" size="md" mb="5">
            lg
          </Heading>
          <Input type="text" size="lg" />
        </Box>
      </Box>
    </Flex>
  );
}

export default Inputs;

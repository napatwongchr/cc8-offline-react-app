import { Button, Box, Flex, Heading } from "@chakra-ui/react";

function Buttons() {
  return (
    <Flex direction="column" bg="muted.300" p="5" borderRadius="xl" mb="5">
      <Heading as="h1" size="lg" mb="5">
        Buttons
      </Heading>

      <Box mb="5">
        <Heading as="h2" size="md" mb="5">
          sm size
        </Heading>
        <Flex justify="space-between" width="40%">
          <Button size="sm">Start Learning Now</Button>
          <Button size="sm" variant="secondary">
            Sign up
          </Button>
          <Button size="sm" variant="outline">
            Login
          </Button>
        </Flex>
      </Box>

      <Box mb="5">
        <Heading as="h2" size="md" mb="5">
          md size
        </Heading>
        <Flex justify="space-between" width="40%">
          <Button>Start Learning Now</Button>
          <Button variant="secondary">Sign up</Button>
          <Button variant="outline">Login</Button>
        </Flex>
      </Box>

      <Box mb="5">
        <Heading as="h2" size="md" mb="5">
          lg size
        </Heading>
        <Flex justify="space-between" width="40%">
          <Button size="lg">Start Learning Now</Button>
          <Button size="lg" variant="secondary">
            Sign up
          </Button>
          <Button size="lg" variant="outline">
            Login
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Buttons;

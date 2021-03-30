import { Box, Flex, Text, Heading } from "@chakra-ui/react";

export default function Colors() {
  return (
    <Flex direction="column" bg="muted.300" p="5" borderRadius="xl" mb="5">
      <Heading as="h1" size="lg">
        Colors
      </Heading>

      <Flex justify="space-between" mt="5">
        <Flex direction="column" alignItems="center">
          <Box
            width="100px"
            height="100px"
            borderRadius="lg"
            bg="primary.200"
            mb="2"
          />
          <Text>primary.200</Text>
        </Flex>

        <Flex direction="column" alignItems="center">
          <Box
            width="100px"
            height="100px"
            borderRadius="lg"
            bg="primary.100"
            mb="2"
          />
          <Text>primary.100</Text>
        </Flex>

        <Flex direction="column" alignItems="center">
          <Box
            width="100px"
            height="100px"
            borderRadius="lg"
            bg="secondary"
            mb="2"
          />
          <Text color="secondary">secondary</Text>
        </Flex>

        <Flex direction="column" alignItems="center">
          <Box
            width="100px"
            height="100px"
            borderRadius="lg"
            bg="highlight.100"
            mb="2"
          />
          <Text color="highlight.100">highlight.100</Text>
        </Flex>

        <Flex direction="column" alignItems="center">
          <Box
            width="100px"
            height="100px"
            borderRadius="lg"
            border="1px"
            bg="muted.300"
            mb="2"
          />
          <Text>muted.300</Text>
        </Flex>

        <Flex direction="column" alignItems="center">
          <Box
            width="100px"
            height="100px"
            borderRadius="lg"
            border="1px"
            bg="muted.200"
            mb="2"
          />

          <Text>muted.200</Text>
        </Flex>

        <Flex direction="column" alignItems="center">
          <Box
            width="100px"
            height="100px"
            borderRadius="lg"
            border="1px"
            bg="muted.100"
            mb="2"
          />

          <Text>muted.100</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

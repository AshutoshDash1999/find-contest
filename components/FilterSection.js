import { Container, Flex, Input, Paper, Select, Switch } from "@mantine/core";

const FilterSection = () => {
  return (
    <Container>
      <Paper shadow="sm" radius="lg" p="md">
        <Flex align="center" justify="center" gap="xl">
          <Input placeholder="Search competition..." radius="md" w="100%" />

          <Select
            placeholder="Pick platform"
            searchable
            nothingFound="No options"
            radius="md"
            data={["Leetcode", "Hackerrank", "Codeforces", "Codechef"]}
            w="100%"
          />
          <Switch label="Ongoing" />
        </Flex>
      </Paper>
    </Container>
  );
};
export default FilterSection;

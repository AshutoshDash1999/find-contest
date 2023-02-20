import { addComment, addFilter } from "@/redux/filterSlice";
import { Container, Flex, Input, Paper, Select, Switch } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const FilterSection = () => {
  const [filterMethods, setFilterMethods] = useState({
    searchKeyword: "",
    ongoing: false,
  });

  const dispatch = useDispatch();

  const filterHandler = (event) => {
    setFilterMethods({
      ...filterMethods,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    dispatch(addFilter(filterMethods));
  }, [dispatch, filterMethods]);

  return (
    <Container>
      <Paper shadow="sm" radius="lg" p="md">
        <Flex
          direction={{ base: "column", sm: "row" }}
          align="center"
          justify="center"
          gap="xl"
        >
          <Input
            placeholder="Search competition, platform..."
            radius="md"
            w="100%"
            onChange={filterHandler}
            name="searchKeyword"
            variant="filled"
          />

          <Switch
            label="Ongoing"
            onLabel="Active"
            offLabel="All"
            size="md"
            color="violet"
            name="ongoing"
            onChange={(e) =>
              setFilterMethods({ ...filterMethods, ongoing: e.target.checked })
            }
          />
        </Flex>
      </Paper>
    </Container>
  );
};
export default FilterSection;

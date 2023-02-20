import { addComment, addFilter } from "@/redux/filterSlice";
import { Container, Flex, Input, Paper, Select, Switch } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const FilterSection = () => {
  const [filterMethods, setFilterMethods] = useState({
    searchKeyword: "",
    // plateform: "all",
    ongoing: false,
  });

  const dispatch = useDispatch();

  const [supportedSiteDataList, setSupportedSiteDataList] = useState([]);

  const sitesApiUrl = "https://kontests.net/api/v1/sites";

  useEffect(() => {
    const fetchAPI = async () => {
      // fetch data to show all the supported site
      try {
        const supportedSiteArray = [];
        const responseData = await axios
          .get(sitesApiUrl)
          .then((response) =>
            response.data.map((siteItem) =>
              supportedSiteArray.push(siteItem[0])
            )
          )
          .catch((error) =>
            console.error("Error while fetching data: ", error)
          );
        setSupportedSiteDataList(supportedSiteArray);
      } catch (error) {
        console.error("Error while fetching data: ", error);
      }
    };
    fetchAPI();
  }, []);

  const filterHandler = (event) => {
    setFilterMethods({
      ...filterMethods,
      [event.target.name]: event.target.value,
    });
  };

  console.log(filterMethods);

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
          />

          {/* <Select
            placeholder="Pick platform"
            searchable
            nothingFound="Not found!"
            radius="md"
            data={supportedSiteDataList}
            w="100%"
            name="plateform"
            onChange={(e) =>
              setFilterMethods({ ...filterMethods, plateform: e })
            }
          /> */}

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

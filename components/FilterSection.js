import { Container, Flex, Input, Paper, Select, Switch } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";

const FilterSection = () => {
  const [filterMethods, setFilterMethods] = useState({
    searchKeyword: "",
    plateform: "all",
    ongoing: true,
  });

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
            placeholder="Search competition..."
            radius="md"
            w="100%"
            onChange={(e) => console.log(e.target.value)}
          />

          <Select
            placeholder="Pick platform"
            searchable
            nothingFound="Not found!"
            radius="md"
            data={supportedSiteDataList}
            w="100%"
            onChange={(e) => console.log(e)}
          />
          <Switch
            label="Ongoing"
            onChange={(e) => console.log(e.target.checked)}
          />
        </Flex>
      </Paper>
    </Container>
  );
};
export default FilterSection;

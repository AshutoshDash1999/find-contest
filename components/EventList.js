import { selectFilters } from "@/redux/filterSlice";
import { Center, Loader } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EventCard from "./EventCard";

const FutureEventList = () => {
  const [eventDataList, setEventDataList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [filteredList, setFilteredList] = useState([]);

  const apiUrl = "https://kontests.net/api/v1/all";

  const filter = useSelector(selectFilters);
  console.log("filter", filter);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        setLoader(true);
        const responseData = await axios
          .get(apiUrl)
          .then((response) => setEventDataList(response.data))
          .catch((error) =>
            console.error("Error while fetching data: ", error)
          );
        // console.log(responseData);
        setLoader(false);
      } catch (error) {
        console.error("Error while fetching data: ", error);
      }
    };
    fetchAPI();
  }, []);

  // console.log(eventDataList);

  useEffect(() => {
    const ongoingEvents = eventDataList.filter((eventItem) => {
      if (!!filter?.searchKeyword === false && filter?.ongoing === true) {
        return eventItem?.status === "CODING";
      } else if (
        !!filter?.searchKeyword === true &&
        filter?.ongoing === false
      ) {
        return (
          eventItem?.name
            .toLowerCase()
            .includes(filter?.searchKeyword.toLowerCase()) ||
          eventItem?.url
            .toLowerCase()
            .includes(filter?.searchKeyword.toLowerCase())
        );
      } else if (!!filter?.searchKeyword === true && filter?.ongoing === true) {
        return (
          (eventItem?.name
            .toLowerCase()
            .includes(filter?.searchKeyword.toLowerCase()) ||
            eventItem?.url
              .toLowerCase()
              .includes(filter?.searchKeyword.toLowerCase())) &&
          eventItem?.status === "CODING"
        );
      } else {
        return eventDataList;
      }
    });
    setFilteredList(ongoingEvents);
    console.log("ongoingEvents:", ongoingEvents);
  }, [filter?.searchKeyword, filter?.ongoing, eventDataList]);

  console.log("filteredList", filteredList);

  return (
    <>
      {loader ? (
        <Center style={{ height: 200 }}>
          <Loader color="violet" size="xl" variant="dots" />
        </Center>
      ) : (
        filteredList.map((item) => <EventCard key={item.url} {...item} />)
      )}
    </>
  );
};
export default FutureEventList;

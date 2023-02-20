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

  const filterKey = useSelector(selectFilters);
  
  useEffect(() => {
    fetchAPI();
  }, []);
  const fetchAPI = async () => {
    try {
      setLoader(true);
      const responseData = await axios
        .get(apiUrl)
        .then((response) => setEventDataList(response.data))
        .catch((error) => console.error("Error while fetching data: ", error));
      // console.log(responseData);
      setLoader(false);
    } catch (error) {
      console.error("Error while fetching data: ", error);
    }
  };

  useEffect(() => {
    const ongoingEvents = eventDataList.filter((eventItem) => {
      if (filterKey?.searchKeyword?.length === 0 && filterKey?.ongoing === true) {
        return eventItem?.status === "CODING";
      } else if (
        filterKey?.searchKeyword?.length >0 &&
        filterKey?.ongoing === false
      ) {
        return (
          eventItem?.name
            .toLowerCase()
            .includes(filterKey?.searchKeyword.toLowerCase()) ||
          eventItem?.url
            .toLowerCase()
            .includes(filterKey?.searchKeyword.toLowerCase())
        );
      } else if (
        !!filterKey?.searchKeyword === true &&
        filterKey?.ongoing === true
      ) {
        return (
          (eventItem?.name
            .toLowerCase()
            .includes(filterKey?.searchKeyword.toLowerCase()) ||
            eventItem?.url
              .toLowerCase()
              .includes(filterKey?.searchKeyword.toLowerCase())) &&
          eventItem?.status === "CODING"
        );
      } else {
        return eventDataList;
      }
    });
    setFilteredList(ongoingEvents);
  }, [filterKey, eventDataList]);


  return (
    <>
      {loader ? (
        <Center style={{ height: 200 }}>
          <Loader color="violet" size="xl" variant="dots" />
        </Center>
      ) : (
        filteredList.map((item, index) => {
          return(
            <EventCard key={index} {...item} />
          )
       })
      )}
    </>
  );
};
export default FutureEventList;

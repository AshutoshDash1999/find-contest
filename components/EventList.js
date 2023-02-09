import { Center, Loader } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";

const FutureEventList = () => {
  const [eventDataList, setEventDataList] = useState([]);
  const [loader, setLoader] = useState(false);

  const apiUrl = "https://kontests.net/api/v1/all";

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
  console.log(eventDataList);

  return (
    <>
      {loader ? (
        <Center style={{ height: 200 }}>
          <Loader color="violet" size="xl" variant="dots" />
        </Center>
      ) : (
        eventDataList.map((item) => <EventCard key={item.url} {...item} />)
      )}
    </>
  );
};
export default FutureEventList;

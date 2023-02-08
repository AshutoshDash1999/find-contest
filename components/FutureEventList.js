import axios from "axios";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";

const FutureEventList = () => {
  const [eventDataList, setEventDataList] = useState(null);

  const apiUrl = "https://kontests.net/api/v1/all";

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const responseData = await axios
          .get(apiUrl)
          .then((response) => setEventDataList(response.data))
          .catch((error) =>
            console.error("Error while fetching data: ", error)
          );
        // console.log(responseData);
      } catch (error) {
        console.error("Error while fetching data: ", error);
      }
    };
    fetchAPI();
  }, []);
  // console.log(eventDataList);

  return (
    <>
      <EventCard />
    </>
  );
};
export default FutureEventList;

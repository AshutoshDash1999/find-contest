import { Box, Button, Flex, Grid, Text, Title } from "@mantine/core";
import Link from "next/link";

const monthMap = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

const fetchDate = (inputDate) => {
  let utcDate = new Date(inputDate);
  let offset = 330; // IST offset is 330 minutes ahead of UTC
  let istDate = new Date(utcDate.getTime() + offset * 60 * 1000);
  return istDate;
};

const changeDuration = (inputDuration) => {
  if (inputDuration<60){
    return inputDuration + "seconds"
  } else if (inputDuration<3600){
    return inputDuration/60 + "minutes"
  } 
  
  else {
    return inputDuration
  }
}

const EventCard = ({
  name,
  site,
  start_time,
  end_time,
  status,
  url,
  duration,
}) => {
  console.log(fetchDate(start_time));
  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        textAlign: "center",
        padding: theme.spacing.sm,
        margin: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: "default",
        boxShadow: theme.shadows.sm,
      })}
    >
      <Grid justify="center" align="center">
        <Grid.Col span={2}>
          <Box
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.orange[3],
              textAlign: "center",
              padding: theme.spacing.sm,
              borderRadius: theme.radius.md,
              cursor: "default",
            })}
          >
            <Text>
              {String(fetchDate(start_time).getDate()).padStart(2, '0')}{" "}
              {monthMap[fetchDate(start_time).getMonth()]}
            </Text>
            <Text fz="xl" fw={700}>{String(fetchDate(start_time).getHours()).padStart(2, '0')} : {String(fetchDate(end_time).getMinutes()).padStart(2, '0')}</Text>
            <Text>IST</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={6}>
          <Box>
            <Title>{name}</Title>
            <Text>
              {String(fetchDate(start_time).getDate()).padStart(2, '0')}{" "}
              {monthMap[fetchDate(start_time).getMonth()]} to{" "}
              {String(fetchDate(start_time).getDate()).padStart(2, '0')}{" "}
              {monthMap[fetchDate(end_time).getMonth()]}
            </Text>
            <Text>{changeDuration(duration)}</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Flex direction="column" gap="md">
            <Link href={`${url}`} target="_blank">
              <Button variant="filled" color="dark">
                Visit Competition
              </Button>
            </Link>
            <Link
              href={`https://calendar.google.com/event?action=TEMPLATE&dates=20230209T143500Z/20230209T163500Z&text=Codeforces%20Round%20%23851%20(Div.%202)&location=${url}`}
              target="_blank"
            >
              <Button variant="subtle" color="dark">
                Add to Calender
              </Button>
            </Link>
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  );
};
export default EventCard;

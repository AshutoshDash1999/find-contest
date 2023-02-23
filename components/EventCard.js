import {
  Badge,
  Box,
  Button,
  Container,
  createStyles,
  Flex,
  Grid,
  Paper,
  Text,
  Title
} from "@mantine/core";
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

const colorLight = [
  "#FFD8A8",
  "#FFEC99",
  "#D8F5A2",
  "#B2F2BB",
  "#96F2D7",
  "#99E9F2",
  "#A5D8FF",
  "#BAC8FF",
  "#D0BFFF",
  "#EEBEFA",
  "#FCC2D7",
  "#FFC9C9",
];

const useStyles = createStyles((theme) => ({
  externalBtn: {
    transition: "all 0.5s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: theme.shadows.lg,
    },
  },
  timeBox: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : colorLight[Math.floor(Math.random() * colorLight.length)],
    textAlign: "center",
    borderRadius: theme.radius.lg,
    cursor: "default",
  },
  eventCard: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : "#ffffff",
    textAlign: "center",
    padding: theme.spacing.sm,
    margin: theme.spacing.xl,
    borderRadius: theme.radius.lg,
    cursor: "default",
    boxShadow: theme.shadows.sm,
    position: "relative",
  },
  ongoingBadge: {
    position: "absolute",
    right: "20px",
    top: "-10px",
  },
}));

const EventCard = ({
  name,
  site,
  start_time,
  end_time,
  status,
  url,
  duration,
}) => {
  const { classes } = useStyles();
  const startTime = new Date(start_time);
  const endTime = new Date(end_time);

  const convertTimetoTweleveHourFormat = (time) => {
    const hour = time.getHours();
    if (hour > 12) {
      let newhour = String(hour-12).padStart(2, "0");
      return newhour + " : " + String(time.getMinutes()).padStart(2, "0") + " PM";
    } else {
      return (
        String(hour).padStart(2, "0") +
        " : " +
        String(time.getMinutes()).padStart(2, "0") +
        " AM"
      );
    }
  };

  console.log(convertTimetoTweleveHourFormat(startTime));

  return (
    <Container>
      <Paper
        shadow="xs"
        p="md"
        withBorder
        className={classes.eventCard}
        sx={
          status === "CODING" && {
            border: "2px solid #B2F2BB",
            boxShadow: "5px 8px 11px -3px rgba(110,255,92,0.48)",
          }
        }
      >
        {status === "CODING" && (
          <Badge
            className={classes.ongoingBadge}
            color="green"
            radius="sm"
            variant="filled"
            size="md"
          >
            Ongoing
          </Badge>
        )}
        <Grid justify="center" align="center">
          <Grid.Col sm={3.5}>
            <Box py="xl" px="xs" className={classes.timeBox}>
              <Text fz="lg">
                {String(startTime.getDate()).padStart(2, "0")}{" "}
                {monthMap[startTime.getMonth()]}
              </Text>
              <Title fw={700}>
                {convertTimetoTweleveHourFormat(startTime)}
              </Title>
              <Text>IST</Text>
            </Box>
          </Grid.Col>
          <Grid.Col sm={5.5}>
            <Title>{name}</Title>
            <Text>
              <Text span fw={700}>
                {String(startTime.getDate()).padStart(2, "0")}{" "}
                {monthMap[startTime.getMonth()]} {startTime.getFullYear()}
              </Text>{" "}
              to{" "}
              <Text span fw={700}>
                {String(endTime.getDate()).padStart(2, "0")}{" "}
                {monthMap[endTime.getMonth()]} {endTime.getFullYear()}
              </Text>
            </Text>
            {/* <Text>{changeDuration(duration)}</Text> */}
          </Grid.Col>
          <Grid.Col sm={3}>
            <Flex direction="column" gap="md">
              <Link href={`${url}`} target="_blank">
                <Button
                  variant="filled"
                  color="dark"
                  className={classes.externalBtn}
                >
                  Visit Competition
                </Button>
              </Link>
              <Link
                href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${name}&dates=${
                  startTime.getUTCFullYear().toString() +
                  (startTime.getUTCMonth() + 1).toString().padStart(2, "0") +
                  startTime.getUTCDate().toString().padStart(2, "0") +
                  "T" +
                  startTime.getUTCHours().toString().padStart(2, "0") +
                  startTime.getUTCMinutes().toString().padStart(2, "0") +
                  startTime.getUTCSeconds().toString().padStart(2, "0") +
                  "Z"
                }/${
                  endTime.getUTCFullYear().toString() +
                  (endTime.getUTCMonth() + 1).toString().padStart(2, "0") +
                  endTime.getUTCDate().toString().padStart(2, "0") +
                  "T" +
                  endTime.getUTCHours().toString().padStart(2, "0") +
                  endTime.getUTCMinutes().toString().padStart(2, "0") +
                  endTime.getUTCSeconds().toString().padStart(2, "0") +
                  "Z"
                }&location=${url}`}
                target="_blank"
              >
                <Button
                  variant="subtle"
                  color="dark"
                  className={classes.externalBtn}
                >
                  Add to Calender
                </Button>
              </Link>
            </Flex>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
};
export default EventCard;

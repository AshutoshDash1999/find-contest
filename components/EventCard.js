import { Box, Button, Flex, Grid, Text, Title } from "@mantine/core";
import Link from "next/link";

const EventCard = () => {
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
      })}
    >
      <Grid>
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
            <Text>05 Feb - 08 Feb</Text>
            <Text>10:00AM</Text>
            <Text>IST</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={6}>
          <Box>
            <Title>Competition Name</Title>
            <Text>start time to end time</Text>
            <Text>duration</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Flex direction="column" gap="md">
            <Link href="#" target="_blank">
              <Button variant="filled" color="dark">
                Visit Competition
              </Button>
            </Link>
            <Link href="https://calendar.google.com/event?action=TEMPLATE&dates=20230209T143500Z/20230209T163500Z&text=Codeforces%20Round%20%23851%20(Div.%202)&location=https://codeforces.com/contestRegistration/1788" target="_blank">
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

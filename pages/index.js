import EventList from "@/components/EventList";
import Header from "@/components/Header";
import { Container, Grid } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Container size="xl" px="xs">
        <Header />
        <EventList/>
      </Container>
    </>
  );
}

import EventList from "@/components/EventList";
import FilterSection from "@/components/FilterSection";
import Header from "@/components/Header";
import { Container, Grid } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Container size="7xl" px="xs" bg="#F8F9FA" w="100%">
        <Header />
        <FilterSection/>
        <EventList/>
      </Container>
    </>
  );
}

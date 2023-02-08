import FutureEventList from "@/components/FutureEventList";
import Header from "@/components/Header";
import { Container, Grid } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Container size="xl" px="xs">
        <Header />
        <Grid gutter="xl">
          <Grid.Col span={6}>
            <FutureEventList />
          </Grid.Col>
          <Grid.Col span={6}>2</Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

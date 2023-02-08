import { createStyles, Flex, Text, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.white,
    textAlign: "center",
    padding: theme.spacing.md,
    margin: theme.spacing.md,
    borderRadius: theme.radius.md,
    cursor: "pointer",
    boxShadow: theme.shadows.xl,
  },
  heading: {
    color: "red",
  },
}));

const Header = () => {
  const { classes } = useStyles();

  return (
    <>
      <Flex justify="space-between" align="center" className={classes.navbar}>
        <Title className={classes.heading}>Find Contest</Title>
        <Text>Creator</Text>
      </Flex>
    </>
  );
};
export default Header;

import { createStyles, Flex, Text, Title } from "@mantine/core";
import Link from "next/link";

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
    background: "linear-gradient(180deg,rgba(255,255,255,0) 55%, #B197FC 50%)",
  },
}));

const Header = () => {
  const { classes } = useStyles();

  return (
    <>
      <Flex justify="space-between" align="center" className={classes.navbar}>
        <Title className={classes.heading}>Find Contest</Title>
        <Text>
          Made by {" "}
          <Link
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://ashutoshdash.netlify.app/"
          >
            <Text span>Ashutosh Dash</Text>
          </Link>
        </Text>
      </Flex>
    </>
  );
};
export default Header;

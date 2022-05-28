import React from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Drawer,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
  },

  dropdown: {
    width: "50%",
    height: "100vh",
    position: "absolute",
    top: HEADER_HEIGHT,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  logo: {
    fontWeight: 600,
  },

  link: {
    display: "block",
    lineHeight: 1,
    textDecoration: "none",
    padding: theme.spacing.md,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

const Navigation = () => {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <Group spacing={5} className={classes.logo}>
          Izac Aqsha
        </Group>

        <Group>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />
        </Group>

        <Drawer
          opened={opened}
          onClose={() => toggleOpened(false)}
          title="Menu"
          padding="xl"
          size="sm"
          withinPortal={true}
          overlayColor={theme.colors.dark[3]}
          overlayOpacity={1}
          overlayBlur={0.1}
          transition="rotate-left"
          transitionDuration={500}
          transitionTimingFunction="ease"
          withCloseButton={false}
        >
          Drawer content
        </Drawer>
      </Container>
    </Header>
  );
};

export default Navigation;

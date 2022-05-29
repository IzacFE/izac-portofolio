import React from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Drawer,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import ThemeButton from "./ThemeButton";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    border: "none",
    zIndex: 1,
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
}));

const Navigation = () => {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();

  return (
    <Header
      height={HEADER_HEIGHT}
      className={`${classes.root} dark:bg-gray-900`}
    >
      <Container className={classes.header}>
        <Group
          spacing={5}
          className={`${classes.logo} dark:text-stone-200 navTitle`}
        >
          Izac Aqsha
        </Group>

        <Group>
          <ThemeButton />
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={`dark:bg-stone-100`}
            size="sm"
          />
        </Group>

        <Drawer
          opened={opened}
          onClose={() => toggleOpened(false)}
          title="Menu"
          padding="xl"
          size="150px"
          overlayOpacity={0.5}
          overlayBlur={0.1}
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

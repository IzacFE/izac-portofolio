import React from "react";
import useTheme from "../hook/useTheme";
import {
  createStyles,
  UnstyledButton,
  Text,
  Center,
  Group,
} from "@mantine/core";
import { upperFirst } from "@mantine/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const useStyles = createStyles((theme) => ({
  control: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 1000,
    paddingLeft: theme.spacing.sm,
    paddingRight: 4,
    width: 85,
    height: 36,
  },

  iconWrapper: {
    height: 28,
    width: 28,
    borderRadius: 28,
  },

  value: {
    lineHeight: 1,
  },
}));

const ThemeButton = () => {
  const { classes } = useStyles();

  const [colorTheme, setTheme] = useTheme();

  const themeSaver = () => {
    localStorage.setItem("theme", colorTheme);
  };

  const sun = <FontAwesomeIcon icon={faSun} className="text-amber-500" />;
  const moon = <FontAwesomeIcon icon={faMoon} className="dark:text-white" />;

  const Icon = colorTheme === "dark" ? sun : moon;

  return (
    <Group position="center" my="xl">
      <UnstyledButton
        aria-label="Toggle theme"
        className={`${classes.control} bg-stone-200 dark:bg-slate-900`}
        onClick={() => {
          setTheme(colorTheme);
          themeSaver();
        }}
        title="Ctrl + J"
      >
        <Text size="sm" className={`${classes.value} dark:text-stone-100`}>
          {upperFirst(colorTheme === "light" ? "dark" : "light")}
        </Text>
        <Center className={`${classes.iconWrapper} `}>{Icon}</Center>
      </UnstyledButton>
    </Group>
  );
};

export default ThemeButton;

import { Button } from "@mantine/core";
import React from "react";
import useTheme from "../hook/useTheme";

const Home = () => {
  const [colorTheme, setTheme] = useTheme();

  const themeSaver = () => {
    localStorage.setItem("theme", colorTheme);
  };

  return (
    <div className="dark:text-red-700">
      Home
      <div>
        <Button
          onClick={() => {
            setTheme(colorTheme);
            themeSaver();
          }}
        />
      </div>
    </div>
  );
};

export default Home;

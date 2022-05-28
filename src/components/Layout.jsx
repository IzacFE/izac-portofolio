import React from "react";
import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <div>{props.children}</div>
    </>
  );
};

export default Layout;

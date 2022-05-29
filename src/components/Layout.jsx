import React from "react";
import Navigation from "./Navigation";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <div className={`${styles.layout} bg-stone-100 dark:bg-slate-800`}>
        {props.children}
      </div>
    </>
  );
};

export default Layout;

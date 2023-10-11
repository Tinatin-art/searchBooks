import React, { Fragment, useContext } from "react";
import AppContext from "../AppContext";
import { useRoutes } from "react-router-dom";
import Header from "./header/Header";

const Layout = () => {
 
  const appContext = useContext(AppContext);
  const { routes } = appContext;

  return (
    <Fragment>
        <Header/>
        {useRoutes(routes)}
    </Fragment>
  );
};

export default Layout;

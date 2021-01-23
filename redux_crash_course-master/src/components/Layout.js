import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";
import LoginForm from "./LoginForm";
import Register from "./Register";
import RegisterForm from "./RegisterForm";

/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
  const [page, setPage] = useState(0);
  const handlePage = (newPage) => {
    setPage(newPage);
  };
  useEffect(() => {
    console.log(props.user);
    if (props.user) {
      setPage(2);
    }
  }, [props.user]);
  const pages = [
    <Login {...props} handlePage={handlePage} />,
    <Register {...props} handlePage={handlePage} />,
    <Dashboard {...props} />,
  ];
  return pages[page];
};

export default Layout;

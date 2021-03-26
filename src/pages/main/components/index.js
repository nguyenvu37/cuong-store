import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./dashboard";
import DeptOfDay from "./deptOfDay";

const MainPage = () => {
  return (
    <Fragment>
      <Link to="/dashboard">
        <Dashboard />
      </Link>
      <Link to="/dept-page">
        <DeptOfDay />
      </Link>
    </Fragment>
  );
};

export default MainPage;

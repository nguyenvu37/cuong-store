import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <Fragment>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/dept-page">Dept of day</Link>
    </Fragment>
  );
};

export default MainPage;

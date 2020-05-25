import React, { Fragment } from "react";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import { Route } from "react-router-dom";

function Routes() {
  return (
    <Fragment>
      <Route path="/" component={SignUp} exact />
      <Route path="/signin" component={SignIn} exact />
    </Fragment>
  );
}

export default Routes;

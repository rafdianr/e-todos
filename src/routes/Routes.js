import React, { Fragment } from "react";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import { Route, Switch } from "react-router-dom";
import TaskDashboard from "../pages/TaskDashboard";

function Routes() {
  return (
    <Fragment>
      <Switch>
        <Route path="/signup" component={SignUp} exact />
        <Route path="/signin" component={SignIn} exact />
        <Route path="/" component={TaskDashboard} exact />
      </Switch>
    </Fragment>
  );
}

export default Routes;

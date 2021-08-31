import React from "react";
import Home from "pages/home";
import CommonTask from "pages/CommonTask";

import { Link, Route, Switch } from "react-router-dom";
const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/common" component={CommonTask} />
    </Switch>
  </>
);

export default Routes;

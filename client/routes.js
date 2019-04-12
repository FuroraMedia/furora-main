import React from "react";
import { Switch, Route } from "react-router";
import HomePage from "./src/scenes/home";
import PrivacyPage from "./src/scenes/privacy";
import Error404 from "./src/components/error/404";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/privacy" component={PrivacyPage} />
    <Route path="*" component={Error404} />
  </Switch>
);

export default Routes;

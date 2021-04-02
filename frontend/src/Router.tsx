import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Fly } from "./components/Fly/index";

export const Routers = () => {
  return (
    <Switch>
      <Route exact path="/fly" component={Fly} />
      <Redirect from="/" to="fly" />
    </Switch>
  );
};

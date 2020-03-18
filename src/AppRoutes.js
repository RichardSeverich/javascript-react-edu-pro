// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import App from "./App";
import Login from "./components/login/LoginContainer";
import NavigationBar from "./components/nav-bar/NavigationBar";
import UsersShow from "./components/users/ShowContainer";
import UsersCreate from "./components/users/Create";
import CoursesShow from "./components/courses/Show";
import CoursesCreate from "./components/courses/Create";
import ModulesShow from "./components/modules/Show";
import ModulesCreate from "./components/modules/Create";
import ScoresShow from "./components/scores/Show";
import ScoresCreate from "./components/scores/Create";
import Counter from "./components/counter/Counter";
import CounterRedux from "./components/counter-redux/CounterContainer";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path="/scores-create" component={ScoresCreate} />
      <Route exact path="/scores-show" component={ScoresShow} />
      <Route exact path="/modules-create" component={ModulesCreate} />
      <Route exact path="/modules-show" component={ModulesShow} />
      <Route exact path="/courses-create" component={CoursesCreate} />
      <Route exact path="/courses-show" component={CoursesShow} />
      <Route exact path="/users-create" component={UsersCreate} />
      <Route exact path="/users-show" component={UsersShow} />
      <Route exact path="/nav-bar" component={NavigationBar} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/counter-redux" component={CounterRedux} />
      <Route exact path="/" component={Login} />
      <Route component={Login} />
    </Switch>
  </App>
);

export default AppRoutes;

import React from "react";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";

export default () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/tasks">
            Tasks
          </Link>
        </li>
        <li>
          <Link to="/author">
            About the author
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/author">
          <Author />
        </Route>
      </Switch>
    </nav>
  </HashRouter>
);
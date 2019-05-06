import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Admin from "./Admin";
import Login from "./pages/login";
import Nomatch from "./pages/nomatch";
import Button from "./pages/ui/buttons";
export default class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route
            path="/admin"
            render={() => (
              <Admin>
                <Switch>
                  <Route path="/admin/ui/buttons" component={Button} />
                  <Route path="/order/detail" component={Login} />
                  <Route component={Nomatch} />
                </Switch>
              </Admin>
            )}
          />
          <Route path="/order/detail" component={Login} />
        </App>
      </HashRouter>
    );
  }
}

import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Admin from "./Admin";
import Login from "./pages/login";
import Nomatch from "./pages/nomatch";
import Button from "./pages/ui/buttons";
import Modals from "./pages/ui/modals";
import Loadings from "./pages/ui/loadings";
import Notification from "./pages/ui/notification";
import Messages from "./pages/ui/messages";
import Tabs from "./pages/ui/tabs";
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
                  <Route path="/admin/ui/modals" component={Modals} />
                  <Route path="/admin/ui/Loadings" component={Loadings} />
                  <Route path="/admin/ui/notification" component={Notification} />
                  <Route path="/admin/ui/messages" component={Messages} />
                  <Route path="/admin/ui/tabs" component={Tabs} />
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

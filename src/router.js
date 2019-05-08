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
import Gallery from "./pages/ui/gallery";
import Carousel from "./pages/ui/carousel";
import LoginForm from "./pages/form/login";
import Register from "./pages/form/register";
import Bar from "./pages/echarts/bar";
import Pie from "./pages/echarts/pie";
import Line from "./pages/echarts/line";
import Rich from "./pages/rich";
import City from "./pages/city";
import Order from "./pages/order";


import BasicTable from "./pages/table/basicTable";
import HighTable from "./pages/table/highTable";
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
                  <Route path="/admin/ui/gallery" component={Gallery} />
                  <Route path="/admin/ui/carousel" component={Carousel} />
                  <Route path="/admin/form/login" component={LoginForm} />
                  <Route path="/admin/form/reg" component={Register} />
                  <Route path="/admin/table/basic" component={BasicTable} />
                  <Route path="/admin/table/high" component={HighTable} />
                  <Route path="/admin/charts/bar" component={Bar} />
                  <Route path="/admin/charts/pie" component={Pie} />
                  <Route path="/admin/charts/line" component={Line} />
                  <Route path="/admin/rich" component={Rich} />
                  <Route path="/admin/city" component={City} />
                  <Route path="/admin/order" component={Order} />
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

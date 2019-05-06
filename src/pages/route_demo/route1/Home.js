import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Main from "./Main";
import About from "./About";
export default class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/topics">topics</Link>
            </li>
          </ul>

            <Route path="/" component={()=>{
              <Main></Main>
            })} />
            <Route path="/about" component={About} />
        </div>
      </HashRouter>
    );
  }
}

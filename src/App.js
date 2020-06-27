import React from 'react';
import { Router, Route, Switch ,Link, Redirect } from "react-router-dom";
import {createBrowserHistory} from 'history';
import routers from "./routers/routeFile";//import the array to show the record

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history = {browserHistory}>
      <Switch>
        {//map all the routes
          routers.map((route,index) => {
            return(
                <Route 
                  key={index}
                  exact
                  path={route.path} 
                  component={route.component}
                />
              )
          })
        }
        <Redirect from="/" to="/" />
      </Switch>
    </Router>
  );
}

export default App;

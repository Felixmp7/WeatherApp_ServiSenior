import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CurrentWeather from "../pages/current-weather";
// import CustomerDetails from "../pages/customer-detail";

const RouterContainer = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CurrentWeather} />
        {/* <Route exact path="/customer/:dni/edit" component={EditCustomer} /> */}
      </Switch>
    </Router>
  );
}

export default RouterContainer;

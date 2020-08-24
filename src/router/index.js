import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customers from "../pages/home";
import CustomerDetails from "../pages/customer-detail";
import EditCustomer from "../pages/edit-customer";
import NewCustomer from "../pages/new-customer";

const RouterContainer = () => {
  return (
    <Router>
      <Route exact path="/" component={Customers} />
      <Switch>
        <Route exact path="/customer/:dni/edit" component={EditCustomer} />
        <Route exact path="/customer/:dni" component={CustomerDetails} />
        <Route exact path="/customer/new" component={NewCustomer} />
      </Switch>
    </Router>
  );
}

export default RouterContainer;

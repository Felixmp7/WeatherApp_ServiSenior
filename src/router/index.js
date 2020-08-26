import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CurrentWeather from "../pages/current-weather";
import WeatherDetails from "../pages/weather-details/WeatherDetails";

const RouterContainer = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/:day" render={props => {
          return (
            <WeatherDetails
              day={props.match.params.day}
              dayWeatherData={props.location.state}
            />
          );
        }} />
        <Route exact path="/" component={CurrentWeather} />
      </Switch>
    </Router>
  );
}

export default RouterContainer;

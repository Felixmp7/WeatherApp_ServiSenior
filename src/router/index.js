import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CurrentWeather from "../pages/current-weather";
import WeatherDetails from "../pages/weather-details/WeatherDetails";
import ErrorPage from '../pages/error404/ErrorPage';

const RouterContainer = () => {
  return (
    <Router
     basename="/"
    >
      <Switch>
        <Route exact path="/" component={CurrentWeather} />
        <Route exact path="/:day" render={props => {
          // console.log(props)
          if (props.location.state) {
            return (
              <WeatherDetails
                day={props.match.params.day}
                dayWeatherData={props.location.state}
              />
            );
          }
          else return <Route component={ErrorPage} />;
          }} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default RouterContainer;

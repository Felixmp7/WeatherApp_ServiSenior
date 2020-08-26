import React, { Component } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import NextSimpleWeather from '../components/NextWeather';
import WeatherPerHour from '../components/WeatherPerHour';

const NextWeathersContainer = ({
  nextDaysWeatherData,
  nextDaysWeather,
  nextWeathersPerHours,
  setCurrentView,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container className={classes.container} spacing={2}>
        {nextDaysWeather
          ? nextDaysWeatherData.map((day, index) => {
              return (
                <NextSimpleWeather
                  key={index}
                  weatherIcon={day[0].weather}
                  day={day[0].day}
                  details={day}
                />
              );
            })
          : nextWeathersPerHours.map((item) => {
              return (
                <NextSimpleWeather
                  key={item.id}
                  setCurrentView={setCurrentView}
                  id={item.id}
                  weatherIcon={item.weather}
                  hour={item.hour}
                />
              );
            })}
      </Grid>
    </Paper>
  );
};

export default NextWeathersContainer;

const useStyles = makeStyles((theme) => ({
  root: {
    height: '18%',
    display: 'flex'
  },
  container: {
    flexGrow: 1,
  }
}));

import React, { Component } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import NextWeather from '../components/NextWeather';

const NextWeathersContainer = ({nextDaysWeatherData}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container className={classes.container} spacing={2}>
        {
          nextDaysWeatherData.map( (weather, index) => {
            return (
              <NextWeather
                key={index}
                weatherIcon={weather.weather}
                day={weather.date}
              />
            );
          })
        }
      </Grid>
    </Paper>
  );
}

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

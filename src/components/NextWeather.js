import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@mdi/react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { getIcon } from "../helpers/getIcon";
import './NextWeather.css'

const NextWeather = ({weatherIcon,day}) => {

  const classes = useStyles();

  const renderWeatherIcon = (iconParam) => {
    const { iconPath, color } = getIcon(iconParam);
    return (
      <div className="nextWeatherIcon">
        <h4 className="nextDay">{day}</h4>
        <Icon path={iconPath} title="icon" size={1.5} color={color} />
      </div>
    );
  };
  return (
    <Grid className={classes.container} item xs>
      <Button className={classes.day}>
        {renderWeatherIcon(weatherIcon)}
      </Button>
    </Grid>
  );
}

NextWeather.propTypes = {

}

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
  },
  day: {
    height: "100%",
    width: "100%",
    display: "flex",
  },
}));

export default NextWeather;

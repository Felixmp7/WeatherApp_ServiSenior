import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@mdi/react";
import Grid from "@material-ui/core/Grid";
import { getIcon } from "../helpers/getIcon";
import './NextWeather.css'

const NextWeather = ({weatherIcon,day}) => {

  const classes = useStyles();

  const renderWeatherIcon = (iconParam) => {
    const { iconPath, color } = getIcon(iconParam);
    return (
      <div className="nexWeatherIcon">
        <Icon path={iconPath} title="icon" size={1.5} color={color} />
      </div>
    );
  };
  return (
    <Grid className={classes.day} item xs>
      <h4 className="nextDay">{day}</h4>
      {renderWeatherIcon(weatherIcon)}
    </Grid>
  );
}

NextWeather.propTypes = {

}

const useStyles = makeStyles((theme) => ({
  day: {
    height: "100%",
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
}));

export default NextWeather;

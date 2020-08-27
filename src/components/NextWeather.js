import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@mdi/react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { getIcon } from "../helpers/getIcon";
import './NextWeather.css'

const NextWeather = ({ weatherIcon, day, details, hour, setCurrentView, id }) => {
  const classes = useStyles();
  
  const renderWeatherButtonContent = (iconParam, title) => {
    const { iconPath, color } = getIcon(iconParam);
    return (
      <div className="nextWeatherIcon">
        <h4 className="title">{title}</h4>
        <Icon path={iconPath} title="icon" size={1} color={color} />
      </div>
    );
  };

  return (
    <Grid className={classes.container} item sm xs={4}>
      {hour ? (
        <Button
          className={classes.buttonSelected}
          onClick={() => setCurrentView(id)}
        >
          {renderWeatherButtonContent(weatherIcon, hour)}
        </Button>
      ) : (
        <Link
          to={{
            pathname: `/${day}`,
            state: details,
          }}
          className={classes.link}
        >
          <Button className={classes.day}>
            {renderWeatherButtonContent(weatherIcon, day)}
          </Button>
        </Link>
      )}
    </Grid>
  );

 
};

NextWeather.propTypes = {
  weatherIcon: PropTypes.string.isRequired,
  day: PropTypes.string,
  details: PropTypes.array,
  hour: PropTypes.string,
  setCurrentView: PropTypes.func,
  id: PropTypes.number,
};

const useStyles = makeStyles((theme) => ({
  container: {
    // height: "100%",
    width: "100%",
    display: "flex",
  },
  day: {
    // height: "100%",
    // border: '1px solid',
    width: "100%",
    display: "flex",
  },
  link: {
    textDecoration: "none",
    // height: "100%",
    // border: '1px solid',
    width: "100%",
    display: "flex",
  },
  buttonSelected: {
    '&:focus': {
      backgroundColor: '#eaeaea'
    }
  }
}));

export default NextWeather;

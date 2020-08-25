import React from 'react'
import PropTypes from 'prop-types'
import './WeatherRightBar.css'
import Icon from "@mdi/react";
import { getIcon } from "../helpers/getIcon";
import { mdiArrowDown, mdiArrowUp } from "@mdi/js";


const WeatherRightBar = ({icon}) => {

  const renderWeatherIcon = (iconParam) => {
    const { iconPath, color } = getIcon(iconParam);
    return (
      <div className="weatherIcon">
        <Icon path={iconPath} title="icon" size={4} color={color} />
      </div>
    );
  };
  return (
    <div className="rightBarContainer">
      {
        renderWeatherIcon("Clear")
      }
      <div className="containerTemperature">
        <h6 className="temperature">32° C</h6>
        <Icon path={mdiArrowUp} title="icon" size={1} color='#db6b6b' />
      </div>
      <div className="containerTemperature">
        <h6 className="temperature">29° C</h6>
        <Icon path={mdiArrowDown} title="icon" size={1} color='#799ed0' />
      </div>
      <div className="humidityAndWind">1.2</div>
    </div>
  );
}

WeatherRightBar.propTypes = {

}

export default WeatherRightBar

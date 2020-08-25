import React from 'react'
import PropTypes from 'prop-types'
import './WeatherRightBar.css'
import Icon from "@mdi/react";
import { getIcon } from "../helpers/getIcon";
import {
  mdiArrowDown,
  mdiArrowUp,
  mdiWaterPercent,
  mdiFlagVariantOutline,
} from "@mdi/js";


const WeatherRightBar = ({
  icon,
  topTemperature,
  bottomTemperature,
  humidity,
  wind,
}) => {
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
      {renderWeatherIcon(icon)}
      <div className="containerTemperature">
        <h6 className="temperature">{`${topTemperature}° C`}</h6>
        <Icon path={mdiArrowUp} title="icon" size={1} color="#db6b6b" />
      </div>
      <div className="containerTemperature">
        <h6 className="temperature">{`${bottomTemperature}° C`}</h6>
        <Icon path={mdiArrowDown} title="icon" size={1} color="#799ed0" />
      </div>
      <div className="humidityAndWind">
        <div className="containerIconAndText">
          <span className="leftText">{`${humidity}%`}</span>
          <Icon path={mdiWaterPercent} title="icon" size={0.8} color="#aaa" />
        </div>
        <div className="containerIconAndText">
          <span className="leftText">{`${wind} km/h`}</span>
          <Icon
            path={mdiFlagVariantOutline}
            title="icon"
            size={0.8}
            color="#aaa"
          />
        </div>
      </div>
    </div>
  );
};

WeatherRightBar.propTypes = {

}

export default WeatherRightBar

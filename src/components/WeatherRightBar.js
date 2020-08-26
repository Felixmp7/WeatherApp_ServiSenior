import React from 'react'
import PropTypes from 'prop-types'
import './WeatherRightBar.css'
import Icon from "@mdi/react";
import { getIcon } from "../helpers/getIcon";
import {
  mdiThermometerLow,
  mdiThermometerHigh,
  mdiWaterPercent,
  mdiFlagVariantOutline,
} from "@mdi/js";


const WeatherRightBar = ({
  icon,
  topTemperature,
  bottomTemperature,
  humidity,
  wind,
  hour,
  showTime
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
      {showTime && <span className="hour">{hour}</span>}
      {renderWeatherIcon(icon)}
      <div className="containerTemperature">
        <span className="temperature">{`${topTemperature}° C`}</span>
        <Icon path={mdiThermometerHigh} title="icon" size={1} color="#db6b6b" />
      </div>
      <div className="containerTemperature">
        <span className="temperature">{`${bottomTemperature}° C`}</span>
        <Icon path={mdiThermometerLow} title="icon" size={1} color="#799ed0" />
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

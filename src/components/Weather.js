import React from 'react'
import PropTypes from 'prop-types'
// import WeatherGraphics from './WeatherGraphics'
import WeatherGraphics from './WeatherGraphics_Test'
import './Weather.css'

const Weather = ({
  day,
  cityName,
  complementName,
  getVariationTempForNextDays,
}) => {
  return (
    <div className="cityNameContainer">
      <h5 className="weatherday">{day}</h5>
      <h1 className="cityName">{cityName}</h1>
      <h4 className="complementName">{complementName}</h4>
      <WeatherGraphics
        getVariationTempForNextDays={getVariationTempForNextDays ? true : false}
      />
    </div>
  );
};

Weather.propTypes = {
  day: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  complementName: PropTypes.string.isRequired,
};

export default Weather;

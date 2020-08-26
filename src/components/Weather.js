import React from 'react'
import PropTypes from 'prop-types'
import WeatherGraphics from './WeatherGraphics'
import './Weather.css'

const Weather = ({day, cityName, complementName}) => {
  return (
    <div className="cityNameContainer">
      <h5 className="weatherday">{day}</h5>
      <h1 className="cityName">{cityName}</h1>
      <h4 className="complementName">{complementName}</h4>
      <WeatherGraphics/>
    </div>
  );
}

Weather.propTypes = {

}

export default Weather;

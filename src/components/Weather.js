import React from 'react'
import PropTypes from 'prop-types'
import WeatherGraphics from './WeatherGraphics'
import './Weather.css'

const Weather = props => {
  return (
    <div className="cityNameContainer">
      <h5 className="weatherDate">Today</h5>
      <h1 className="cityName">Santiago</h1>
      <h4 className="complementName">Metropolitan Region</h4>
      <WeatherGraphics/>
    </div>
  );
}

Weather.propTypes = {

}

export default Weather;

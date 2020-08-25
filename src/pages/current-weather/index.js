import React, { Component } from 'react'
import WeatherContainer from '../../containers/WeatherContainer';
import Weather from '../../components/Weather';
import WeatherRightBar from '../../components/WeatherRightBar';
import NextWeathersContainer from '../../containers/NextWeathersContainer';
import './index.css';

class CurrentWeather extends Component {
  state = {
    nextWeatherData: [
      {
        day:'Monday',
        humidity: "30000001",
        weather: "30000001",
        cityName: "Pablo Alborán",
        temperature: 30,
        wind: "m",
        weatherIcon: 'Clouds',
      },
      {
        day:'Tuesday',
        humidity: "500000",
        weather: "500000",
        cityName: "José Enrique",
        temperature: 40,
        wind: "m",
        weatherIcon: 'Clear',
      },
      {
        day:'Wednesday',
        weather: "6868686",
        cityName: "Gabriel Pacheco",
        temperature: 10,
        wind: "m",
        weatherIcon: 'Thunderstorm',
        humidity: "XSCfaW5",
      },
      {
        day:'Thursday',
        cityName: "Doris Alonso",
        weather: "99999",
        temperature: 11,
        wind: "w",
        weatherIcon: 'Rain',
        humidity: "kxmVQVd",
      },
      {
        day:'Friday',
        cityName: "Doris Alonso",
        weather: "99999",
        temperature: 11,
        wind: "w",
        weatherIcon: 'Snow',
        humidity: "kxmVQVd",
      },
    ],
    currentWeather: {
      cityName: "Manuel Carrero",
      weather: "99999",
      temperature: 11,
      wind: "m",
      weatherIcon: 'Clear',
      humidity: "kxmVQVd",
    },
  };

  render() {
    return (
      <div className="currentWeatherPage">
        <WeatherContainer>
          <div className="gridAlignment">
            <Weather />
            <WeatherRightBar />
          </div>
          <div className="nextDaysContainer">
            <h3 className="headerText">Next days weather</h3>
          </div>
          <NextWeathersContainer nextDaysWeatherData={this.state.nextWeatherData} />
        </WeatherContainer>
      </div>
    );
  }
};

export default CurrentWeather;

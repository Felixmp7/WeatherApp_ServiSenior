import React, { Component } from 'react'
import WeatherContainer from '../../containers/WeatherContainer';
import NextWeathersContainer from '../../containers/NextWeathersContainer';
import Weather from '../../components/Weather';
import WeatherRightBar from '../../components/WeatherRightBar';
import PropTypes from 'prop-types'
import './WeatherDetails.css'

class WeatherDetails extends Component {
  state = {
    dataLoaded: false,
    dayWeatherData: [],
    currentWeatherView: {
      day: null,
      cityName: null,
      complementName: null,
      weather: null,
      topTemperature: null,
      bottomTemperature: null,
      wind: null,
      humidity: null,
    },
  };

  componentDidMount() {
    this.setState(
      {
        dataLoaded: true,
        ...this.props,
        currentWeatherView: { ...this.props.dayWeatherData[0] },
      },
      () => console.log(this.state)
    );
  }

  setCurrentView = (id) => {
    const {dayWeatherData} = this.state;
    const newForecastSelected = dayWeatherData.find( forecast => forecast.id === id);
    // console.log(newForecastSelected);
    this.setState({currentWeatherView: newForecastSelected});
  }

  render() {
    const { dataLoaded } = this.state;
    // console.log(this.state.currentWeatherView)
    const {
      day,
      cityName,
      complementName,
      weather,
      topTemperature,
      bottomTemperature,
      wind,
      humidity,
      hour
    } = this.state.currentWeatherView;

    if (dataLoaded) {
      return (
        <div className="detailsWeatherPage">
          <WeatherContainer>
            <div className="detailsGridAlignment">
              <Weather
                day={day}
                cityName={cityName}
                complementName={complementName}
              />
              <WeatherRightBar
                icon={weather}
                topTemperature={topTemperature}
                bottomTemperature={bottomTemperature}
                wind={wind}
                humidity={humidity}
                hour={hour}
                showTime
              />
            </div>
            <div className="nextDaysContainer">
              <h3 className="headerText">Later on this day</h3>
            </div>
            <NextWeathersContainer
              setCurrentView={this.setCurrentView}
              nextWeathersPerHours={this.state.dayWeatherData}
            />
          </WeatherContainer>
        </div>
      );
    } else return <h3>Loading...</h3>;
  }
}

WeatherDetails.propTypes = {
  day: PropTypes.string.isRequired,
  dayWeatherData: PropTypes.array.isRequired,
};

export default WeatherDetails;

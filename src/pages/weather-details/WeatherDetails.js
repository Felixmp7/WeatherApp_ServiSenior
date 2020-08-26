import React, { Component } from 'react'
import WeatherContainer from '../../containers/WeatherContainer';
import Weather from '../../components/Weather';
import WeatherRightBar from '../../components/WeatherRightBar';
import PropTypes from 'prop-types'
import './WeatherDetails.css'

class WeatherDetails extends Component {
  state = {
    dataLoaded: false,
    currentWeatherView: {
      date: null,
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
    // console.log(this.props)
    this.setState(
      {
        dataLoaded: true,
        ...this.props,
        currentWeatherView: { ...this.props.dayWeatherData[0] },
      },
      () => console.log(this.state)
    );
  }
  render() {
    const { dataLoaded } = this.state;
    // console.log(this.state.currentWeatherView)
    const {
      date,
      cityName,
      complementName,
      weather,
      topTemperature,
      bottomTemperature,
      wind,
      humidity,
    } = this.state.currentWeatherView;

    if (dataLoaded) {
      return (
        <div className="detailsWeatherPage">
          <WeatherContainer>
            <div className="detailsGridAlignment">
              <Weather
                date={date}
                cityName={cityName}
                complementName={complementName}
              />
              <WeatherRightBar
                icon={weather}
                topTemperature={topTemperature}
                bottomTemperature={bottomTemperature}
                wind={wind}
                humidity={humidity}
              />
            </div>
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

// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Containers
import WeatherContainer from '../../containers/WeatherContainer';
import NextWeathersContainer from '../../containers/NextWeathersContainer';
// Components
import Weather from '../../components/Weather';
import WeatherRightBar from '../../components/WeatherRightBar';
import SkeletonLoad from './skeleton/Skeleton';
import Error from '../../utils/error/Error';
// Methods
import { fetchWeatherData } from '../../actions/index';
import { getCurrentWeather, getNextWeatherData } from '../../selectors/getWeather'
// CSS
import './index.css';

class CurrentWeather extends Component {

  componentDidMount(){
    // console.log('Fetch')
    this.props.fetchWeatherData();
  }

  render() {
    const { 
      day,
      cityName,
      complementName,
      weather,
      topTemperature,
      bottomTemperature,
      wind,
      humidity
    } = this.props.currentWeather;

    const backgroundClass = [weather];

    const { dataLoaded, errorInFetch, nextWeatherData } = this.props;
    // console.log(errorInFetch)

    if (!dataLoaded) {
      return (
        <div className="currentWeatherPage">
          <WeatherContainer>
          {
          errorInFetch ? 
            (
              <Error
                message={
                  "Oops parece que ocurrió un problema al cargar los datos. Por favor, vuelve a intentarlo!"
                }
              />
            ) 
            : 
            ( <SkeletonLoad /> )
          }
          </WeatherContainer>
        </div>
      );
    } else {
      return (
        <div className={`currentWeatherPage ${backgroundClass}`}>
          <WeatherContainer>
            <div className="gridAlignment">
              <Weather
                day={day}
                cityName={cityName}
                complementName={complementName}
                getVariationTempForNextDays
              />
              <WeatherRightBar
                icon={weather}
                topTemperature={topTemperature}
                bottomTemperature={bottomTemperature}
                wind={wind}
                humidity={humidity}
              />
            </div>
            <div className="nextDaysContainer">
              <h3 className="headerText">Next days weather</h3>
            </div>
            <NextWeathersContainer
              nextDaysWeather
              nextDaysWeatherData={nextWeatherData}
            />
          </WeatherContainer>
        </div>
      );
    }
    
    
  }
};

CurrentWeather.propTypes = {
  fetchWeatherData: PropTypes.func.isRequired
}

CurrentWeather.defaultProps = {
  nextWeatherData: [],
  currentWeather: {},
};

const mapDispatch = dispatch => ({
  fetchWeatherData: () => dispatch(fetchWeatherData())
})

const mapState = ({ weatherData, errorInFetchInitialData }) => ({
  currentWeather: getCurrentWeather(weatherData),
  nextWeatherData: getNextWeatherData(weatherData),
  dataLoaded: weatherData.dataLoaded,
  errorInFetch: errorInFetchInitialData,
});

export default connect(mapState, mapDispatch)(CurrentWeather);

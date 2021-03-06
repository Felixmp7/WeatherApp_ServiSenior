import React, { Component } from 'react'
import WeatherContainer from '../../containers/WeatherContainer';
import Weather from '../../components/Weather';
import WeatherRightBar from '../../components/WeatherRightBar';
import NextWeathersContainer from '../../containers/NextWeathersContainer';
import { fetchWeatherData } from '../../actions/index';
import './index.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentWeather, getNextWeatherData } from '../../selectors/getWeather'
import Skeleton from "@material-ui/lab/Skeleton";

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

    const { dataLoaded, errorInFetch } = this.props;
    // console.log(errorInFetch)

    if (!dataLoaded || errorInFetch) {
      return (
        <div className="currentWeatherPage">
          <WeatherContainer>
            {
              errorInFetch && <h4 className="errorMessage">{`Opps parece que ocurrió un problema ):`}</h4>
            }
            <div className="gridSkeleton">
              <Skeleton variant="rect" width={"70%"} height={"80%"} />
              <Skeleton variant="rect" width={"20%"} height={"80%"} />
            </div>
            <div className="nextSkeleton">
              <div className="headerSkeleton">
                <Skeleton variant="text" height={70} />
              </div>
            </div>
            <Skeleton variant="rect" width={'100%'} height={'20%'} />
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
              nextDaysWeatherData={this.props.nextWeatherData}
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

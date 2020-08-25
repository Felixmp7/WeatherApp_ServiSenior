import React, { Component } from 'react'
import WeatherContainer from '../../containers/WeatherContainer';
import Weather from '../../components/Weather';
import WeatherRightBar from '../../components/WeatherRightBar';
import NextWeathersContainer from '../../containers/NextWeathersContainer';
import { fetchWeatherData } from '../../actions/index';
import './index.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CurrentWeather extends Component {
  state = {

  };

  componentDidMount(){
    console.log('Fetch')
    this.props.fetchWeatherData();
  }

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
          <NextWeathersContainer nextDaysWeatherData={this.props.nextWeatherData} />
        </WeatherContainer>
      </div>
    );
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

const mapState = (state) => ({
  currentWeather: state.currentWeather,
  nextWeatherData: state.nextWeatherData,
});

export default connect(mapState, mapDispatch)(CurrentWeather);

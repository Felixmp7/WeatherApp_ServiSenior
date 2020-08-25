import { combineReducers } from "redux";
import { saveWeatherData } from './weatherData';

export default combineReducers({
  weatherData: saveWeatherData
});
import { combineReducers } from "redux";
import { saveWeatherData } from './weatherData';
import { handleErrorInFetchData } from "./handleErrors";

export default combineReducers({
  weatherData: saveWeatherData,
  errorInFetchInitialData: handleErrorInFetchData,
});
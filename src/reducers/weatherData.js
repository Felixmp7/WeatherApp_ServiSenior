import { GET_WEATHER_DATA } from "../constants/index";
import { handleActions } from "redux-actions";

export const saveWeatherData = handleActions({
  [GET_WEATHER_DATA]: (state, action) => action.payload
}, {})

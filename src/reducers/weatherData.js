import { GET_WEATHER_DATA } from "../constants/index";
import { handleActions } from "redux-actions";

// export const saveWeatherData = (state = {}, action) => {
//   switch (action.type) {
//     case GET_WEATHER_DATA:
//       return { ...state, weatherData: [...action.payload] };

//     default:
//       return state;
//   }
// };

export const saveWeatherData = handleActions({
  [GET_WEATHER_DATA]: (state, action) => action.payload
}, {})
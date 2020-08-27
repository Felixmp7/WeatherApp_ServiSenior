import { GET_WEATHER_DATA, HANDLE_ERROR } from "../constants/index";
import { transformAPIData } from "../helpers/transformApiData";
import { fetchWeatherDataToApi } from "../helpers/fetchWeatherData";


const getWeatherAction = (data) => ({
  type: GET_WEATHER_DATA,
  payload: transformAPIData(data),
});

const errorAction = {
  type: HANDLE_ERROR,
  payload: {error: true},
};


export const fetchWeatherData = () => {
  // console.log('Intentando hacer el fetch')
  return async (dispatch, getState) => {
    try {
      const prevState = getState();
      if (prevState.weatherData.currentWeather) {
        // console.log("No hacer nada");
        return ;
      }
      const data = await fetchWeatherDataToApi();
      // console.log(data)
      if (data !== 'ERROR') {
        // console.log('hacer el Fetch')
        dispatch(getWeatherAction(data));
      } else {
        // console.log('Lanzar el error')
        dispatch(errorAction);
      }
    } catch (error) {
      console.log(error);
      dispatch(errorAction);
    }
  };
}

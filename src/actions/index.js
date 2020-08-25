import { GET_WEATHER_DATA } from "../constants/index";
import { getWeatherData } from "../api/api";
// import {createAction} from 'redux-actions'

const transformAPIData = (apiData) => {
  const nextWeatherData = apiData.list.map((element) => {
    return {
      date: element.dt_txt,
      cityName: "Santiago",
      complementName: "Metropolitan Region",
      weather: element.weather[0].main,
      topTemperature: element.main.temp_max,
      bottomTemperature: element.main.temp_min,
      wind: element.wind.speed,
      humidity: element.main.humidity,
    };
  });

  const currentWeather = {
    date: nextWeatherData[0].date,
    cityName: "Santiago",
    complementName: "Metropolitan Region",
    weather: nextWeatherData[0].weather,
    topTemperature: nextWeatherData[0].topTemperature,
    bottomTemperature: nextWeatherData[0].bottomTemperature,
    wind: nextWeatherData[0].wind,
    humidity: nextWeatherData[0].humidity,
  };

  return { currentWeather, nextWeatherData };
};

const fetchWeatherDataToApi = async () => {

  try {
    const response = await getWeatherData();
    console.log(response);
    if (response.status) {
      return response.data;
    }
  } catch (error) {
    console.log(error); 
  }
}


export const fetchWeatherData = () => {
  return async (dispatch) => {
    const data = await fetchWeatherDataToApi();
    console.log(data)
    dispatch({
      type: GET_WEATHER_DATA,
      payload: transformAPIData(data),
    });
  }
}

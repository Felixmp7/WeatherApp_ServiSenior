import { GET_WEATHER_DATA } from "../constants/index";
import { getWeatherData } from "../api/api";
import {createAction} from 'redux-actions'

// export const fetchWeatherData = () => {

//   // try {
//     // const response = await getWeatherData();
//     // console.log(response);
//     // if (response === "SUCCESS") {
//       return ({
//         type: GET_WEATHER_DATA,
//         payload: null,
//       });
//     // }
//   // } catch (error) {
//   //   console.log(error); 
//   // }
// }

const weatherData = {
  nextWeatherData: [
    {
      day: "Monday",
      humidity: "30000001",
      weather: "30000001",
      cityName: "Pablo Alborán",
      temperature: 30,
      wind: "m",
      weatherIcon: "Clouds",
    },
    {
      day: "Tuesday",
      humidity: "500000",
      weather: "500000",
      cityName: "José Enrique",
      temperature: 40,
      wind: "m",
      weatherIcon: "Clear",
    },
    {
      day: "Wednesday",
      weather: "6868686",
      cityName: "Gabriel Pacheco",
      temperature: 10,
      wind: "m",
      weatherIcon: "Thunderstorm",
      humidity: "XSCfaW5",
    },
    {
      day: "Thursday",
      cityName: "Doris Alonso",
      weather: "99999",
      temperature: 11,
      wind: "w",
      weatherIcon: "Rain",
      humidity: "kxmVQVd",
    },
    {
      day: "Friday",
      cityName: "Doris Alonso",
      weather: "99999",
      temperature: 11,
      wind: "w",
      weatherIcon: "Snow",
      humidity: "kxmVQVd",
    },
  ],
  currentWeather: {
    cityName: "Manuel Carrero",
    weather: "99999",
    temperature: 11,
    wind: "m",
    weatherIcon: "Clear",
    humidity: "kxmVQVd",
  },
};

export const fetchWeatherData = createAction(
  GET_WEATHER_DATA,
  () => weatherData
);

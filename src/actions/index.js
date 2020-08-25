import { GET_WEATHER_DATA } from "../constants/index";
import { getWeatherData } from "../api/api";
import moment from 'moment'

const transformAPIData = (apiData) => {

  const currentDay = moment().day();

  
  const nextWeatherData = apiData.list.map((element) => {
    const date = element.dt_txt.slice(0,10)
    const day = moment(date).format('dddd');
    const dayNumber = moment(date).day();

    const weatherData = {
      date: day,
      dayNumber,
      cityName: "Santiago",
      complementName: "Metropolitan Region",
      weather: element.weather[0].main,
      topTemperature: element.main.temp_max,
      bottomTemperature: element.main.temp_min,
      wind: element.wind.speed,
      humidity: element.main.humidity
    };

      return weatherData;
  });

  const todayVariationTemp = nextWeatherData.filter( item => {
    if (item.dayNumber === currentDay) return item;
  })

  const weatherGrouped = groupBy(nextWeatherData, 'date');
  // console.log(weatherGrouped)
  const nextWeatherDataCleaned = Object.values(weatherGrouped);
  // console.log(nextWeatherDataCleaned)


  const currentWeather = {
    date: "Today",
    cityName: "Santiago",
    complementName: "Metropolitan Region",
    weather: nextWeatherData[0].weather,
    topTemperature: nextWeatherData[0].topTemperature,
    bottomTemperature: nextWeatherData[0].bottomTemperature,
    wind: nextWeatherData[0].wind,
    humidity: nextWeatherData[0].humidity,
  };

  return {
    currentWeather: {
      ...currentWeather,
      tempVariaton: [...todayVariationTemp],
    },
    nextWeatherData: [...nextWeatherDataCleaned],
    dataLoaded: true
  };
};

const groupBy = (array, key) => {
  // Return the end result
  return array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {}); // empty object is the initial value for result object
};

const fetchWeatherDataToApi = async () => {

  try {
    const response = await getWeatherData();
    // console.log(response);
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
    dispatch({
      type: GET_WEATHER_DATA,
      payload: transformAPIData(data),
    });
  }
}

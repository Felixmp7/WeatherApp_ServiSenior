import moment from "moment";


export const transformAPIData = (apiData) => {

  const currentDay = moment().format("dddd");
  // console.log(currentDay);

  const nextWeatherData = apiData.list.map((element, index) => {
    const date = element.dt_txt.slice(0, 10);
    // console.log(date)
    const hour = element.dt_txt.slice(11);
    // console.log(hour);
    const hourFormated = moment(hour, ["HH:mm"]).format("hh:mm A");
    const day = moment(date).format("dddd");

    const weatherData = {
      day,
      hour: hourFormated,
      cityName: "Santiago",
      complementName: "Metropolitan Region",
      weather: element.weather[0].main,
      topTemperature: element.main.temp_max,
      bottomTemperature: element.main.temp_min,
      wind: element.wind.speed,
      humidity: element.main.humidity,
      id: index,
    };

    return weatherData;
  });

  // const todayVariationTemp = nextWeatherData.filter(
  //   (item) => item.day === currentDay
  // );
  


  const weatherGrouped = groupBy(nextWeatherData, "day");
  // console.log(weatherGrouped)
  const nextWeatherDataCleaned = Object.values(weatherGrouped).filter(
    (item) => item[0].day !== currentDay
  );
  // console.log(nextWeatherDataCleaned)

  const variationTempNextDays = nextWeatherDataCleaned.map((item) => {
    // console.log(item);
    const topTemperature = item[0].topTemperature;
    const day = item[0].day;
    const bottomTemperature = item[0].bottomTemperature;

    const average = (topTemperature + bottomTemperature) / 2;

    return {
      day,
      average
    };
  });
  // console.log(variationTempNextDays);


  const currentWeather = {
    day: "Today",
    cityName: "Santiago",
    complementName: "Metropolitan Region",
    weather: nextWeatherData[0].weather,
    topTemperature: nextWeatherData[0].topTemperature,
    bottomTemperature: nextWeatherData[0].bottomTemperature,
    wind: nextWeatherData[0].wind,
    humidity: nextWeatherData[0].humidity,
    id: nextWeatherData[0].id,
  };

  return {
    currentWeather: {
      ...currentWeather,
    },
    nextWeatherData: [...nextWeatherDataCleaned],
    dataLoaded: true,
    variationTempNextDays,
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

import { getWeatherData } from "../api/api";


export const fetchWeatherDataToApi = async () => {
  // console.log("fetchWeatherDataToApi");
  try {
    const response = await getWeatherData();
    // console.log(response);
    if (response.status) {
      return response.data;
    } else {
      return "ERROR";
    }
  } catch (error) {
    console.log(error);
  }
};

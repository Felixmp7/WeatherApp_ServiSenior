export const getWeatherData = async () => {
  const APIKEY = "b1d5e046b7852c66118ce2f01138274c";

  const url = `http://api.openweathermap.org/data/2.5/forecast?q=Santiago&units=metric&appid=${APIKEY}`;
  let response;

  try {
    const serverResponse = await fetch(url);
    // console.log(serverResponse)

    if (serverResponse.status !== 404) {
      // const data = transformAPIData(serverResponse.json())
      response = {
        status: "SUCCESS",
        data: serverResponse.json(),
      };
      
      return response;
    } else response = `FAIL`;

    return response;
  } catch (error) {
    console.log(error);
    return `ERROR`;
  }
};

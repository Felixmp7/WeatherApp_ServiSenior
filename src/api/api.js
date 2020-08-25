export const getWeatherData = async () => {
  const APIKEY = "524901&APPID=b1d5e046b7852c66118ce2f01138274c";

  const url = `http://api.openweathermap.org/data/2.5/forecast?id=${APIKEY}`;
  let response;

  try {
    const serverResponse = await fetch(url);
    // console.log(serverResponse)

    if (serverResponse.status !== 404) {
      response = "SUCCESS";
      // return serverResponse.json()
    } else response = `FAIL`;

    return response;
  } catch (error) {
    console.log(error);
    return (response = `ERROR`);
  }
};

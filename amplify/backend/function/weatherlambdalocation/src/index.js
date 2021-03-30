const axios = require("axios");

exports.handler = async (event) => {
    const location = event.path.split("/").slice(-1);
  const fetchData = async (location) => {
    let data = -274;
    try {
      data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4965de722b6db890dc8dc8c7a1829455&units=metric`
      );
    } catch (err) {
        console.log(err)
        return data;
    }
      return data.data.main.temp
  };

  const temperature = (await fetchData(location));
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(temperature),
  };
  return response;
};

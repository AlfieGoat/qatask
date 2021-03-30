const axios = require('axios')

exports.handler = async (event) => {
    const fetchData = async () => {
        const data = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q=london&appid=4965de722b6db890dc8dc8c7a1829455&units=metric'
        );
        return data;
    }
      
    const temperature = (await fetchData()).data.main.temp;
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     }, 
     body: JSON.stringify(temperature),
    };
    return response;
};
import React from "react";
import Amplify, { API } from "aws-amplify";
import "./App.css";

import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  const [weatherData, setWeatherData] = React.useState(null);
  const [location, setLocation] = React.useState("london");
  const getWeather = async () => {
    const apiName = "weatherapi"; // replace this with your api name.
    const path = `/weatherLocation/${
      document.getElementById("location").value
    }`; //replace this with the path you have configured on your API
    setWeatherData(await API.get(apiName, path, {}));
    
    setLocation(document.getElementById("location").value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Press the button below to get the weather</p>
        <div>
          <label for="location">Location:</label>
          <input id="location" name="location" />
        </div>
        <div>
        <button onClick={getWeather}>Get weather!</button>
        </div>
        {weatherData && weatherData !== -274 &&(
          <div>
            The temperatue in {location} is: {weatherData} degrees
          </div>
        )}
        {weatherData && weatherData === -274 && 
          <div>
          {location} is not a valid location, sorry :(
          </div>
        }
      </header>
    </div>
  );
}

export default App;

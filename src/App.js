import axios from 'axios';
import React from 'react';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = React.useState(null);

  const fetchData = async () => {
    const data = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather?q=london&appid=4965de722b6db890dc8dc8c7a1829455&units=metric'
    );
    setWeatherData(data.data.main.temp);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Press the button below to get the weather</p>
        <button onClick={fetchData}>Click here</button>
        {weatherData && (
          <div>The temperatue in London is: {weatherData} degrees</div>
        )}
      </header>
    </div>
  );
}

export default App;

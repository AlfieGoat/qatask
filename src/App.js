import axios from 'axios';
import './App.css';

function App() {
  const fetchData = async () => {
    const data = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather?q=bristol&appid=4965de722b6db890dc8dc8c7a1829455&units=metric'
    );
    console.log(data.data.main.temp);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Press the button below to get the weather</p>
        <button onClick={fetchData}>Click here</button>
      </header>
    </div>
  );
}

export default App;

import { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import Atmosphere from './components/Atmosphere';
import Search from './components/Search';
import './App.css';

function App() {
  const [city, setCity] = useState("Delhi, India"); 

  return (
    <div className='global'>
      <Search onSearch={setCity} />
      <WeatherCard city={city} />
      <Atmosphere city={city} />
    </div>
  );
}

export default App;

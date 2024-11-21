import React from 'react';
import './App.css';
import SearchInput from './components/SearchInput/SearchInput';
import WeatherContainer from './components/WeatherContainer/WeatherContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <SearchInput></SearchInput>
      <WeatherContainer></WeatherContainer>
    </div>
  );
}

export default App;

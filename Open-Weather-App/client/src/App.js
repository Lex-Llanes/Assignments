import React, { useState, useEffect, useRef } from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const [currentUrl, setCurretUrl] = useState("/weather")
  const [weather, setWeather] = useState();
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(currentUrl)
      .then((response) => {
        if(response.ok){
          return response.json()
        } else {
          throw response
        }
      })
      .then(setWeather)
      .catch((error) => {
        console.error("Something bad happened", error);
        setError(error);
      })
      .finally(() => {
      })
  }, [currentUrl])


  console.log(weather)


  //First Day
  const city = weather.city.name
  const currentTemp = weather.list[0].main.temp
  const currentFeelTemp = weather.list[0].main.feels_like
  const currentSky = weather.list[0].weather[0].description

  //Second Day
  const currentTemp2 = weather.list[1].main.temp
  const currentFeelTemp2 = weather.list[1].main.feels_like
  const currentSky2 = weather.list[1].weather[0].description

  //Third Day
  const currentTemp3 = weather.list[2].main.temp
  const currentFeelTemp3 = weather.list[2].main.feels_like
  const currentSky3 = weather.list[2].weather[0].description

  //Fourth Day
  const currentTemp4 = weather.list[3].main.temp
  const currentFeelTemp4 = weather.list[3].main.feels_like
  const currentSky4 = weather.list[3].weather[0].description

  //Fifth Day
  const currentTemp5 = weather.list[4].main.temp
  const currentFeelTemp5 = weather.list[4].main.feels_like
  const currentSky5 = weather.list[4].weather[0].description

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>City: {city}</h2>
        <span>Day 01</span>
        <span>Temp: {currentTemp} Feels Like: {currentFeelTemp}</span>
        <span>Sky: {currentSky}</span>
        <br></br>
        <span>Day 02</span>
        <span>Temp: {currentTemp}2 Feels Like: {currentFeelTemp2}</span>
        <span>Sky: {currentSky2}</span>
        <br></br>

        <span>Day 03</span>
        <span>Temp: {currentTemp3} Feels Like: {currentFeelTemp3}</span>
        <span>Sky: {currentSky3}</span>
        <br></br>

        <span>Day 04</span>
        <span>Temp: {currentTemp4} Feels Like: {currentFeelTemp4}</span>
        <span>Sky: {currentSky4}</span>
        <br></br>

        <span>Day 05</span>
        <span>Temp: {currentTemp5} Feels Like: {currentFeelTemp5}</span>
        <span>Sky: {currentSky5}</span>
        <br></br>

      </header>
    </div>
  );
}

export default App;
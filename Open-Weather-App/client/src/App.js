import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  //const [data, setData] = React.useState(null);
  // React.useEffect (() => {
  //   fetch("/weather")
  //     .then(res => res.json())
  //     .then(data => setData(data.message))
  // }, []);


  async function fetchWeather (){
    const response = await fetch("/weather");
    const data = await response.json()

    return data;
  }

  async function arrayWeather () {
    let dataToConvert = await fetchWeather();
    let weatherArray = {};

    for (const property in dataToConvert){
      weatherArray.unshift(property)
    }
    return weatherArray;
  }

  const weatherData = arrayWeather();
  console.log(weatherData)


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>

      </header>
    </div>
  );
}

export default App;

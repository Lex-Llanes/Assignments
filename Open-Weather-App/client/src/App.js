import React, { useState, useEffect, useRef } from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const [currentUrl, setCurretnUrl] = useState("/weather")
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span></span>

      </header>
    </div>
  );
}

export default App;

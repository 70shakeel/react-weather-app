import { useState } from "react";
import { Button, TextField, Box } from "@mui/material";

import "./App.css";
import Weather from "./Weather";

function App() {
  const [city, setCity] = useState("Islamabad");
  const [weather, setWeather] = useState("Islamabad");

  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <h1>Weather App</h1>

      <form onSubmit={handleSearch}>
        <TextField
          id="standard-basic"
          label="Type city name..."
          variant="standard"
          color="success"
          focused
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onBlur={(e) => setWeather(e.target.value)}
        />

        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>

      <Weather city={weather} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const API_KEY = "758eca4e1449d0f2f2f208aea6b0dca0";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    axios
      .get(API_URL)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [city]);
  console.log(weatherData);
  if (!weatherData) {
    return (
      <div>
        <img
          src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e47agk31w5jce7vsn1le8tyltgyf63lbbg7ixxqxfuw&rid=giphy.gif&ct=s"
          alt="laoding"
          width="100px"
        />
      </div>
    );
  }

  const { name, main, weather } = weatherData;
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff0",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <h2>Current weather for {name}</h2>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <p>
              <img
                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt="weather icon"
              />
              <br /> {weather[0].description}
            </p>
          </Grid>
          <Grid xs={6}>
            <p>
              Temperature
              <br /> {main.temp}°C
            </p>
          </Grid>
          <Grid xs={6}>
            <p>
              Feels like
              <br /> {main.feels_like}°C
            </p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Weather;

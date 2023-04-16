import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState({
    coord: {
      lon: 73.1338,
      lat: 33.7104,
    },
    weather: [
      {
        id: 802,
        main: "Clouds",
        description: "scattered clouds",
        icon: "03n",
      },
    ],
    base: "stations",
    main: {
      temp: 26.02,
      feels_like: 26.02,
      temp_min: 26.02,
      temp_max: 26.02,
      pressure: 1010,
      humidity: 45,
      sea_level: 1010,
      grnd_level: 951,
    },
    visibility: 10000,
    wind: {
      speed: 4.17,
      deg: 37,
      gust: 6.15,
    },
    clouds: {
      all: 37,
    },
    dt: 1681662111,
    sys: {
      type: 2,
      id: 2007435,
      country: "PK",
      sunrise: 1681605374,
      sunset: 1681652288,
    },
    timezone: 18000,
    id: 1162015,
    name: "Islamabad",
    cod: 200,
  });
  const colors = ["yellow", "green", "#8d8de7", "red", "brown", "gray"];
  // const { name, main, weather } = weatherData;
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
  const { name, main, weather } = weatherData;
  switch (weather[0].description) {
    case "scattered clouds":
      document.body.style.backgroundColor = colors[5];
      break;
    case "overcast clouds":
      document.body.style.backgroundColor = colors[2];
      break;
    case "haze":
      document.body.style.backgroundColor = "yellow";
      document.body.style.color = "black";
      break;
    case "clear sky":
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      break;
    case "light rain":
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      break;

    // add more cases here for different weather descriptions
    default:
      // do nothing if no match is found
      break;
  }
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

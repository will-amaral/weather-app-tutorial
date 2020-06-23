import React, { useState, useEffect } from 'react';

import { Input, Table } from '../components/Forecast';
import { owapi } from '../utils/api';
import { formatDate, formatCondition } from '../utils/helpers';

function Forecast(props) {
  const { fetchLocation, setCoordinates, coordinates, location, setLocation } = props;
  const [data, setData] = useState();
  const [currentTemp, setCurrentTemp] = useState();
  const [currentMain, setCurrentMain] = useState();
  const [message, setMessage] = useState('Get started');
  const [loading, setLoading] = useState(false);

  function formatWeatherInfo(weather) {
    const now = weather.current;
    setCurrentTemp(now.temp + 'ºC');
    setCurrentMain(now.weather[0].main);
    const obj = {
      time: ['Now'],
      condition: [formatCondition(now.weather[0].main, now.weather[0].icon)],
      temp: [now.temp + 'º C'],
      feelsLike: [now.feels_like + 'ºC'],
      humidity: [now.humidity + '%'],
    };

    weather.hourly.slice(1, 6).forEach((item) => {
      const { dt, weather, temp, feels_like: feelsLike, humidity } = item;
      const { main, icon } = weather[0];

      obj.time.push(formatDate(dt));
      obj.condition.push(formatCondition(main, icon));
      obj.temp.push(temp + 'ºC');
      obj.feelsLike.push(feelsLike + 'ºC');
      obj.humidity.push(humidity + '%');
    });

    return obj;
  }

  async function fetchWeather({ lat, lon }, format) {
    setLoading(true);
    const params = {
      lat,
      lon,
      exclude: 'minutely,daily',
      appid: '980e6f231a670d3038538f9bfb1cc794',
      units: 'metric',
    };

    try {
      const { data: result } = await owapi.get('/onecall', { params });
      setData(format(result));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (coordinates) {
      fetchWeather(coordinates, formatWeatherInfo);
    }
  }, [coordinates]);

  return (
    <>
      <Input
        fetchLocation={fetchLocation}
        setCoordinates={setCoordinates}
        setLocation={setLocation}
        setMessage={setMessage}
      />
      {!data && <h3>{message}</h3>}
      {loading && <div>loading...</div>}
      {data && (
        <Table
          data={data}
          weatherMessage={`${currentMain} currently in ${location}. The temperature is ${currentTemp}`}
        />
      )}
    </>
  );
}

export default Forecast;

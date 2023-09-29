// api.openweathermap.org/data/2.5/weather?q=Karachi,pakistan&APPID=612a79fc06370a9f9b50c3bff77ba697
'use client';
import WeatherCard from "@/components/weatherCard";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

export type Weather = {
  temp: number
  humidity: number
  pressure: number
  weathermood: string
  speed: number
  sunset: number
  name: string
  country: string
}
const Page = () => {
  const [searchValue, setSearchvalue] = useState("karachi");
  const [tempInfo, setTempInfo] = useState<Weather | null>(null);
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&APPID=612a79fc06370a9f9b50c3bff77ba697`

      const response = await fetch(url);

      const data = await response.json();
      console.log(data);

      const { temp, humidity, pressure } = data.main;
      console.log(temp);
      console.log(humidity);
      console.log(pressure);

      const { main: weathermood } = data.weather[0];
      console.log(weathermood);

      const { name } = data;
      console.log(name);

      const { speed } = data.wind;
      console.log(speed);

      const { country, sunset } = data.sys;
      console.log(country);
      console.log(sunset);

      const myNewWeather = {
        temp,
        humidity,
        pressure,
        weathermood,
        speed,
        sunset,
        name,
        country
      }
      setTempInfo(myNewWeather);

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, [])

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input type="search" placeholder="search ..." autoFocus id="search" className="searchTerm" value={searchValue} onChange={(e) => setSearchvalue(e.target.value)} />
          <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
        </div>
      </div>
      {console.log(tempInfo)}
      {tempInfo === null ? (
        <Triangle
          height="80"
          width="80"
          color="#ffffff"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <WeatherCard tempInfo={tempInfo} />
      )}
    </>
  )
}

export default Page
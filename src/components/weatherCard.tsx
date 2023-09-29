import { WiDayCloudy, WiDaySunny, WiDust, WiFog, WiHumidity, WiRain, WiSmoke, WiSnow, WiStrongWind, WiSunset, WiWindy } from "react-icons/wi";
import { Weather } from "@/app/page";
import { useEffect, useState } from "react";

type TempInfoProps = {
    tempInfo: Weather
}

const WeatherCard = ({ tempInfo }: TempInfoProps) => {
    const [weatherState, setWeatherState] = useState("");
    const {
        temp, humidity, pressure, weathermood, speed, sunset, name, country
    } = tempInfo;

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatherState("Cloudy");
                    break;
                case "Clear":
                    setWeatherState("Sunny");
                    break;
                case "Haze":
                    setWeatherState("Fogy");
                    break;
                case "Mist":
                    setWeatherState("Misty");
                    break;
                case "Rain":
                    setWeatherState("Rainy");
                    break;
                case "Smoke":
                    setWeatherState("Smoky");
                    break;
                case "Wind":
                    setWeatherState("Windy");
                    break;
                case "Snow":
                    setWeatherState("Snowy");
                    break;

                default:
                    setWeatherState("Sunny")
                    break;
            }
        }
    }, [weathermood]);

    let sec = sunset;
    let newDate = new Date(sec * 1000);
    let timeStr = `${newDate.getHours()}:${newDate.getMinutes()}`
    const date = new Date().toLocaleString();

    return (
        <>
            <section className="widget">
                <div className="weatherIcon">
                    {weatherState === "Cloudy" && <WiDayCloudy />}
                    {weatherState === "Sunny" && <WiDaySunny />}
                    {weatherState === "Fogy" && <WiFog />}
                    {weatherState === "Msty" && <WiDust />}
                    {weatherState === "Rainy" && <WiRain />}
                    {weatherState === "Smoky" && <WiSmoke />}
                    {weatherState === "Windy" && <WiWindy />}
                    {weatherState === "Snowy" && <WiSnow />}
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">
                            {weathermood}
                        </div>
                        <div className="place">
                            {name} &nbsp;, &nbsp;
                            {country}
                        </div>
                    </div>
                </div>

                <div className="date">
                    <p>
                        {date}
                    </p>
                </div>

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <WiSunset id="pic" />
                            <p className="extra-info-leftside">
                                {timeStr} PM <br />
                                Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <WiHumidity id="pic" />
                            <p className="extra-info-leftside">
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <WiRain id="pic" />
                            <p className="extra-info-leftside">
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <WiStrongWind id="pic" />
                            <p className="extra-info-leftside">
                                {speed} <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WeatherCard

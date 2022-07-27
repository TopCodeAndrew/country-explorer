import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
    // let placeholder = {
    //     location: {
    //         name: "Paris",
    //         region: "Ile-de-France",
    //         country: "France",
    //         lat: 48.87,
    //         lon: 2.33,
    //         tz_id: "Europe/Paris",
    //         localtime_epoch: 1658788718,
    //         localtime: "2022-07-26 0:38",
    //     },
    //     current: {
    //         last_updated_epoch: 1658788200,
    //         last_updated: "2022-07-26 00:30",
    //         temp_c: 20,
    //         temp_f: 68,
    //         is_day: 0,
    //         condition: {
    //             text: "Clear",
    //             icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
    //             code: 1000,
    //         },
    //         wind_mph: 5.6,
    //         wind_kph: 9,
    //         wind_degree: 290,
    //         wind_dir: "WNW",
    //         pressure_mb: 1017,
    //         pressure_in: 30.03,
    //         precip_mm: 0,
    //         precip_in: 0,
    //         humidity: 64,
    //         cloud: 0,
    //         feelslike_c: 20,
    //         feelslike_f: 68,
    //         vis_km: 10,
    //         vis_miles: 6,
    //         uv: 1,
    //         gust_mph: 11.4,
    //         gust_kph: 18.4,
    //     },
    // };
    let display = useSelector(selectDisplay);
    let latitude = display.capitalInfo.latlng[0];
    let longitude = display.capitalInfo.latlng[1];

    const [weather, setWeather] = useState();

    useEffect(() => {
        const options = {
            method: "GET",
            url: "https://weatherapi-com.p.rapidapi.com/current.json",
            params: { q: `${latitude}, ${longitude}` },
            headers: {
                "X-RapidAPI-Key":
                    "a6d17c435bmsh4d9e58612f71967p10018cjsn8cd7066a3d2a",
                "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
            },
        };

        axios
            .request(options)
            .then(function (res) {
                setWeather(res.data);
                console.log(res.data);
            })
            .catch(function (error) {
                console.error(error);
            });
        return () => {
            console.log("weather component killed");
        };
    }, []);

    return (
        <div>
            <table className="overview-table">
                <tr>
                    <td>Conditions: </td>
                    <td>{weather?.current?.condition?.text}</td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                    <td>{weather?.current.temp_f} degrees Farenheit</td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                    <td>{weather?.current?.feelslike_f} degrees Farenheit</td>
                </tr>
                <tr>
                    <td>Humidity: </td>
                    <td>{weather?.current?.humidity}%</td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                    <td>
                        {weather?.current?.wind_mph} mph{" "}
                        {weather?.current?.wind_dir}
                    </td>
                </tr>
                {/* <tr>
                    <td>Borders: </td>
                    <td>
                        {currentDisplay.borders.map((e, i, arr) => {
                            if (i + 1 === arr.length) {
                                return `${e}`;
                            } else {
                                return `${e}, `;
                            }
                        })}
                    </td>
                </tr>
                <tr>
                    <td>Capitol: </td>
                    {currentDisplay.capital.map((e) => (
                        <td>{e}</td>
                    ))}
                </tr> */}
            </table>
            {/* 
            {JSON.stringify(weather)} */}
        </div>
    );
};

export default Weather;

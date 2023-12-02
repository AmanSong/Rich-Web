import React, { useState, useEffect } from 'react';
import './Weather.css'

function Weather() {

    const API = {
        key: "f238b103ebba8a442d6e45f2409762c7",
        base: "https://api.openweathermap.org/data/2.5/"
    }

    const [query, setQuery] = useState('Dublin, IE');
    const [weather, setWeather] = useState({});

    useEffect(() => {
        fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(result);
            });
    }, [])

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        }
    }

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    return (
        <div >

            {(typeof weather.main != "undefined") ? (
                <div className='weather-container'>

                    <div className="search-box">
                        <input
                            type="text"
                            className="search-bar"
                            placeholder="Ireland..."
                            onChange={e => setQuery(e.target.value)}
                            value={query}
                            onKeyPress={search}
                        />
                    </div>

                    <div className='location'>{weather.name}, {weather.sys.country} </div>
                    <div className='date'>{dateBuilder(new Date())}</div>
                    <div className="temperature">
                        {Math.round(weather.main.temp)}°c
                    </div>
                    <div className="weather">{weather.weather[0].main}</div>
                </div>
            ) : null}
        </div>
    );
}

export default Weather
const apiKey = "f9379270edfce9964d5a633e93ab95a3";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        console.log(data.weather[0].main); 

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

        // Set weather icon
        // Set weather icon
        const weather = data.weather[0].main;

        if (weather === "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (weather === "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (weather === "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (weather === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (weather === "Mist" || weather === "Haze" || weather === "Fog" || weather === "Smoke") {
            weatherIcon.src = "images/mist.png";   // use same icon for all foggy weather
        }
        else if (weather === "Snow") {
            weatherIcon.src = "images/snow.png";
        }
        else {
            weatherIcon.src = "images/default.png";  // fallback
        }



        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

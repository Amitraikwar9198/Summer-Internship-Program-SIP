const apiKey = "YOUR_API_KEY";

async function getWeather() {

    const city = document.getElementById("city").value;

    const api =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const response = await fetch(api);

    const data = await response.json();

    if (data.cod == "404") {

        alert("City Not Found");

        return;

    }

    document.getElementById("temp").innerHTML =
        Math.round(data.main.temp) + "°C";

    document.getElementById("cityName").innerHTML =
        data.name;

    document.getElementById("description").innerHTML =
        data.weather[0].description;

    document.getElementById("humidity").innerHTML =
        data.main.humidity + "%";

    document.getElementById("wind").innerHTML =
        data.wind.speed + " km/h";

    document.getElementById("icon").src =
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";

}
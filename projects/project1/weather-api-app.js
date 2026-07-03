async function getWeather(){

const city=document.getElementById("city").value;

const apiKey="57ecadfd7b40ad9f9fdb15aa524a5a14";

const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response=await fetch(url);

const data=await response.json();

document.getElementById("result").innerHTML=`
<h2>${data.name}</h2>

<p>🌡 Temperature : ${data.main.temp} °C</p>

<p>💧 Humidity : ${data.main.humidity}%</p>

<p>🌬 Wind : ${data.wind.speed} m/s</p>

<p>☁ Weather : ${data.weather[0].main}</p>
`;

}
catch{

document.getElementById("result").innerHTML="City Not Found";

}

}
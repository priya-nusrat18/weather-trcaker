const apiKey = "a3832330cc5f28f6c6eedb00169e3d03";
const apiBase = "https://api.openweathermap.org/data/2.5/weather";

const getWeather =  (city)=>{
    const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>   {
         console.log(data);
         updateUI(data)
    })
}

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener('click', () =>{
    const inputCity =  document.getElementById("input-value").value 
    getWeather(inputCity);
})
const updateUI = (data) =>{
     document.getElementById("city-name").innerText =
			data.name || "unknown location!";
     document.getElementById("temp").innerText = data.main.temp;
     document.getElementById("weather-desc").innerText =
			data.weather[0].main;;
    document.getElementById('icon').setAttribute(
		"src",
		`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
	);
     document.getElementById("city-name").value = ""
}
getWeather(dhaka);

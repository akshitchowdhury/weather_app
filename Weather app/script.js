const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a0e8ad559amsh8a9f120b2c4be0ap19d874jsn506081e1f34d",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city)=>{



cityName.innerText = city

fetch(url, options)
  .then((Response) => Response.json())
  .then((Response) => {
    console.log(Response);

	// var rumble = document.querySelector('.cardbody')

    cloud_pct.innerText = Response.cloud_pct;
    feels_like.innerText = Response.feels_like;
    humidity.innerText = Response.humidity;
    max_temp.innerText = Response.max_temp;
    min_temp.innerText = Response.min_temp;
    sunrise.innerText = Response.sunrise;
    sunset.innerText = Response.sunset;
    temp.innerText = Response.temp;
    wind_degrees.innerText = Response.wind_degrees;
    wind_speed.innerText = Response.wind_speed;
  })
  .then((err) => console.log(err));

}

submit.addEventListener('click', (e)=>{

	e.preventDefault()
	
	getWeather(city.value)
	
})

getWeather('Delhi')
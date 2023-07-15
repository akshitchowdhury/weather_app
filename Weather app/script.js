var url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city;
var options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a0e8ad559amsh8a9f120b2c4be0ap19d874jsn506081e1f34d",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

var getWeather = (city)=>{



cityName.innerText = city

fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city, options)
  .then((Response) => Response.json())
  .then((Response) => {
    console.log(Response);

	// var rumble = document.querySelector('.cardbody')




	// cloud_pct.innerText = Response.cloud_pct;

	document.getElementsByTagName('h1')[1].innerText = Response.temp+" °C"

	
	document.getElementsByTagName('h1')[2].innerText = Response.humidity+" %"
	
	document.getElementsByTagName('h1')[3].innerText = Response.wind_speed+" km/hr"

	// var Shanghai = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai"

	climate_stock("Shanghai")

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


var climate_stock = function(city){

	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city, options)
  .then((Response) => Response.json())
  .then((Response) => {
    console.log(Response);


	var cities = ['Shanghai', 'Boston', 'Lucknow','Tokyo']

	
	
	var stock = [
		Response.feels_like,
		Response.humidity,
		Response.max_temp,
		Response.min_temp,
		Response.sunrise,
		Response.sunset,
	    Response.temp,
		Response.wind_degrees,
		Response.wind_speed,]
	
	for(var i =0; i<cities.length; i++){

		for(var j =0; j<document.getElementsByClassName(cities[i]).length; j++){

		

		document.getElementsByClassName(cities[i])[j].innerText = stock[j]

		}
	}





	  }) 

	

}


const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a0e8ad559amsh8a9f120b2c4be0ap19d874jsn506081e1f34d",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((Response) => Response.json())
  .then((Response) => {
    console.log(Response);

    cloud_pct = response.cloud_pct;
    feels_like = response.feels_like;
    humidity = response.humidity;
    max_temp = response.max_temp;
    min_temp = response.min_temp;
    sunrise = response.sunrise;
    sunset = response.sunset;
    temp = response.temp;
    wind_degrees = response.wind_degrees;
    wind_speed = response.wind_speed;
  })
  .then((err) => console.log(err));
